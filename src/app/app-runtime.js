import gsap from "gsap";
import { collectionCatalog } from "../data/collection-catalog.js";
import { createLazyCollectionManager } from "../data/collection-manager.js";
import { readStoredActiveCollectionId, setStoredActiveCollectionId } from "./active-collection-storage.js";
import { mountCollectionSession } from "./collection-session.js";
import { createSidebarNavigation } from "./sidebar-navigation.js";
import { showAppNotice } from "./app-notice.js";
import { preloadAssets } from "../utils/preload-assets.js";
import { createDiscoveryRegistry } from "../discovery/discovery-registry.js";
import {
  canRevealSecretCollectionByClick,
  getSecretCollectionState,
  resolveCollectionDisplayName
} from "../data/secret-collection-rules.js";
import { createBadgeFeatureController } from "../badges/badge-feature-controller.js";
import { mountBackground, applyCollectionBackground, createBackgroundTransition } from "../background/background-runtime.js";
import { createSettingsStore } from "../settings/settings-storage.js";
import { createExperiencePolicy } from "../settings/settings-policy.js";

const $ = (id) => document.getElementById(id);

function getSessionElements() {
  return {
    loadingBar: $("loading-bar"),
    carouselContainer: $("carousel-container"),
    revealStage: $("reveal-stage"),
    sceneOverlay: $("scene-overlay"),
    revealOverlay: $("reveal-overlay"),
    revealActions: $("reveal-actions"),
    revealHeadline: $("reveal-headline"),
    btnContinue: $("btn-continue"),
    revealSearchForm: $("reveal-search-form"),
    revealSearchInput: $("reveal-search-input"),
    revealSearchSubmit: $("reveal-search-submit"),
    revealSearchFeedback: $("reveal-search-feedback"),
    progressDisplay: $("progress-display")
  };
}

function syncCollectionChrome(bundleOrCollection, secretState = null) {
  const collection = bundleOrCollection?.collection || bundleOrCollection;
  if (!collection) return;
  const name = resolveCollectionDisplayName(collection, secretState);
  const label = $("active-collection-label");
  const carousel = $("carousel-container");
  if (label) label.textContent = `Collection ${name}`;
  if (carousel) carousel.setAttribute("aria-label", `Carrousel de la collection ${name}`);
}

function syncSidebarCollectionLabels(collectionManager, secretState = null) {
  document.querySelectorAll("[data-sidebar-collection-view][data-collection-id]").forEach((button) => {
    if (!(button instanceof HTMLElement)) return;
    const collectionId = button.dataset.collectionId;
    const viewId = button.dataset.sidebarCollectionView;
    const entry = collectionManager.getEntry(collectionId);
    const collection = entry?.collection;
    if (!collection || !viewId) return;
    const name = resolveCollectionDisplayName(collection, secretState);
    const lockedSecret = collection.id === secretState?.collectionId && !secretState?.unlocked;
    button.textContent = name;
    button.setAttribute(
      "aria-label",
      lockedSecret
        ? `Collection secrète verrouillée — ${viewId === "zythosphere" ? "ZythoSphère" : "Brassopédie"}`
        : `${name} — ${viewId === "zythosphere" ? "ZythoSphère" : "Brassopédie"}`
    );
  });
}

function reportPersistenceError(detail) {
  console.warn("Persistance locale indisponible", detail?.error || detail);
  showAppNotice({
    message: "Le navigateur bloque le stockage local. Certaines données peuvent ne pas être conservées après fermeture.",
    tone: "warning",
    duration: 9000
  });
}

function setCollectionSwitchBusy(value, sidebarNavigation) {
  const input = /** @type {HTMLInputElement | null} */ ($("reveal-search-input"));
  const submit = /** @type {HTMLButtonElement | null} */ ($("reveal-search-submit"));
  if (input) input.disabled = value;
  if (submit) submit.disabled = value;
  sidebarNavigation?.setCollectionBusy?.("zythosphere", value);
}

