import assert from "node:assert/strict";
import test from "node:test";
import { sensoryProfiles } from "../data/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";

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

function assertDocumentedCollection(collection, expectedLength) {
  const profiles = profilesFor(collection);
  assert.equal(profiles.length, expectedLength);
  profiles.forEach((profile) => {
    assert.equal(profile.verification.status, "verified", profile.cardId);
    assert.equal(profile.verification.reviewedAt, "2026-08-14", profile.cardId);
    assert.ok(profile.verification.sources.length > 0, profile.cardId);
  });
  return profiles;
}

function assertNoPositiveDescriptor(profiles, descriptorId) {
  profiles.forEach((profile) => {
    assert.equal(profile.nose?.[descriptorId], undefined, `${profile.cardId}: nez ${descriptorId}`);
    assert.equal(profile.palate?.[descriptorId], undefined, `${profile.cardId}: bouche ${descriptorId}`);
  });
}

test("le référentiel Dégustation contient exactement 251 profils statiques homogènes", () => {
  assert.equal(sensoryProfiles.length, 251);
  assert.ok(Object.isFrozen(sensoryProfiles));
  assert.ok(sensoryProfiles.every((profile) => Object.isFrozen(profile)));
  assert.ok(sensoryProfiles.every((profile) => Object.isFrozen(profile.appearance)));
  const keys = new Set(sensoryProfiles.map(({ collectionId, cardId }) => `${collectionId}:${cardId}`));
  assert.equal(keys.size, 251);
  assert.ok(sensoryProfiles.every(({ schemaVersion }) => schemaVersion === 2));
  assert.ok(sensoryProfiles.every((profile) => !Object.hasOwn(profile, "source")));
  assert.ok(sensoryProfiles.every((profile) => !Object.hasOwn(profile, "expert")));
  assert.ok(sensoryProfiles.every((profile) => !Object.hasOwn(profile, "parentCardId")));
});

test("les 251 profils sont vérifiés, datés et sourcés", () => {
  Object.values(COLLECTIONS).forEach(([collectionId, expectedLength]) => {
    assertDocumentedCollection([collectionId], expectedLength);
  });
  assert.equal(sensoryProfiles.filter(({ verification }) => verification.status === "verified").length, 251);
  assert.equal(sensoryProfiles.filter(({ verification }) => verification.status === "pending").length, 0);
});

test("les rôles du catalogue restent inchangés", () => {
  const roleCounts = sensoryProfiles.reduce((counts, profile) => {
    counts[profile.role] = (counts[profile.role] || 0) + 1;
    return counts;
  }, { primary: 0, fallback: 0, overlay: 0, excluded: 0 });

  assert.deepEqual(roleCounts, { primary: 165, fallback: 29, overlay: 29, excluded: 28 });
  assert.equal(sensoryProfiles.length - roleCounts.excluded, 223);
});

test("Collection 1 — les Lagers restent propres et discriminantes", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.lagers, 45);
  assertNoPositiveDescriptor(profiles, "funky-cuir-ferme");

  const helles = byId.get("munich-helles");
  const germanPils = byId.get("german-pilsner");
  const westCoastPils = byId.get("west-coast-pilsner");
  const dunkel = byId.get("munich-dunkel");
  const schwarzbier = byId.get("schwarzbier");
  const eisbock = byId.get("eisbock");

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

  const westCoast = byId.get("west-coast-ipa");
  const hazy = byId.get("neipa-juicy-hazy-ipa");
  const hazyDouble = byId.get("juicy-hazy-double-imperial-ipa");
  const brut = byId.get("brut-ipa");
  const bitter = byId.get("bitter");
  const genericIpa = byId.get("ipa-india-pale-ale");

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

  const dry = byId.get("dry-stout-irish-dry-stout");
  const sweet = byId.get("sweet-milk-cream-stout");
  const oatmeal = byId.get("oatmeal-stout");
  const tropical = byId.get("tropical-stout");
  const foreign = byId.get("export-stout-foreign-extra-stout");
  const american = byId.get("american-stout");
  const smoke = byId.get("smoke-porter");
  const coffee = byId.get("coffee-stout-or-porter");

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
});

test("Collection 4 — les traditions belges réservent le funk aux styles qui l'autorisent", () => {
  assertDocumentedCollection(COLLECTIONS.belgianFrench, 17);
  const golden = byId.get("belgian-golden-strong-ale-belgian-strong-blonde-ale");
  const tripel = byId.get("tripel");
  const quadrupel = byId.get("quadrupel");
  const saison = byId.get("saison");
  const specialtySaison = byId.get("specialty-saison");
  const table = byId.get("belgian-table-beer");
  const fruit = byId.get("belgian-fruit-beer");

  assert.equal(byId.get("belgian-pale-ale").nose?.["funky-cuir-ferme"], undefined);
  assert.equal(golden.nose?.["funky-cuir-ferme"], undefined);
  assert.equal(byId.get("american-belgo-ale").nose?.["funky-cuir-ferme"], undefined);
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
  assert.equal(fruit.role, "overlay");
});

