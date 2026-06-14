let themeVersion = 1;
export function readCanvasTheme(doc = document) {
  const css = getComputedStyle(doc.documentElement);
  const get = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
  return {
    version: themeVersion,
    bg: { deep: get('--zytho-bg-deep', '#07568d'), cyan: get('--zytho-cyan-glow', '#6ff2f2') },
    palettes: {
      'root-gold': { fill: get('--zytho-gold', '#f4d96a'), edge: get('--zytho-gold-dark', '#a87420'), icon: 'beer-mug' },
      'ale-amber': { fill: get('--zytho-ale', '#e58b26'), edge: '#8b4a13', icon: 'ale-glass' },
      'lager-gold': { fill: get('--zytho-lager', '#f1c538'), edge: '#9b6c13', icon: 'lager-glass' },
      'wheat-gold': { fill: get('--zytho-wheat', '#e9d56a'), edge: '#9a842a', icon: 'wheat' },
      'dark-malt': { fill: get('--zytho-dark', '#4a2b22'), edge: '#1f1512', icon: 'dark-glass' },
      'wild-green': { fill: get('--zytho-wild', '#76ae4b'), edge: '#355f28', icon: 'hop' },
      'fruit-rose': { fill: get('--zytho-fruit', '#d34f67'), edge: '#79283a', icon: 'fruit' }
    },
    links: { primary: get('--zytho-gold', '#f4d96a'), active: get('--zytho-gold-bright', '#fff1a2'), ghost: 'rgba(244,217,106,.28)' },
    glass: { light: get('--zytho-glass-light', 'rgba(239,253,255,.88)'), mid: get('--zytho-glass-mid', 'rgba(129,224,236,.48)'), edge: get('--zytho-glass-edge', 'rgba(236,255,255,.92)') },
    text: { primary: get('--zytho-ink-inverse', '#fff'), dark: get('--zytho-ink', '#09283b'), question: get('--zytho-gold-bright', '#fff1a2') },
    states: { halo: get('--zytho-cyan-glow', '#6ff2f2'), selection: get('--zytho-gold-bright', '#fff1a2') }
  };
}
export function bumpCanvasThemeVersion() { themeVersion++; return themeVersion; }
