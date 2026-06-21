import test from "node:test";
import assert from "node:assert/strict";
import { getFocusTrapWrapIndex, shouldOpenBrassopedie } from "./brassopedie-panel.js";

test("allows Brassopédie only for discovered cards", () => {
  const discovered = new Set(["stout"]);
  assert.equal(shouldOpenBrassopedie({ cardId: "stout", isDiscovered: (id) => discovered.has(id) }), true);
  assert.equal(shouldOpenBrassopedie({ cardId: "porter", isDiscovered: (id) => discovered.has(id) }), false);
  assert.equal(shouldOpenBrassopedie({ cardId: null, isDiscovered: (id) => discovered.has(id) }), false);
});

test("wraps tab focus only at Brassopédie dialog boundaries", () => {
  assert.equal(getFocusTrapWrapIndex(0, 3, true), 2);
  assert.equal(getFocusTrapWrapIndex(2, 3, false), 0);
  assert.equal(getFocusTrapWrapIndex(1, 3, true), null);
  assert.equal(getFocusTrapWrapIndex(1, 3, false), null);
  assert.equal(getFocusTrapWrapIndex(-1, 3, true), 2);
  assert.equal(getFocusTrapWrapIndex(-1, 3, false), null);
  assert.equal(getFocusTrapWrapIndex(0, 0, false), null);
});
