import gsap from "gsap";
import { collectionCatalog } from "../data/collection-catalog.js";
import { createLazyCollectionManager } from "../data/collection-manager.js";
import { getStoredActiveCollectionId, setStoredActiveCollectionId } from "./active-collection-storage.js";
import { mountCollectionSession } from "./collection-session.js";
import { createSidebarNavigation } from "./sidebar-navigation.js";
import { showAppNotice } from "./app-notice.js";
import { preloadAssets } from "../utils/preload-assets.js";
import { createDiscoveryRegistry } from "../discovery/discovery-registry.js";
import { createDiscoveryStore } from "../discovery/discovery-store.js";
import {
  canRevealSecretCollectionByClick,
  getClassicCollectionEntries,
  getSecretCollectionState,
  resolveCollectionDisplayName
} from "../data/secret-collection-rules.js";
import { BADGE_DEFINITIONS } from "../badges/badge-definitions.js";
import { createBadgeStore } from "../badges/badge-storage.js";
import { createRevealStatsStore } from "../badges/badge-stats-storage.js";
import { createBadgeEngine } from "../badges/badge-engine.js";
import { notifyBadgesUnlocked, showBadgeToast } from "../badges/badge-notifications.js";
import { mountBackground, applyCollectionBackground, createBackgroundTransition } from "../background/background-runtime.js";

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
    button.textContent = name;
    button.setAttribute("aria-label", `${name} — ${viewId === "zythosphere" ? "ZythoSphère" : "Brassopédie"}`);
  });
}

function mountSettingsDebugPanel({ root, onRevealClassicCollections }) {
  const inner = root?.querySelector?.(".app-view-panel-inner") || root;
  if (!inner || inner.querySelector?.("[data-settings-reveal-classic]")) return;

  const section = document.createElement("section");
  section.className = "settings-debug-panel";
  section.setAttribute("aria-label", "Outils de contrôle");

  const title = document.createElement("h2");
  title.textContent = "Outils de contrôle";

  const description = document.createElement("p");
  description.textContent = "Révèle toutes les cartes des 9 collections classiques sur cet appareil pour tester le déblocage de la collection secrète.";

  const button = document.createElement("button");
  button.type = "button";
  button.dataset.settingsRevealClassic = "true";
  button.textContent = "Révéler les 9 collections classiques";

  button.addEventListener("click", async () => {
    const confirmed = window.confirm("Cette action révélera toutes les cartes des 9 collections classiques sur cet appareil. La collection secrète restera à révéler carte par carte. Continuer ?");
    if (!confirmed) return;

    button.disabled = true;
    const previousLabel = button.textContent;
    button.textContent = "Révélation en cours…";

    try {
      await onRevealClassicCollections();
    } finally {
      button.disabled = false;
      button.textContent = previousLabel;
    }
  });

  section.append(title, description, button);
  inner.append(section);
}

