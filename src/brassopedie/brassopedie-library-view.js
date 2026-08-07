import { assetUrl } from "../utils/asset-url.js";
import { formatRange, formatService, natureLabel, parentName, recipeSections } from "./brassopedie-formatters.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

const paragraph = (text, className = "brassopedie-detail-text") => text ? el("p", className, text) : null;

const METRIC_ICONS = Object.freeze({
  alcohol: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2s5 6.1 5 10.2a5 5 0 0 1-10 0c0-4.1 5-10.2 5-10.2Z"/><path d="M9.7 15.1c.6 1.1 1.5 1.7 2.8 1.8"/></svg>',
  bitterness: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5c3.2 2.2 5.1 5.1 5.1 8.6 0 4.1-2.1 6.9-5.1 8.4-3-1.5-5.1-4.3-5.1-8.4 0-3.5 1.9-6.4 5.1-8.6Z"/><path d="M12 5.4v13.3M8.1 9.2 12 12l3.9-2.8M7.4 13.6 12 16l4.6-2.4"/></svg>',
  color: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2"/><path d="M12 3.8v16.4A8.2 8.2 0 0 0 12 3.8Z" class="metric-icon-fill"/></svg>',
  fermentation: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="15.5" r="3.1"/><circle cx="14.8" cy="11.2" r="2.4"/><circle cx="10.7" cy="6.8" r="1.6"/><circle cx="17.8" cy="17.2" r="1.4"/></svg>',
  service: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 4.2h9.6l-1.1 8.1a3.8 3.8 0 0 1-7.4 0L7.2 4.2Z"/><path d="M12 16.1v3.7M8.8 20h6.4M8.1 8.2h7.8"/></svg>'
});

function list(items, className = "brassopedie-detail-list") {
  const ul = el("ul", className);
  items.forEach((item) => ul.appendChild(el("li", "", item)));
  return ul;
}

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

function createMetricIcon(kind) {
  const icon = el("span", "brassopedie-detail-metric-icon");
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = METRIC_ICONS[kind] || METRIC_ICONS.service;
  return icon;
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

function createMetric(kind, label, value) {
  const metric = el("div", "brassopedie-detail-metric");
  const heading = el("span", "brassopedie-detail-metric-heading");
  heading.append(createMetricIcon(kind), el("span", "brassopedie-detail-metric-label", label));
  metric.append(heading, el("strong", "brassopedie-detail-metric-value", value));
  return metric;
}

function createDetailSection(title, children, className = "") {
  const section = el("section", `brassopedie-detail-section${className ? ` ${className}` : ""}`);
  section.appendChild(el("h2", "brassopedie-detail-section-title", title));
  children.filter(Boolean).forEach((child) => section.appendChild(child));
  return section;
}

function createRecipe(recipe = {}) {
  const content = el("div", "brassopedie-detail-recipe");
  if (recipe.profilUnique === false) {
    content.appendChild(paragraph("Profil variable selon le sous-style ou l’interprétation.", "brassopedie-detail-note"));
  }
  if (recipe.explicationProfil) content.appendChild(paragraph(recipe.explicationProfil));

  const groups = el("div", "brassopedie-detail-recipe-groups");
  recipeSections(recipe).forEach(({ title, items }) => {
    const group = el("section", "brassopedie-detail-recipe-group");
    group.append(el("h3", "brassopedie-detail-recipe-title", title), list(items));
    groups.append(group);
  });
  if (groups.childElementCount) content.append(groups);
  return content;
}

function createDetailView({ card, cardsById, onBack }) {
  const entry = card.brassopedie || {};
  const byBrassoId = Object.fromEntries(Object.values(cardsById || {}).map((item) => [item.id, item.brassopedie]));
  const parent = parentName(entry, byBrassoId);
  const service = formatService(entry);
  const recipe = entry.recette || {};

  const article = el("article", "brassopedie-detail");
  const back = el("button", "brassopedie-detail-back", "← Retour");
  back.type = "button";
  back.addEventListener("click", onBack);

  const hero = el("div", "brassopedie-detail-hero");
  const media = el("figure", "brassopedie-detail-media");
  media.appendChild(createStyleImage(card, { className: "brassopedie-detail-image" }));

  const intro = el("header", "brassopedie-detail-intro");
  intro.append(el("p", "brassopedie-detail-kicker", natureLabel(entry.nature)), el("h1", "brassopedie-detail-title", entry.nom || card.name));
  if (entry.origine?.libelle) intro.appendChild(el("p", "brassopedie-detail-origin", entry.origine.libelle));
  if (parent) intro.appendChild(el("p", "brassopedie-detail-parent", `Parent : ${parent}`));
  if (entry.description) intro.appendChild(paragraph(entry.description, "brassopedie-detail-lead"));
  hero.append(media, intro);

  const metrics = el("div", "brassopedie-detail-metrics");
  [
    ["alcohol", "Alcool", formatRange(entry.alcool, "%")],
    ["bitterness", "Amertume", `${formatRange(entry.amertume, "")} IBU`.replace("Variable IBU", "Variable")],
    ["color", "Couleur", `${formatRange(entry.couleur, "")} EBC`.replace("Variable EBC", "Variable")],
    ["fermentation", "Fermentation", entry.fermentation?.type || "Variable"],
    ["service", "Service", service.temperature]
  ].forEach(([kind, label, value]) => metrics.appendChild(createMetric(kind, label, value)));

  const story = el("div", "brassopedie-detail-story");
  if (entry.histoireEtOrigines) story.appendChild(createDetailSection("Histoire & origines", [paragraph(entry.histoireEtOrigines)]));
  const serviceChildren = [paragraph(`Température : ${service.temperature}`)];
  if (service.glasses.length) serviceChildren.push(list(service.glasses));
  story.appendChild(createDetailSection("Service", serviceChildren));

  const recipeSection = createDetailSection("Recette typique", [createRecipe(recipe)], "brassopedie-detail-section--wide");

  const sources = el("details", "brassopedie-detail-sources");
  sources.appendChild(el("summary", "", "Sources"));
  (entry.sources || []).forEach((source) => {
    const text = [source.organisme, source.edition, source.reference, source.type].filter(Boolean).join(" · ");
    if (text) sources.appendChild(paragraph(text));
  });

  article.append(back, hero, metrics, story, recipeSection, sources);
  return { article, back };
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
    const { article, back } = createDetailView({
      card: resolved.card,
      cardsById: resolved.cardsById,
      onBack: () => {
        selectedCardId = null;
        renderGrid({ restoreFocus: true });
      }
    });
    shell.appendChild(article);
    root.appendChild(shell);
    shell.scrollTop = 0;
    requestAnimationFrame(() => back.focus());
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
