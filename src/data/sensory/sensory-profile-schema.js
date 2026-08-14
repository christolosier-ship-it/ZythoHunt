export const SENSORY_PROFILE_SCHEMA_VERSION = 2;
export const SENSORY_ROLES = Object.freeze(["primary", "fallback", "overlay", "excluded"]);
export const SENSORY_VERIFICATION_STATUSES = Object.freeze(["pending", "verified"]);

function freezeRecord(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
  Object.values(value).forEach((entry) => freezeRecord(entry));
  return Object.freeze(value);
}

export function freezeSensoryProfiles(profiles = []) {
  return Object.freeze(profiles.map((profile) => freezeRecord(profile)));
}

export function isVerifiedSensoryProfile(profile) {
  return profile?.verification?.status === "verified"
    && Array.isArray(profile.verification.sources)
    && profile.verification.sources.length > 0
    && typeof profile.verification.reviewedAt === "string"
    && !Number.isNaN(Date.parse(profile.verification.reviewedAt));
}
