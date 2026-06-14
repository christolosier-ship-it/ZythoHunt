# ZythoHunt — Roadmap de développement

> **Slogan :** « Buvez-les toutes. »  
> **Carte interactive :** la **Zythosphère**  
> **Encyclopédie :** la **Brassopédie**

## 1. Identité du projet

- Application : **ZythoHunt**.
- Version applicative actuelle : **0.3.2**.
- Version taxonomique conservée : **0.1.2-prototype.3**.
- Corpus courant : 28 nœuds, 8 structures, 20 styles capturables, 27 liens principaux, 2 liens secondaires.
- Technologies : HTML, CSS et JavaScript ES modules sans dépendance npm applicative.
- Version de présentation cartographique : **1.2.0** (`data/map-presentation.json`).

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

## 6. V0.3.1 — Refonte visuelle et UX de référence

### Objectif

Traduire la référence visuelle fournie en Zythosphère interactive bleu/cyan/or, sans dégrader l’architecture de fluidité V0.2.7.

### Tâches

- [x] Vérifier et analyser l’image de référence jointe.
- [x] Créer `data/map-presentation.json` en version `1.1.0`.
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

Ne pas démarrer avant validation humaine simultanée de la V0.3.0 puis de la V0.3.1 :

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

## 7. V0.3.1 — Système iconographique et séquence de révélation

### Objectif

Remplacer les pictogrammes provisoires par une iconographie Canvas modulaire, valider une recette pour chaque style capturable, ajouter le bouton de test All et séquencer la révélation normale par focus puis animation.

### Tâches

- [x] Inventorier les pictogrammes V0.3.0 et définir une charte commune Canvas : contours sombres, liquides contrastés, mousse simple, motif principal limité et détail dépendant du zoom.
- [x] Créer une bibliothèque modulaire de contenants, liquides, mousses, motifs et illustrations structurelles dédiées.
- [x] Ajouter `data/style-icon-recipes.json` avec une recette pour chaque style capturable du corpus actuel.
- [x] Ajouter un cache iconographique mémoire à résolutions canoniques 64, 128 et 192, indépendant de la caméra et limité à 96 entrées.
- [x] Adapter le rendu Canvas aux niveaux Overview, Structure, Branch et Detail sans changer la géométrie des nœuds.
- [x] Préserver les styles inconnus : illustration générique familiale, `?`, aucun motif distinctif ni nom avant découverte.
- [x] Ajouter le bouton All au-dessus de Révéler, sans persistance, sans focus et sans animation individuelle.
- [x] Modifier la révélation normale : validation, verrouillage, focus caméra, fin du focus, animation, découverte puis sélection.
- [x] Gérer le style déjà révélé par focus et sélection sans rejouer l’animation.
- [x] Étendre `npm run validate` aux recettes iconographiques.
- [!] Validation Safari iPad réelle indisponible dans l’environnement agent ; validation humaine obligatoire.

### Critère de sortie

V0.3.1 est prête pour validation humaine de l’iconographie, du bouton All et de la séquence focus puis révélation dès que `npm run validate` réussit et que la fluidité est contrôlée sur Safari iPad réel.

## 8. Journal d’avancement — complément V0.3.1

### 2026-06-14 — V0.3.1 iconographie modulaire et révélation cadrée

- Inventaire V0.3.0 : pictogrammes Canvas provisoires dans `src/map/icon-registry.js`, associés via `iconKey` dans `data/map-presentation.json`, rendus directement dans le Canvas principal sans cache dédié.
- Ajout d’une bibliothèque d’icônes Canvas par composants : contenants, liquides, mousses, motifs et compositions structurelles.
- Ajout de recettes déclaratives pour les 20 styles capturables actuels et validation des contenants, liquides, mousses, motifs, accents, clés inconnues et recettes orphelines.
- Ajout d’un cache mémoire LRU simple, résolutions sources 64/128/192, indépendant du pan, du zoom exact et de la position écran.
- Ajout du bouton All de test au-dessus du bouton Révéler ; il révèle tous les styles en mémoire, conserve la caméra et désactive son action après usage.
- Révélation normale reséquencée : focus court de caméra avant mutation visuelle, puis animation de révélation et sélection du style ciblé uniquement.
- À arbitrer : validation visuelle fine des pictogrammes et contrôle de fluidité sur Safari iPad réel, impossible dans cet environnement.

## 9. V0.3.2 — Refonte iconographique générale

### Objectif

Remplacer les silhouettes trop génériques par une iconographie Canvas modulaire plus expressive, supprimer la duplication des recettes et rapprocher le focus de révélation sans redraw Canvas par frame.

### Tâches

- [x] Supprimer la copie statique `src/map/icons/style-icon-recipes.js`.
- [x] Charger `data/style-icon-recipes.json` comme source unique et attacher les recettes aux nœuds capturables.
- [x] Créer sept silhouettes distinctes : american-pint, british-nonic, pilsner-glass, weizen-glass, tulip-glass, belgian-chalice et snifter.
- [x] Conserver beer-mug et bottle pour les illustrations structurelles.
- [x] Modulariser liquides, mousses, accessoires et compositions.
- [x] Migrer les vingt recettes vers les nouveaux identifiants, avec composition, clarté et niveau de remplissage.
- [x] Créer des compositions structurelles dédiées pour les huit structures.
- [x] Améliorer la clé du cache iconographique avec signature de recette, niveau de détail, résolution canonique, version de thème et version de schéma.
- [x] Corriger le focus de révélation pour viser une bulle de 210 à 260 px sans faire tenir toute la fratrie.
- [x] Supprimer le redraw Canvas à chaque frame du focus au profit d'une transformation CSS temporaire.
- [x] Étendre `npm run validate` aux nouveaux verres, mousses, motifs, compositions, clartés, remplissages, clés héritées et version de présentation 1.2.0.
- [!] Validation Safari iPad réelle indisponible dans l’environnement agent ; validation humaine obligatoire.

### Critère de sortie

V0.3.2 est prête pour validation humaine de la refonte iconographique et du focus rapproché dès que `npm run validate` réussit et que le bouton All est contrôlé dans un navigateur.

## 10. Journal d’avancement — complément V0.3.2

### 2026-06-14 — V0.3.2 refonte iconographique générale

- Suppression de la duplication des recettes et migration vers `data/style-icon-recipes.json` comme source unique.
- Ajout des modules `vessels.js`, `foams.js` et `compositions.js`, puis refonte des accessoires organiques existants.
- Migration des vingt styles vers les nouveaux verres, mousses, motifs et compositions adaptatives.
- Ajout de compositions structurelles dédiées et passage de la présentation cartographique en 1.2.0.
- Focus de révélation rapproché avec transformation CSS pendant l’interpolation et un seul rendu Canvas final.
- À arbitrer : validation visuelle complète du bouton All et validation Safari iPad réelle, impossibles dans cet environnement.
