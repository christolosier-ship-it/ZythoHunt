import test from "node:test";
import assert from "node:assert/strict";
import { runRevealCycle } from "./reveal-cycle.js";

function createHarness({ discovered = false, revealStatus = "completed", revealError = null } = {}) {
  const calls = [];
  const card = { id: "stout", name: "Stout" };
  const store = {
    isDiscovered() {
      calls.push("is-discovered");
      return discovered;
    },
    markDiscovered(id) {
      calls.push(`mark:${id}`);
    }
  };
  const carousel = {
    async prepareForReveal() {
      calls.push("prepare");
    },
    async focusCard(id) {
      calls.push(`focus:${id}`);
    },
    async highlight(id) {
      calls.push(`highlight:${id}`);
    },
    getCardElement(id) {
      calls.push(`element:${id}`);
      return { id };
    },
    createRevealContext(id) {
      calls.push(`context:${id}`);
      return { id };
    },
    setDiscovered(id, value) {
      calls.push(`set-discovered:${id}:${value}`);
    },
    unlock() {
      calls.push("unlock");
    }
  };
  const revealEngine = {
    async reveal() {
      calls.push("reveal");
      if (revealError) throw revealError;
      return { status: revealStatus };
    },
    async returnToSource({ beforeSourceRestore }) {
      calls.push("return");
      beforeSourceRestore();
      calls.push("restored");
    }
  };

  return { calls, card, store, carousel, revealEngine };
}

test("runs the complete reveal cycle in a deterministic order", async () => {
  const harness = createHarness();

  const result = await runRevealCycle({
    ...harness,
    ensureImage: async () => harness.calls.push("image"),
    beforeReveal: async () => harness.calls.push("before"),
    afterReveal: async () => harness.calls.push("after"),
    onDiscovered: () => harness.calls.push("discovered")
  });

  assert.deepEqual(result, { status: "completed" });
  assert.deepEqual(harness.calls, [
    "prepare",
    "focus:stout",
    "is-discovered",
    "image",
    "before",
    "element:stout",
    "context:stout",
    "reveal",
    "return",
    "mark:stout",
    "set-discovered:stout:true",
    "discovered",
    "restored",
    "after",
    "unlock"
  ]);
});

test("stops before the animation when the card is already discovered", async () => {
  const harness = createHarness({ discovered: true });

  const result = await runRevealCycle({
    ...harness,
    onAlreadyDiscovered: () => harness.calls.push("already")
  });

  assert.deepEqual(result, { status: "already-discovered" });
  assert.deepEqual(harness.calls, [
    "prepare",
    "focus:stout",
    "is-discovered",
    "highlight:stout",
    "already",
    "unlock"
  ]);
});

test("returns an interrupted status without committing discovery", async () => {
  const harness = createHarness({ revealStatus: "cancelled" });

  const result = await runRevealCycle({
    ...harness,
    beforeReveal: async () => harness.calls.push("before"),
    afterReveal: async () => harness.calls.push("after")
  });

  assert.deepEqual(result, { status: "cancelled" });
  assert.equal(harness.calls.includes("mark:stout"), false);
  assert.deepEqual(harness.calls.slice(-2), ["after", "unlock"]);
});

test("always resumes the environment and unlocks after a reveal failure", async () => {
  const failure = new Error("boom");
  const harness = createHarness({ revealError: failure });

  await assert.rejects(
    runRevealCycle({
      ...harness,
      beforeReveal: async () => harness.calls.push("before"),
      afterReveal: async () => harness.calls.push("after")
    }),
    failure
  );

  assert.deepEqual(harness.calls.slice(-2), ["after", "unlock"]);
});
