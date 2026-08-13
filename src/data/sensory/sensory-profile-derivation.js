const COLLECTION_DEFAULTS = Object.freeze({
  "lagers-et-fermentations-basses": {
    nose: { cereale: 1 }, palate: { cereale: 1 }, structure: { acidite: [0, 1], carbonatation: [2, 3] }, finish: ["vive"]
  },
  "pale-ales-bitters-et-ipa": {
    nose: { "pain-biscuit": 1, floral: 1 }, palate: { "pain-biscuit": 1 }, structure: { acidite: [0, 1], carbonatation: [2, 3] }, finish: ["seche"]
  },
  "porters-stouts": {
    nose: { "chocolat-cacao": 1, "cafe-torrefie": 1 }, palate: { "chocolat-cacao": 1 }, structure: { acidite: [0, 1], carbonatation: [1, 2] }, finish: ["ronde"]
  },
  "traditions-belges-et-francaises": {
    nose: { "fruits-legers": 1, "poivre-epices-levure": 1 }, palate: { "fruits-legers": 1 }, structure: { acidite: [0, 1], carbonatation: [3, 4] }, finish: ["vive"]
  },
  "bieres-de-ble-et-de-seigle": {
    nose: { cereale: 1 }, palate: { cereale: 1 }, structure: { acidite: [0, 1], carbonatation: [3, 4] }, finish: ["cremeuse", "vive"]
  },
  "bieres-acides-sauvages-et-spontanees": {
    nose: { "lactique-yaourt": 1 }, palate: { "lactique-yaourt": 1 }, structure: { acidite: [3, 4], amertume: [0, 1] }, finish: ["acide-persistante"]
  },
  "ales-ambrees-brunes-maltees-et-fortes": {
    nose: { "pain-biscuit": 1, "caramel-toffee": 1 }, palate: { "pain-biscuit": 1 }, structure: { acidite: [0, 1], carbonatation: [1, 2] }, finish: ["ronde"]
  },
  "styles-singuliers-historiques-et-hybrides": {
    nose: {}, palate: {}, structure: { acidite: [0, 1], carbonatation: [2, 3] }, finish: []
  },
  "appellations-commerciales": {
    nose: {}, palate: {}, structure: {}, finish: []
  }
});

const DESCRIPTOR_PATTERNS = Object.freeze({
  agrumes: ["agrume", "citron", "orange", "pamplemousse", "lime", "zeste", "citrus"],
  "fruits-tropicaux": ["tropical", "mangue", "ananas", "passion", "goyave", "litchi"],
  "fruits-a-noyau": ["peche", "abricot", "nectarine", "fruit a noyau"],
  "baies-raisin": ["raisin", "baie", "grape", "vinique"],
  floral: ["floral", "fleur"],
  "resine-pin": ["resine", "pin", "piney"],
  "herbace-epice": ["herbace", "houblon noble", "saaz", "hallertau", "tettnang", "spalt"],
  "herbe-fraiche": ["herbe fraiche", "gazon", "grassy"],
  cereale: ["cereale", "grain", "ble", "seigle", "riz", "mais"],
  "pain-biscuit": ["pain", "biscuit", "croûte", "croute"],
  toaste: ["toast", "grille"],
  "caramel-toffee": ["caramel", "toffee"],
  miel: ["miel", "miell"],
  "noix-fruits-secs": ["noix", "noisette", "amande", "fruit sec"],
  "chocolat-cacao": ["chocolat", "cacao"],
  "cafe-torrefie": ["cafe", "espresso", "torref", "roast", "brule"],
  "fruits-legers": ["pomme", "poire", "fruit leger", "fruit jaune", "ester fruite"],
  banane: ["banane"],
  "fruits-noirs-murs": ["prune", "figue", "datte", "raisin sec", "fruit noir", "fruit mur"],
  "clou-girofle": ["clou de girofle", "girofle"],
  "poivre-epices-levure": ["poivre", "phenol", "epice de levure", "levure belge"],
  "lactique-yaourt": ["lactique", "yaourt"],
  "funky-cuir-ferme": ["brett", "funky", "cuir", "ferme", "cheval"],
  "vinaigre-acetique": ["acetique", "vinaigre"],
  fume: ["fume", "rauch", "smoke", "tourbe"],
  "boise-vanille": ["bois", "barrique", "fut", "chene", "vanille", "barrel"],
  coriandre: ["coriandre"],
  "salin-mineral": ["salin", "sel", "mineral"],
  epices: ["epice", "cannelle", "muscade", "gingembre", "piment"],
  "fruits-rouges": ["cerise", "framboise", "fraise", "cassis", "fruit rouge"]
});

