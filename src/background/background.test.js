import test from "node:test";
import assert from "node:assert/strict";
import {
  PARTICLE_PROFILES,
  getParticleBucket,
  getParticleCounts,
  getParticleTier,
  getParticleUpdatePlan
} from "./particle-profile.js";

test("selects the mobile, tablet and desktop particle tiers at stable boundaries", () => {
  assert.equal(getParticleTier(320), "sm");
  assert.equal(getParticleTier(600), "sm");
  assert.equal(getParticleTier(601), "md");
  assert.equal(getParticleTier(1180), "md");
  assert.equal(getParticleTier(1181), "lg");
});

test("clamps and rounds density values to ten-point buckets", () => {
  assert.equal(getParticleBucket(-12), 0);
  assert.equal(getParticleBucket(4), 0);
  assert.equal(getParticleBucket(5), 10);
  assert.equal(getParticleBucket(64), 60);
  assert.equal(getParticleBucket(65), 70);
  assert.equal(getParticleBucket(112), 100);
  assert.equal(getParticleBucket("invalid"), 0);
});

test("computes deterministic counts from the active responsive profile", () => {
  const counts = getParticleCounts("md", 60, 40);

  assert.deepEqual(counts, {
    densityBucket: 60,
    foamBucket: 40,
    micro: 59,
    main: 28,
    hero: 3,
    foam: 35
  });
  assert.equal(PARTICLE_PROFILES.md.mainBlurScale, 0.55);
});

test("does not rebuild a particle layer while its bucket remains unchanged", () => {
  const stable = getParticleUpdatePlan({
    previousDensityBucket: 60,
    previousFoamBucket: 40,
    densityValue: 64,
    foamValue: 42
  });

  assert.equal(stable.rebuildBubbles, false);
  assert.equal(stable.rebuildFoam, false);

  const crossed = getParticleUpdatePlan({
    previousDensityBucket: 60,
    previousFoamBucket: 40,
    densityValue: 66,
    foamValue: 46
  });

  assert.equal(crossed.rebuildBubbles, true);
  assert.equal(crossed.rebuildFoam, true);
});

test("force mode rebuilds both layers without changing the chosen buckets", () => {
  const plan = getParticleUpdatePlan({
    previousDensityBucket: 60,
    previousFoamBucket: 40,
    densityValue: 64,
    foamValue: 42,
    force: true
  });

  assert.deepEqual(plan, {
    densityBucket: 60,
    foamBucket: 40,
    rebuildBubbles: true,
    rebuildFoam: true
  });
});
