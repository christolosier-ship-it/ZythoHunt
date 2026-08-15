import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";
import { createSensoryTaxonomy } from "./sensory-taxonomy.js";

const COLLECTIONS = Object.freeze({
  lagers: ["lagers-et-fermentations-basses", 45],
  paleIpa: ["pale-ales-bitters-et-ipa", 36],
  porterStout: ["porters-stouts", 22],
  belgianFrench: ["traditions-belges-et-francaises", 17],
  wheatRye: ["bieres-de-ble-et-de-seigle", 13],
  sourWild: ["bieres-acides-sauvages-et-spontanees", 21],
  amberStrong: ["ales-ambrees-brunes-maltees-et-fortes", 27],
  singular: ["styles-singuliers-historiques-et-hybrides", 40],
  commercial: ["appellations-commerciales", 30]
});

const profilesFor = ([collectionId]) => sensoryProfiles.filter((profile) => profile.collectionId === collectionId);
const byId = new Map(sensoryProfiles.map((profile) => [profile.cardId, profile]));
const taxonomy = createSensoryTaxonomy(sensoryProfiles);

function profile(id) {
  const result = byId.get(id);
  assert.ok(result, `Profil absent : ${id}`);
  return result;
}

function assertDocumentedCollection(collection, expectedLength) {
  const profiles = profilesFor(collection);
  assert.equal(profiles.length, expectedLength);
  profiles.forEach((entry) => {
    assert.equal(entry.verification.status, "verified", entry.cardId);
    assert.equal(entry.verification.reviewedAt, "2026-08-14", entry.cardId);
    assert.ok(entry.verification.sources.length > 0, entry.cardId);
  });
  return profiles;
}

function assertNoPositiveDescriptor(profiles, descriptorId) {
  profiles.forEach((entry) => {
    assert.equal(entry.nose?.[descriptorId], undefined, `${entry.cardId}: nez ${descriptorId}`);
    assert.equal(entry.palate?.[descriptorId], undefined, `${entry.cardId}: bouche ${descriptorId}`);
  });
}

test("le référentiel Dégustation contient exactement 251 profils statiques taxonomiques", () => {
  assert.equal(sensoryProfiles.length, 251);
  assert.ok(Object.isFrozen(sensoryProfiles));
  assert.ok(sensoryProfiles.every((entry) => Object.isFrozen(entry)));
  assert.ok(sensoryProfiles.every((entry) => Object.isFrozen(entry.appearance)));
  assert.ok(sensoryProfiles.every(({ schemaVersion }) => schemaVersion === 3));
  assert.ok(sensoryProfiles.every(({ type }) => ["F", "S", "SS", "T", "A", "R"].includes(type)));
  assert.ok(sensoryProfiles.every((entry) => entry.parentPrincipalId === null || typeof entry.parentPrincipalId === "string"));

  const keys = new Set(sensoryProfiles.map(({ collectionId, cardId }) => `${collectionId}:${cardId}`));
  const cardIds = new Set(sensoryProfiles.map(({ cardId }) => cardId));
  assert.equal(keys.size, 251);
  assert.equal(cardIds.size, 251);

  ["role", "source", "expert", "parentCardId"].forEach((legacyKey) => {
    assert.ok(sensoryProfiles.every((entry) => !Object.hasOwn(entry, legacyKey)), legacyKey);
  });
});

test("les 251 profils restent vérifiés, datés et sourcés", () => {
  Object.values(COLLECTIONS).forEach(([collectionId, expectedLength]) => {
    assertDocumentedCollection([collectionId], expectedLength);
  });
  assert.equal(sensoryProfiles.filter(({ verification }) => verification.status === "verified").length, 251);
  assert.equal(sensoryProfiles.filter(({ verification }) => verification.status === "pending").length, 0);
});

