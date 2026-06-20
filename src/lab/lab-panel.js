import { createDebugPanel } from "../components/create-debug-panel.js";
import { backgroundSettings, updateBackgroundSetting } from "../background/background-settings.js";
import { carouselTokens, updateCarouselToken } from "../carousel/carousel-tokens.js";

const BACKGROUND_CONTROLS = [
  ["beerT", "Couleur de bière", 0, 100, 1, ""],
  ["bubbleDensity", "Densité des bulles", 0, 100, 5, "%"],
  ["foamIntensity", "Intensité de la mousse", 0, 100, 5, "%"]
];

const CAROUSEL_CONTROLS = [
  ["spacing", "Espacement", 80, 280, 4, "px"],
  ["depthStep", "Profondeur", 0, 250, 10, "px"],
  ["rotationStep", "Rotation latérale", 0, 40, 1, "°"],
  ["scaleStep", "Réduction d'échelle", 0, 0.25, 0.01, ""],
  ["minScale", "Échelle minimale", 0.3, 1, 0.02, ""],
  ["opacityStep", "Réduction d'opacité", 0, 0.4, 0.01, ""],
  ["minOpacity", "Opacité minimale", 0.2, 1, 0.05, ""],
  ["snapDuration", "Durée du snap", 0.05, 1.2, 0.05, "s"]
];

export function createLabPanel({
  panelEl,
  bodyEl,
  settingsBtn,
  closeBtn,
  resetBackgroundBtn,
  background,
  carousel,
  canOpen = () => true
}) {
  const abortController = new AbortController();
  const { signal } = abortController;

  function appendSectionTitle(container, text) {
    const title = document.createElement("h3");
    title.className = "debug-section-title";
    title.textContent = text;
    container.appendChild(title);
    return title;
  }

  function appendRangeControl(container, { id, label, min, max, step, value, unit, onInput }) {
    const row = document.createElement("div");
    row.className = "debug-row";
    row.innerHTML = `<label class="debug-label" for="${id}">${label}</label><div class="debug-input-row"><input class="debug-range" id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"><span class="debug-value">${value}${unit}</span></div>`;

    const input = row.querySelector("input");
    const output = row.querySelector("span");
    input.addEventListener("input", () => onInput(parseFloat(input.value), output));
    container.appendChild(row);
  }

  function addBackgroundControls(container) {
    if (!background.isAvailable) return;

    const title = appendSectionTitle(container, `Fond animé · ${background.getPaletteName()}`);
    BACKGROUND_CONTROLS.forEach(([key, label, min, max, step, unit]) => appendRangeControl(container, {
      id: `bg-${key}`,
      label,
      min,
      max,
      step,
      value: backgroundSettings[key],
      unit,
      onInput: (value, output) => {
        updateBackgroundSetting(key, value);
        background.update({ [key]: value });
        if (key === "beerT") title.textContent = `Fond animé · ${background.getPaletteName()}`;
        output.textContent = key === "beerT"
          ? `${value} · ${background.getPaletteName()}`
          : `${value}${unit}`;
      }
    }));
  }

  function addRevealControls(container) {
    appendSectionTitle(container, "Révélation");
    const controls = document.createElement("div");
    controls.className = "debug-reveal-controls";
    createDebugPanel(controls, () => {});
    container.appendChild(controls);
  }

  function addCarouselControls(container) {
    appendSectionTitle(container, "Carrousel");
    CAROUSEL_CONTROLS.forEach(([key, label, min, max, step, unit]) => appendRangeControl(container, {
      id: `csl-${key}`,
      label,
      min,
      max,
      step,
      value: carouselTokens[key],
      unit,
      onInput: (value, output) => {
        updateCarouselToken(key, value);
        output.textContent = `${value}${unit}`;
        carousel.refresh();
      }
    }));
  }

  function render() {
    bodyEl.replaceChildren();
    addBackgroundControls(bodyEl);
    addRevealControls(bodyEl);
    addCarouselControls(bodyEl);
    if (resetBackgroundBtn) resetBackgroundBtn.hidden = !background.isAvailable;
  }

  function close() {
    panelEl.hidden = true;
    settingsBtn.setAttribute("aria-expanded", "false");
  }

  async function toggle() {
    if (!canOpen()) return;
    await carousel.closeInspection();
    const open = panelEl.hidden;
    panelEl.hidden = !open;
    settingsBtn.setAttribute("aria-expanded", String(open));
  }

  function mount() {
    render();
    settingsBtn.addEventListener("click", toggle, { signal });
    closeBtn.addEventListener("click", close, { signal });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panelEl.hidden) close();
    }, { signal });
  }

  function destroy() {
    abortController.abort();
  }

  return { mount, render, close, destroy };
}
