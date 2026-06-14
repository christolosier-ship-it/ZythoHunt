# ZythoHunt — Roadmap de développement

> **Slogan :** « Buvez-les toutes. »  
> **Carte interactive :** la **Zythosphère**  
> **Encyclopédie :** la **Brassopédie**

## 1. Identité du projet

- Application : **ZythoHunt**.
- Version applicative actuelle : **0.3.0**.
- Version taxonomique conservée : **0.1.2-prototype.3**.
- Corpus courant : 28 nœuds, 8 structures, 20 styles capturables, 27 liens principaux, 2 liens secondaires.
- Technologies : HTML, CSS et JavaScript ES modules sans dépendance npm applicative.
- Version de présentation cartographique : **1.0.0** (`data/map-presentation.json`).

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

## 6. V0.3.0 — Refonte visuelle et UX de référence

### Objectif

Traduire la référence visuelle fournie en Zythosphère interactive bleu/cyan/or, sans dégrader l’architecture de fluidité V0.2.7.

### Tâches

- [x] Vérifier et analyser l’image de référence jointe.
- [x] Créer `data/map-presentation.json` en version `1.0.0`.
- [x] Séparer coordonnées, niveaux visuels, pictogrammes et palettes de la taxonomie.
- [x] Remplacer la palette mousse/caramel par la palette bleu, cyan, or et ambre.
- [x] Créer le fond CSS bleu statique avec halos et bulles décoratives fixes.
- [x] Dessiner les médaillons en verre Canvas pour racine, fermentations, familles et styles.
- [x] Ajouter un registre de pictogrammes vectoriels Canvas.
- [x] Remplacer les liens par des ramifications dorées.
- [x] Mettre en place le layout monde 4800 × 3000 manuel.
- [x] Ajouter le zoom sémantique Overview, Structure, Branch et Detail.
- [x] Refondre barre de révélation, toolbar et navigation basse.
- [x] Conserver les styles inconnus anonymes et non focusables.
- [x] Conserver la fluidité pan/pinch par transformation CSS sans redraw pendant `pointermove`.
- [x] Étendre `npm run validate` à la présentation cartographique.
- [!] Validation Safari iPad réelle indisponible dans l’environnement agent ; validation humaine obligatoire.

### Critère de sortie

V0.3.0 est prête pour validation humaine de la direction artistique, du layout et de la fluidité sur Safari iPad réel.

## 7. Futures phases métier

Ne pas démarrer avant validation humaine simultanée de la V0.3.0 :

- Brassopédie.
- Dégustations.
- Progression.
- IndexedDB.
- PWA, manifest final et service worker.

## 8. Journal d’avancement

### 2026-06-13 — V0.2.7 refonte fluidité et nettoyage radical

- Suppression du moteur SVG historique, du debug permanent, de la charge synthétique, du scheduler complexe et des tests historiques.
- Passage à un seul Canvas plein écran avec overscan de 160 px et DPR plafonné à 1.25.
- Pan et pinch déplacent `.camera-surface` par transformation CSS pendant le geste ; le Canvas est redessiné seulement au commit.
- Pointer capture déplacé sur `.zythosphere-viewport` avec gestion `pointerup`, `pointercancel` et `lostpointercapture`.
- Transition pinch vers pan implémentée en validant l’état courant puis en recréant un pan sur le doigt restant.
- Validation taxonomique légère conservée via `npm run validate`.
- À arbitrer : validation de fluidité sur Safari iPad réel, impossible dans cet environnement.


### 2026-06-14 — V0.3.0 refonte visuelle et UX de référence

- Image de référence accessible et analysée : fond bleu/cyan, bulles fixes, médaillons vitrés, liens dorés, pictogrammes brassicoles et hiérarchie descendante.
- Ajout de `data/map-presentation.json` version `1.0.0` pour la présentation cartographique séparée de la taxonomie.
- Nouvelle palette centralisée bleu/cyan/or/ambre et suppression de l’ancienne direction mousse/caramel dans le shell.
- Nouveau rendu Canvas en médaillons de verre avec pictogrammes vectoriels et zoom sémantique.
- Layout manuel 4800 × 3000 pour les 28 nœuds, avec branches espacées pour les structures et styles prototypes.
- Conservation de l’architecture fluide V0.2.7 : surface caméra CSS pendant les gestes, rendu final au commit, pas de boucle permanente.
- Validation `npm run validate` étendue à la présentation.
- À arbitrer : validation tactile et visuelle réelle sur Safari iPad, impossible dans cet environnement.
