import test from "node:test";
import assert from "node:assert/strict";
import { shouldOpenBrassopedie } from "./brassopedie-panel.js";

test("Brassopédie opening logic only accepts discovered cards", () => {
  assert.equal(shouldOpenBrassopedie({ cardId: "stout", isDiscovered: () => true }), true);
  assert.equal(shouldOpenBrassopedie({ cardId: "stout", isDiscovered: () => false }), false);
  assert.equal(shouldOpenBrassopedie({ cardId: "", isDiscovered: () => true }), false);
});