test("la taxonomie sépare familles, styles, signatures et appellations commerciales", () => {
  assert.equal(taxonomy.commercialProfiles.length, 30);
  assert.equal(taxonomy.automaticProfiles.length, 221);
  assert.ok(taxonomy.familyProfiles.length > 0);
  assert.ok(taxonomy.signatureProfiles.length > 0);
  assert.ok(taxonomy.autonomousStyles.length > 0);

  assert.equal(profile("lager").type, "F");
  assert.equal(profile("lager").parentPrincipalId, null);
  assert.equal(profile("pilsner").type, "F");
  assert.equal(profile("pilsner").parentPrincipalId, "lager");

  assert.equal(profile("ipa-india-pale-ale").type, "F");
  assert.equal(profile("ipa-india-pale-ale").parentPrincipalId, "pale-ale");
  assert.equal(profile("american-ipa").type, "S");
  assert.equal(profile("american-ipa").parentPrincipalId, "ipa-india-pale-ale");
  assert.equal(profile("west-coast-ipa").type, "SS");
  assert.equal(profile("west-coast-ipa").parentPrincipalId, "american-ipa");
  assert.equal(taxonomy.nearestFamily(profile("west-coast-ipa")).cardId, "ipa-india-pale-ale");

  assert.equal(profile("stout").type, "F");
  assert.equal(profile("imperial-stout").parentPrincipalId, "stout");
  assert.equal(profile("american-imperial-stout").parentPrincipalId, "imperial-stout");
  assert.equal(taxonomy.nearestFamily(profile("american-imperial-stout")).cardId, "stout");
});

test("les styles autonomes et catégories transversales gardent leur nature canonique", () => {
  const sahti = profile("sahti");
  assert.equal(sahti.type, "S");
  assert.equal(sahti.parentPrincipalId, null);
  assert.equal(taxonomy.nearestFamily(sahti), null);
  assert.ok(taxonomy.autonomousStyles.includes(sahti));

  const fruit = profile("fruit-beer");
  assert.equal(fruit.type, "T");
  assert.equal(taxonomy.isSignature(fruit), true);

  const greenTea = profile("green-tea-beer");
  assert.equal(greenTea.type, "SS");
  assert.equal(greenTea.parentPrincipalId, "tea-beer");
  assert.equal(taxonomy.isSignature(greenTea), true);

  const brett = profile("brett-beer");
  assert.equal(brett.type, "S");
  assert.equal(brett.parentPrincipalId, "wild-beer");
  assert.equal(taxonomy.isStyle(brett), true);
  assert.equal(taxonomy.isSignature(brett), false);
});

test("Collection 1 — les Lagers restent propres et discriminantes", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.lagers, 45);
  assertNoPositiveDescriptor(profiles, "funky-cuir-ferme");

  const helles = profile("munich-helles");
  const germanPils = profile("german-pilsner");
  const westCoastPils = profile("west-coast-pilsner");
  const dunkel = profile("munich-dunkel");
  const schwarzbier = profile("schwarzbier");
  const eisbock = profile("eisbock");

  assert.deepEqual(helles.structure.amertume, [1, 1]);
  assert.equal(helles.nose?.["caramel-toffee"], undefined);
  assert.ok(germanPils.nose["herbace-epice"] > helles.nose["herbace-epice"]);
  assert.equal(westCoastPils.nose["resine-pin"], 3);
  assert.equal(westCoastPils.nose.agrumes, 3);
  assert.ok(dunkel.nose["pain-biscuit"] > schwarzbier.nose["pain-biscuit"]);
  assert.ok(schwarzbier.nose["chocolat-cacao"] > dunkel.nose["chocolat-cacao"]);
  assert.deepEqual(eisbock.structure.corps, [4, 4]);
  assert.deepEqual(eisbock.structure.alcool, [4, 4]);
  assert.deepEqual(eisbock.structure.sucrosite, [4, 4]);
});

