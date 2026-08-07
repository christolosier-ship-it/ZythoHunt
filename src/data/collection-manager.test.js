import test from "node:test";
import assert from "node:assert/strict";

const data = await import("./collections.js");
const managerApi = await import("./collection-manager.js");

test("registry exposes the current public collections without hardcoding the future total", () => {
  assert.ok(data.collections.length >= 9);
});

test("switch status", () => {
  const manager = managerApi.createCollectionManager(data.collectionBundles);
  const target = data.collectionBundles[0].collection.id;
  const result = manager.setActiveCollection(target);
  assert.equal(result.status, "active");
  assert.equal(manager.getActiveCollectionId(), target);
});

test("hidden collections stay addressable while remaining absent from normal navigation", () => {
  const publicBundle = { collection: { id: "public", order: 10 } };
  const secretBundle = { collection: { id: "secret", order: 20, hiddenFromNavigation: true } };
  const manager = managerApi.createCollectionManager([publicBundle, secretBundle]);

  assert.deepEqual(manager.listCollections().map((collection) => collection.id), ["public"]);
  assert.deepEqual(manager.listCollections({ includeHidden: true }).map((collection) => collection.id), ["public", "secret"]);
  assert.equal(manager.getBundle("secret"), secretBundle);
  assert.equal(manager.setActiveCollection("secret").status, "active");
  assert.equal(manager.getActiveCollectionId(), "secret");
});