const COLOR_BANDS = Object.freeze([
  ["paille", 0, 6],
  ["dore", 4, 12],
  ["ambre", 10, 20],
  ["cuivre", 18, 35],
  ["brun", 30, 65],
  ["noir", 55, Infinity]
]);

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9%]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cloneRange(range) {
  return Array.isArray(range) ? [...range] : range;
}

function cloneProfileShape(profile = {}) {
  return {
    appearance: {
      colors: [...(profile.appearance?.colors || [])],
      clarity: [...(profile.appearance?.clarity || [])]
    },
    nose: { ...(profile.nose || {}) },
    palate: { ...(profile.palate || {}) },
    structure: Object.fromEntries(Object.entries(profile.structure || {}).map(([key, value]) => [key, cloneRange(value)])),
    finish: [...(profile.finish || [])],
    contradictions: [...(profile.contradictions || [])],
    keyMarkers: [...(profile.keyMarkers || [])]
  };
}

function mergeDescriptorMap(target, source, cap = 3) {
  Object.entries(source || {}).forEach(([id, intensity]) => {
    target[id] = Math.max(target[id] || 0, Math.min(cap, Number(intensity) || 0));
  });
}

function inheritProfile(parent = null) {
  if (!parent) return cloneProfileShape();
  const inherited = cloneProfileShape(parent);
  inherited.nose = Object.fromEntries(Object.entries(inherited.nose).map(([id, value]) => [id, Math.min(2, value)]));
  inherited.palate = Object.fromEntries(Object.entries(inherited.palate).map(([id, value]) => [id, Math.min(2, value)]));
  inherited.keyMarkers = [];
  inherited.contradictions = [];
  return inherited;
}

function addUnique(target, values) {
  values.forEach((value) => {
    if (value && !target.includes(value)) target.push(value);
  });
}

function applyDefaults(profile, collectionId) {
  const defaults = COLLECTION_DEFAULTS[collectionId] || {};
  mergeDescriptorMap(profile.nose, defaults.nose || {}, 1);
  mergeDescriptorMap(profile.palate, defaults.palate || {}, 1);
  Object.entries(defaults.structure || {}).forEach(([axis, range]) => {
    if (!Array.isArray(profile.structure[axis])) profile.structure[axis] = [...range];
  });
  addUnique(profile.finish, defaults.finish || []);
}

function overlaps(min, max, bandMin, bandMax) {
  return Math.max(min, bandMin) <= Math.min(max, bandMax);
}

function colorsFromEbc(color = {}) {
  const min = Number(color.min);
  const max = Number(color.max);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [];
  return COLOR_BANDS.filter(([, bandMin, bandMax]) => overlaps(min, max, bandMin, bandMax)).map(([id]) => id);
}

function mapIbu(value) {
  if (value <= 5) return 0;
  if (value <= 15) return 1;
  if (value <= 30) return 2;
  if (value <= 50) return 3;
  return 4;
}

function mapAbv(value) {
  if (value < 3) return 0;
  if (value < 4.5) return 1;
  if (value < 6) return 2;
  if (value < 8) return 3;
  return 4;
}

function numericRange(source, mapper) {
  const min = Number(source?.min);
  const max = Number(source?.max);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
  const a = mapper(min);
  const b = mapper(max);
  return [Math.min(a, b), Math.max(a, b)];
}

function detectClarity(text) {
  const values = [];
  if (/\b(opaque|noir profond)\b/.test(text)) values.push("opaque");
  if (/\b(trouble|hazy|turbid)\b/.test(text)) values.push("trouble");
  if (/\b(voile|voilee|legerement trouble)\b/.test(text)) values.push("voilee");
  if (/\b(clair|claire|limpide|brillant)\b/.test(text)) values.push("claire");
  return [...new Set(values)];
}

function detectDescriptors(nameText, profileText, descriptionText) {
  const result = {};
  Object.entries(DESCRIPTOR_PATTERNS).forEach(([id, patterns]) => {
    const inName = patterns.some((pattern) => nameText.includes(pattern));
    const inProfile = patterns.some((pattern) => profileText.includes(pattern));
    const inDescription = patterns.some((pattern) => descriptionText.includes(pattern));
    if (inName) result[id] = 3;
    else if (inProfile) result[id] = 2;
    else if (inDescription) result[id] = 1;
  });
  return result;
}