test("Collection 2 — Pale Ale, Bitter et IPA verrouillent leurs signatures", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.paleIpa, 36);
  assertNoPositiveDescriptor(profiles, "funky-cuir-ferme");

  const westCoast = profile("west-coast-ipa");
  const hazy = profile("neipa-juicy-hazy-ipa");
  const hazyDouble = profile("juicy-hazy-double-imperial-ipa");
  const brut = profile("brut-ipa");
  const bitter = profile("bitter");
  const genericIpa = profile("ipa-india-pale-ale");

  assert.deepEqual(westCoast.structure.sucrosite, [0, 0]);
  assert.deepEqual(westCoast.structure.corps, [1, 1]);
  assert.equal(westCoast.nose?.["caramel-toffee"], undefined);
  assert.ok(hazy.structure.corps[1] < hazyDouble.structure.corps[1]);
  assert.ok(hazy.structure.alcool[1] < hazyDouble.structure.alcool[1]);
  assert.ok(hazy.structure.sucrosite[1] < hazyDouble.structure.sucrosite[1]);
  assert.deepEqual(brut.structure.sucrosite, [0, 0]);
  assert.deepEqual(brut.structure.carbonatation, [4, 4]);
  assert.ok(bitter.structure.amertume[0] > 0);
  assert.ok(genericIpa.structure.amertume[0] >= 3);
});

test("Collection 3 — Stout et Porter séparent torréfaction, douceur et corps", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.porterStout, 22);
  assertNoPositiveDescriptor(profiles, "funky-cuir-ferme");

  const dry = profile("dry-stout-irish-dry-stout");
  const sweet = profile("sweet-milk-cream-stout");
  const oatmeal = profile("oatmeal-stout");
  const tropical = profile("tropical-stout");
  const foreign = profile("export-stout-foreign-extra-stout");
  const american = profile("american-stout");
  const smoke = profile("smoke-porter");
  const coffee = profile("coffee-stout-or-porter");

  assert.equal(dry.nose["cafe-torrefie"], 3);
  assert.ok(dry.structure.sucrosite[1] < sweet.structure.sucrosite[0]);
  assert.deepEqual(sweet.structure.corps, [4, 4]);
  assert.ok(oatmeal.structure.corps[0] >= 3);
  assert.ok(tropical.structure.sucrosite[0] > foreign.structure.sucrosite[0]);
  assert.ok(foreign.structure.amertume[0] > tropical.structure.amertume[0]);
  assert.equal(tropical.nose?.["fruits-tropicaux"], undefined);
  assert.equal(american.nose["resine-pin"], 3);
  assert.equal(smoke.nose.fume, 3);
  assert.equal(smoke.nose?.["boise-vanille"], undefined);
  assert.deepEqual(coffee.structure, {});
  assert.deepEqual(coffee.keyMarkers, ["cafe-torrefie"]);
  assert.equal(coffee.type, "T");
  assert.equal(taxonomy.isSignature(coffee), true);
});

test("Collection 4 — les traditions belges réservent le funk aux styles qui l'autorisent", () => {
  assertDocumentedCollection(COLLECTIONS.belgianFrench, 17);
  const golden = profile("belgian-golden-strong-ale-belgian-strong-blonde-ale");
  const tripel = profile("tripel");
  const quadrupel = profile("quadrupel");
  const saison = profile("saison");
  const specialtySaison = profile("specialty-saison");
  const table = profile("belgian-table-beer");
  const fruit = profile("belgian-fruit-beer");

  assert.equal(profile("belgian-pale-ale").nose?.["funky-cuir-ferme"], undefined);
  assert.equal(golden.nose?.["funky-cuir-ferme"], undefined);
  assert.equal(profile("american-belgo-ale").nose?.["funky-cuir-ferme"], undefined);
  assert.equal(saison.nose["funky-cuir-ferme"], 1);
  assert.equal(specialtySaison.nose["funky-cuir-ferme"], 2);
  assert.deepEqual(golden.structure.corps, [1, 1]);
  assert.deepEqual(golden.structure.carbonatation, [4, 4]);
  assert.ok(tripel.nose["poivre-epices-levure"] > golden.nose["poivre-epices-levure"]);
  assert.deepEqual(quadrupel.structure.corps, [4, 4]);
  assert.deepEqual(quadrupel.structure.alcool, [4, 4]);
  assert.equal(quadrupel.nose["baies-raisin"], 3);
  assert.deepEqual(saison.structure.sucrosite, [0, 0]);
  assert.deepEqual(table.structure.alcool, [0, 0]);
  assert.equal(fruit.type, "S");
  assert.equal(fruit.parentPrincipalId, "belgian-ale-ale-belge");
  assert.equal(taxonomy.isStyle(fruit), true);
});

