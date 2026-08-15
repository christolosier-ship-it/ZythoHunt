import {
  APPEARANCE_COLORS,
  CLARITY_LEVELS,
  FINISH_OPTIONS,
  FOAM_LEVELS,
  INTENSITY_LABELS,
  SENSORY_DESCRIPTORS,
  STRUCTURE_AXES,
  getClarityLabel,
  getColorLabel,
  getDescriptorLabel
} from "./tasting-vocabulary.js";

const el = (tag, className = "", text = null) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

const verdictLabels = Object.freeze({
  again: "J’en reprends volontiers",
  maybe: "Pourquoi pas",
  no: "Pas pour moi"
});

const stepTitles = ["La bière", "Le coup d’œil", "Le nez", "La bouche", "Mon verdict", "Le résultat"];

function createButton(label, onClick, className = "tasting-button") {
  const button = el("button", className, label);
  button.type = "button";
  button.addEventListener("click", onClick);
  return button;
}

function createEmptyDraft(blind = false) {
  return {
    beer: { name: "", brewery: "" },
    tastedAt: new Date().toISOString(),
    blind,
    style: null,
    appearance: { color: null, clarity: null, foam: null },
    nose: {},
    palate: {},
    structure: {},
    finish: [],
    verdict: { choice: null, rating: null, note: "" }
  };
}

function cloneDraft(tasting) {
  return {
    beer: { ...tasting.beer },
    tastedAt: tasting.tastedAt,
    blind: Boolean(tasting.blind),
    style: tasting.style ? { ...tasting.style } : null,
    appearance: { ...tasting.appearance },
    nose: { ...tasting.nose },
    palate: { ...tasting.palate },
    structure: { ...tasting.structure },
    finish: [...(tasting.finish || [])],
    verdict: { ...tasting.verdict }
  };
}

function formatDate(value) {
  if (!value || Number.isNaN(Date.parse(value))) return "Date inconnue";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

function dateInputValue(value) {
  if (!value || Number.isNaN(Date.parse(value))) return new Date().toISOString().slice(0, 10);
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localDateToIso(value) {
  if (!value) return new Date().toISOString();
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0).toISOString();
}

function tastingTitle(tasting) {
  return tasting?.beer?.name?.trim() || "Bière sans nom";
}

function metaLine(tasting) {
  const bits = [tasting?.beer?.brewery, tasting?.style?.name, formatDate(tasting?.tastedAt)].filter(Boolean);
  return bits.join(" · ");
}

function descriptorSummary(map = {}, limit = 4) {
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => getDescriptorLabel(id));
}