function setRange(profile, axis, range, force = false) {
  if (!Array.isArray(range)) return;
  if (force || !Array.isArray(profile.structure[axis])) profile.structure[axis] = [...range];
}

function applyTextStructure(profile, text) {
  if (/\b(tres sec|seche|sec|attenue)\b/.test(text)) {
    setRange(profile, "sucrosite", [0, 1], true);
    addUnique(profile.finish, ["seche"]);
  }
  if (/\b(doux|douce|sucre|sucree|moelleux|dessert|liquoreux)\b/.test(text)) {
    setRange(profile, "sucrosite", [2, 4], true);
    addUnique(profile.finish, ["ronde"]);
  }
  if (/\b(acide|acidite|acidule|sour|tart)\b/.test(text)) {
    setRange(profile, "acidite", [3, 4], true);
    addUnique(profile.finish, ["acide-persistante"]);
  }
  if (/\b(vive|petillante|effervescente|fortement carbonatee|haute carbonatation)\b/.test(text)) {
    setRange(profile, "carbonatation", [3, 4], true);
    addUnique(profile.finish, ["vive"]);
  }
  if (/\b(faible carbonatation|peu carbonatee|calme)\b/.test(text)) setRange(profile, "carbonatation", [0, 1], true);
  if (/\b(corps leger|legere en bouche|tres leger)\b/.test(text)) setRange(profile, "corps", [0, 1], true);
  if (/\b(corps moyen|corps modere)\b/.test(text)) setRange(profile, "corps", [2, 2], true);
  if (/\b(corps plein|corps riche|dense|onctueux)\b/.test(text)) setRange(profile, "corps", [3, 4], true);
  if (/\b(cremeux|cremeuse|onctueux)\b/.test(text)) addUnique(profile.finish, ["cremeuse"]);
  if (/\b(astringent|astringente)\b/.test(text)) addUnique(profile.finish, ["astringente"]);
  if (/\b(chaleureux|chaleureuse|alcool perceptible|chaleur alcoolique)\b/.test(text)) addUnique(profile.finish, ["chaleureuse"]);
  if (/\b(amertume persistante|finale amere|amer persistante)\b/.test(text)) addUnique(profile.finish, ["amere-persistante"]);
}