test("Collection 5 — blé et seigle séparent levure bavaroise et fermentation propre", () => {
  assertDocumentedCollection(COLLECTIONS.wheatRye, 13);
  const american = profile("american-wheat-beer");
  const weiss = profile("weissbier-hefeweizen");
  const kristall = profile("kristallweizen");
  const wheatwine = profile("wheatwine");
  const roggen = profile("roggenbier-german-rye-ale");
  const fruit = profile("fruit-wheat-beer");

  assert.equal(american.nose?.banane, undefined);
  assert.equal(american.nose?.["clou-girofle"], undefined);
  assert.equal(weiss.nose.banane, 3);
  assert.equal(weiss.nose["clou-girofle"], 3);
  assert.deepEqual(weiss.structure.carbonatation, [4, 4]);
  assert.deepEqual(kristall.appearance.clarity, ["claire"]);
  assert.equal(wheatwine.nose?.banane, undefined);
  assert.deepEqual(wheatwine.structure.corps, [4, 4]);
  assert.equal(roggen.nose.epices, 3);
  assert.equal(roggen.nose.banane, 2);
  assert.equal(fruit.type, "S");
  assert.equal(fruit.parentPrincipalId, "biere-de-ble-wheat-beer");
  assert.equal(taxonomy.isStyle(fruit), true);
  assert.equal(fruit.nose?.["salin-mineral"], undefined);
});

test("Collection 6 — acide, Brett et fermentation mixte restent distincts", () => {
  assertDocumentedCollection(COLLECTIONS.sourWild, 21);
  const berliner = profile("berliner-weisse");
  const gose = profile("gose");
  const flanders = profile("flanders-red-ale");
  const oudBruin = profile("oud-bruin");
  const lambic = profile("lambic");
  const gueuze = profile("gueuze");
  const brett = profile("brett-beer");
  const mixed = profile("mixed-culture-brett-beer");
  const straight = profile("american-sour-ale");

  assert.deepEqual(berliner.structure.carbonatation, [4, 4]);
  assert.equal(berliner.nose?.["funky-cuir-ferme"], undefined);
  assert.equal(gose.nose["salin-mineral"], 1);
  assert.equal(flanders.nose["vinaigre-acetique"], 1);
  assert.equal(oudBruin.nose?.["vinaigre-acetique"], undefined);
  assert.equal(lambic.nose?.["vinaigre-acetique"], undefined);
  assert.deepEqual(lambic.structure.carbonatation, [0, 1]);
  assert.deepEqual(gueuze.structure.carbonatation, [4, 4]);
  assert.equal(brett.nose?.["lactique-yaourt"], undefined);
  assert.deepEqual(brett.structure.acidite, [0, 1]);
  assert.equal(brett.type, "S");
  assert.equal(brett.parentPrincipalId, "wild-beer");
  assert.equal(taxonomy.isSignature(brett), false);
  assert.equal(mixed.nose["lactique-yaourt"], 2);
  assert.equal(mixed.nose["funky-cuir-ferme"], 3);
  assert.equal(straight.nose?.["funky-cuir-ferme"], undefined);
});

test("Collection 7 — ales maltées et fortes distinguent traditions britanniques, écossaises et américaines", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.amberStrong, 27);
  const scottishIds = ["scottish-light-ale", "scottish-heavy-ale", "scottish-export-ale", "scotch-ale-wee-heavy"];
  scottishIds.forEach((id) => assert.equal(profile(id).nose?.fume, undefined, id));

  assert.equal(profile("peated-scotch-ale").nose.fume, 3);
  assert.deepEqual(profile("london-brown-ale").structure.sucrosite, [4, 4]);
  assert.deepEqual(profile("london-brown-ale").structure.alcool, [0, 1]);
  assert.equal(profile("american-barley-wine").nose["resine-pin"], 3);
  assert.equal(profile("british-barley-wine").nose?.["resine-pin"], undefined);
  assert.deepEqual(profile("altbier").structure.amertume, [3, 3]);
  assert.deepEqual(profile("altbier").appearance.clarity, ["claire"]);
  assertNoPositiveDescriptor(profiles.filter(({ cardId }) => cardId === "altbier"), "funky-cuir-ferme");
});

