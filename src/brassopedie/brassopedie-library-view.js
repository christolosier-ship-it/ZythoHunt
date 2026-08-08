import { assetUrl } from "../utils/asset-url.js";
import { natureLabel } from "./brassopedie-formatters.js";
import { createBrassopedieDetailView } from "./brassopedie-detail-view.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

function createImagePlaceholder(label, className = "brassopedie-atlas-image-placeholder") {
  const placeholder = el("div", `asset-placeholder ${className}`, "?");
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", label);
  return placeholder;
}

function imageSource(card, preferThumb = false) {
  const source = preferThumb
    ? card?.thumbImage || card?.fullImage || card?.image
    : card?.fullImage || card?.image || card?.thumbImage;
  return source ? assetUrl(source) : "";
}

function createStyleImage(card, { thumb = false, className = "" } = {}) {
  const source = imageSource(card, thumb);
  if (!source) return createImagePlaceholder(`Image à venir : ${card?.name || "style de bière"}`);

  const img = el("img", className);
  img.src = source;
  img.alt = "";
  img.draggable = false;
  img.loading = thumb ? "lazy" : "eager";
  img.decoding = "async";
  if (!thumb) img.setAttribute("fetchpriority", "high");
  img.addEventListener("error", () => {
    img.replaceWith(createImagePlaceholder(`Image à venir : ${card?.name || "style de bière"}`));
  }, { once: true });
  return img;
}

function createAtlasStyleMedia(card) {
  const source = imageSource(card, true);
  if (!source) return createImagePlaceholder(`Image à venir : ${card?.name || "style de bière"}`);

  const layer = el("span", "brassopedie-atlas-card-photo");
  const backdrop = el("img", "brassopedie-atlas-card-backdrop");
  backdrop.src = source;
  backdrop.alt = "";
  backdrop.draggable = false;
  backdrop.loading = "lazy";
  backdrop.decoding = "async";
  backdrop.addEventListener("error", () => backdrop.remove(), { once: true });

  const image = createStyleImage(card, { thumb: true, className: "brassopedie-atlas-card-image" });
  layer.append(backdrop, image);
  return layer;
}

export function getVisibleStyleLabel({ card, discovered }) {
  return discovered ? card?.name || card?.brassopedie?.nom || "Style révélé" : "???";
}

export function canOpenBrassopedieEntry({ discovered, card }) {
  return Boolean(discovered && card?.brassopedie);
}

export function buildBrassopedieLibraryModel({ collectionBundles = [], registry, selectedCollectionId }) {
  const selectedBundle = collectionBundles.find((bundle) => bundle.collection.id === selectedCollectionId) || collectionBundles[0] || null;
  const resolvedCollectionId = selectedBundle?.collection.id || null;
  return {
    selectedCollectionId: resolvedCollectionId,
    selectedCollectionName: selectedBundle?.collection.name || selectedBundle?.collection.nom || selectedBundle?.collection.id || "Styles de bière",
    selectedProgress: resolvedCollectionId ? registry.getCollectionProgress(resolvedCollectionId) : { discovered: 0, total: 0, ratio: 0 },
    collections: collectionBundles.map((bundle) => ({
      id: bundle.collection.id,
      name: bundle.collection.name || bundle.collection.nom || bundle.collection.id,
      progress: registry.getCollectionProgress(bundle.collection.id)
    })),
    styles: (selectedBundle?.revealableCards || []).map((card) => {
      const discovered = registry.isDiscovered(selectedBundle.collection.id, card.id);
      return {
        id: card.id,
        card,
        discovered,
        label: getVisibleStyleLabel({ card, discovered }),
        canOpen: canOpenBrassopedieEntry({ card, discovered })
      };
    })
  };
}

export function resolveLibraryPanelCard({ collectionBundles = [], collectionId, cardId }) {
  const bundle = collectionBundles.find((item) => item.collection.id === collectionId);
  const card = bundle?.cardsById?.[cardId] || bundle?.revealableCards?.find((item) => item.id === cardId) || null;
  return card ? {
    card,
    cardsById: bundle.cardsById || Object.fromEntries((bundle.revealableCards || []).map((item) => [item.id, item]))
  } : null;
}

function createCollectionProgress(model) {
  const progress = model.selectedProgress || { discovered: 0, total: 0, ratio: 0 };
  const progressBox = el("div", "brassopedie-atlas-progress");
  progressBox.append(
    el("span", "brassopedie-atlas-progress-label", `${progress.discovered} / ${progress.total} styles découverts`),
    el("span", "brassopedie-atlas-progress-track")
  );
  const track = progressBox.lastElementChild;
  if (track instanceof HTMLElement) track.style.setProperty("--progress", `${Math.round((progress.ratio || 0) * 100)}%`);
  return progressBox;
}