function applyIdRules(profile, cardId, collectionId) {
  const id = normalizeText(cardId).replace(/ /g, "-");
  const add = (descriptor, intensity = 3) => {
    profile.nose[descriptor] = Math.max(profile.nose[descriptor] || 0, intensity);
    profile.palate[descriptor] = Math.max(profile.palate[descriptor] || 0, intensity);
  };

  if (/(rauch|smoke|peated|grodzisk|lichtenhainer)/.test(id)) add("fume", 3);
  if (/coffee/.test(id)) add("cafe-torrefie", 3);
  if (/chocolate/.test(id)) add("chocolat-cacao", 3);
  if (/(wood|barrel|aged)/.test(id)) add("boise-vanille", 3);
  if (/brett/.test(id)) add("funky-cuir-ferme", 3);
  if (/grape/.test(id)) add("baies-raisin", 3);
  if (/honey/.test(id)) add("miel", 3);
  if (/tea/.test(id)) add("herbace-epice", 2);
  if (/(herb|spice|pumpkin|chili)/.test(id)) add("epices", 2);
  if (/(fruit|fruited)/.test(id)) add("fruits-legers", 2);

  if (/(weiss|hefe|weizen)/.test(id) && !/witbier/.test(id)) {
    add("banane", 2);
    add("clou-girofle", 2);
  }
  if (/witbier|white-ipa/.test(id)) {
    add("coriandre", 2);
    add("agrumes", 2);
  }
  if (/(gose)/.test(id)) {
    add("salin-mineral", 3);
    add("coriandre", 2);
    add("lactique-yaourt", 2);
    setRange(profile, "acidite", [3, 4], true);
  }
  if (/(berliner|sour|lambic|gueuze|flanders-red|oud-bruin)/.test(id)) setRange(profile, "acidite", [3, 4], true);
  if (/(lambic|gueuze|wild|spontan)/.test(id)) add("funky-cuir-ferme", 2);

  if (/(ipa|pale-ale|pilsner|hoppy-lager)/.test(id)) {
    add("agrumes", 2);
    if (/(american|west-coast|double|imperial|black|red|brown|rye)/.test(id)) add("resine-pin", 2);
  }
  if (/(west-coast)/.test(id)) {
    add("agrumes", 3);
    add("resine-pin", 3);
    setRange(profile, "amertume", [3, 4], true);
    setRange(profile, "sucrosite", [0, 1], true);
    addUnique(profile.finish, ["seche", "amere-persistante"]);
  }
  if (/(juicy|hazy|neipa)/.test(id)) {
    add("fruits-tropicaux", 3);
    add("fruits-a-noyau", 3);
    add("agrumes", 3);
    setRange(profile, "amertume", [1, 2], true);
    addUnique(profile.finish, ["cremeuse", "ronde"]);
  }
  if (/new-zealand/.test(id)) {
    add("fruits-tropicaux", 2);
    add("baies-raisin", 2);
  }
  if (/belgian-ipa/.test(id)) add("poivre-epices-levure", 3);
  if (/black-ipa/.test(id)) {
    add("cafe-torrefie", 1);
    add("toaste", 1);
  }
  if (/brut-ipa/.test(id)) {
    setRange(profile, "sucrosite", [0, 0], true);
    addUnique(profile.finish, ["seche", "vive"]);
  }

  if (/(porter|stout)/.test(id)) {
    add("chocolat-cacao", 2);
    add("cafe-torrefie", /dry-stout|american-stout|imperial-stout/.test(id) ? 3 : 2);
  }
  if (/milk|cream-stout|pastry|dessert/.test(id)) {
    setRange(profile, "sucrosite", [3, 4], true);
    addUnique(profile.finish, ["cremeuse", "ronde"]);
  }
  if (/oatmeal/.test(id)) add("cereale", 2);
  if (/baltic-porter|imperial-stout|imperial-porter/.test(id)) add("fruits-noirs-murs", 2);

  if (/(vienna|marzen|dunkel|bock|scotch|wee-heavy|mild|brown-ale|amber|red-ale|barley-wine|old-ale)/.test(id)) {
    add("pain-biscuit", 2);
    add("caramel-toffee", 2);
    add("toaste", 2);
  }
  if (/(doppelbock|eisbock|barley-wine|wee-heavy|quadrupel|belgian-dark-strong)/.test(id)) add("fruits-noirs-murs", 2);

  if (/(belgian|dubbel|tripel|quadrupel|saison)/.test(id)) {
    add("fruits-legers", 2);
    add("poivre-epices-levure", 2);
  }
  if (/dubbel|quadrupel|belgian-dark-strong/.test(id)) add("fruits-noirs-murs", 3);
  if (/saison/.test(id)) {
    add("poivre-epices-levure", 3);
    add("herbace-epice", 2);
    setRange(profile, "sucrosite", [0, 1], true);
    setRange(profile, "carbonatation", [3, 4], true);
    addUnique(profile.finish, ["seche", "vive"]);
  }

  if (/radler|panache/.test(id)) {
    add("agrumes", 3);
    setRange(profile, "amertume", [0, 1], true);
    setRange(profile, "alcool", [0, 1], true);
    setRange(profile, "corps", [0, 1], true);
    setRange(profile, "carbonatation", [3, 4], true);
    addUnique(profile.finish, ["vive"]);
  }

  if (collectionId === "bieres-acides-sauvages-et-spontanees") setRange(profile, "acidite", [2, 4]);
}

function deriveContradictions(collectionId, cardId) {
  const id = normalizeText(cardId);
  if (collectionId === "bieres-acides-sauvages-et-spontanees") return ["resine-pin", "cafe-torrefie"];
  if (collectionId === "pale-ales-bitters-et-ipa" && !id.includes("black ipa")) return ["lactique-yaourt", "cafe-torrefie"];
  if (collectionId === "porters-stouts") return ["lactique-yaourt", "banane"];
  if (collectionId === "bieres-de-ble-et-de-seigle") return ["cafe-torrefie", "resine-pin"];
  if (collectionId === "lagers-et-fermentations-basses") return ["lactique-yaourt", "funky-cuir-ferme"];
  return [];
}

function bodyFromAbv(abvRange) {
  if (!Array.isArray(abvRange)) return null;
  const max = abvRange[1];
  if (max <= 1) return [0, 2];
  if (max === 2) return [1, 3];
  if (max === 3) return [2, 3];
  return [3, 4];
}

