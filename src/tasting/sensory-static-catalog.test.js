import assert from "node:assert/strict";
import test from "node:test";
import { buildSensoryPayload } from "../../scripts/build-sensory-payload.mjs";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";

const LAGER_COLLECTION_ID = "lagers-et-fermentations-basses";
const PALE_IPA_COLLECTION_ID = "pale-ales-bitters-et-ipa";
const lagerProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === LAGER_COLLECTION_ID);
const paleIpaProfiles = sensoryProfiles.filter(({ collectionId }) => collectionId === PALE_IPA_COLLECTION_ID);

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
  assert.equal(lagerProfiles.length, 45);
  lagerProfiles.forEach((profile) => {
    assert.equal(profile.verification.status, "verified", profile.cardId);
    assert.equal(profile.verification.reviewedAt, "2026-08-14", profile.cardId);
    assert.ok(profile.verification.sources.length > 0, profile.cardId);
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
  assert.equal(paleIpaProfiles.length, 36);
  paleIpaProfiles.forEach((profile) => {
    assert.equal(profile.verification.status, "verified", profile.cardId);
    assert.equal(profile.verification.reviewedAt, "2026-08-14", profile.cardId);
    assert.ok(profile.verification.sources.length > 0, profile.cardId);
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

test("le build valide directement les 251 profils sans étape curated/derived", async () => {
  const payload = await buildSensoryPayload();
  assert.equal(payload.schemaVersion, 3);
  assert.equal(payload.totalCards, 251);
  assert.equal(payload.scorableCards, 223);
  assert.deepEqual(payload.roleCounts, { primary: 165, fallback: 29, overlay: 29, excluded: 28 });
  assert.deepEqual(payload.verificationCounts, { pending: 170, verified: 81 });
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
  assert.equal(byId.get("saison")?.verification?.status, "pending");
  assert.equal(byId.get("dry-stout-irish-dry-stout")?.verification?.status, "pending");
});
