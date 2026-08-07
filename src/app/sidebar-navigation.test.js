import test from "node:test";
import assert from "node:assert/strict";
import { getNextAccordionState, isSidebarCollectionView } from "./sidebar-navigation.js";

test("only ZythoSphère and Brassopédie own collection accordions", () => {
  assert.equal(isSidebarCollectionView("zythosphere"), true);
  assert.equal(isSidebarCollectionView("brassopedie"), true);
  assert.equal(isSidebarCollectionView("badges"), false);
});

test("clicking the active collection view toggles its accordion", () => {
  assert.equal(getNextAccordionState({ currentOpen: "zythosphere", targetView: "zythosphere", activeView: "zythosphere" }), null);
  assert.equal(getNextAccordionState({ currentOpen: null, targetView: "zythosphere", activeView: "zythosphere" }), "zythosphere");
});

test("switching collection views opens the target accordion", () => {
  assert.equal(getNextAccordionState({ currentOpen: "zythosphere", targetView: "brassopedie", activeView: "zythosphere" }), "brassopedie");
});

test("non collection views close collection accordions", () => {
  assert.equal(getNextAccordionState({ currentOpen: "zythosphere", targetView: "badges", activeView: "zythosphere" }), null);
});
