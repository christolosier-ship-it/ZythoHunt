import { lagersSensoryProfilesPart1 } from "./catalog/lagers-1.js";
import { lagersSensoryProfilesPart2 } from "./catalog/lagers-2.js";
import { lagersSensoryProfilesPart3 } from "./catalog/lagers-3.js";
import { lagersSensoryProfilesPart4 } from "./catalog/lagers-4.js";
import { lagersSensoryProfilesPart5 } from "./catalog/lagers-5.js";
import { paleAlesBittersIpaSensoryProfilesPart1 } from "./catalog/pale-ales-bitters-ipa-1.js";
import { paleAlesBittersIpaSensoryProfilesPart2 } from "./catalog/pale-ales-bitters-ipa-2.js";
import { paleAlesBittersIpaSensoryProfilesPart3 } from "./catalog/pale-ales-bitters-ipa-3.js";
import { paleAlesBittersIpaSensoryProfilesPart4 } from "./catalog/pale-ales-bitters-ipa-4.js";
import { portersStoutsSensoryProfiles } from "./catalog/porters-stouts.js";
import { traditionsBelgesFrancaisesSensoryProfiles } from "./catalog/traditions-belges-francaises.js";
import { bleSeigleSensoryProfiles } from "./catalog/ble-seigle.js";
import { acidesSauvagesSpontaneesSensoryProfiles } from "./catalog/acides-sauvages-spontanees.js";
import { alesAmbreesBrunesFortesSensoryProfilesPart1 } from "./catalog/ales-ambrees-brunes-fortes-1.js";
import { alesAmbreesBrunesFortesSensoryProfilesPart2 } from "./catalog/ales-ambrees-brunes-fortes-2.js";
import { alesAmbreesBrunesFortesSensoryProfilesPart3 } from "./catalog/ales-ambrees-brunes-fortes-3.js";
import { singuliersHistoriquesHybridesSensoryProfilesPart1 } from "./catalog/singuliers-historiques-hybrides-1.js";
import { singuliersHistoriquesHybridesSensoryProfilesPart2 } from "./catalog/singuliers-historiques-hybrides-2.js";
import { singuliersHistoriquesHybridesSensoryProfilesPart3 } from "./catalog/singuliers-historiques-hybrides-3.js";
import { singuliersHistoriquesHybridesSensoryProfilesPart4 } from "./catalog/singuliers-historiques-hybrides-4.js";
import { appellationsCommercialesSensoryProfiles } from "./catalog/appellations-commerciales.js";

export const sensoryProfiles = Object.freeze([
  ...lagersSensoryProfilesPart1,
  ...lagersSensoryProfilesPart2,
  ...lagersSensoryProfilesPart3,
  ...lagersSensoryProfilesPart4,
  ...lagersSensoryProfilesPart5,
  ...paleAlesBittersIpaSensoryProfilesPart1,
  ...paleAlesBittersIpaSensoryProfilesPart2,
  ...paleAlesBittersIpaSensoryProfilesPart3,
  ...paleAlesBittersIpaSensoryProfilesPart4,
  ...portersStoutsSensoryProfiles,
  ...traditionsBelgesFrancaisesSensoryProfiles,
  ...bleSeigleSensoryProfiles,
  ...acidesSauvagesSpontaneesSensoryProfiles,
  ...alesAmbreesBrunesFortesSensoryProfilesPart1,
  ...alesAmbreesBrunesFortesSensoryProfilesPart2,
  ...alesAmbreesBrunesFortesSensoryProfilesPart3,
  ...singuliersHistoriquesHybridesSensoryProfilesPart1,
  ...singuliersHistoriquesHybridesSensoryProfilesPart2,
  ...singuliersHistoriquesHybridesSensoryProfilesPart3,
  ...singuliersHistoriquesHybridesSensoryProfilesPart4,
  ...appellationsCommercialesSensoryProfiles,
]);

export const sensoryProfileByKey = new Map(
  sensoryProfiles.map((profile) => [`${profile.collectionId}:${profile.cardId}`, profile])
);

export function getSensoryProfile(collectionId, cardId) {
  return sensoryProfileByKey.get(`${collectionId}:${cardId}`) || null;
}
