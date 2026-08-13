export const APPEARANCE_COLORS = Object.freeze([
  { id: "paille", label: "Paille" },
  { id: "dore", label: "Doré" },
  { id: "ambre", label: "Ambré" },
  { id: "cuivre", label: "Cuivré" },
  { id: "brun", label: "Brun" },
  { id: "noir", label: "Noir" }
]);

export const CLARITY_LEVELS = Object.freeze([
  { id: "claire", label: "Claire" },
  { id: "voilee", label: "Voilée" },
  { id: "trouble", label: "Trouble" },
  { id: "opaque", label: "Opaque" }
]);

export const FOAM_LEVELS = Object.freeze([
  { id: "discrete", label: "Discrète" },
  { id: "moyenne", label: "Moyenne" },
  { id: "genereuse", label: "Généreuse" }
]);

export const SENSORY_DESCRIPTORS = Object.freeze([
  { id: "agrumes", label: "Agrumes", icon: "🍋" },
  { id: "fruits-tropicaux", label: "Fruits tropicaux", icon: "🥭" },
  { id: "fruits-a-noyau", label: "Fruits à noyau", icon: "🍑" },
  { id: "baies-raisin", label: "Baies / raisin", icon: "🍇" },
  { id: "floral", label: "Floral", icon: "🌸" },
  { id: "resine-pin", label: "Résine / pin", icon: "🌲" },
  { id: "herbace-epice", label: "Herbacé / épicé", icon: "🌿" },
  { id: "herbe-fraiche", label: "Herbe fraîche", icon: "🌱" },
  { id: "cereale", label: "Céréale", icon: "🌾" },
  { id: "pain-biscuit", label: "Pain / biscuit", icon: "🥖" },
  { id: "toaste", label: "Toasté", icon: "🍞" },
  { id: "caramel-toffee", label: "Caramel / toffee", icon: "🍮" },
  { id: "miel", label: "Miel", icon: "🍯" },
  { id: "noix-fruits-secs", label: "Noix / fruits secs", icon: "🥜" },
  { id: "chocolat-cacao", label: "Chocolat / cacao", icon: "🍫" },
  { id: "cafe-torrefie", label: "Café / torréfié", icon: "☕" },
  { id: "fruits-legers", label: "Fruits légers", icon: "🍐" },
  { id: "banane", label: "Banane", icon: "🍌" },
  { id: "fruits-noirs-murs", label: "Fruits noirs / mûrs", icon: "🫐" },
  { id: "clou-girofle", label: "Clou de girofle", icon: "✦" },
  { id: "poivre-epices-levure", label: "Poivre / épices de levure", icon: "◌" },
  { id: "lactique-yaourt", label: "Lactique / yaourt", icon: "🥛" },
  { id: "funky-cuir-ferme", label: "Funky / cuir / ferme", icon: "🐴" },
  { id: "vinaigre-acetique", label: "Vinaigré / acétique", icon: "◈" },
  { id: "fume", label: "Fumé", icon: "♨" },
  { id: "boise-vanille", label: "Boisé / vanillé", icon: "🪵" },
  { id: "coriandre", label: "Coriandre", icon: "❉" },
  { id: "salin-mineral", label: "Salin / minéral", icon: "🧂" },
  { id: "epices", label: "Épices", icon: "✺" },
  { id: "fruits-rouges", label: "Fruits rouges", icon: "🍒" }
]);

export const SENSORY_DESCRIPTOR_IDS = Object.freeze(SENSORY_DESCRIPTORS.map(({ id }) => id));

export const STRUCTURE_AXES = Object.freeze([
  { id: "amertume", label: "Amertume", low: "Aucune", high: "Intense", group: "taste" },
  { id: "sucrosite", label: "Sucrosité", low: "Sèche", high: "Sucrée", group: "taste" },
  { id: "acidite", label: "Acidité", low: "Aucune", high: "Intense", group: "taste" },
  { id: "corps", label: "Corps", low: "Léger", high: "Plein", group: "body" },
  { id: "carbonatation", label: "Carbonatation", low: "Calme", high: "Très vive", group: "body" },
  { id: "alcool", label: "Alcool perçu", low: "Invisible", high: "Chaleureux", group: "body" }
]);

export const STRUCTURE_AXIS_IDS = Object.freeze(STRUCTURE_AXES.map(({ id }) => id));

export const FINISH_OPTIONS = Object.freeze([
  { id: "seche", label: "Sèche" },
  { id: "ronde", label: "Ronde" },
  { id: "cremeuse", label: "Crémeuse" },
  { id: "vive", label: "Vive / croustillante" },
  { id: "astringente", label: "Astringente" },
  { id: "chaleureuse", label: "Chaleureuse" },
  { id: "amere-persistante", label: "Amère persistante" },
  { id: "acide-persistante", label: "Acide persistante" }
]);

export const FINISH_IDS = Object.freeze(FINISH_OPTIONS.map(({ id }) => id));

export const INTENSITY_LABELS = Object.freeze({
  1: "Discret",
  2: "Présent",
  3: "Dominant"
});

export const STRUCTURE_VALUE_LABELS = Object.freeze({
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4"
});

export function getDescriptorLabel(id) {
  return SENSORY_DESCRIPTORS.find((entry) => entry.id === id)?.label || id;
}

export function getFinishLabel(id) {
  return FINISH_OPTIONS.find((entry) => entry.id === id)?.label || id;
}

export function getColorLabel(id) {
  return APPEARANCE_COLORS.find((entry) => entry.id === id)?.label || id;
}

export function getClarityLabel(id) {
  return CLARITY_LEVELS.find((entry) => entry.id === id)?.label || id;
}
