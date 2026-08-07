import { assetUrl } from "../utils/asset-url.js";
import { formatRange, formatService, natureLabel, parentName, recipeSections } from "./brassopedie-formatters.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

const paragraph = (text, className = "brassopedie-detail-text") => text ? el("p", className, text) : null;

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

function createCollectionHeader(model) {
  const header = el("header", "brassopedie-atlas-header");
  const identity = el("div", "brassopedie-atlas-heading");
  identity.append(
    el("p", "brassopedie-atlas-kicker", "Brassopédie"),
    el("h1", "brassopedie-atlas-title", model.selectedCollectionName)
  );

  const progress = model.selectedProgress || { discovered: 0, total: 0, ratio: 0 };
  const progressBox = el("div", "brassopedie-atlas-progress");
  progressBox.append(
    el("span", "brassopedie-atlas-progress-label", `${progress.discovered} / ${progress.total} styles découverts`),
    el("span", "brassopedie-atlas-progress-track")
  );
  const track = progressBox.lastElementChild;
  if (track instanceof HTMLElement) track.style.setProperty("--progress", `${Math.round((progress.ratio || 0) * 100)}%`);

  header.append(identity, progressBox);
  return header;
}

function createStyleTile(style, onOpen) {
  const button = el("button", `brassopedie-atlas-card ${style.discovered ? "is-revealed" : "is-locked"}`);
  button.type = "button";
  button.dataset.cardId = style.id;
  button.disabled = !style.canOpen;
  button.setAttribute("aria-label", style.canOpen ? `Ouvrir la fiche ${style.label}` : "Style non révélé");

  const media = el("span", "brassopedie-atlas-card-media");
  if (style.discovered) {
    media.appendChild(createStyleImage(style.card, { thumb: true, className: "brassopedie-atlas-card-image" }));
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

function createMetric(label, value) {
  const metric = el("div", "brassopedie-detail-metric");
  metric.append(el("span", "brassopedie-detail-metric-label", label), el("strong", "brassopedie-detail-metric-value", value));
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
  const topbar = el("div", "brassopedie-detail-topbar");
  const back = el("button", "brassopedie-detail-back", "← Retour aux styles");
  back.type = "button";
  back.addEventListener("click", onBack);
  const breadcrumb = el("span", "brassopedie-detail-breadcrumb", `Brassopédie · ${natureLabel(entry.nature)}`);
  topbar.append(back, breadcrumb);

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
    ["Alcool", formatRange(entry.alcool, "%")],
    ["Amertume", `${formatRange(entry.amertume, "")} IBU`.replace("Variable IBU", "Variable")],
    ["Couleur", `${formatRange(entry.couleur, "")} EBC`.replace("Variable EBC", "Variable")],
    ["Fermentation", entry.fermentation?.type || "Variable"],
    ["Service", service.temperature]
  ].forEach(([label, value]) => metrics.appendChild(createMetric(label, value)));

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

  article.append(topbar, hero, metrics, story, recipeSection, sources);
  return { article, back };
}

export function createBrassopedieLibraryView({ root, collectionBundles, registry, initialCollectionId }) {
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
    shell.appendChild(createCollectionHeader(model));

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
