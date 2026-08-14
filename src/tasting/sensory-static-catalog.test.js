import assert from "node:assert/strict";
import test from "node:test";
import { buildSensoryPayload } from "../../scripts/build-sensory-payload.mjs";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";

const LAGER_COLLECTION_ID = "lagers-et-fermentations-basses";
const PALE_IPA_COLLECTION_ID = "pale-ales-bitters-et-ipa";
const PORTER_STOUT_COLLECTION_ID = "porters-stouts";
const BELGIAN_FRENCH_COLLECTION_ID = "traditions-belges-et-francaises";
const WHEAT_RYE_COLLECTION_ID = "bieres-de-ble-et-de-seigle";
const SOUR_WILD_COLLECTION_ID = "bieres-acides-sauvages-et-spontanees";

const lagerProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === LAGER_COLLECTION_ID);
const paleIpaProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === PALE_IPA_COLLECTION_ID);
const porterStoutProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === PORTER_STOUT_COLLECTION_ID);
const belgianFrenchProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === BELGIAN_FRENCH_COLLECTION_ID);
const wheatRyeProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === WHEAT_RYE_COLLECTION_ID);
const sourWildProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === SOUR_WILD_COLLECTION_ID);

function assertDocumentedCollection(profiles, expectedLength) {
  assert.equal(profiles.length, expectedLength);
  profiles.forEach((profile) => {
    assert.equal(profile.verification.status, "verified", profile.cardId);
    assert.equal(profile.verification.reviewedAt, "2026-08-14", profile.cardId);
    assert.ok(profile.verification.sources.length > 0, profile.cardId);
  });
}

test("le référentiel Dégustation contient exactement 251 profils statiques homogènes", () => {
  assert.equal(sensoryProfiles.length, 251);
  const keys = new Set(sensoryProfiles.map(({ collectionId, cardId }) => `${collectionId}:${cardId}`));
  assert.equal(keys.size, 251);
  assert.ok(sensoryProfiles.every(({ schemaVersion }) => schemaVersion === 2));
  assert.ok(sensoryProfiles.every((profile) => !Object.hasOwn(profile, "source")));
  assert.ok(sensoryProfiles.every((profile) => !Object.hasOwn(profile, "expert")));
  assert.ok(sensoryProfiles.every((profile) => !Object.hasOwn(profile, "parentCardId")));
});

test("aucun profil provisoire n'est présenté comme vérifié sans source", () => {
  sensoryProfiles.forEach((profile) => {
    assert.ok(["pending", "verified"].includes(profile.verification?.status));
    if (profile.verification.status === "verified") {
      assert.ok(profile.verification.sources.length > 0, profile.cardId);
      assert.ok(profile.verification.reviewedAt, profile.cardId);
    }
  });
});

test("la Collection 1 possède 45 profils documentés et aucun résidu funky positif", () => {
  assertDocumentedCollection(lagerProfiles, 45);
  lagerProfiles.forEach((profile) => {
    assert.equal(profile.nose?.["funky-cuir-ferme"], undefined, `${profile.cardId}: nez`);
    assert.equal(profile.palate?.["funky-cuir-ferme"], undefined, `${profile.cardId}: bouche`);
  });
});

test("les signatures étalons de la Collection 1 restent discriminantes", () => {
  const byId = new Map(lagerProfiles.map((profile) => [profile.cardId, profile]));
  const helles = byId.get("munich-helles");
  const germanPils = byId.get("german-pilsner");
  const westCoastPils = byId.get("west-coast-pilsner");
  const dunkel = byId.get("munich-dunkel");
  const schwarzbier = byId.get("schwarzbier");
  const eisbock = byId.get("eisbock");

  assert.deepEqual(helles.structure.amertume, [1, 1]);
  assert.equal(helles.nose?.["caramel-toffee"], undefined);
  assert.ok((germanPils.nose?.["herbace-epice"] || 0) > (helles.nose?.["herbace-epice"] || 0));
  assert.equal(westCoastPils.nose?.["resine-pin"], 3);
  assert.equal(westCoastPils.nose?.agrumes, 3);
  assert.ok((dunkel.nose?.["pain-biscuit"] || 0) > (schwarzbier.nose?.["pain-biscuit"] || 0));
  assert.ok((schwarzbier.nose?.["chocolat-cacao"] || 0) > (dunkel.nose?.["chocolat-cacao"] || 0));
  assert.deepEqual(eisbock.structure.corps, [4, 4]);
  assert.deepEqual(eisbock.structure.alcool, [4, 4]);
  assert.deepEqual(eisbock.structure.sucrosite, [4, 4]);
});