test("Collection 8 — procédés, ingrédients, fumée, bois et vieillissement ne sont plus confondus", () => {
  assertDocumentedCollection(COLLECTIONS.singular, 40);
  const kentucky = profile("kentucky-common");
  const grodziskie = profile("grodziskie-piwo-grodziskie");
  const aged = profile("aged-beer");
  const wood = profile("wood-and-barrel-aged-beer");
  const smoke = profile("rauchbier-smoke-beer");

  assert.deepEqual(kentucky.structure.acidite, [0, 0]);
  assert.equal(kentucky.nose?.["lactique-yaourt"], undefined);
  assert.equal(kentucky.nose?.["funky-cuir-ferme"], undefined);
  assert.equal(grodziskie.nose.fume, 3);
  assert.equal(grodziskie.nose?.["boise-vanille"], undefined);
  assert.equal(aged.nose?.["boise-vanille"], undefined);
  assert.equal(wood.nose["boise-vanille"], 3);
  assert.equal(smoke.nose.fume, 3);
  assert.equal(smoke.nose?.["boise-vanille"], undefined);
  assert.deepEqual(smoke.structure, {});
  assert.deepEqual(profile("fruit-beer").structure, {});
  assert.deepEqual(profile("coffee-beer").structure, {});
  assert.deepEqual(profile("fresh-hop-beer").structure, {});
  assert.deepEqual(profile("alternative-grain-beer").structure, {});

  ["fruit-beer", "coffee-beer", "fresh-hop-beer", "alternative-grain-beer", "wood-and-barrel-aged-beer", "aged-beer"].forEach((id) => {
    assert.equal(taxonomy.isSignature(profile(id)), true, id);
  });
});

test("Collection 9 — les 30 appellations A/R restent documentées sans goût inventé", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.commercial, 30);
  assert.ok(profiles.every(({ type }) => type === "A" || type === "R"));
  assert.ok(profiles.every((entry) => taxonomy.isCommercial(entry)));
  assert.ok(profiles.every((entry) => !taxonomy.automaticProfiles.includes(entry)));

  ["biere-dabbaye", "trappiste", "biere-artisanale-craft-beer", "biere-biologique-bio", "biere-de-garde-mention-legale-francaise", "pur-malt", "biere-sans-gluten"].forEach((id) => {
    const entry = profile(id);
    assert.deepEqual(entry.nose, {}, id);
    assert.deepEqual(entry.palate, {}, id);
    assert.deepEqual(entry.structure, {}, id);
  });

  assert.deepEqual(profile("trappiste").aliases, ["Trappist"]);
  assert.deepEqual(profile("biere-artisanale-craft-beer").aliases, ["Bière artisanale", "Craft Beer"]);
  assert.deepEqual(profile("biere-de-printemps-biere-de-mars").aliases, ["Bière de printemps", "Bière de mars", "Spring Beer"]);
  assert.deepEqual(profile("quadruple").aliases, []);
  assert.deepEqual(profile("panache").aliases, []);

  assert.deepEqual(profile("blonde").appearance.colors, ["paille", "dore"]);
  assert.deepEqual(profile("blonde").nose, {});
  assert.deepEqual(profile("biere-sans-alcool").structure.alcool, [0, 0]);
  assert.deepEqual(profile("0-0-pourcent").structure.alcool, [0, 0]);

  const panache = profile("panache");
  const radler = profile("radler-shandy");
  assert.equal(panache.type, "R");
  assert.deepEqual(panache.nose, {});
  assert.deepEqual(panache.structure.alcool, [0, 1]);
  assert.equal(radler.type, "A");
  assert.equal(radler.nose.agrumes, 3);
  assert.deepEqual(radler.structure.alcool, [0, 1]);
  assert.deepEqual(radler.structure.carbonatation, [3, 4]);
});

test("le matcher refuse explicitement un sous-catalogue de prototype", () => {
  assert.throws(
    () => createSensoryMatcher({ profiles: sensoryProfiles.slice(0, 40) }),
    /251 profils/
  );
});
