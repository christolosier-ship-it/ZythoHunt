/** @typedef {any} Any */
import "./styles.css";
import "./card-presentation.css";
import "./background/background-integration.css";
import "./brassopedie/brassopedie-panel.css";
import "./brassopedie/brassopedie-library.css";
import "./badges/badges.css";
import "./carousel/carousel-layout.css";
import "./app/app-shell.css";
import gsap from "gsap";
import { collectionBundles } from "./data/collections.js";
import { createCollectionManager, validateCollectionBundle } from "./data/collection-manager.js";
import { createBeerBackground } from "./background/beer-background.js";
import { backgroundSettings } from "./background/background-settings.js";
import { getCollectionBackgroundSettings } from "./background/background-presets.js";
import { getEditorialBackgroundPreset } from "./background/editorial-background-presets.js";
import { getStoredActiveCollectionId, setStoredActiveCollectionId } from "./app/active-collection-storage.js";
import { takePendingReveal } from "./app/pending-reveal-storage.js";
import { mountCollectionSession } from "./app/collection-session.js";
import { createAppNavigation, resolveMenuView } from "./app/app-navigation.js";
import { preloadAssets } from "./utils/preload-assets.js";
import { registerServiceWorker } from "./pwa/register-service-worker.js";
import { createDiscoveryRegistry } from "./discovery/discovery-registry.js";
import { createBrassopedieLibraryView } from "./brassopedie/brassopedie-library-view.js";
import { BADGE_DEFINITIONS } from "./badges/badge-definitions.js";
import { createBadgeStore } from "./badges/badge-storage.js";
import { createRevealStatsStore } from "./badges/badge-stats-storage.js";
import { createBadgeEngine } from "./badges/badge-engine.js";
import { createBadgesView } from "./badges/badges-view.js";
import { notifyBadgesUnlocked, showBadgeToast } from "./badges/badge-notifications.js";

const $ = (id) => document.getElementById(id);
const BACKGROUND_KEYS = ["beerT", "bubbleDensity", "foamIntensity"];

function renderCollectionSelector(manager, activeCollectionId, onSelect, { switching = false } = {}) {
  const listEl = $("collection-selector-list");
  if (!listEl) return;
  listEl.replaceChildren();
  const selector = listEl.closest(".collection-selector");
  if (selector) selector.dataset.switching = switching ? "true" : "false";

  manager.listCollections().forEach((collection) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "collection-selector-item";
    button.disabled = switching;
    button.setAttribute("aria-pressed", collection.id === activeCollectionId ? "true" : "false");
    if (!collection.assetsReady) button.title = "Collection jouable avec placeholders en attendant les assets";

    const name = document.createElement("span");
    name.className = "collection-selector-name";
    name.textContent = collection.name || collection.nom || collection.id;

    const availabilityLabel = collection.assetsReady ? "Disponible" : "Images à compléter";
    button.setAttribute("aria-label", `${name.textContent} — ${availabilityLabel}`);

    button.append(name);
    button.addEventListener("click", () => onSelect(collection.id));
    listEl.appendChild(button);
  });
}

function createBackgroundFallback(hostEl, error) {
  console.error("Le fond animé n'a pas pu démarrer. L'application continue avec un fond statique.", error);
  hostEl?.replaceChildren();
  hostEl?.classList.add("is-static-fallback");

  return {
    isAvailable: false,
    update() {},
    pause() {},
    resume() {},
    destroy() {},
    getPaletteName() { return "statique"; }
  };
}

function mountBackground() {
  const hostEl = $("beer-background-root");
  try {
    const engine = createBeerBackground({ hostEl, settings: { ...backgroundSettings } });
    engine.mount();
    return { ...engine, isAvailable: true };
  } catch (error) {
    return createBackgroundFallback(hostEl, error);
  }
}

function applyCollectionBackground(background, collection) {
  const nextSettings = getCollectionBackgroundSettings(backgroundSettings, getEditorialBackgroundPreset(collection));
  background.update(nextSettings);
  return nextSettings;
}

