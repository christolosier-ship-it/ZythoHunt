import { assetUrl } from "../utils/asset-url.js";
import { formatRange, formatService, natureLabel, parentName, recipeSections } from "./brassopedie-formatters.js";

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

const paragraph = (text, className = "brassopedie-detail-text") => text ? el("p", className, text) : null;
const paragraphs = (text, className = "brassopedie-detail-text") => String(text || "")
  .split(/\n\s*\n/)
  .map((item) => item.trim())
  .filter(Boolean)
  .map((item) => el("p", className, item));

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

function createImagePlaceholder(label) {
  const placeholder = el("div", "asset-placeholder brassopedie-detail-image-placeholder", "?");
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", label);
  return placeholder;
}

function createStyleImage(card) {
  const source = card?.fullImage || card?.image || card?.thumbImage;
  if (!source) return createImagePlaceholder(`Image à venir : ${card?.name || "style de bière"}`);

  const img = el("img", "brassopedie-detail-image");
  img.src = assetUrl(source);
  img.alt = "";
  img.draggable = false;
  img.loading = "eager";
  img.decoding = "async";
  img.setAttribute("fetchpriority", "high");
  img.addEventListener("error", () => {
    img.replaceWith(createImagePlaceholder(`Image à venir : ${card?.name || "style de bière"}`));
  }, { once: true });
  return img;
}

function createMetricIcon(kind) {
  const icon = el("span", "brassopedie-detail-metric-icon");
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = METRIC_ICONS[kind] || METRIC_ICONS.service;
  return icon;
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
  paragraphs(recipe.explicationProfil).forEach((item) => content.appendChild(item));

  const groups = el("div", "brassopedie-detail-recipe-groups");
  recipeSections(recipe).forEach(({ title, items }) => {
    const group = el("section", "brassopedie-detail-recipe-group");
    group.append(el("h3", "brassopedie-detail-recipe-title", title), list(items));
    groups.append(group);
  });
  if (groups.childElementCount) content.append(groups);
  return content;
}

function createSource(source) {
  const text = [source.organisme, source.edition, source.reference, source.type].filter(Boolean).join(" · ");
  if (!text) return null;

  const item = el("p", "brassopedie-detail-text brassopedie-detail-source");
  if (source.url) {
    const link = el("a", "", text);
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    item.appendChild(link);
  } else {
    item.textContent = text;
  }
  return item;
}

/**
 * Shared style sheet renderer used by both the inline Brassopédie and the
 * ZythoSphère overlay. The surrounding view only supplies its navigation action.
 * @param {{
 *   card: any,
 *   cardsById?: Record<string, any>,
 *   action?: { label?: string, ariaLabel?: string, className?: string, onClick?: () => void } | null,
 *   variant?: string
 * }} options
 */
export function createBrassopedieDetailView({ card, cardsById = {}, action = null, variant = "inline" }) {
  if (!card?.brassopedie) return { article: null, actionButton: null };

  const entry = card.brassopedie;
  const byBrassoId = Object.fromEntries(Object.values(cardsById).map((item) => [item.id, item.brassopedie]));
  const parent = parentName(entry, byBrassoId);
  const service = formatService(entry);
  const recipe = entry.recette || {};

  const article = el("article", `brassopedie-detail brassopedie-detail--${variant}`);
  let actionButton = null;
  if (action?.onClick) {
    actionButton = el("button", action.className || "brassopedie-detail-back", action.label || "← Retour");
    actionButton.type = "button";
    actionButton.setAttribute("aria-label", action.ariaLabel || action.label || "Retour");
    actionButton.addEventListener("click", action.onClick);
    article.appendChild(actionButton);
  }

  const hero = el("div", "brassopedie-detail-hero");
  const media = el("figure", "brassopedie-detail-media");
  media.appendChild(createStyleImage(card));

  const intro = el("header", "brassopedie-detail-intro");
  intro.append(
    el("p", "brassopedie-detail-kicker", natureLabel(entry.nature)),
    el("h1", "brassopedie-detail-title", entry.nom || card.name)
  );
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
  const historyParagraphs = paragraphs(entry.histoireEtOrigines);
  if (historyParagraphs.length) story.appendChild(createDetailSection("Histoire & origines", historyParagraphs));
  const serviceChildren = [paragraph(`Température : ${service.temperature}`)];
  if (service.glasses.length) serviceChildren.push(list(service.glasses));
  story.appendChild(createDetailSection("Service", serviceChildren));

  const recipeSection = createDetailSection("Recette typique", [createRecipe(recipe)], "brassopedie-detail-section--wide");

  const sources = el("details", "brassopedie-detail-sources");
  sources.appendChild(el("summary", "", "Sources"));
  (entry.sources || []).map(createSource).filter(Boolean).forEach((item) => sources.appendChild(item));

  article.append(hero, metrics, story, recipeSection, sources);
  return { article, actionButton };
}
