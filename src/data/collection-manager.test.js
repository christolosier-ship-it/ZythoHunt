import test from "node:test";
import assert from "node:assert/strict";

const data = await import("./collections.js");
const managerApi = await import("./collection-manager.js");

test("registry count", () => {
  assert.equal(data.collections.length, 9);
});

test("switch status", () => {
  const manager = managerApi.createCollectionManager(data.collectionBundles);
  const target = data.collectionBundles[0].collection.id;
  const result = manager.setActiveCollection(target);
  assert.equal(result.status, "active");
  assert.equal(manager.getActiveCollectionId(), target);
});