function createBackgroundTransition(background, initialSettings) {
  let tween = null;
  let currentSettings = Object.fromEntries(BACKGROUND_KEYS.map((key) => [key, Number(initialSettings[key] ?? backgroundSettings[key] ?? 0)]));

  function transitionTo(collection) {
    const nextSettings = getCollectionBackgroundSettings(backgroundSettings, getEditorialBackgroundPreset(collection));
    const target = Object.fromEntries(BACKGROUND_KEYS.map((key) => [key, Number(nextSettings[key] ?? currentSettings[key] ?? 0)]));
    tween?.kill();

    if (!background.isAvailable || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      currentSettings = target;
      background.update(nextSettings);
      return Promise.resolve(nextSettings);
    }

    const state = { ...currentSettings };
    return new Promise((resolve) => {
      tween = gsap.to(state, {
        ...target,
        duration: 0.9,
        ease: "power2.inOut",
        overwrite: true,
        onUpdate: () => {
          currentSettings = { ...state };
          background.update(state);
        },
        onComplete: () => {
          currentSettings = target;
          background.update(nextSettings);
          tween = null;
          resolve(nextSettings);
        },
        onInterrupt: () => {
          currentSettings = { ...state };
          resolve({ ...backgroundSettings, ...currentSettings });
        }
      });
    });
  }

  return { transitionTo };
}

function getNavigationViews() {
  return {
    zythosphere: $("zythosphere-view"),
    brassopedie: $("brassopedie-view"),
    degustation: $("degustation-view"),
    badges: $("badges-view"),
    reglages: $("reglages-view")
  };
}

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

function syncCollectionChrome(bundle) {
  const collection = bundle?.collection;
  if (!collection) return;
  const name = collection.name || collection.nom || collection.id;
  const activeCollectionLabel = $("active-collection-label");
  const carouselContainer = $("carousel-container");
  if (activeCollectionLabel) activeCollectionLabel.textContent = `Collection ${name}`;
  if (carouselContainer) carouselContainer.setAttribute("aria-label", `Carrousel de la collection ${name}`);
}

function setCollectionSwitchBusy(value) {
  const input = $("reveal-search-input");
  const submit = $("reveal-search-submit");
  if (input) input.disabled = value;
  if (submit) submit.disabled = value;
}

