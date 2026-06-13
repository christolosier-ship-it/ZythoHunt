# ZythoHunt — Roadmap de développement

> **Slogan :** « Buvez-les toutes. »  
> **Carte interactive :** la **Zythosphère**  
> **Encyclopédie :** la **Brassopédie**

## 1. Identité du projet

- Application : **ZythoHunt**.
- Version applicative actuelle : **0.2.7**.
- Version taxonomique conservée : **0.1.2-prototype.3**.
- Corpus courant : 28 nœuds, 8 structures, 20 styles capturables, 27 liens principaux, 2 liens secondaires.
- Technologies : HTML, CSS et JavaScript ES modules sans dépendance npm applicative.

## 2. Règles produit actuelles

- Les nœuds structurels sont toujours visibles.
- Toutes les bulles de styles inconnus sont visibles sous forme de `?`.
- Un style inconnu ne révèle aucun nom, alias, description ou fiche consultable.
- Chaque style est capturé individuellement.
- Une capture ne révèle aucun parent, enfant, frère ou voisin.
- Une capture et une dégustation sont deux objets différents.
- La Zythosphère et la future Brassopédie utilisent une seule source de données.
- La révélation est la seule animation autorisée dans le moteur courant.

## 3. Architecture actuelle V0.2.7

- Canvas 2D unique pour la Zythosphère : `.map-canvas`.
- Surface caméra GPU : `.camera-surface`, contenant le Canvas et la couche accessible.
- Couche accessible limitée aux structures navigables et aux styles découverts.
- Gestes Pointer Events attachés uniquement à `.zythosphere-viewport`.
- Pendant pan/pinch : transformation CSS uniquement, aucun rendu Canvas complet.
- À la fin du geste : validation de caméra et rendu Canvas unique, hors rares rebases overscan.
- DPR plein écran plafonné à `1.25`.
- Validation hors navigateur conservée : `npm run validate` → `scripts/validate-taxonomy.mjs`.

## 4. Historique des prototypes techniques

- **V0.1.0 à V0.1.1** : prototype taxonomique, premier moteur SVG et premières checklists.
- **V0.2.0** : direction artistique des bulles et microanimations.
- **V0.2.1** : migration Canvas avec coexistence temporaire SVG/debug.
- **V0.2.2** : shell plein écran, recherche haute, toolbar basse et navigation globale.
- **V0.2.3 à V0.2.4** : refontes de layout et hiérarchie visuelle.
- **V0.2.5** : hotfix des dimensions Canvas et stabilisation des tailles.
- **V0.2.6** : réduction des animations, échelles bornées, DPR adaptatif et premier travail fluidité Safari.

## 5. V0.2.7 — Refonte fluidité et nettoyage radical

### Objectif

Rendre la navigation de la Zythosphère fluide sur Safari iPad et réduire fortement la complexité du projet, sans nouvelle fonctionnalité métier.

### Tâches

- [x] Inventorier les modules importés et les couches supprimables.
- [x] Supprimer le moteur SVG historique.
- [x] Supprimer les styles SVG/animations historiques.
- [x] Supprimer le debug permanent et la charge synthétique.
- [x] Supprimer le dossier historique `tests/`.
- [x] Remplacer `npm test` par `npm run validate`.
- [x] Conserver uniquement un Canvas plein écran permanent.
- [x] Ajouter la surface caméra CSS transformée pendant les gestes.
- [x] Corriger le pointer capture sur `.zythosphere-viewport`.
- [x] Supprimer les CustomEvents cartographiques.
- [x] Supprimer le scheduler de rendu complexe.
- [x] Ne plus redessiner le Canvas pendant `pointermove` pan/pinch.
- [x] Recalculer la scène uniquement au rendu de chargement, sélection, révélation, focus ou validation de caméra.
- [x] Plafonner le DPR effectif à `1.25`.
- [x] Conserver le rendu lisible : cartouches, bulles simples, sélection statique.
- [!] Validation Safari iPad réelle indisponible dans l’environnement agent ; validation humaine obligatoire.

### Critère de sortie

V0.2.7 est prête pour validation humaine dès que `npm run validate` réussit et que le pan/pinch sont vérifiés sur un iPad Safari réel.

## 6. Futures phases métier

Ne pas démarrer avant validation humaine de la fluidité V0.2.7 :

- V0.3.0 : barre de vérification et capture persistante.
- Brassopédie.
- Dégustations.
- Progression.
- IndexedDB.
- PWA, manifest final et service worker.

## 7. Journal d’avancement

### 2026-06-13 — V0.2.7 refonte fluidité et nettoyage radical

- Suppression du moteur SVG historique, du debug permanent, de la charge synthétique, du scheduler complexe et des tests historiques.
- Passage à un seul Canvas plein écran avec overscan de 160 px et DPR plafonné à 1.25.
- Pan et pinch déplacent `.camera-surface` par transformation CSS pendant le geste ; le Canvas est redessiné seulement au commit.
- Pointer capture déplacé sur `.zythosphere-viewport` avec gestion `pointerup`, `pointercancel` et `lostpointercapture`.
- Transition pinch vers pan implémentée en validant l’état courant puis en recréant un pan sur le doigt restant.
- Validation taxonomique légère conservée via `npm run validate`.
- À arbitrer : validation de fluidité sur Safari iPad réel, impossible dans cet environnement.
