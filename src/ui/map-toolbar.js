function icon(name) {
  const paths = {
    recenter: '<circle cx="12" cy="12" r="3.2"></circle><path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21"></path>',
    fit: '<path d="M5 9V5h4M15 5h4v4M19 15v4h-4M9 19H5v-4"></path><path d="M8 8h8v8H8z"></path>',
    motion: '<path d="M4 12h9"></path><path d="M7 7h9"></path><path d="M7 17h7"></path><path d="M19 5 5 19"></path>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
}
function button({ id, label, content }) { const b = document.createElement('button'); b.id = id; b.className = 'map-toolbar-button'; b.type = 'button'; b.setAttribute('aria-label', label); b.title = label; b.innerHTML = content; return b; }
export function createMapToolbar(container, handlers) { const nav = document.createElement('nav'); nav.className = 'map-toolbar'; nav.setAttribute('aria-label', 'Contrôles de carte'); const controls = {
  zoomIn: button({ id:'zoom-in', label:'Zoom avant', content:'<span aria-hidden="true">+</span>' }),
  zoomOut: button({ id:'zoom-out', label:'Zoom arrière', content:'<span aria-hidden="true">−</span>' }),
  recenter: button({ id:'recenter', label:'Recentrer la carte', content:icon('recenter') }),
  fit: button({ id:'fit', label:'Vue générale', content:icon('fit') }),
  motion: button({ id:'motion-toggle', label:'Réduire les animations', content:icon('motion') })
}; Object.values(controls).forEach(b=>nav.append(b)); container.append(nav); controls.zoomIn.onclick=handlers.onZoomIn; controls.zoomOut.onclick=handlers.onZoomOut; controls.recenter.onclick=handlers.onRecenter; controls.fit.onclick=handlers.onFit; controls.motion.onclick=handlers.onToggleMotion; return { element: nav, controls, setReducedMotion(value){ controls.motion.setAttribute('aria-pressed', String(Boolean(value))); controls.motion.classList.toggle('is-active', Boolean(value)); } }; }