function deriveOneProfile(card, parentProfile, role) {
  const entry = card.brassopedie || card;
  const profile = inheritProfile(parentProfile);
  applyDefaults(profile, card.collectionId);

  const nameText = normalizeText(`${card.name || entry.nom || ""} ${card.cardId || card.id || ""}`);
  const profileText = normalizeText(`${entry.recette?.profilRecherche || ""} ${entry.recette?.explicationProfil || ""}`);
  const descriptionText = normalizeText(entry.description || "");
  const allText = `${nameText} ${profileText} ${descriptionText}`;

  const colors = colorsFromEbc(entry.couleur);
  if (colors.length) profile.appearance.colors = colors;
  const clarity = detectClarity(allText);
  if (clarity.length) profile.appearance.clarity = clarity;

  const ibu = numericRange(entry.amertume, mapIbu);
  if (ibu) profile.structure.amertume = ibu;
  const abv = numericRange(entry.alcool, mapAbv);
  if (abv) {
    profile.structure.alcool = abv;
    const body = bodyFromAbv(abv);
    if (body && !Array.isArray(profile.structure.corps)) profile.structure.corps = body;
  }

  const descriptors = detectDescriptors(nameText, profileText, descriptionText);
  mergeDescriptorMap(profile.nose, descriptors);
  mergeDescriptorMap(profile.palate, Object.fromEntries(Object.entries(descriptors).map(([id, intensity]) => [id, Math.max(1, intensity - (id === "floral" ? 1 : 0))])));
  applyTextStructure(profile, allText);
  applyIdRules(profile, card.cardId || card.id, card.collectionId);

  if (!Array.isArray(profile.structure.sucrosite)) profile.structure.sucrosite = [0, 2];
  if (!Array.isArray(profile.structure.acidite)) profile.structure.acidite = [0, 1];
  if (!Array.isArray(profile.structure.corps)) profile.structure.corps = [1, 3];
  if (!Array.isArray(profile.structure.carbonatation)) profile.structure.carbonatation = [1, 3];
  if (!Array.isArray(profile.structure.amertume)) profile.structure.amertume = [0, 3];
  if (!Array.isArray(profile.structure.alcool)) profile.structure.alcool = [1, 3];

  profile.contradictions = deriveContradictions(card.collectionId, card.cardId || card.id);
  profile.keyMarkers = [...new Set([...Object.entries(profile.nose), ...Object.entries(profile.palate)]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "fr"))
    .filter(([, intensity]) => intensity >= 2)
    .map(([id]) => id))].slice(0, 4);

  return {
    schemaVersion: 1,
    collectionId: card.collectionId,
    cardId: card.cardId || card.id,
    role,
    source: role === "excluded" ? "derived-excluded" : "derived",
    parentCardId: entry.parentPrincipalId || null,
    ...profile
  };
}

/**
 * Résout les 251 profils à partir des fiches canoniques.
 * Les profils explicitement édités restent prioritaires ; les autres héritent de leur parent
 * puis sont complétés par les données structurées et le vocabulaire de la fiche canonique.
 */
export function deriveSensoryProfiles({ cards = [], curatedProfiles = [], getRole }) {
  const curatedByKey = new Map(curatedProfiles.map((profile) => [`${profile.collectionId}:${profile.cardId}`, profile]));
  const cardsByKey = new Map(cards.map((card) => [`${card.collectionId}:${card.cardId || card.id}`, card]));
  const resolved = new Map();

  function resolveCard(card, stack = []) {
    const cardId = card.cardId || card.id;
    const key = `${card.collectionId}:${cardId}`;
    if (resolved.has(key)) return resolved.get(key);
    if (stack.includes(key)) throw new Error(`Cycle de parenté sensorielle : ${[...stack, key].join(" -> ")}`);

    const role = getRole(card.collectionId, cardId);
    if (!role) throw new Error(`Rôle sensoriel manquant : ${key}`);
    const curated = curatedByKey.get(key);
    if (curated) {
      const value = Object.freeze({ ...curated, source: "curated", parentCardId: (card.brassopedie || card).parentPrincipalId || null });
      resolved.set(key, value);
      return value;
    }

    const parentId = (card.brassopedie || card).parentPrincipalId;
    const parent = parentId ? cardsByKey.get(`${card.collectionId}:${parentId}`) : null;
    const parentProfile = parent ? resolveCard(parent, [...stack, key]) : null;
    const value = Object.freeze(deriveOneProfile(card, parentProfile, role));
    resolved.set(key, value);
    return value;
  }

  return Object.freeze(cards.map((card) => resolveCard(card)));
}
