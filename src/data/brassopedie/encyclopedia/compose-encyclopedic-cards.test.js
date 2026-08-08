import test from "node:test";
import assert from "node:assert/strict";
import { composeEncyclopedicCards } from "./compose-encyclopedic-cards.js";

test("composes thematic encyclopedia modules without mutation", () => {
  const first = { lager: { histoireEtOrigines: "A" } };
  const second = { pilsner: { histoireEtOrigines: "B" } };
  const cards = composeEncyclopedicCards(first, second);

  assert.deepEqual(Object.keys(cards).sort(), ["lager", "pilsner"]);
  assert.equal(cards.lager, first.lager);
  assert.equal(cards.pilsner, second.pilsner);
  assert.ok(Object.isFrozen(cards));
});

test("rejects duplicate ids across thematic modules", () => {
  assert.throws(() => composeEncyclopedicCards(
    { lager: { histoireEtOrigines: "A" } },
    { lager: { histoireEtOrigines: "B" } }
  ), /Duplicate encyclopedic entry lager/);
});
