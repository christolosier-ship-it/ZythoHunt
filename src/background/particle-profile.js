export const PARTICLE_PROFILES = {
  sm: {
    caps: { micro: 50, main: 24, hero: 3, foam: 38 },
    mainBlurScale: 0,
    heroBlurScale: 0.35
  },
  md: {
    caps: { micro: 80, main: 40, hero: 4, foam: 60 },
    mainBlurScale: 0.55,
    heroBlurScale: 0.65
  },
  lg: {
    caps: { micro: 120, main: 60, hero: 6, foam: 85 },
    mainBlurScale: 1,
    heroBlurScale: 1
  }
};

export function getParticleTier(width = window.innerWidth) {
  if (width <= 600) return "sm";
  if (width <= 1180) return "md";
  return "lg";
}

export function getParticleBucket(value, step = 10) {
  const numeric = Number(value);
  const clamped = Number.isFinite(numeric) ? Math.min(100, Math.max(0, numeric)) : 0;
  return Math.round(clamped / step) * step;
}

export function getParticleCounts(tier, densityValue, foamValue) {
  const profile = PARTICLE_PROFILES[tier] || PARTICLE_PROFILES.md;
  const densityBucket = getParticleBucket(densityValue);
  const foamBucket = getParticleBucket(foamValue);
  const density = densityBucket / 100;
  const foam = foamBucket / 100;

  return {
    densityBucket,
    foamBucket,
    micro: Math.round(profile.caps.micro * (0.35 + density * 0.65)),
    main: Math.round(profile.caps.main * (0.25 + density * 0.75)),
    hero: Math.max(1, Math.round(profile.caps.hero * (0.2 + density * 0.8))),
    foam: Math.round(profile.caps.foam * (0.3 + foam * 0.7))
  };
}

export function getParticleUpdatePlan({
  previousDensityBucket = null,
  previousFoamBucket = null,
  densityValue,
  foamValue,
  force = false
}) {
  const densityBucket = getParticleBucket(densityValue);
  const foamBucket = getParticleBucket(foamValue);

  return {
    densityBucket,
    foamBucket,
    rebuildBubbles: force || densityBucket !== previousDensityBucket,
    rebuildFoam: force || foamBucket !== previousFoamBucket
  };
}
