import assert from "node:assert/strict";
import test from "node:test";
import { createSensoryRuntime } from "./sensory-runtime.js";

test("le runtime retombe sur le même catalogue statique de 251 profils si l'index est indisponible", async () => {
  const runtime = createSensoryRuntime({
    indexUrl: "/beer-sensory-index.json",
    fetchImpl: async () => { throw new Error("offline"); }
  });
  const profiles = await runtime.ensureProfiles();
  assert.equal(profiles.length, 251);
  assert.equal(runtime.getStatus().source, "bundled-catalog");
});

test("la recherche de styles provient du catalogue sensoriel unique", async () => {
  const runtime = createSensoryRuntime({
    indexUrl: "/beer-sensory-index.json",
    fetchImpl: async () => { throw new Error("offline"); }
  });
  const results = await runtime.searchStyles("west coast", { limit: 5 });
  assert.ok(results.some(({ cardId }) => cardId === "west-coast-ipa"));
});