function reportPersistenceError(detail) {
  console.warn("Persistance locale indisponible", detail?.error || detail);
  showAppNotice({
    message: "Le navigateur bloque le stockage local. Certaines progressions peuvent ne pas être conservées après fermeture.",
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
  const collectionManager = createLazyCollectionManager(collectionCatalog, {
    initialCollectionId: getStoredActiveCollectionId()
  });
  const initialCollection = collectionManager.getActiveCollection();
  const background = mountBackground($("beer-background-root"));
  const initialBackgroundSettings = applyCollectionBackground(background, initialCollection);
  const backgroundTransition = createBackgroundTransition(background, initialBackgroundSettings);
  const sessionElements = getSessionElements();
  const initialBundle = await collectionManager.getActiveBundle();

  syncCollectionChrome(initialBundle);
  gsap.set(loadingScreen, { opacity: 1 });

  const discoveryRegistry = createDiscoveryRegistry(collectionCatalog, {
    getBundle: (collectionId) => collectionManager.getBundle(collectionId),
    onPersistenceError: reportPersistenceError
  });
  const badgeStore = createBadgeStore({ onPersistenceError: reportPersistenceError });
  const revealStatsStore = createRevealStatsStore({ onPersistenceError: reportPersistenceError });
  const badgeEngine = createBadgeEngine({ badgeStore, discoveryRegistry, revealStatsStore, collectionCatalog });

  let badgesView = null;
  let badgesViewPromise = null;

  async function ensureBadgesView() {
    if (badgesView) return badgesView;
    const root = $("badges-view");
    if (!root) return null;

    if (!badgesViewPromise) {
      badgesViewPromise = Promise.all([
        import("../badges/badges-view.js"),
        import("../badges/badges.css")
      ]).then(([{ createBadgesView }]) => {
        badgesView = createBadgesView({
          root,
          badgeStore,
          badgeEngine,
          definitions: BADGE_DEFINITIONS
        });
        badgesView.mount();
        return badgesView;
      }).catch((error) => {
        badgesViewPromise = null;
        throw error;
      });
    }

    return badgesViewPromise;
  }

  const getSecretState = () => getSecretCollectionState({ collectionCatalog, registry: discoveryRegistry });
  const refreshSecretUi = () => {
    const secretState = getSecretState();
    syncSidebarCollectionLabels(collectionManager, secretState);
    syncCollectionChrome(collectionManager.getActiveCollection(), secretState);
    return secretState;
  };

  const notifyNewBadges = (items) => {
    discoveryRegistry.refresh();
    refreshSecretUi();
    badgesView?.refresh();
    if (items.length) void notifyBadgesUnlocked(items);
  };

  const archivedBadges = badgeEngine.evaluate({ silent: true });
  if (archivedBadges.length) {
    showBadgeToast(archivedBadges, `Archives mises à jour : ${archivedBadges.length} badges retrouvés.`);
  }
  const pendingBadgeQueue = badgeStore.takeQueue()
    .map((item) => ({ ...item, badge: BADGE_DEFINITIONS.find((badge) => badge.id === item.badgeId) }))
    .filter((item) => item.badge);
  if (pendingBadgeQueue.length) void notifyBadgesUnlocked(pendingBadgeQueue);

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
        .then((view) => {
          if (wasMounted) void view?.refresh();
        })
        .catch((error) => console.error("Chargement de la Brassopédie impossible", error));
    }
    if (viewId === "badges") {
      const wasMounted = Boolean(badgesView);
      void ensureBadgesView()
        .then((view) => {
          if (wasMounted) view?.refresh();
        })
        .catch((error) => console.error("Chargement des badges impossible", error));
    }
  });

  let activeSession = null;
  let switchSequence = 0;
  let sidebarNavigation = null;

  const mountSession = (bundle, { skipInitialPreload = false } = {}) => mountCollectionSession({
    bundle,
    elements: sessionElements,
    background,
    collectionCatalog,
    loadCollectionBundle: (collectionId) => collectionManager.loadBundle(collectionId),
    skipInitialPreload,
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
      const previousRevealStats = revealStatsStore.getState();
      revealStatsStore.recordUnknown(payload.input);
      notifyNewBadges(badgeEngine.evaluate({ previousRevealStats }));
    },
    onAlreadyDiscoveredReveal: (payload) => {
      const previousRevealStats = revealStatsStore.getState();
      revealStatsStore.recordAlreadyDiscovered(payload);
      notifyNewBadges(badgeEngine.evaluate({ previousRevealStats }));
    },
    onNewDiscoveryReveal: (payload) => {
      const previousRevealStats = revealStatsStore.getState();
      revealStatsStore.recordNewDiscovery(payload);
      discoveryRegistry.refresh();
      refreshSecretUi();
      notifyNewBadges(badgeEngine.evaluate({ previousRevealStats }));
    },
    onExternalCollectionReveal: (result) => {
      const previousRevealStats = revealStatsStore.getState();
      revealStatsStore.recordExternalCollectionMatch(result);
      const items = badgeEngine.evaluate({ previousRevealStats });
      if (items.length) badgeStore.enqueue(items);
    },
    onExternalMatch: (match) => {
      void switchCollection(match.collectionId, { revealMatch: match });
    }
  });

  async function revealClassicCollectionsForDebug() {
    const entries = getClassicCollectionEntries(collectionCatalog);
    const previousRevealStats = revealStatsStore.getState();
    let total = 0;
    let persistenceFailed = false;

    for (const entry of entries) {
      const bundle = await collectionManager.loadBundle(entry.collection.id);
      const ids = bundle.revealableCards.map((card) => card.id);
      total += ids.length;

      const store = createDiscoveryStore({
        key: bundle.collection.discoveryKey,
        onPersistenceError: reportPersistenceError
      });
      const result = store.markAllDiscovered(ids);
      if (!result.ok) persistenceFailed = true;

      if (activeSession?.collection?.id === bundle.collection.id) {
        ids.forEach((id) => activeSession?.carousel?.setDiscovered?.(id, true));
        activeSession?.discovery?.updateProgress?.();
      }
    }

    discoveryRegistry.refresh();
    refreshSecretUi();
    void brassopedieLibrary?.refresh();
    notifyNewBadges(badgeEngine.evaluate({ previousRevealStats }));

    showAppNotice({
      message: persistenceFailed
        ? `${total} cartes classiques révélées pour cette session, mais la sauvegarde locale a signalé une erreur.`
        : `${total} cartes classiques révélées. La collection secrète peut maintenant être testée.`,
      tone: persistenceFailed ? "warning" : "success",
      duration: 9000
    });
  }

  async function switchCollection(collectionId, { revealMatch = null } = {}) {
    const targetEntry = collectionManager.getEntry(collectionId);
    if (!targetEntry) return { status: "missing", collectionId };

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
    setCollectionSwitchBusy(true, sidebarNavigation);
    syncCollectionChrome(targetCollection, getSecretState());
    const backgroundPromise = backgroundTransition.transitionTo(targetCollection);
    let previousDestroyed = false;

    try {
      const targetBundle = await collectionManager.loadBundle(collectionId);
      if (sequence !== switchSequence) return { status: "superseded", collectionId };
      await preloadAssets(null, { collection: targetBundle.collection, cards: targetBundle.cards });
      if (sequence !== switchSequence) return { status: "superseded", collectionId };

      if (carouselContainer) {
        await gsap.to(carouselContainer, { opacity: 0, duration: 0.18, ease: "power1.out", overwrite: true });
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
      setStoredActiveCollectionId(collectionId);
      syncCollectionChrome(targetBundle, getSecretState());
      sidebarNavigation?.setActiveCollection?.("zythosphere", collectionId);
      refreshSecretUi();

      if (carouselContainer) {
        await gsap.fromTo(carouselContainer, { opacity: 0 }, { opacity: 1, duration: 0.28, ease: "power2.out", overwrite: true });
      }

      if (revealMatch?.cardId) {
        await backgroundPromise;
        if (sequence === switchSequence && activeSession) {
          await activeSession.discovery.revealCard(revealMatch.cardId, { focusInput: false });
        }
      }
      return { status: "active", collectionId };
    } catch (error) {
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

  sidebarNavigation = createSidebarNavigation({
    root: /** @type {HTMLElement | null} */ ($("app-sidebar")),
    navigation,
    collections: collectionManager.listCollections(),
    initialZythosphereCollectionId: initialBundle.collection.id,
    initialBrassopedieCollectionId: brassopedieCollectionId,
    onSelectZythosphereCollection: (collectionId) => switchCollection(collectionId),
    onSelectBrassopedieCollection: async (collectionId) => {
      const library = await ensureBrassopedieLibrary();
      brassopedieCollectionId = await library?.selectCollection?.(collectionId) || collectionId;
      refreshSecretUi();
      return { status: "active", collectionId: brassopedieCollectionId };
    }
  });
  refreshSecretUi();

  mountSettingsDebugPanel({
    root: $("reglages-view"),
    onRevealClassicCollections: revealClassicCollectionsForDebug
  });

  activeSession = await mountSession(initialBundle);
  refreshSecretUi();

  await gsap.to(loadingScreen, { opacity: 0, duration: 0.5, ease: "power2.out" }).then();
  if (loadingScreen) loadingScreen.style.display = "none";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set("#app", { opacity: 1 });
  } else {
    gsap.fromTo("#app", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
  }
}