/** @param {{ root?: HTMLElement | null, controller?: any }} [options] */
export function createTastingView({ root, controller } = {}) {
  let screen = "home";
  let wizard = null;
  let detailId = null;
  let historyQuery = "";
  let historyVerdict = "all";
  let matchResult = null;
  let matchLoading = false;
  let styleSearchRequest = 0;

  function setScreen(next) {
    screen = next;
    render();
    root?.scrollTo?.({ top: 0, behavior: "smooth" });
  }

  function startWizard(blind = false, tasting = null) {
    wizard = {
      step: 0,
      editId: tasting?.id || null,
      draft: tasting ? cloneDraft(tasting) : createEmptyDraft(blind)
    };
    matchResult = null;
    matchLoading = false;
    setScreen("wizard");
  }

  function cancelWizard() {
    wizard = null;
    matchResult = null;
    setScreen("home");
  }

  function createHero(kicker, title, copy) {
    const hero = el("header", "tasting-hero");
    hero.append(el("span", "tasting-kicker", kicker), el("h1", "", title), el("p", "", copy));
    return hero;
  }

  function createEmptyState(title, copy) {
    const state = el("div", "tasting-empty");
    state.append(el("strong", "", title), el("p", "", copy));
    return state;
  }

  function createTastingCard(tasting, { compact = false } = {}) {
    const card = el("article", `tasting-card${compact ? " tasting-card--compact" : ""}`);
    const copy = el("div", "tasting-card-copy");
    copy.append(el("h3", "", tastingTitle(tasting)), el("p", "tasting-card-meta", metaLine(tasting)));
    const aromas = [...new Set([...descriptorSummary(tasting.nose, 3), ...descriptorSummary(tasting.palate, 3)])].slice(0, 4);
    if (aromas.length) copy.append(el("p", "tasting-card-aromas", aromas.join(" · ")));
    if (tasting.verdict?.choice) copy.append(el("span", `tasting-verdict tasting-verdict--${tasting.verdict.choice}`, verdictLabels[tasting.verdict.choice]));
    const actions = el("div", "tasting-card-actions");
    actions.append(createButton("Voir", () => {
      detailId = tasting.id;
      setScreen("detail");
    }, "tasting-button tasting-button--ghost"));
    if (!compact) actions.append(createButton("Modifier", () => startWizard(tasting.blind, tasting), "tasting-button tasting-button--ghost"));
    card.append(copy, actions);
    return card;
  }

  function renderHome(page) {
    const snapshot = controller.getSnapshot();
    page.append(createHero(
      "Carnet personnel",
      "Dégustation",
      "Observe ton verre, mets des mots sur tes sensations et relie-les aux styles de la Brassopédie."
    ));

    const launch = el("section", "tasting-launch" );
    const launchCopy = el("div", "tasting-launch-copy");
    launchCopy.append(el("h2", "", "Nouvelle dégustation"), el("p", "", "Deux chemins, le même verre. Compte environ une à trois minutes, ou fouille davantage si le nez insiste."));
    const choices = el("div", "tasting-launch-actions");
    const normal = createButton("Dégustation libre", () => startWizard(false), "tasting-mode-card");
    normal.append(el("span", "tasting-mode-note", "Tu peux indiquer le style dès le départ."));
    const blind = createButton("À l’aveugle", () => startWizard(true), "tasting-mode-card");
    blind.append(el("span", "tasting-mode-note", "Le style reste caché jusqu’au résultat."));
    choices.append(normal, blind);
    launch.append(launchCopy, choices);
    page.append(launch);

    if (!snapshot.ok) {
      page.append(createEmptyState("Carnet indisponible", "Le stockage local n’a pas pu être lu sur cet appareil."));
      return;
    }

    const tastings = snapshot.tastings;
    const stats = el("section", "tasting-stats");
    const distinctStyles = new Set(tastings.map((item) => item.style?.cardId).filter(Boolean)).size;
    const statA = el("div", "tasting-stat");
    statA.append(el("strong", "", String(tastings.length)), el("span", "", `dégustation${tastings.length > 1 ? "s" : ""}`));
    const statB = el("div", "tasting-stat");
    statB.append(el("strong", "", String(distinctStyles)), el("span", "", `style${distinctStyles > 1 ? "s" : ""} relié${distinctStyles > 1 ? "s" : ""}`));
    stats.append(statA, statB);
    page.append(stats);

    const recent = el("section", "tasting-section");
    const header = el("div", "tasting-section-heading");
    const headerCopy = el("div");
    headerCopy.append(el("h2", "", "Dernières dégustations"), el("p", "", "Les verres récents restent à portée de pouce."));
    header.append(headerCopy, createButton("Voir mon carnet", () => setScreen("history"), "tasting-button tasting-button--ghost"));
    recent.append(header);
    if (!tastings.length) recent.append(createEmptyState("Le carnet est encore sec", "Ta première dégustation apparaîtra ici, sans classement social ni compteur de performances."));
    else tastings.slice(0, 3).forEach((item) => recent.append(createTastingCard(item, { compact: true })));
    page.append(recent);
  }

  function renderProgress(host) {
    const nav = el("ol", "tasting-steps");
    stepTitles.forEach((title, index) => {
      const item = el("li", `tasting-step${index === wizard.step ? " is-active" : ""}${index < wizard.step ? " is-complete" : ""}`);
      if (index === wizard.step) item.setAttribute("aria-current", "step");
      item.append(el("span", "tasting-step-number", String(index + 1)), el("span", "tasting-step-label", title));
      nav.append(item);
    });
    host.append(nav);
  }

  function createField(labelText, input) {
    const label = el("label", "tasting-field");
    label.append(el("span", "tasting-field-label", labelText), input);
    return label;
  }

  function renderStylePicker(host, { label = "Style Brassopédie (facultatif)" } = {}) {
    const wrapper = el("div", "tasting-style-picker");
    wrapper.append(el("span", "tasting-field-label", label));
    if (wizard.draft.style) {
      const selected = el("div", "tasting-style-selected");
      const copy = el("div");
      copy.append(el("strong", "", wizard.draft.style.name || wizard.draft.style.cardId), el("span", "", "Style lié à cette dégustation"));
      selected.append(copy, createButton("Retirer", () => {
        wizard.draft.style = null;
        matchResult = null;
        render();
      }, "tasting-button tasting-button--ghost tasting-button--small"));
      wrapper.append(selected);
    }

    const input = el("input", "tasting-input");
    input.type = "search";
    input.placeholder = "Rechercher IPA, Stout, Saison…";
    input.autocomplete = "off";
    input.setAttribute("aria-label", label);
    const results = el("div", "tasting-style-results");
    results.setAttribute("role", "listbox");
    wrapper.append(input, results);
    host.append(wrapper);

    async function updateResults() {
      const request = ++styleSearchRequest;
      const styles = await controller.searchStyles(input.value, { limit: input.value.trim() ? 10 : 6 });
      if (request !== styleSearchRequest || !results.isConnected) return;
      results.replaceChildren();
      if (!styles.length) {
        results.append(el("p", "tasting-style-empty", "Aucun style trouvé."));
        return;
      }
      styles.forEach((style) => {
        const option = createButton(style.name, () => {
          wizard.draft.style = {
            collectionId: style.collectionId,
            cardId: style.cardId,
            name: style.name
          };
          matchResult = null;
          render();
        }, "tasting-style-option");
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");
        option.append(el("span", "", style.collectionName));
        results.append(option);
      });
    }
    input.addEventListener("input", () => void updateResults());
    input.addEventListener("focus", () => void updateResults());
  }

  function renderBeerStep(body) {
    body.append(el("h2", "", "La bière"), el("p", "tasting-step-copy", wizard.draft.blind
      ? "Note la bouteille, pas le style. Le moteur attendra la dernière étape avant de proposer ses pistes."
      : "Donne un nom au verre. Le style est facultatif et pourra être corrigé plus tard."));
    const grid = el("div", "tasting-form-grid");
    const name = el("input", "tasting-input");
    name.type = "text";
    name.value = wizard.draft.beer.name;
    name.placeholder = "Nom commercial";
    name.addEventListener("input", () => { wizard.draft.beer.name = name.value; });
    const brewery = el("input", "tasting-input");
    brewery.type = "text";
    brewery.value = wizard.draft.beer.brewery;
    brewery.placeholder = "Brasserie";
    brewery.addEventListener("input", () => { wizard.draft.beer.brewery = brewery.value; });
    const date = el("input", "tasting-input");
    date.type = "date";
    date.value = dateInputValue(wizard.draft.tastedAt);
    date.addEventListener("change", () => { wizard.draft.tastedAt = localDateToIso(date.value); });
    grid.append(createField("Nom de la bière", name), createField("Brasserie", brewery), createField("Date", date));
    body.append(grid);
    const mode = el("div", `tasting-mode-pill${wizard.draft.blind ? " is-blind" : ""}`, wizard.draft.blind ? "Dégustation à l’aveugle" : "Dégustation libre");
    body.append(mode);
    if (!wizard.draft.blind) renderStylePicker(body);
  }

  function createSingleChoice(title, options, current, onSelect) {
    const fieldset = el("fieldset", "tasting-choice-group");
    const legend = el("legend", "", title);
    const choices = el("div", "tasting-choice-grid");
    options.forEach(({ id, label }) => {
      const button = createButton(label, () => onSelect(id), `tasting-choice${current === id ? " is-selected" : ""}`);
      button.setAttribute("aria-pressed", current === id ? "true" : "false");
      choices.append(button);
    });
    fieldset.append(legend, choices);
    return fieldset;
  }

  function renderAppearanceStep(body) {
    body.append(el("h2", "", "Le coup d’œil"), el("p", "tasting-step-copy", "Avant le premier parfum, laisse la robe raconter ce qu’elle peut. Trois choix suffisent."));
    body.append(
      createSingleChoice("Couleur", APPEARANCE_COLORS, wizard.draft.appearance.color, (id) => { wizard.draft.appearance.color = id; render(); }),
      createSingleChoice("Limpidité", CLARITY_LEVELS, wizard.draft.appearance.clarity, (id) => { wizard.draft.appearance.clarity = id; render(); }),
      createSingleChoice("Mousse", FOAM_LEVELS, wizard.draft.appearance.foam, (id) => { wizard.draft.appearance.foam = id; render(); })
    );
  }

  function cycleDescriptor(map, id) {
    const current = map[id] || 0;
    if (current >= 3) delete map[id];
    else map[id] = current + 1;
    render();
  }

  function renderDescriptorGrid(body, map, ariaLabel) {
    const grid = el("div", "tasting-descriptor-grid");
    grid.setAttribute("aria-label", ariaLabel);
    SENSORY_DESCRIPTORS.forEach(({ id, label, icon }) => {
      const intensity = map[id] || 0;
      const button = el("button", `tasting-descriptor${intensity ? ` is-selected intensity-${intensity}` : ""}`);
      button.type = "button";
      button.append(el("span", "tasting-descriptor-icon", icon), el("span", "tasting-descriptor-label", label));
      if (intensity) button.append(el("span", "tasting-descriptor-intensity", INTENSITY_LABELS[intensity]));
      button.setAttribute("aria-pressed", intensity ? "true" : "false");
      button.setAttribute("aria-label", `${label}${intensity ? `, ${INTENSITY_LABELS[intensity]}` : ", non sélectionné"}`);
      button.addEventListener("click", () => cycleDescriptor(map, id));
      grid.append(button);
    });
    body.append(grid, el("p", "tasting-hint", "Un appui : discret. Deux : présent. Trois : dominant. Le suivant retire le marqueur."));
  }

  function renderNoseStep(body) {
    body.append(el("h2", "", "Le nez"), el("p", "tasting-step-copy", "Choisis seulement ce que tu perçois. Ne rien cocher n’est jamais interprété comme une absence."));
    renderDescriptorGrid(body, wizard.draft.nose, "Arômes perçus au nez");
  }

  function renderStructureAxis(axis) {
    const row = el("fieldset", "tasting-axis");
    const legend = el("legend", "", axis.label);
    const scale = el("div", "tasting-axis-scale");
    for (let value = 0; value <= 4; value += 1) {
      const selected = wizard.draft.structure[axis.id] === value;
      const button = createButton(String(value), () => {
        if (selected) delete wizard.draft.structure[axis.id];
        else wizard.draft.structure[axis.id] = value;
        render();
      }, `tasting-axis-value${selected ? " is-selected" : ""}`);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.setAttribute("aria-label", `${axis.label} ${value} sur 4${selected ? ", sélectionné" : ""}`);
      scale.append(button);
    }
    const labels = el("div", "tasting-axis-labels");
    labels.append(el("span", "", axis.low), el("span", "", axis.high));
    row.append(legend, scale, labels);
    return row;
  }

  function renderMouthStep(body) {
    body.append(el("h2", "", "La bouche"), el("p", "tasting-step-copy", "Les arômes peuvent changer entre le nez et la gorgée. Les échelles restent volontairement perceptives, pas des mesures de laboratoire."));
    renderDescriptorGrid(body, wizard.draft.palate, "Saveurs et arômes perçus en bouche");
    const axes = el("div", "tasting-axis-list");
    STRUCTURE_AXES.forEach((axis) => axes.append(renderStructureAxis(axis)));
    body.append(el("h3", "tasting-subheading", "Structure"), axes);

    const finish = el("fieldset", "tasting-choice-group");
    finish.append(el("legend", "", "Finale"));
    const finishGrid = el("div", "tasting-choice-grid tasting-choice-grid--finish");
    FINISH_OPTIONS.forEach(({ id, label }) => {
      const selected = wizard.draft.finish.includes(id);
      const button = createButton(label, () => {
        wizard.draft.finish = selected ? wizard.draft.finish.filter((entry) => entry !== id) : [...wizard.draft.finish, id];
        render();
      }, `tasting-choice${selected ? " is-selected" : ""}`);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      finishGrid.append(button);
    });
    finish.append(finishGrid);
    body.append(finish);
  }

  function renderVerdictStep(body) {
    body.append(el("h2", "", "Mon verdict"), el("p", "tasting-step-copy", "Le ressenti personnel passe avant la notation. Une bonne bière peut ne pas être ta bière."));
    const verdicts = el("div", "tasting-verdict-grid");
    [["again", "❤️", verdictLabels.again], ["maybe", "🙂", verdictLabels.maybe], ["no", "🙅", verdictLabels.no]].forEach(([id, icon, label]) => {
      const selected = wizard.draft.verdict.choice === id;
      const button = createButton("", () => {
        wizard.draft.verdict.choice = selected ? null : id;
        render();
      }, `tasting-verdict-choice${selected ? " is-selected" : ""}`);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.append(el("span", "tasting-verdict-icon", icon), el("span", "", label));
      verdicts.append(button);
    });
    body.append(verdicts);

    const rating = el("fieldset", "tasting-rating");
    rating.append(el("legend", "", "Note facultative"));
    const stars = el("div", "tasting-rating-buttons");
    for (let value = 1; value <= 5; value += 1) {
      const selected = wizard.draft.verdict.rating === value;
      const button = createButton("●", () => {
        wizard.draft.verdict.rating = selected ? null : value;
        render();
      }, `tasting-rating-button${selected ? " is-selected" : ""}`);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.setAttribute("aria-label", `${value} sur 5`);
      stars.append(button);
    }
    rating.append(stars);
    body.append(rating);

    const note = el("textarea", "tasting-textarea");
    note.rows = 4;
    note.maxLength = 1200;
    note.value = wizard.draft.verdict.note;
    note.placeholder = "Un parfum, une surprise, une bouteille à retrouver…";
    note.addEventListener("input", () => { wizard.draft.verdict.note = note.value; });
    body.append(createField("Le détail dont je veux me souvenir", note));
  }

  function createMatchCard(entry, rank, label = null) {
    const card = el("article", `tasting-match${rank === 1 ? " tasting-match--top" : ""}`);
    const head = el("div", "tasting-match-head");
    const rankNode = el("span", "tasting-match-rank", label || (rank === 1 ? "Piste principale" : `Piste ${rank}`));
    const copy = el("div", "tasting-match-copy");
    copy.append(el("h3", "", entry.name), el("p", "", entry.collectionName));
    head.append(rankNode, copy);
    card.append(head);
    if (entry.matchedDescriptors?.length) {
      const markers = el("p", "tasting-match-markers", `Marqueurs partagés : ${entry.matchedDescriptors.slice(0, 4).map(getDescriptorLabel).join(" · ")}`);
      card.append(markers);
    }
    const styleIsSelected = wizard.draft.style?.collectionId === entry.collectionId && wizard.draft.style?.cardId === entry.cardId;
    const associationLabel = entry.type === "F" ? "Associer à cette famille" : "Associer à ce style";
    card.append(createButton(styleIsSelected ? "Carte associée" : associationLabel, () => {
      wizard.draft.style = { collectionId: entry.collectionId, cardId: entry.cardId, name: entry.name };
      render();
    }, `tasting-button${styleIsSelected ? " tasting-button--selected" : " tasting-button--ghost"}`));
    return card;
  }

  function renderComparison(body) {
    if (!wizard.draft.style) return;
    const comparison = controller.compareToStyle(wizard.draft, wizard.draft.style);
    const section = el("section", "tasting-comparison");
    section.append(el("span", "tasting-kicker", "Ton verre vs le style"), el("h3", "", wizard.draft.style.name || wizard.draft.style.cardId), el("p", "", comparison.summary));
    if (comparison.available) {
      const columns = el("div", "tasting-comparison-columns");
      const shared = el("div", "tasting-comparison-column");
      shared.append(el("strong", "", "Repères retrouvés"));
      shared.append(el("p", "", comparison.shared.length ? comparison.shared.map(({ label }) => label).join(" · ") : "Aucun marqueur fort commun n’a été relevé."));
      const other = el("div", "tasting-comparison-column");
      other.append(el("strong", "", "Repères classiques non relevés"));
      other.append(el("p", "", comparison.notObserved.length ? comparison.notObserved.map(({ label }) => label).join(" · ") : "Rien de notable à signaler ici."));
      columns.append(shared, other);
      section.append(columns);
    }
    body.append(section);
  }

  function renderResultStep(body) {
    body.append(el("h2", "", "Le résultat"), el("p", "tasting-step-copy", wizard.draft.blind
      ? "Tu as décrit le verre avant de voir les pistes. Voici maintenant la famille, les styles et les signatures qui correspondent le mieux à ce profil."
      : "Le moteur compare ton ressenti au référentiel sensoriel de la Brassopédie."));

    if (matchLoading) {
      body.append(createEmptyState("Lecture du profil…", "Les marqueurs du verre sont en train d’être comparés."));
      return;
    }
    if (!matchResult) {
      body.append(createEmptyState("Pas encore de résultat", "Ajoute quelques sensations ou relance l’analyse."));
      body.append(createButton("Analyser le verre", () => void loadMatch(), "tasting-button tasting-button--primary"));
      return;
    }

    const confidence = el("div", `tasting-confidence tasting-confidence--${matchResult.confidence.id}`);
    confidence.append(el("strong", "", matchResult.confidence.label), el("span", "", `${matchResult.evidence} repère${matchResult.evidence > 1 ? "s" : ""} renseigné${matchResult.evidence > 1 ? "s" : ""}`));
    body.append(confidence);

    if (!matchResult.family && !matchResult.styleCandidates.length) {
      body.append(createEmptyState("Profil trop ouvert", "Le verre ne contient pas encore assez de repères pour proposer une branche brassicole utile."));
    }

    if (matchResult.family) {
      const family = el("section", "tasting-section");
      family.append(
        el("h3", "", matchResult.family.resolved ? "Famille identifiée" : "Famille probable"),
        el("p", "tasting-step-copy", `${matchResult.familyConfidence.label}. Le moteur utilise cette branche pour chercher ensuite le style le plus précis.`),
        createMatchCard(matchResult.family, 1, "Famille")
      );
      body.append(family);
    }

    if (matchResult.style) {
      const style = el("section", "tasting-section");
      style.append(
        el("h3", "", "Style identifié"),
        el("p", "tasting-step-copy", matchResult.styleConfidence.label),
        createMatchCard(matchResult.style, 1, "Style")
      );
      body.append(style);
    } else if (matchResult.styleCandidates.length) {
      const candidates = el("section", "tasting-section");
      candidates.append(
        el("h3", "", matchResult.family ? "Style à préciser" : "Styles possibles"),
        el("p", "tasting-step-copy", matchResult.family
          ? "La famille est plus lisible que le style exact. Les candidats ci-dessous restent à départager."
          : "Aucune famille n’est imposée à ces styles autonomes ; ils restent à départager.")
      );
      const matches = el("div", "tasting-match-list");
      matchResult.styleCandidates.forEach((entry, index) => matches.append(createMatchCard(entry, index + 1, `Style ${index + 1}`)));
      candidates.append(matches);
      body.append(candidates);
    }

    if (matchResult.alternatives.length) {
      const alternatives = el("section", "tasting-section");
      alternatives.append(el("h3", "", "Autres familles possibles"));
      const matches = el("div", "tasting-match-list");
      matchResult.alternatives.forEach((branch, index) => {
        if (branch.representative) matches.append(createMatchCard(branch.representative, index + 2, `Alternative ${index + 1}`));
      });
      alternatives.append(matches);
      body.append(alternatives);
    }

    if (matchResult.signatures.length) {
      const signatures = el("section", "tasting-overlays");
      signatures.append(el("h3", "", "Signatures transversales"), el("p", "", "Ces marqueurs peuvent se superposer à la branche principale sans devenir artificiellement une famille."));
      matchResult.signatures.forEach((entry) => {
        const chip = el("div", "tasting-overlay-chip");
        chip.append(el("strong", "", entry.name), el("span", "", entry.collectionName));
        signatures.append(chip);
      });
      body.append(signatures);
    }

    if (wizard.draft.blind && !wizard.draft.style) {
      const reveal = el("section", "tasting-blind-reveal");
      reveal.append(el("h3", "", "Quel était le style ?"), el("p", "", "Tu peux maintenant associer la bière réelle à une carte, ou laisser le carnet sans style si l’étiquette ne le dit pas."));
      body.append(reveal);
      renderStylePicker(body, { label: "Style réellement dégusté (facultatif)" });
    }
    renderComparison(body);
  }

  async function loadMatch() {
    if (!wizard || matchLoading) return;
    matchLoading = true;
    render();
    try {
      matchResult = await controller.matchDraft(wizard.draft);
    } finally {
      matchLoading = false;
      render();
    }
  }

  async function moveStep(delta) {
    if (!wizard) return;
    const next = Math.max(0, Math.min(stepTitles.length - 1, wizard.step + delta));
    wizard.step = next;
    render();
    if (next === stepTitles.length - 1 && !matchResult) await loadMatch();
  }

  function saveWizard() {
    const result = controller.saveTasting(wizard.draft, wizard.editId);
    if (!result?.ok || !result.item) return;
    detailId = result.item.id;
    wizard = null;
    matchResult = null;
    setScreen("detail");
  }

  function renderWizard(page) {
    if (!wizard) return renderHome(page);
    const top = el("div", "tasting-wizard-top");
    top.append(createButton("← Quitter", cancelWizard, "tasting-button tasting-button--ghost"), el("span", "tasting-wizard-mode", wizard.draft.blind ? "À l’aveugle" : "Libre"));
    page.append(top);
    renderProgress(page);
    const panel = el("section", "tasting-wizard-panel");
    const body = el("div", "tasting-wizard-body");
    const renderers = [renderBeerStep, renderAppearanceStep, renderNoseStep, renderMouthStep, renderVerdictStep, renderResultStep];
    renderers[wizard.step](body);
    panel.append(body);

    const actions = el("div", "tasting-wizard-actions");
    if (wizard.step > 0) actions.append(createButton("Précédent", () => void moveStep(-1), "tasting-button tasting-button--ghost"));
    if (wizard.step < stepTitles.length - 1) actions.append(createButton("Continuer", () => void moveStep(1), "tasting-button tasting-button--primary"));
    else actions.append(createButton(wizard.editId ? "Enregistrer les modifications" : "Ajouter au carnet", saveWizard, "tasting-button tasting-button--primary"));
    panel.append(actions);
    page.append(panel);
  }

  function renderHistory(page) {
    const snapshot = controller.getSnapshot();
    const top = el("div", "tasting-page-top");
    top.append(createButton("← Dégustation", () => setScreen("home"), "tasting-button tasting-button--ghost"));
    page.append(top, createHero("Journal d’exploration", "Mon carnet", "Retrouve les bouteilles, les styles et les impressions que tu as choisi de garder."));

    const filters = el("div", "tasting-history-filters");
    const search = el("input", "tasting-input");
    search.type = "search";
    search.placeholder = "Bière, brasserie ou style…";
    search.value = historyQuery;
    search.setAttribute("aria-label", "Rechercher dans le carnet");
    search.addEventListener("input", () => { historyQuery = search.value; render(); });
    const verdict = el("select", "tasting-input");
    verdict.setAttribute("aria-label", "Filtrer par verdict");
    [["all", "Tous les verdicts"], ["again", verdictLabels.again], ["maybe", verdictLabels.maybe], ["no", verdictLabels.no]].forEach(([value, label]) => {
      const option = el("option", "", label);
      option.value = value;
      option.selected = historyVerdict === value;
      verdict.append(option);
    });
    verdict.addEventListener("change", () => { historyVerdict = verdict.value; render(); });
    filters.append(search, verdict);
    page.append(filters);

    if (!snapshot.ok) return page.append(createEmptyState("Carnet indisponible", "Le stockage local n’a pas pu être lu."));
    const query = historyQuery.trim().toLocaleLowerCase("fr");
    const filtered = snapshot.tastings.filter((item) => {
      const haystack = `${item.beer?.name || ""} ${item.beer?.brewery || ""} ${item.style?.name || ""}`.toLocaleLowerCase("fr");
      const matchesQuery = !query || haystack.includes(query);
      const matchesVerdict = historyVerdict === "all" || item.verdict?.choice === historyVerdict;
      return matchesQuery && matchesVerdict;
    });
    const list = el("section", "tasting-history-list");
    if (!filtered.length) list.append(createEmptyState("Aucune dégustation ici", "Change les filtres ou ajoute un nouveau verre au carnet."));
    else filtered.forEach((item) => list.append(createTastingCard(item)));
    page.append(list);
  }

  function renderDetail(page) {
    const result = controller.getTasting(detailId);
    const tasting = result?.item;
    const top = el("div", "tasting-page-top");
    top.append(createButton("← Mon carnet", () => setScreen("history"), "tasting-button tasting-button--ghost"));
    page.append(top);
    if (!tasting) {
      page.append(createEmptyState("Dégustation introuvable", "Elle a peut-être été supprimée du stockage local."));
      return;
    }

    const detail = el("article", "tasting-detail");
    const header = el("header", "tasting-detail-header");
    header.append(el("span", "tasting-kicker", tasting.blind ? "Dégustée à l’aveugle" : "Dégustation"), el("h1", "", tastingTitle(tasting)), el("p", "", metaLine(tasting)));
    detail.append(header);

    const grid = el("div", "tasting-detail-grid");
    const view = el("section", "tasting-detail-section");
    view.append(el("h2", "", "Le verre"), el("p", "", [getColorLabel(tasting.appearance?.color), getClarityLabel(tasting.appearance?.clarity)].filter(Boolean).join(" · ") || "Aspect non renseigné"));
    const nose = el("section", "tasting-detail-section");
    nose.append(el("h2", "", "Le nez"), el("p", "", descriptorSummary(tasting.nose, 12).join(" · ") || "Non renseigné"));
    const mouth = el("section", "tasting-detail-section");
    mouth.append(el("h2", "", "La bouche"), el("p", "", descriptorSummary(tasting.palate, 12).join(" · ") || "Non renseignée"));
    const verdict = el("section", "tasting-detail-section");
    verdict.append(el("h2", "", "Verdict"), el("p", "", tasting.verdict?.choice ? verdictLabels[tasting.verdict.choice] : "Sans verdict"));
    if (tasting.verdict?.rating) verdict.append(el("p", "tasting-detail-rating", `${tasting.verdict.rating} / 5`));
    if (tasting.verdict?.note) verdict.append(el("blockquote", "tasting-detail-note", tasting.verdict.note));
    grid.append(view, nose, mouth, verdict);
    detail.append(grid);

    if (tasting.style) {
      const comparison = controller.compareToStyle(tasting, tasting.style);
      const compare = el("section", "tasting-comparison");
      compare.append(el("span", "tasting-kicker", "Ton verre vs le style"), el("h2", "", tasting.style.name || tasting.style.cardId), el("p", "", comparison.summary));
      detail.append(compare);
    }

    const actions = el("div", "tasting-detail-actions");
    actions.append(createButton("Modifier", () => startWizard(tasting.blind, tasting), "tasting-button tasting-button--primary"));
    actions.append(createButton("Supprimer", () => {
      if (!globalThis.confirm?.(`Supprimer « ${tastingTitle(tasting)} » du carnet ?`)) return;
      const deleted = controller.deleteTasting(tasting.id);
      if (deleted?.ok) setScreen("history");
    }, "tasting-button tasting-button--danger"));
    detail.append(actions);
    page.append(detail);
  }

  function render() {
    if (!root) return;
    root.replaceChildren();
    const page = el("div", "tasting-page");
    if (screen === "wizard") renderWizard(page);
    else if (screen === "history") renderHistory(page);
    else if (screen === "detail") renderDetail(page);
    else renderHome(page);
    root.append(page);
  }

  function mount() {
    render();
  }

  return { mount, refresh: render };
}
