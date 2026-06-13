const EMPTY_INSETS = { top: 16, right: 16, bottom: 16, left: 16 };

export function createAppShell({ navigationRoot, searchSlot, toolbarSlot, toastRoot } = {}) {
  const state = { globalNavHeight: 0, searchBarHeight: 0, mapToolbarHeight: 0 };
  const readHeight = element => element ? Math.ceil(element.getBoundingClientRect().height) : 0;
  const update = () => {
    state.globalNavHeight = readHeight(navigationRoot?.firstElementChild ?? navigationRoot);
    state.searchBarHeight = readHeight(searchSlot?.firstElementChild ?? searchSlot);
    state.mapToolbarHeight = readHeight(toolbarSlot?.firstElementChild ?? toolbarSlot);
    document.documentElement.style.setProperty('--global-nav-height', `${state.globalNavHeight}px`);
    document.documentElement.style.setProperty('--zytho-search-height', `${state.searchBarHeight}px`);
    document.documentElement.style.setProperty('--map-toolbar-height', `${state.mapToolbarHeight}px`);
  };
  const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null;
  [navigationRoot, searchSlot, toolbarSlot, toastRoot].filter(Boolean).forEach(el => ro?.observe(el));
  window.addEventListener('resize', update, { passive: true });
  requestAnimationFrame(update);
  return {
    updateMeasurements: update,
    getMeasurements: () => ({ ...state }),
    getMapViewportInsets() {
      update();
      return {
        top: Math.max(EMPTY_INSETS.top, state.searchBarHeight + 20),
        right: EMPTY_INSETS.right,
        bottom: Math.max(EMPTY_INSETS.bottom, state.globalNavHeight + state.mapToolbarHeight + 24),
        left: EMPTY_INSETS.left
      };
    }
  };
}
