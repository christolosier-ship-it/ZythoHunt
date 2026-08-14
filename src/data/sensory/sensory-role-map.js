import { sensoryProfiles } from "./sensory-profiles.js";

export const SENSORY_ROLES = Object.freeze(["primary", "fallback", "overlay", "excluded"]);

export const sensoryRoleEntries = Object.freeze(
  sensoryProfiles.map(({ collectionId, cardId, role }) => Object.freeze({ collectionId, cardId, role }))
);

export const sensoryRoleByKey = Object.freeze(Object.fromEntries(
  sensoryRoleEntries.map((entry) => [`${entry.collectionId}:${entry.cardId}`, entry.role])
));

export const SENSORY_ROLE_COUNTS = Object.freeze(
  sensoryRoleEntries.reduce((counts, { role }) => {
    if (!SENSORY_ROLES.includes(role)) throw new Error(`Rôle sensoriel inconnu : ${role}`);
    counts[role] += 1;
    return counts;
  }, { primary: 0, fallback: 0, overlay: 0, excluded: 0 })
);

export const getSensoryRole = (collectionId, cardId) => sensoryRoleByKey[`${collectionId}:${cardId}`] || null;