export async function bootApp(navigation) {
  const loadingScreen = $("loading-screen");
  const settingsStore = createSettingsStore({ onPersistenceError: reportPersistenceError });
  const experiencePolicy = createExperiencePolicy({ settingsStore });
  const activeCollectionRead = settingsStore.getState().startupMode === "resume"
    ? readStoredActiveCollectionId()
    : { ok: true, persisted: true, error: null, collectionId: undefined };
  if (!activeCollectionRead.ok) reportPersistenceError({ error: activeCollectionRead.error });
  const collectionManager = createLazyCollectionManager(collectionCatalog, {
    initialCollectionId: activeCollectionRead.collectionId
  });

  const discoveryRegistry = createDiscoveryRegistry(collectionCatalog, {
    getBundle: (collectionId) => collectionManager.getBundle(collectionId),
    onPersistenceError: reportPersistenceError
  });
  const initialSecretState = getSecretCollectionState({ collectionCatalog, registry: discoveryRegistry });
  if (collectionManager.getActiveCollection().id === initialSecretState.collectionId && !initialSecretState.unlocked) {
    collectionManager.setActiveCollection(collectionCatalog[0]?.collection?.id);
  }

  const initialCollection = collectionManager.getActiveCollection();
  const background = mountBackground($("beer-background-root"), {
    ambienceMode: experiencePolicy.getAmbienceMode(),
    isReducedMotion: experiencePolicy.isReducedMotion
  });
  const initialBackgroundSettings = applyCollectionBackground(background, initialCollection);
  const backgroundTransition = createBackgroundTransition(background, initialBackgroundSettings, {
    isReducedMotion: experiencePolicy.isReducedMotion
  });
  experiencePolicy.subscribe(({ ambienceMode }) => {
    background.setAmbienceMode?.(ambienceMode);
    background.refreshMotionPreference?.();
  });

  const sessionElements = getSessionElements();
  const initialBundle = await collectionManager.getActiveBundle();
  syncCollectionChrome(initialBundle, initialSecretState);
  gsap.set(loadingScreen, { opacity: 1 });

  let sidebarNavigation = null;
  const getSecretState = () => getSecretCollectionState({ collectionCatalog, registry: discoveryRegistry });
  const refreshSecretUi = () => {
    const secretState = getSecretState();
    syncSidebarCollectionLabels(collectionManager, secretState);
    syncCollectionChrome(collectionManager.getActiveCollection(), secretState);
    sidebarNavigation?.refreshAvailability?.();
    return secretState;
  };

  const badgeFeature = createBadgeFeatureController({
    root: $("badges-view"),
    navigation,
    discoveryRegistry,
    collectionCatalog,
    settingsStore,
    onPersistenceError: reportPersistenceError
  });

  let settingsFeature = null;
  let settingsFeaturePromise = null;
  async function ensureSettingsFeature() {
    if (settingsFeature) return settingsFeature;
    if (!$("reglages-view")) return null;
    if (!settingsFeaturePromise) {
      settingsFeaturePromise = import("../settings/settings-controller.js")
        .then(({ createSettingsController }) => {
          settingsFeature = createSettingsController({
            root: $("reglages-view"),
            settingsStore,
            collectionCatalog,
            onNotice: ({ message, tone, duration }) => showAppNotice({ message, tone, duration })
          });
          return settingsFeature;
        })
        .catch((error) => {
          settingsFeaturePromise = null;
          throw error;
        });
    }
    return settingsFeaturePromise;
  }

  let tastingFeature = null;
  let tastingFeaturePromise = null;
  async function ensureTastingFeature() {
    if (tastingFeature) return tastingFeature;
    if (!$("degustation-view")) return null;
    if (!tastingFeaturePromise) {
      tastingFeaturePromise = import("../tasting/tasting-controller.js")
        .then(({ createTastingController }) => {
          tastingFeature = createTastingController({
            root: $("degustation-view"),
            onNotice: ({ message, tone, duration }) => showAppNotice({ message, tone, duration })
          });
          return tastingFeature;
        })
        .catch((error) => {
          tastingFeaturePromise = null;
          throw error;
        });
    }
    return tastingFeaturePromise;
  }

  const brassopedieRoot = $("brassopedie-view");
  let brassopedieLibrary = null;
  let brassopedieLibraryPromise = null;
  let brassopedieCollectionId = initialBundle.collection.id;

  async function ensureBrassopedieLibrary() {
    if (brassopedieLibrary) return brassopedieLibrary;
    if (!brassopedieRoot) return null;
    if (!brassopedieLibraryPromise) {
      brassopedieLibraryPromise = Promise.all([
        import("../brassopedie/brassopedie-library-view.js"),
        import("../brassopedie/brassopedie-library.css")
      ]).then(([{ createBrassopedieLibraryView }]) => {
        brassopedieLibrary = createBrassopedieLibraryView({
          root: brassopedieRoot,
          collectionCatalog,
          registry: discoveryRegistry,
          initialCollectionId: brassopedieCollectionId,
          loadCollectionBundle: (collectionId) => collectionManager.loadBundle(collectionId),
          onOpen: () => background.pause(),
          onClose: () => background.resume()
        });
        return brassopedieLibrary;
      }).catch((error) => {
        brassopedieLibraryPromise = null;
        throw error;
      });
    }
    return brassopedieLibraryPromise;
  }

  navigation?.onViewChange((viewId) => {
    if (viewId === "brassopedie") {
      const wasMounted = Boolean(brassopedieLibrary);
      void ensureBrassopedieLibrary()
        .then((view) => { if (wasMounted) void view?.refresh(); })
        .catch((error) => console.error("Chargement de la Brassopédie impossible", error));
    }
    if (viewId === "degustation") {
      void ensureTastingFeature()
        .then((feature) => feature?.handleViewChange?.(viewId))
        .catch((error) => console.error("Chargement de Dégustation impossible", error));
    }
    void badgeFeature.handleViewChange(viewId)
      .catch((error) => console.error("Chargement des badges impossible", error));
    if (viewId === "reglages") {
      void ensureSettingsFeature()
        .then((feature) => feature?.handleViewChange?.(viewId))
        .catch((error) => console.error("Chargement des réglages impossible", error));
    }
  });

  let activeSession = null;
  let switchSequence = 0;

  const mountSession = (bundle, { skipInitialPreload = false } = {}) => mountCollectionSession({
    bundle,
    elements: sessionElements,
    background,
    collectionCatalog,
    loadCollectionBundle: (collectionId) => collectionManager.loadBundle(collectionId),
    skipInitialPreload,
    experiencePolicy,
    onPersistenceError: reportPersistenceError,
    onPersistenceFailure: () => reportPersistenceError(new Error("Progression non enregistrée")),
    canRevealCardByClick: (collection) => canRevealSecretCollectionByClick(collection, getSecretState()),
    beforeValidReveal: () => {
      discoveryRegistry.refresh();
      refreshSecretUi();
      void brassopedieLibrary?.refresh();
      navigation?.showView("zythosphere");
    },
    onUnknownReveal: (payload) => {
      badgeFeature.recordUnknown({ collectionId: bundle.collection.id, input: payload.input });
    },
    onAlreadyDiscoveredReveal: (payload) => {
      badgeFeature.recordAlreadyDiscovered(payload);
    },
    onNewDiscoveryReveal: (payload) => {
      discoveryRegistry.refresh();
      refreshSecretUi();
      void brassopedieLibrary?.refresh();
      badgeFeature.recordNewDiscovery(payload);
    },
    onExternalCollectionReveal: (result) => {
      badgeFeature.noteExternalMatch(result, bundle.collection.id);
    },
    onExternalMatch: (match) => {
      void switchCollection(match.collectionId, { revealMatch: match });
    }
  });

  async function switchCollection(collectionId, { revealMatch = null } = {}) {
    const targetEntry = collectionManager.getEntry(collectionId);
    if (!targetEntry) return { status: "missing", collectionId };
    const secretState = getSecretState();
    if (collectionId === secretState.collectionId && !secretState.unlocked) {
      return { status: "locked", collectionId };
    }

    const previousBundle = await collectionManager.getActiveBundle();
    if (previousBundle.collection.id === collectionId) {
      sidebarNavigation?.setActiveCollection?.("zythosphere", collectionId);
      refreshSecretUi();
      if (revealMatch?.cardId && activeSession) {
        navigation?.showView("zythosphere");
        return activeSession.discovery.revealCard(revealMatch.cardId, { focusInput: false });
      }
      return { status: "already-active", collectionId };
    }
    if (activeSession?.revealEngine?.isBusy?.()) return { status: "busy", collectionId };

    const sequence = ++switchSequence;
    const carouselContainer = sessionElements.carouselContainer;
    const targetCollection = targetEntry.collection;
    const reducedMotion = experiencePolicy.isReducedMotion();
    setCollectionSwitchBusy(true, sidebarNavigation);
    syncCollectionChrome(targetCollection, secretState);
    const backgroundPromise = backgroundTransition.transitionTo(targetCollection);
    let previousDestroyed = false;

    try {
      const targetBundle = await collectionManager.loadBundle(collectionId);
      if (sequence !== switchSequence) return { status: "superseded", collectionId };
      await preloadAssets(null, { collection: targetBundle.collection, cards: targetBundle.cards });
      if (sequence !== switchSequence) return { status: "superseded", collectionId };
      if (carouselContainer) {
        await gsap.to(carouselContainer, {
          opacity: 0,
          duration: reducedMotion ? 0.05 : 0.18,
          ease: "power1.out",
          overwrite: true
        });
      }
      if (sequence !== switchSequence) return { status: "superseded", collectionId };

      activeSession?.destroy?.();
      activeSession = null;
      previousDestroyed = true;
      carouselContainer?.replaceChildren();
      const nextSession = await mountSession(targetBundle, { skipInitialPreload: true });
      if (sequence !== switchSequence) {
        nextSession.destroy?.();
        return { status: "superseded", collectionId };
      }

      activeSession = nextSession;
      collectionManager.setActiveCollection(collectionId);
      const persistence = setStoredActiveCollectionId(collectionId);
      if (!persistence.ok) reportPersistenceError({ error: persistence.error });
      syncCollectionChrome(targetBundle, getSecretState());
      sidebarNavigation?.setActiveCollection?.("zythosphere", collectionId);
      refreshSecretUi();
      if (carouselContainer) {
        await gsap.fromTo(
          carouselContainer,
          { opacity: 0 },
          { opacity: 1, duration: reducedMotion ? 0.08 : 0.28, ease: "power2.out", overwrite: true }
        );
      }
      if (revealMatch?.cardId) {
        await backgroundPromise;
        if (sequence === switchSequence && activeSession) {
          await activeSession.discovery.revealCard(revealMatch.cardId, { focusInput: false });
        }
      }
      return { status: "active", collectionId };
    } catch (error) {
      if (revealMatch) badgeFeature.clearPendingExternalMatch();
      console.error(`Impossible de charger la collection ${targetCollection.name || collectionId}`, error);
      void backgroundTransition.transitionTo(previousBundle.collection);
      syncCollectionChrome(previousBundle, getSecretState());
      sidebarNavigation?.setActiveCollection?.("zythosphere", previousBundle.collection.id);
      refreshSecretUi();
      if (previousDestroyed) {
        try {
          carouselContainer?.replaceChildren();
          activeSession = await mountSession(previousBundle, { skipInitialPreload: true });
          if (carouselContainer) gsap.set(carouselContainer, { opacity: 1 });
        } catch (restoreError) {
          console.error("La session précédente n'a pas pu être restaurée.", restoreError);
          showAppNotice({
            message: "L'affichage précédent n'a pas pu être restauré. Recharge la page pour repartir proprement.",
            tone: "error",
            actionLabel: "Recharger",
            onAction: () => window.location.reload(),
            duration: null
          });
        }
      }
      const feedback = sessionElements.revealSearchFeedback;
      if (feedback) {
        feedback.textContent = "La collection n'a pas pu être chargée. Réessaie.";
        feedback.classList.add("is-error");
      }
      return { status: "failed", collectionId, error };
    } finally {
      if (sequence === switchSequence) setCollectionSwitchBusy(false, sidebarNavigation);
    }
  }

  const isCollectionSelectable = (collection) => {
    const secretState = getSecretState();
    return collection.id !== secretState.collectionId || secretState.unlocked;
  };

  sidebarNavigation = createSidebarNavigation({
    root: /** @type {HTMLElement | null} */ ($("app-sidebar")),
    navigation,
    collections: collectionManager.listCollections(),
    initialZythosphereCollectionId: initialBundle.collection.id,
    initialBrassopedieCollectionId: brassopedieCollectionId,
    isCollectionSelectable,
    onSelectZythosphereCollection: (collectionId) => switchCollection(collectionId),
    onSelectBrassopedieCollection: async (collectionId) => {
      if (!isCollectionSelectable(collectionManager.getEntry(collectionId)?.collection)) {
        return { status: "locked", collectionId };
      }
      const library = await ensureBrassopedieLibrary();
      brassopedieCollectionId = await library?.selectCollection?.(collectionId) || collectionId;
      refreshSecretUi();
      return { status: "active", collectionId: brassopedieCollectionId };
    }
  });

  refreshSecretUi();
  activeSession = await mountSession(initialBundle);
  refreshSecretUi();
  badgeFeature.start();

  if (experiencePolicy.isReducedMotion()) gsap.set(loadingScreen, { opacity: 0 });
  else await gsap.to(loadingScreen, { opacity: 0, duration: 0.5, ease: "power2.out" }).then();
  if (loadingScreen) loadingScreen.style.display = "none";

  if (experiencePolicy.isReducedMotion()) gsap.set("#app", { opacity: 1 });
  else gsap.fromTo("#app", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
}
