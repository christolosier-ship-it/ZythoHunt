import { resolveMenuView } from "./app-navigation.js";

export const SIDEBAR_COLLECTION_VIEWS = Object.freeze(["zythosphere", "brassopedie"]);

export function isSidebarCollectionView(viewId) {
  return SIDEBAR_COLLECTION_VIEWS.includes(viewId);
}

export function getNextAccordionState({ currentOpen = null, targetView, activeView }) {
  if (!isSidebarCollectionView(targetView)) return null;
  if (activeView !== targetView) return targetView;
  return currentOpen === targetView ? null : targetView;
}

/**
 * @param {{
 *   root?: HTMLElement | null,
 *   navigation?: any,
 *   collections?: any[],
 *   initialZythosphereCollectionId?: string | null,
 *   initialBrassopedieCollectionId?: string | null,
 *   onSelectZythosphereCollection?: (collectionId: string) => any,
 *   onSelectBrassopedieCollection?: (collectionId: string) => any
 * }} options
 */
export function createSidebarNavigation({
  root,
  navigation,
  collections = [],
  initialZythosphereCollectionId = null,
  initialBrassopedieCollectionId = null,
  onSelectZythosphereCollection,
  onSelectBrassopedieCollection
} = {}) {
  if (!root) {
    return {
      setActiveCollection() {},
      setCollectionBusy() {},
      getActiveCollection() { return null; },
      getOpenAccordion() { return null; },
      destroy() {}
    };
  }

  const primaryButtons = Array.from(root.querySelectorAll("[data-menu-view]"));
  const collectionHosts = Object.fromEntries(SIDEBAR_COLLECTION_VIEWS.map((viewId) => [
    viewId,
    /** @type {HTMLElement | null} */ (root.querySelector(`[data-sidebar-collections="${viewId}"]`))
  ]));
  const activeCollections = {
    zythosphere: initialZythosphereCollectionId,
    brassopedie: initialBrassopedieCollectionId
  };
  const busyCollections = { zythosphere: false, brassopedie: false };
  let openAccordion = isSidebarCollectionView(navigation?.getActiveView?.()) ? navigation.getActiveView() : null;

  const collectionLabel = (collection) => collection.name || collection.nom || collection.id;

  function syncPrimaryButtons(viewId = navigation?.getActiveView?.()) {
    primaryButtons.forEach((button) => {
      const element = /** @type {HTMLElement} */ (button);
      const resolvedView = resolveMenuView(element.dataset.menuView);
      const isCurrent = resolvedView === viewId;
      element.classList.toggle("is-active", isCurrent);
      if (isCurrent) element.setAttribute("aria-current", "page");
      else element.removeAttribute("aria-current");

      if (isSidebarCollectionView(resolvedView)) {
        element.setAttribute("aria-expanded", openAccordion === resolvedView ? "true" : "false");
      }
    });
  }

  function syncAccordions() {
    SIDEBAR_COLLECTION_VIEWS.forEach((viewId) => {
      const host = collectionHosts[viewId];
      if (host) host.hidden = openAccordion !== viewId;
      const section = /** @type {HTMLElement | null} */ (root.querySelector(`[data-sidebar-section="${viewId}"]`));
      section?.classList.toggle("is-open", openAccordion === viewId);
    });
  }

  function syncCollectionButtons(viewId) {
    const host = collectionHosts[viewId];
    if (!host) return;
    const activeId = activeCollections[viewId];
    const busy = busyCollections[viewId];
    host.querySelectorAll("[data-collection-id]").forEach((button) => {
      const element = /** @type {HTMLButtonElement} */ (button);
      const isActive = element.dataset.collectionId === activeId;
      element.classList.toggle("is-active", isActive);
      element.disabled = busy;
      element.setAttribute("aria-pressed", isActive ? "true" : "false");
      if (isActive) element.setAttribute("aria-current", "true");
      else element.removeAttribute("aria-current");
    });
    host.setAttribute("aria-busy", busy ? "true" : "false");
  }

  function renderCollectionHost(viewId) {
    const host = collectionHosts[viewId];
    if (!host) return;
    host.replaceChildren();

    collections.forEach((collection) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "app-sidebar-collection";
      button.dataset.collectionId = collection.id;
      button.dataset.sidebarCollectionView = viewId;
      button.textContent = collectionLabel(collection);
      button.setAttribute("aria-label", `${collectionLabel(collection)} — ${viewId === "zythosphere" ? "ZythoSphère" : "Brassopédie"}`);
      host.append(button);
    });

    syncCollectionButtons(viewId);
  }

  async function selectCollection(viewId, collectionId) {
    if (!isSidebarCollectionView(viewId) || !collectionId || busyCollections[viewId]) return;
    openAccordion = viewId;
    navigation?.showView?.(viewId);
    syncPrimaryButtons(viewId);
    syncAccordions();

    const callback = viewId === "zythosphere" ? onSelectZythosphereCollection : onSelectBrassopedieCollection;
    const result = await callback?.(collectionId);
    if (!result || ["active", "already-active"].includes(result.status)) {
      activeCollections[viewId] = result?.collectionId || collectionId;
      syncCollectionButtons(viewId);
    }
  }

  function onClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    const collectionButton = /** @type {HTMLElement | null} */ (target?.closest("[data-sidebar-collection-view][data-collection-id]") || null);
    if (collectionButton) {
      const viewId = collectionButton.dataset.sidebarCollectionView;
      const collectionId = collectionButton.dataset.collectionId;
      if (viewId && collectionId) void selectCollection(viewId, collectionId);
      return;
    }

    const primaryButton = /** @type {HTMLElement | null} */ (target?.closest("[data-menu-view]") || null);
    if (!primaryButton) return;
    const viewId = resolveMenuView(primaryButton.dataset.menuView);
    if (!viewId) return;

    if (isSidebarCollectionView(viewId)) {
      openAccordion = getNextAccordionState({
        currentOpen: openAccordion,
        targetView: viewId,
        activeView: navigation?.getActiveView?.()
      });
      navigation?.showView?.(viewId);
    } else {
      openAccordion = null;
      navigation?.showView?.(viewId);
    }

    syncPrimaryButtons(viewId);
    syncAccordions();
  }

  root.addEventListener("click", onClick);
  const unsubscribe = navigation?.onViewChange?.((viewId) => {
    if (isSidebarCollectionView(viewId)) openAccordion = viewId;
    else openAccordion = null;
    syncPrimaryButtons(viewId);
    syncAccordions();
  });

  SIDEBAR_COLLECTION_VIEWS.forEach(renderCollectionHost);
  syncPrimaryButtons();
  syncAccordions();

  return {
    setActiveCollection(viewId, collectionId) {
      if (!isSidebarCollectionView(viewId)) return false;
      activeCollections[viewId] = collectionId;
      syncCollectionButtons(viewId);
      return true;
    },
    setCollectionBusy(viewId, value) {
      if (!isSidebarCollectionView(viewId)) return false;
      busyCollections[viewId] = Boolean(value);
      syncCollectionButtons(viewId);
      return true;
    },
    getActiveCollection(viewId) {
      return isSidebarCollectionView(viewId) ? activeCollections[viewId] : null;
    },
    getOpenAccordion() {
      return openAccordion;
    },
    destroy() {
      root.removeEventListener("click", onClick);
      unsubscribe?.();
    }
  };
}
