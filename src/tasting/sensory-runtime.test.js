import assert from "node:assert/strict";
import test from "node:test";
import { createSensoryRuntime } from "./sensory-runtime.js";

test("le runtime utilise directement le catalogue statique unique de 251 profils", async () => {
  const runtime = createSensoryRuntime();
  const profiles = await runtime.ensureProfiles();
  assert.equal(profiles.length, 251);
  assert.equal(runtime.getStatus().source, "static-catalog");
  assert.equal(runtime.getStatus().scorableProfiles, 223);
});

test("la recherche de styles provient du même catalogue sensoriel", async () => {
  const runtime = createSensoryRuntime();
  const results = await runtime.searchStyles("west coast", { limit: 5 });
  assert.ok(results.some(({ cardId }) => cardId === "west-coast-ipa"));
});

test("les cartes excluded restent associables manuellement mais ne sont pas scorables", async () => {
  const runtime = createSensoryRuntime();
  const results = await runtime.searchStyles("trappiste", { limit: 10 });
  const trappiste = results.find(({ cardId }) => cardId === "trappiste");
  assert.ok(trappiste);
  assert.equal(trappiste.role, "excluded");
});
