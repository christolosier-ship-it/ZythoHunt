import { createBrassopedieDetailView } from "./brassopedie-detail-view.js";

const INERT_SELECTORS = ["#app-sidebar", "#app-header", "#reveal-search-form", "#carousel-container", "#brassopedie-view"];
const FOCUSABLE_SELECTOR = "button, [href], input, select, textarea, summary, [tabindex]:not([tabindex='-1'])";

const el = (tag, className) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
};

export function shouldOpenBrassopedie({ cardId, isDiscovered }) {
  return Boolean(cardId && isDiscovered?.(cardId));
}

export function getFocusTrapWrapIndex(activeIndex, count, shiftKey) {
  if (count <= 0) return null;
  if (shiftKey && activeIndex <= 0) return count - 1;
  if (!shiftKey && activeIndex >= count - 1) return 0;
  return null;
}

function setBackgroundInert(value) {
  INERT_SELECTORS.forEach((selector) => {
    const node = document.querySelector(selector);
    if (node) (/** @type {any} */ (node)).inert = value;
  });
}

function getFocusableNodes(root) {
  return Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR))
    .filter((node) => !node.disabled && node.offsetParent !== null);
}

export function createBrassopediePanel({ cardsById, onOpen, onClose }) {
  let overlay = null;
  let previousFocus = null;
  let cleanupKeydown = null;

  function close() {
    if (!overlay) return;
    cleanupKeydown?.();
    cleanupKeydown = null;
    overlay.remove();
    overlay = null;
    setBackgroundInert(false);
    onClose?.();
    previousFocus?.focus?.();
    previousFocus = null;
  }

  function render(card, cardsByIdForEntry = cardsById) {
    const modal = el("div", "brassopedie-modal brassopedie-modal--style-detail");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", `Fiche Brassopédie ${card.name}`);
    modal.tabIndex = -1;

    const { article, actionButton } = createBrassopedieDetailView({
      card,
      cardsById: cardsByIdForEntry,
      variant: "modal",
      action: {
        label: "× Fermer",
        ariaLabel: "Fermer la fiche Brassopédie",
        className: "brassopedie-detail-close",
        onClick: close
      }
    });

    if (article) modal.appendChild(article);
    return { modal, initialFocus: actionButton };
  }

  function activateKeyboardTrap(modal) {
    const onKeyDown = (event) => {
      if (!overlay) return;
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = getFocusableNodes(modal);
      const activeIndex = focusables.indexOf(document.activeElement);
      const nextIndex = getFocusTrapWrapIndex(activeIndex, focusables.length, event.shiftKey);
      if (nextIndex == null) return;

      event.preventDefault();
      focusables[nextIndex]?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    cleanupKeydown = () => document.removeEventListener("keydown", onKeyDown);
  }

  function openEntry({ card, cardsById: cardsByIdOverride = cardsById }) {
    if (!card) return { status: "missing" };
    close();
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    overlay = el("div", "brassopedie-overlay");
    overlay.addEventListener("click", (event) => { if (event.target === overlay) close(); });

    const { modal, initialFocus } = render(card, cardsByIdOverride);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    setBackgroundInert(true);
    activateKeyboardTrap(modal);
    onOpen?.();
    requestAnimationFrame(() => initialFocus?.focus?.() || modal.focus());
    return { status: "opened", cardId: card.id };
  }

  function openCard(card, cardsByIdOverride = cardsById) {
    return openEntry({ card, cardsById: cardsByIdOverride });
  }

  function open(cardId) {
    const card = cardsById[cardId];
    if (!card) return { status: "missing" };
    return openEntry({ card, cardsById });
  }

  return { open, openCard, openEntry, close, isOpen: () => Boolean(overlay) };
}
