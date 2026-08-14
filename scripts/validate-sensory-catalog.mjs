import { buildSensoryPayload } from "./build-sensory-payload.mjs";

const report = await buildSensoryPayload();

console.log(`[sensory-catalog] ${report.totalCards} profils statiques validés (${report.roleCounts.primary} primary, ${report.roleCounts.fallback} fallback, ${report.roleCounts.overlay} overlay, ${report.roleCounts.excluded} excluded).`);
console.log(`[sensory-catalog] vérification documentaire : ${report.verificationCounts.verified} verified, ${report.verificationCounts.pending} pending.`);
