const FAMILY_TYPE = "F";
const STYLE_TYPES = new Set(["S", "SS"]);
const TRANSVERSE_TYPE = "T";
const COMMERCIAL_TYPES = new Set(["A", "R"]);
const ALLOWED_TYPES = new Set([FAMILY_TYPE, ...STYLE_TYPES, TRANSVERSE_TYPE, ...COMMERCIAL_TYPES]);

function profileKey(profile) {
  return `${profile.collectionId}:${profile.cardId}`;
}

function assertTaxonomy(condition, message) {
  if (!condition) throw new Error(`[sensory-taxonomy] ${message}`);
}

/**
 * Construit la vue taxonomique du catalogue sensoriel sans recopier la taxonomie.
 * Les relations proviennent directement des champs `type` et `parentPrincipalId`
 * synchronisés avec les cartes canoniques de la Brassopédie.
 */
export function createSensoryTaxonomy(profiles = []) {
  const byCardId = new Map();
  const childrenByCardId = new Map();

  profiles.forEach((profile) => {
    assertTaxonomy(profile?.cardId, "Chaque profil doit posséder un cardId.");
    assertTaxonomy(ALLOWED_TYPES.has(profile.type), `${profileKey(profile)} utilise un type inconnu : ${profile.type}.`);
    assertTaxonomy(!byCardId.has(profile.cardId), `Le cardId ${profile.cardId} n'est pas unique dans la taxonomie.`);
    byCardId.set(profile.cardId, profile);
    childrenByCardId.set(profile.cardId, []);
  });

  profiles.forEach((profile) => {
    if (!profile.parentPrincipalId) return;
    const parent = byCardId.get(profile.parentPrincipalId);
    assertTaxonomy(parent, `${profileKey(profile)} référence un parent absent : ${profile.parentPrincipalId}.`);
    childrenByCardId.get(parent.cardId).push(profile);
  });

  const state = new Map();
  function visit(profile) {
    const current = state.get(profile.cardId);
    assertTaxonomy(current !== "visiting", `Cycle taxonomique détecté autour de ${profile.cardId}.`);
    if (current === "visited") return;
    state.set(profile.cardId, "visiting");
    if (profile.parentPrincipalId) visit(byCardId.get(profile.parentPrincipalId));
    state.set(profile.cardId, "visited");
  }
  profiles.forEach(visit);

  function ancestorsOf(profile) {
    const ancestors = [];
    let current = profile?.parentPrincipalId ? byCardId.get(profile.parentPrincipalId) : null;
    while (current) {
      ancestors.push(current);
      current = current.parentPrincipalId ? byCardId.get(current.parentPrincipalId) : null;
    }
    return ancestors;
  }

  function pathOf(profile) {
    return [...ancestorsOf(profile)].reverse().concat(profile || []).filter(Boolean);
  }

  function isCommercial(profile) {
    return COMMERCIAL_TYPES.has(profile?.type);
  }

  function isSignature(profile) {
    if (!profile || isCommercial(profile)) return false;
    return profile.type === TRANSVERSE_TYPE || ancestorsOf(profile).some(({ type }) => type === TRANSVERSE_TYPE);
  }

  function isFamily(profile) {
    return profile?.type === FAMILY_TYPE;
  }

  function isStyle(profile) {
    return STYLE_TYPES.has(profile?.type) && !isSignature(profile);
  }

  function nearestFamily(profile) {
    if (!profile) return null;
    if (isFamily(profile)) return profile;
    return ancestorsOf(profile).find(isFamily) || null;
  }

  const automaticProfiles = profiles.filter((profile) => !isCommercial(profile));
  const signatureProfiles = automaticProfiles.filter(isSignature);
  const baseProfiles = automaticProfiles.filter((profile) => !isSignature(profile) && (isFamily(profile) || isStyle(profile)));
  const commercialProfiles = profiles.filter(isCommercial);
  const familyProfiles = baseProfiles.filter(isFamily);
  const autonomousStyles = baseProfiles.filter((profile) => isStyle(profile) && !nearestFamily(profile));

  return Object.freeze({
    profiles,
    byCardId,
    childrenByCardId,
    automaticProfiles,
    baseProfiles,
    signatureProfiles,
    commercialProfiles,
    familyProfiles,
    autonomousStyles,
    ancestorsOf,
    pathOf,
    isCommercial,
    isSignature,
    isFamily,
    isStyle,
    nearestFamily
  });
}

export { ALLOWED_TYPES, COMMERCIAL_TYPES, FAMILY_TYPE, STYLE_TYPES, TRANSVERSE_TYPE };