import gsap from "gsap";
import { collectionCatalog } from "../data/collection-catalog.js";
import { createLazyCollectionManager } from "../data/collection-manager.js";
import { getStoredActiveCollectionId, setStoredActiveCollectionId } from "./active-collection-storage.js";
import { mountCollectionSession } from "./collection-session.js";
import { createSidebarNavigation } from "./sidebar-navigation.js";
import { showAppNotice } from "./app-notice.js";
import { preloadAssets } from "../utils/preload-assets.js";
import { createDiscoveryRegistry } from "../discovery/discovery-registry.js";
import { createBrassopedieLibraryView } from "../brassopedie/brassopedie-library-view.js";
import { BADGE_DEFINITIONS } from "../badges/badge-definitions.js";
import { createBadgeStore } from "../badges/badge-storage.js";
import { createRevealStatsStore } from "../badges/badge-stats-storage.js";
import { createBadgeEngine } from "../badges/badge-engine.js";
import { createBadgesView } from "../badges/badges-view.js";
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

function syncCollectionChrome(bundleOrCollection) {
  const collection = bundleOrCollection?.collection || bundleOrCollection;
  if (!collection) return;
  const name = collection.name || collection.nom || collection.id;
  const label = $("active-collection-label");
  const carousel = $("carousel-container");
  if (label) label.textContent = `Collection ${name}`;
  if (carousel) carousel.setAttribute("aria-label", `Carrousel de la collection ${name}`);
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

  let badgesView = createBadgesView({
    root: $("badges-view"),
    badgeStore,
    badgeEngine,
    definitions: BADGE_DEFINITIONS
  });
  badgesView.mount();

  const notifyNewBadges = (items) => {
    discoveryRegistry.refresh();
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
  let brassopedieCollectionId = initialBundle.collection.id;
  if (brassopedieRoot) {
    brassopedieLibrary = createBrassopedieLibraryView({
      root: brassopedieRoot,
      collectionCatalog,
      registry: discoveryRegistry,
      initialCollectionId: brassopedieCollectionId,
      loadCollectionBundle: (collectionId) => collectionManager.loadBundle(collectionId),
      onOpen: () => background.pause(),
      onClose: () => background.resume()
    });
  }

  navigation?.onViewChange((viewId) => {
    if (viewId === "brassopedie") void brassopedieLibrary?.refresh();
    if (viewId === "badges") badgesView?.refresh();
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
    beforeValidReveal: () => {
      discoveryRegistry.refresh();
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

  async function switchCollection(collectionId, { revealMatch = null } = {}) {
    const targetEntry = collectionManager.getEntry(collectionId);
    if (!targetEntry) return { status: "missing", collectionId };

    const previousBundle = await collectionManager.getActiveBundle();
    if (previousBundle.collection.id === collectionId) {
      sidebarNavigation?.setActiveCollection?.("zythosphere", collectionId);
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
    syncCollectionChrome(targetCollection);
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
      syncCollectionChrome(targetBundle);
      sidebarNavigation?.setActiveCollection?.("zythosphere", collectionId);

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
      syncCollectionChrome(previousBundle);
      sidebarNavigation?.setActiveCollection?.("zythosphere", previousBundle.collection.id);

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
      brassopedieCollectionId = await brassopedieLibrary?.selectCollection?.(collectionId) || collectionId;
      return { status: "active", collectionId: brassopedieCollectionId };
    }
  });

  activeSession = await mountSession(initialBundle);

  await gsap.to(loadingScreen, { opacity: 0, duration: 0.5, ease: "power2.out" }).then();
  if (loadingScreen) loadingScreen.style.display = "none";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set("#app", { opacity: 1 });
  } else {
    gsap.fromTo("#app", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
  }
}