async function boot(navigation) {
  const loadingScreen = $("loading-screen");
  const pendingReveal = takePendingReveal();
  const collectionManager = createCollectionManager(collectionBundles, { initialCollectionId: getStoredActiveCollectionId() });
  const initialBundle = collectionManager.getActiveBundle();
  const background = mountBackground();
  const initialBackgroundSettings = applyCollectionBackground(background, initialBundle.collection);
  const backgroundTransition = createBackgroundTransition(background, initialBackgroundSettings);
  const sessionElements = getSessionElements();

  syncCollectionChrome(initialBundle);

  const validation = validateCollectionBundle(initialBundle);
  if (!validation.valid) console.error(`Collection ${initialBundle.collection.name} invalide`, validation.errors);

  gsap.set(loadingScreen, { opacity: 1 });
  const discoveryRegistry = createDiscoveryRegistry(collectionBundles);
  const badgeStore = createBadgeStore();
  const revealStatsStore = createRevealStatsStore();
  const badgeEngine = createBadgeEngine({ badgeStore, discoveryRegistry, revealStatsStore, collectionBundles });
  const notifyNewBadges = (items) => {
    discoveryRegistry.refresh();
    badgesView?.refresh();
    if (items.length) void notifyBadgesUnlocked(items);
  };
  let badgesView = createBadgesView({ root: $("badges-view"), badgeStore, badgeEngine, definitions: BADGE_DEFINITIONS });
  badgesView.mount();
  const archivedBadges = badgeEngine.evaluate({ silent: true });
  if (archivedBadges.length) showBadgeToast(archivedBadges, `Archives mises à jour : ${archivedBadges.length} badges retrouvés.`);
  const pendingBadgeQueue = badgeStore.takeQueue().map((item) => ({ ...item, badge: BADGE_DEFINITIONS.find((badge) => badge.id === item.badgeId) })).filter((item) => item.badge);
  if (pendingBadgeQueue.length) void notifyBadgesUnlocked(pendingBadgeQueue);

  const brassopedieRoot = $("brassopedie-view");
  let brassopedieLibrary = null;
  if (brassopedieRoot) {
    brassopedieLibrary = createBrassopedieLibraryView({
      root: brassopedieRoot,
      collectionBundles,
      registry: discoveryRegistry,
      initialCollectionId: initialBundle.collection.id,
      onOpen: () => background.pause(),
      onClose: () => background.resume()
    });
  }
  navigation?.onViewChange((viewId) => {
    if (viewId === "brassopedie") brassopedieLibrary?.refresh();
    if (viewId === "badges") badgesView?.refresh();
  });

  let activeSession = null;
  let switchSequence = 0;

  const mountSession = (bundle, { pendingReveal: reveal = null, skipInitialPreload = false } = {}) => mountCollectionSession({
    bundle,
    elements: sessionElements,
    background,
    collectionBundles,
    pendingReveal: reveal,
    skipInitialPreload,
    beforeValidReveal: () => {
      discoveryRegistry.refresh();
      brassopedieLibrary?.refresh();
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
    const targetBundle = collectionManager.getBundle(collectionId);
    if (!targetBundle) return { status: "missing", collectionId };

    const previousBundle = collectionManager.getActiveBundle();
    if (previousBundle.collection.id === collectionId) {
      if (revealMatch?.cardId && activeSession) {
        navigation?.showView("zythosphere");
        return activeSession.discovery.revealCard(revealMatch.cardId, { focusInput: false });
      }
      return { status: "already-active", collectionId };
    }

    if (activeSession?.revealEngine?.isBusy?.()) return { status: "busy", collectionId };

    const sequence = ++switchSequence;
    const carouselContainer = sessionElements.carouselContainer;
    setCollectionSwitchBusy(true);
    syncCollectionChrome(targetBundle);
    renderCollectionSelector(collectionManager, collectionId, (id) => { void switchCollection(id); }, { switching: true });

    const backgroundPromise = backgroundTransition.transitionTo(targetBundle.collection);
    let previousDestroyed = false;

    try {
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
      brassopedieLibrary?.selectCollection?.(collectionId);
      renderCollectionSelector(collectionManager, collectionId, (id) => { void switchCollection(id); });

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
      console.error(`Impossible de charger la collection ${targetBundle.collection.name || collectionId}`, error);
      void backgroundTransition.transitionTo(previousBundle.collection);
      syncCollectionChrome(previousBundle);

      if (previousDestroyed) {
        try {
          carouselContainer?.replaceChildren();
          activeSession = await mountSession(previousBundle, { skipInitialPreload: true });
          if (carouselContainer) gsap.set(carouselContainer, { opacity: 1 });
        } catch (restoreError) {
          console.error("La session précédente n'a pas pu être restaurée.", restoreError);
        }
      }

      renderCollectionSelector(collectionManager, previousBundle.collection.id, (id) => { void switchCollection(id); });
      const feedback = sessionElements.revealSearchFeedback;
      if (feedback) {
        feedback.textContent = "La collection n'a pas pu être chargée. Réessaie.";
        feedback.classList.add("is-error");
      }
      return { status: "failed", collectionId, error };
    } finally {
      if (sequence === switchSequence) setCollectionSwitchBusy(false);
    }
  }

  renderCollectionSelector(collectionManager, initialBundle.collection.id, (collectionId) => { void switchCollection(collectionId); });
  activeSession = await mountSession(initialBundle, { pendingReveal });

  await gsap.to(loadingScreen, { opacity: 0, duration: 0.5, ease: "power2.out" }).then();
  loadingScreen.style.display = "none";
  gsap.fromTo("#app", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
}

function mountSidebarNavigation(navigation) {
  const sidebar = $("app-sidebar");
  if (!sidebar) return;
  const menuButtons = Array.from(sidebar.querySelectorAll("[data-menu-view]"));

  const syncCurrent = (viewId) => {
    menuButtons.forEach((button) => {
      const isCurrent = resolveMenuView(/** @type {HTMLElement} */ (button).dataset.menuView) === viewId;
      button.classList.toggle("is-active", isCurrent);
      if (isCurrent) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  };

  sidebar.addEventListener("click", (event) => {
    const target = /** @type {Element | null} */ (event.target instanceof Element ? event.target : null);
    const button = /** @type {HTMLElement | null} */ (target?.closest("[data-menu-view]") || null);
    if (!button) return;
    const viewId = resolveMenuView(button.dataset.menuView);
    if (viewId) navigation?.showView(viewId);
  });

  navigation?.onViewChange(syncCurrent);
  syncCurrent(navigation?.getActiveView?.() || "zythosphere");
}

function showStartupError(error) {
  console.error("ZythoHunt startup failed", error);
  const loadingLabel = document.querySelector(".loading-label");
  if (loadingLabel) loadingLabel.textContent = "Erreur de chargement. Recharge la page.";
}

document.addEventListener("DOMContentLoaded", () => {
  const navigation = createAppNavigation({ views: getNavigationViews(), initialView: "zythosphere" });
  mountSidebarNavigation(navigation);
  void registerServiceWorker().catch((error) => console.warn("Service worker registration failed", error));
  void boot(navigation).catch(showStartupError);
});