function createStyleTile(style, onOpen) {
  const button = el("button", `brassopedie-atlas-card ${style.discovered ? "is-revealed" : "is-locked"}`);
  button.type = "button";
  button.dataset.cardId = style.id;
  button.disabled = !style.canOpen;
  button.setAttribute("aria-label", style.canOpen ? `Ouvrir la fiche ${style.label}` : "Style non révélé");

  const media = el("span", "brassopedie-atlas-card-media");
  if (style.discovered) {
    media.appendChild(createAtlasStyleMedia(style.card));
  } else {
    media.appendChild(el("span", "brassopedie-atlas-card-lock", "?"));
  }

  const caption = el("span", "brassopedie-atlas-card-caption");
  const title = el("strong", "brassopedie-atlas-card-title", style.label);
  const entry = style.card?.brassopedie || {};
  const meta = style.discovered
    ? [natureLabel(entry.nature), entry.origine?.libelle].filter(Boolean).join(" · ")
    : "Non révélé";
  caption.append(title, el("small", "brassopedie-atlas-card-meta", meta));
  button.append(media, caption);

  if (style.canOpen) button.addEventListener("click", () => onOpen(style.id, button));
  return button;
}

export function createBrassopedieLibraryView({ root, collectionBundles, registry, initialCollectionId, onOpen, onClose }) {
  void onOpen;
  void onClose;
  let selectedCollectionId = initialCollectionId;
  let selectedCardId = null;
  let gridScrollTop = 0;
  let lastTriggerCardId = null;

  function renderGrid({ restoreFocus = false } = {}) {
    registry.refresh();
    const model = buildBrassopedieLibraryModel({ collectionBundles, registry, selectedCollectionId });
    selectedCollectionId = model.selectedCollectionId;
    selectedCardId = null;
    root.replaceChildren();

    const shell = el("div", "brassopedie-library brassopedie-atlas");
    shell.appendChild(createCollectionProgress(model));

    const grid = el("div", "brassopedie-atlas-grid");
    model.styles.forEach((style) => {
      grid.appendChild(createStyleTile(style, (cardId) => {
        gridScrollTop = shell.scrollTop;
        lastTriggerCardId = cardId;
        selectedCardId = cardId;
        renderDetail();
      }));
    });
    shell.appendChild(grid);
    root.appendChild(shell);

    if (gridScrollTop) shell.scrollTop = gridScrollTop;
    if (restoreFocus && lastTriggerCardId) {
      requestAnimationFrame(() => shell.querySelector(`[data-card-id="${CSS.escape(lastTriggerCardId)}"]`)?.focus());
    }
  }

  function renderDetail() {
    if (!selectedCardId) {
      renderGrid();
      return;
    }

    registry.refresh();
    const resolved = resolveLibraryPanelCard({ collectionBundles, collectionId: selectedCollectionId, cardId: selectedCardId });
    if (!resolved || !registry.isDiscovered(selectedCollectionId, selectedCardId)) {
      selectedCardId = null;
      renderGrid();
      return;
    }

    root.replaceChildren();
    const shell = el("div", "brassopedie-library brassopedie-atlas brassopedie-atlas--detail");
    const { article, actionButton } = createBrassopedieDetailView({
      card: resolved.card,
      cardsById: resolved.cardsById,
      variant: "inline",
      action: {
        label: "← Retour",
        ariaLabel: "Retour aux styles",
        className: "brassopedie-detail-back",
        onClick: () => {
          selectedCardId = null;
          renderGrid({ restoreFocus: true });
        }
      }
    });
    if (!article) {
      selectedCardId = null;
      renderGrid();
      return;
    }

    shell.appendChild(article);
    root.appendChild(shell);
    shell.scrollTop = 0;
    requestAnimationFrame(() => actionButton?.focus());
  }

  function render() {
    if (selectedCardId) renderDetail();
    else renderGrid();
  }

  render();
  return {
    refresh: render,
    selectCollection(id) {
      selectedCollectionId = id;
      selectedCardId = null;
      gridScrollTop = 0;
      lastTriggerCardId = null;
      renderGrid();
      return selectedCollectionId;
    },
    getSelectedCollectionId() {
      return selectedCollectionId;
    },
    closePanel() {
      if (!selectedCardId) return;
      selectedCardId = null;
      renderGrid({ restoreFocus: true });
    }
  };
}
