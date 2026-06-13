const ICONS = {
  zythosphere: '<circle cx="12" cy="12" r="3.2"></circle><circle cx="5.5" cy="7" r="2"></circle><circle cx="18.5" cy="7.5" r="2"></circle><circle cx="17" cy="18" r="2"></circle><path d="M7.3 8.1 9.4 10.2M14.6 10.2 17 8.8M14.2 14.5 15.7 16.5"></path>',
  brassopedia: '<path d="M4 5.5c2.8-.9 5.2-.4 8 1.2v12c-2.8-1.6-5.2-2.1-8-1.2z"></path><path d="M20 5.5c-2.8-.9-5.2-.4-8 1.2v12c2.8-1.6 5.2-2.1 8-1.2z"></path><path d="M12 6.7v12"></path><path d="m17 9.5.5 1 .9.2-.7.7.2 1- .9-.5-.9.5.2-1-.7-.7.9-.2z"></path>',
  tastings: '<path d="M8 3h8l-1 7.2a3 3 0 0 1-6 0z"></path><path d="M9 8.5h6"></path><path d="M12 13v5"></path><path d="M8.5 21h7"></path><circle cx="17.5" cy="5.5" r=".8"></circle><circle cx="18.5" cy="8.5" r=".7"></circle>',
  progression: '<path d="M5 20V11"></path><path d="M12 20V7"></path><path d="M19 20V4"></path><path d="M4 20h16"></path><path d="M4 15c4-.4 7.8-2.6 11.6-7.2"></path><path d="m18.5 3.5.5 1 .9.2-.7.7.2 1-.9-.5-.9.5.2-1-.7-.7.9-.2z"></path>'
};
const ITEMS = [
  { id: 'zythosphere', label: 'Zythosphère' },
  { id: 'brassopedia', label: 'Brassopédie' },
  { id: 'tastings', label: 'Dégustations' },
  { id: 'progression', label: 'Progression' }
];
export function createBottomNavigation(container, { activeView = 'zythosphere', onNavigate } = {}) { container.replaceChildren(); const nav = document.createElement('nav'); nav.className = 'bottom-navigation'; nav.setAttribute('aria-label','Navigation globale ZythoHunt'); for (const item of ITEMS) { const b=document.createElement('button'); b.type='button'; b.className='bottom-nav-item'; b.dataset.view=item.id; b.innerHTML=`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.id]}</svg><span>${item.label}</span>`; b.setAttribute('aria-label', item.label); if(item.id===activeView) b.setAttribute('aria-current','page'); b.addEventListener('click',()=>onNavigate?.(item.id, item)); nav.append(b); } container.append(nav); return nav; }