test("Collection 5 — blé et seigle séparent levure bavaroise et fermentation propre", () => {
  assertDocumentedCollection(COLLECTIONS.wheatRye, 13);
  const american = byId.get("american-wheat-beer");
  const weiss = byId.get("weissbier-hefeweizen");
  const kristall = byId.get("kristallweizen");
  const wheatwine = byId.get("wheatwine");
  const roggen = byId.get("roggenbier-german-rye-ale");
  const fruit = byId.get("fruit-wheat-beer");

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
  assert.equal(fruit.role, "overlay");
  assert.equal(fruit.nose?.["salin-mineral"], undefined);
});

test("Collection 6 — acide, Brett et fermentation mixte restent distincts", () => {
  assertDocumentedCollection(COLLECTIONS.sourWild, 21);
  const berliner = byId.get("berliner-weisse");
  const gose = byId.get("gose");
  const flanders = byId.get("flanders-red-ale");
  const oudBruin = byId.get("oud-bruin");
  const lambic = byId.get("lambic");
  const gueuze = byId.get("gueuze");
  const brett = byId.get("brett-beer");
  const mixed = byId.get("mixed-culture-brett-beer");
  const straight = byId.get("american-sour-ale");

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
  assert.equal(mixed.nose["lactique-yaourt"], 2);
  assert.equal(mixed.nose["funky-cuir-ferme"], 3);
  assert.equal(straight.nose?.["funky-cuir-ferme"], undefined);
});

test("Collection 7 — ales maltées et fortes distinguent traditions britanniques, écossaises et américaines", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.amberStrong, 27);
  const scottishIds = ["scottish-light-ale", "scottish-heavy-ale", "scottish-export-ale", "scotch-ale-wee-heavy"];
  scottishIds.forEach((id) => assert.equal(byId.get(id).nose?.fume, undefined, id));

  assert.equal(byId.get("peated-scotch-ale").nose.fume, 3);
  assert.deepEqual(byId.get("london-brown-ale").structure.sucrosite, [4, 4]);
  assert.deepEqual(byId.get("london-brown-ale").structure.alcool, [0, 1]);
  assert.equal(byId.get("american-barley-wine").nose["resine-pin"], 3);
  assert.equal(byId.get("british-barley-wine").nose?.["resine-pin"], undefined);
  assert.deepEqual(byId.get("altbier").structure.amertume, [3, 3]);
  assert.deepEqual(byId.get("altbier").appearance.clarity, ["claire"]);
  assertNoPositiveDescriptor(profiles.filter(({ cardId }) => cardId === "altbier"), "funky-cuir-ferme");
});

test("Collection 8 — procédés, ingrédients, fumée, bois et vieillissement ne sont plus confondus", () => {
  assertDocumentedCollection(COLLECTIONS.singular, 40);
  const kentucky = byId.get("kentucky-common");
  const grodziskie = byId.get("grodziskie-piwo-grodziskie");
  const aged = byId.get("aged-beer");
  const wood = byId.get("wood-and-barrel-aged-beer");
  const smoke = byId.get("rauchbier-smoke-beer");

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
  assert.deepEqual(byId.get("fruit-beer").structure, {});
  assert.deepEqual(byId.get("coffee-beer").structure, {});
  assert.deepEqual(byId.get("fresh-hop-beer").structure, {});
  assert.deepEqual(byId.get("alternative-grain-beer").structure, {});
});

test("Collection 9 — 28 appellations restent non scorables et les libellés n'inventent pas de goût", () => {
  const profiles = assertDocumentedCollection(COLLECTIONS.commercial, 30);
  assert.equal(profiles.filter(({ role }) => role === "excluded").length, 28);
  assert.equal(profiles.filter(({ role }) => role === "fallback").length, 2);

  ["biere-dabbaye", "trappiste", "biere-artisanale-craft-beer", "biere-biologique-bio", "biere-de-garde-mention-legale-francaise", "pur-malt", "biere-sans-gluten"].forEach((id) => {
    const profile = byId.get(id);
    assert.deepEqual(profile.nose, {}, id);
    assert.deepEqual(profile.palate, {}, id);
    assert.deepEqual(profile.structure, {}, id);
  });

  assert.deepEqual(byId.get("trappiste").aliases, ["Trappist"]);
  assert.deepEqual(byId.get("biere-artisanale-craft-beer").aliases, ["Bière artisanale", "Craft Beer"]);
  assert.deepEqual(byId.get("biere-de-printemps-biere-de-mars").aliases, ["Bière de printemps", "Bière de mars", "Spring Beer"]);
  assert.deepEqual(byId.get("quadruple").aliases, []);
  assert.deepEqual(byId.get("panache").aliases, []);

  assert.deepEqual(byId.get("blonde").appearance.colors, ["paille", "dore"]);
  assert.deepEqual(byId.get("blonde").nose, {});
  assert.deepEqual(byId.get("biere-sans-alcool").structure.alcool, [0, 0]);
  assert.deepEqual(byId.get("0-0-pourcent").structure.alcool, [0, 0]);

  const panache = byId.get("panache");
  const radler = byId.get("radler-shandy");
  assert.equal(panache.role, "fallback");
  assert.deepEqual(panache.nose, {});
  assert.deepEqual(panache.structure.alcool, [0, 1]);
  assert.equal(radler.role, "fallback");
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
