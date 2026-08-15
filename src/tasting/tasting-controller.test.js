import assert from "node:assert/strict";
import test from "node:test";
import { createTastingController } from "./tasting-controller.js";

function createMemoryStorage() {
  const values = new Map();
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    }
  };
}

test("le contrôleur recherche le catalogue canonique et compare directement un style", async () => {
  const controller = createTastingController({ storage: createMemoryStorage() });
  const styles = await controller.searchStyles("West Coast IPA", { limit: 12 });
  const westCoast = styles.find(({ cardId }) => cardId === "west-coast-ipa");

  assert.ok(westCoast);
  assert.equal(westCoast.name, "West Coast IPA");
  assert.equal(westCoast.role, "primary");

  const comparison = controller.compareToStyle({
    appearance: { color: "dore", clarity: "claire" },
    nose: { agrumes: 3, "resine-pin": 3 },
    palate: { agrumes: 3, "resine-pin": 3 },
    structure: { amertume: 4, corps: 1, sucrosite: 0 },
    finish: ["seche"]
  }, westCoast);

  assert.equal(comparison.available, true);
  assert.ok(Array.isArray(comparison.shared));
  assert.ok(Array.isArray(comparison.notObserved));
  assert.ok(Array.isArray(comparison.unexpected));

  assert.deepEqual(
    controller.compareToStyle({}, null),
    { available: false, summary: "Aucun style Brassopédie n’est lié à cette dégustation." }
  );
});
