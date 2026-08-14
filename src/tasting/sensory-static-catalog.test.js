import assert from "node:assert/strict";
import test from "node:test";
import { buildSensoryPayload } from "../../scripts/build-sensory-payload.mjs";
import { sensoryProfiles } from "../data/sensory/sensory-profiles.js";
import { createSensoryMatcher } from "./sensory-matcher.js";

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

test("le build valide directement les 251 profils sans étape curated/derived", async () => {
  const payload = await buildSensoryPayload();
  assert.equal(payload.schemaVersion, 3);
  assert.equal(payload.totalCards, 251);
  assert.equal(payload.scorableCards, 223);
  assert.deepEqual(payload.roleCounts, { primary: 165, fallback: 29, overlay: 29, excluded: 28 });
  assert.equal(payload.verificationCounts.pending + payload.verificationCounts.verified, 251);
  assert.ok(!Object.hasOwn(payload, "sourceCounts"));
});

test("le matcher refuse explicitement un sous-catalogue de prototype", () => {
  assert.throws(
    () => createSensoryMatcher({ profiles: sensoryProfiles.slice(0, 40) }),
    /251 profils/
  );
});

test("quelques valeurs de migration restent matérialisées à l'identique avant leur revue documentaire", () => {
  const byId = new Map(sensoryProfiles.map((profile) => [profile.cardId, profile]));
  assert.deepEqual(byId.get("west-coast-ipa")?.structure?.sucrosite, [0, 0]);
  assert.equal(byId.get("west-coast-ipa")?.nose?.["resine-pin"], 3);
  assert.equal(byId.get("saison")?.nose?.["poivre-epices-levure"], 3);
  assert.equal(byId.get("dry-stout-irish-dry-stout")?.nose?.["cafe-torrefie"], 3);
});
