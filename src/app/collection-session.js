import gsap from "gsap";
import { preloadAssets } from "../utils/preload-assets.js";
import { createAssetPreloadQueue } from "../utils/asset-preload-queue.js";
import { carouselTokens } from "../carousel/carousel-tokens.js";
import { createCarousel } from "../carousel/carousel-controller.js";
import { createDiscoveryStore } from "../discovery/discovery-store.js";
import { createDiscoveryController } from "../discovery/discovery-controller.js";
import { createGlobalBeerResolver } from "../discovery/global-beer-resolver.js";
import { createRevealEngine } from "../reveal/reveal-engine.js";
import { motionTokens } from "../animation/motion-tokens.js";
import { createBrassopediePanel, shouldOpenBrassopedie } from "../brassopedie/brassopedie-panel.js";
import { isCollectionSearchable } from "../data/secret-collection-rules.js";

function getClickedCardId(event) {
  const target = event.target instanceof Element ? event.target.closest("[data-card-id]") : null;
  return target instanceof HTMLElement ? target.dataset.cardId || null : null;
}

export async function mountCollectionSession({
  bundle,
  elements,
  background,
  collectionCatalog,
  loadCollectionBundle,
  onExternalMatch,
  beforeValidReveal,
  onUnknownReveal,
  onAlreadyDiscoveredReveal,
  onNewDiscoveryReveal,
  onExternalCollectionReveal,
  onPersistenceFailure,
  onPersistenceError,
  canRevealCardByClick,
  experiencePolicy,
  skipInitialPreload = false
}) {
  const { collection, cards, cardsById } = bundle;
  const assetQueue = createAssetPreloadQueue({ collection, cards });

  if (!skipInitialPreload) {
    await preloadAssets((progress) => {
      if (!elements.loadingBar) return;
      gsap.to(elements.loadingBar, {
        width: `${progress * 100}%`,
        duration: 0.3,
        ease: "power2.out"
      });
    }, { collection, cards });
  }

  if (elements.revealSearchFeedback) {
    elements.revealSearchFeedback.textContent = "";
    elements.revealSearchFeedback.classList.remove("is-error");
  }

  const store = createDiscoveryStore({
    key: collection.discoveryKey,
    onPersistenceError
  });
  const brassopediePanel = createBrassopediePanel({
    cardsById,
    onOpen: () => background.pause(),
    onClose: () => background.resume()
  });
  const carousel = createCarousel({
    containerEl: elements.carouselContainer,
    cards,
    collection,
    tokens: carouselTokens,
    store,
    onActiveChange: (index) => { void assetQueue.preloadAround(index, { purpose: "thumb" }); },
    onInspect: (cardId) => {
      void assetQueue.preloadCard(cardId, { purpose: "full" });
      if (shouldOpenBrassopedie({ cardId, isDiscovered: store.isDiscovered })) brassopediePanel.open(cardId);
    }
  });
  carousel.mount();
  void assetQueue.preloadAround(4, { purpose: "thumb" });

  const revealEngine = createRevealEngine({
    stageEl: elements.revealStage,
    overlayEl: elements.sceneOverlay,
    revealOverlay: elements.revealOverlay,
    revealActions: elements.revealActions,
    revealHeadline: elements.revealHeadline,
    btnContinue: elements.btnContinue,
    motionTokens,
    isReducedMotion: experiencePolicy?.isReducedMotion
  });

  const searchableCatalog = collectionCatalog.filter((entry) => isCollectionSearchable(entry));
  const collectionSearchable = isCollectionSearchable(collection);
  const resolver = createGlobalBeerResolver({
    preferredBundle: collectionSearchable ? bundle : null,
    preferredCollectionId: collectionSearchable ? collection.id : null,
    collectionCatalog: searchableCatalog
  });

  const discovery = createDiscoveryController({
    formEl: elements.revealSearchForm,
    inputEl: elements.revealSearchInput,
    submitEl: elements.revealSearchSubmit,
    feedbackEl: elements.revealSearchFeedback,
    carousel,
    revealEngine,
    store,
    resolver,
    cards,
    progressEl: elements.progressDisplay,
    beforeReveal: () => background.pause(),
    afterReveal: () => background.resume(),
    currentCollectionId: collection.id,
    onExternalMatch,
    beforeValidReveal,
    onUnknownReveal,
    onAlreadyDiscoveredReveal,
    onNewDiscoveryReveal,
    onExternalCollectionReveal,
    onPersistenceFailure,
    isReducedMotion: experiencePolicy?.isReducedMotion
  });
  discovery.mount();

  const cardClickRevealAbort = new AbortController();
  elements.carouselContainer?.addEventListener("click", (event) => {
    if (revealEngine.isBusy?.()) return;
    if (!collection.secret || !canRevealCardByClick?.(collection)) return;

    const cardId = getClickedCardId(event);
    if (!cardId || !cardsById[cardId]?.revealable || store.isDiscovered(cardId)) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    void discovery.revealCard(cardId, { focusInput: false });
  }, { capture: true, signal: cardClickRevealAbort.signal });

  return {
    collection,
    carousel,
    discovery,
    revealEngine,
    brassopediePanel,
    assetQueue,
    destroy() {
      cardClickRevealAbort.abort();
      discovery.destroy?.();
      revealEngine.destroy?.();
      carousel.destroy?.();
      brassopediePanel.close?.();
    }
  };
}
