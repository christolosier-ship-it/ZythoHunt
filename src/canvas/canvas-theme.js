let themeVersion = 1;
export function readCanvasTheme(doc = document) {
  const css = getComputedStyle(doc.documentElement);
  const get = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
  return { version: themeVersion, structures: { root: get('--canvas-root', '#7a4a20'), structure: get('--canvas-structure', '#9a6a2f') }, families: { core: get('--beer-amber', '#d89a32'), ipa: get('--beer-ipa', '#e2a93d'), wheat: get('--beer-wheat', '#f1cf78'), lager: get('--beer-lager', '#e8bd55') }, links: { primary: get('--canvas-link-primary', '#bda56caa'), secondary: get('--canvas-link-secondary', '#78a6bf99'), active: get('--canvas-link-active', '#f3d48a') }, text: { primary: get('--canvas-text', '#fff7e5'), question: get('--canvas-question', '#fff5c9') }, states: { halo: get('--canvas-halo', '#f7d37a66'), selection: get('--canvas-selection', '#ffefaa') } };
}
export function bumpCanvasThemeVersion() { themeVersion++; return themeVersion; }