test("la Collection 2 possède 36 profils documentés sans faux caractère funky", () => {
  assertDocumentedCollection(paleIpaProfiles, 36);
  paleIpaProfiles.forEach((profile) => {
    assert.equal(profile.nose?.["funky-cuir-ferme"], undefined, `${profile.cardId}: nez`);
    assert.equal(profile.palate?.["funky-cuir-ferme"], undefined, `${profile.cardId}: bouche`);
  });
});

test("les signatures étalons de la Collection 2 verrouillent les familles IPA", () => {
  const byId = new Map(paleIpaProfiles.map((profile) => [profile.cardId, profile]));
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

test("la Collection 3 possède 22 profils documentés sans résidu funky positif", () => {
  assertDocumentedCollection(porterStoutProfiles, 22);
  porterStoutProfiles.forEach((profile) => {
    assert.equal(profile.nose?.["funky-cuir-ferme"], undefined, `${profile.cardId}: nez`);
    assert.equal(profile.palate?.["funky-cuir-ferme"], undefined, `${profile.cardId}: bouche`);
  });
});

test("les signatures étalons de la Collection 3 séparent les grandes familles de Stout et Porter", () => {
  const byId = new Map(porterStoutProfiles.map((profile) => [profile.cardId, profile]));
  const dry = byId.get("dry-stout-irish-dry-stout");
  const sweet = byId.get("sweet-milk-cream-stout");
  const oatmeal = byId.get("oatmeal-stout");
  const tropical = byId.get("tropical-stout");
  const foreign = byId.get("export-stout-foreign-extra-stout");
  const american = byId.get("american-stout");
  const smoke = byId.get("smoke-porter");
  const coffee = byId.get("coffee-stout-or-porter");

  assert.equal(dry.nose?.["cafe-torrefie"], 3);
  assert.ok(dry.structure.sucrosite[1] < sweet.structure.sucrosite[0]);
  assert.deepEqual(sweet.structure.corps, [4, 4]);
  assert.ok(oatmeal.structure.corps[0] >= 3);
  assert.ok(tropical.structure.sucrosite[0] > foreign.structure.sucrosite[0]);
  assert.ok(foreign.structure.amertume[0] > tropical.structure.amertume[0]);
  assert.equal(tropical.nose?.["fruits-tropicaux"], undefined);
  assert.equal(american.nose?.["resine-pin"], 3);
  assert.equal(smoke.nose?.fume, 3);
  assert.equal(smoke.nose?.["boise-vanille"], undefined);
  assert.deepEqual(coffee.structure, {});
  assert.deepEqual(coffee.keyMarkers, ["cafe-torrefie"]);
});

test("la Collection 4 possède 17 profils documentés et réserve le funk aux styles qui l'autorisent", () => {
  assertDocumentedCollection(belgianFrenchProfiles, 17);
  const byId = new Map(belgianFrenchProfiles.map((profile) => [profile.cardId, profile]));
  assert.equal(byId.get("belgian-pale-ale").nose?.["funky-cuir-ferme"], undefined);
  assert.equal(byId.get("belgian-golden-strong-ale-belgian-strong-blonde-ale").nose?.["funky-cuir-ferme"], undefined);
  assert.equal(byId.get("american-belgo-ale").nose?.["funky-cuir-ferme"], undefined);
  assert.equal(byId.get("saison").nose?.["funky-cuir-ferme"], 1);
  assert.equal(byId.get("specialty-saison").nose?.["funky-cuir-ferme"], 2);
});

test("les signatures étalons de la Collection 4 séparent Golden Strong, Tripel, Quadrupel et Saison", () => {
  const byId = new Map(belgianFrenchProfiles.map((profile) => [profile.cardId, profile]));
  const golden = byId.get("belgian-golden-strong-ale-belgian-strong-blonde-ale");
  const tripel = byId.get("tripel");
  const quadrupel = byId.get("quadrupel");
  const saison = byId.get("saison");
  const table = byId.get("belgian-table-beer");
  const fruit = byId.get("belgian-fruit-beer");

  assert.deepEqual(golden.structure.corps, [1, 1]);
  assert.deepEqual(golden.structure.carbonatation, [4, 4]);
  assert.ok((tripel.nose?.["poivre-epices-levure"] || 0) > (golden.nose?.["poivre-epices-levure"] || 0));
  assert.deepEqual(quadrupel.structure.corps, [4, 4]);
  assert.deepEqual(quadrupel.structure.alcool, [4, 4]);
  assert.equal(quadrupel.nose?.["baies-raisin"], 3);
  assert.deepEqual(saison.structure.sucrosite, [0, 0]);
  assert.ok(saison.structure.amertume[1] >= 3);
  assert.deepEqual(table.structure.alcool, [0, 0]);
  assert.equal(fruit.role, "overlay");
  assert.ok(fruit.keyMarkers.includes("fruits-rouges"));
});

test("la Collection 5 possède 13 profils documentés et sépare levures bavaroises et fermentations propres", () => {
  assertDocumentedCollection(wheatRyeProfiles, 13);
  const byId = new Map(wheatRyeProfiles.map((profile) => [profile.cardId, profile]));
  const american = byId.get("american-wheat-beer");
  const weiss = byId.get("weissbier-hefeweizen");
  const kristall = byId.get("kristallweizen");
  const wheatwine = byId.get("wheatwine");
  const roggen = byId.get("roggenbier-german-rye-ale");
  const fruit = byId.get("fruit-wheat-beer");

  assert.equal(american.nose?.banane, undefined);
  assert.equal(american.nose?.["clou-girofle"], undefined);
  assert.equal(weiss.nose?.banane, 3);
  assert.equal(weiss.nose?.["clou-girofle"], 3);
  assert.deepEqual(weiss.structure.carbonatation, [4, 4]);
  assert.deepEqual(kristall.appearance.clarity, ["claire"]);
  assert.equal(kristall.nose?.["funky-cuir-ferme"], undefined);
  assert.equal(wheatwine.nose?.banane, undefined);
  assert.equal(wheatwine.nose?.["clou-girofle"], undefined);
  assert.deepEqual(wheatwine.structure.corps, [4, 4]);
  assert.equal(roggen.nose?.epices, 3);
  assert.equal(roggen.nose?.banane, 2);
  assert.equal(fruit.role, "overlay");
  assert.equal(fruit.nose?.["salin-mineral"], undefined);
  assert.equal(fruit.nose?.["funky-cuir-ferme"], undefined);
});

test("la Collection 6 possède 21 profils documentés et distingue acide, Brett et fermentation mixte", () => {
  assertDocumentedCollection(sourWildProfiles, 21);
  const byId = new Map(sourWildProfiles.map((profile) => [profile.cardId, profile]));
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
  assert.ok(gose.structure.acidite[1] < berliner.structure.acidite[1] + 1);
  assert.equal(gose.nose?.["salin-mineral"], 1);
  assert.equal(flanders.nose?.["vinaigre-acetique"], 1);
  assert.equal(oudBruin.nose?.["vinaigre-acetique"], undefined);
  assert.equal(lambic.nose?.["vinaigre-acetique"], undefined);
  assert.deepEqual(lambic.structure.carbonatation, [0, 1]);
  assert.deepEqual(gueuze.structure.carbonatation, [4, 4]);
  assert.equal(brett.nose?.["lactique-yaourt"], undefined);
  assert.deepEqual(brett.structure.acidite, [0, 1]);
  assert.equal(mixed.nose?.["lactique-yaourt"], 2);
  assert.equal(mixed.nose?.["funky-cuir-ferme"], 3);
  assert.equal(straight.nose?.["funky-cuir-ferme"], undefined);
  assert.equal(straight.nose?.["lactique-yaourt"], 3);
});

test("le build valide directement les 251 profils sans étape curated/derived", async () => {
  const payload = await buildSensoryPayload();
  assert.equal(payload.schemaVersion, 3);
  assert.equal(payload.totalCards, 251);
  assert.equal(payload.scorableCards, 223);
  assert.deepEqual(payload.roleCounts, { primary: 165, fallback: 29, overlay: 29, excluded: 28 });
  assert.deepEqual(payload.verificationCounts, { pending: 97, verified: 154 });
  assert.ok(!Object.hasOwn(payload, "sourceCounts"));
});

test("le matcher refuse explicitement un sous-catalogue de prototype", () => {
  assert.throws(
    () => createSensoryMatcher({ profiles: sensoryProfiles.slice(0, 40) }),
    /251 profils/
  );
});

test("les profils encore pending restent matérialisés jusqu'à leur revue documentaire", () => {
  const byId = new Map(sensoryProfiles.map((profile) => [profile.cardId, profile]));
  assert.equal(byId.get("old-ale")?.verification?.status, "pending");
});
