# ZythoHunt — Roadmap de développement

> **Slogan :** « Buvez-les toutes. »  
> **Carte interactive :** la **Zythosphère**  
> **Encyclopédie :** la **Brassopédie**

## 1. Identité du projet

- Application : **ZythoHunt**.
- Version applicative actuelle : **0.4.1**.
- Version taxonomique conservée : **1.0.0**.
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

## 9. V0.3.3 — Refonte iconographique générale

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

V0.3.3 est prête pour validation humaine de la refonte iconographique et du focus rapproché dès que `npm run validate` réussit et que le bouton All est contrôlé dans un navigateur.

## 10. Journal d’avancement — complément V0.3.3

### 2026-06-14 — V0.3.3 refonte iconographique générale

- Suppression de la duplication des recettes et migration vers `data/style-icon-recipes.json` comme source unique.
- Ajout des modules `vessels.js`, `foams.js` et `compositions.js`, puis refonte des accessoires organiques existants.
- Migration des vingt styles vers les nouveaux verres, mousses, motifs et compositions adaptatives.
- Ajout de compositions structurelles dédiées et passage de la présentation cartographique en 1.2.0.
- Focus de révélation rapproché avec transformation CSS pendant l’interpolation et un seul rendu Canvas final.
- À arbitrer : validation visuelle complète du bouton All et validation Safari iPad réelle, impossibles dans cet environnement.


## 11. V0.3.3 — Normalisation des 12 verres et refonte iconographique

### Objectif

Adapter la mission V0.3.2 sur un dépôt déjà en 0.3.2 sans rétrogradation : passage applicatif en 0.3.3, conservation de la taxonomie 0.1.2-prototype.3 et maintien de la présentation iconographique 1.2.0.

### Tâches

- [x] Inventorier les clés de verres et recettes existantes.
- [x] Migrer les recettes vers les 12 verres canoniques : teku, inao, tulip, nonic, stange, pint, weizen, snifter, pilsner, beer-mug, chalice et stout-glass.
- [x] Supprimer les anciennes clés actives et les fallbacks cachés associés.
- [x] Centraliser les liquides au schéma top/bottom/clarity/opacity.
- [x] Conserver les mousses modulaires et les accessoires utiles, en ajoutant les motifs fruités manquants.
- [x] Étendre la validation aux 12 verres exacts, aux anciennes clés, aux recettes dupliquées, aux registres de liquides, mousses, accessoires et compositions.
- [!] Validation Safari iPad réelle indisponible dans l’environnement agent ; validation humaine obligatoire.

### Critère de sortie

V0.3.3 est prête pour validation humaine dès que `npm run validate` réussit et que le bouton All est contrôlé dans un navigateur réel.

## 12. Journal d’avancement — complément V0.3.3

### 2026-06-14 — Normalisation canonique des verres

- Le dépôt étant déjà en 0.3.2, la version applicative a été incrémentée en 0.3.3 sans modifier la version taxonomique.
- Migration des vingt recettes capturables vers les 12 clés de verres canoniques et suppression des clés `american-pint`, `british-nonic`, `pilsner-glass`, `weizen-glass`, `tulip-glass` et `belgian-chalice` des données actives.
- Refonte du registre de verres avec douze silhouettes Path2D distinctes et liquides découpés par verre.
- Centralisation des liquides en objets `top`, `bottom`, `clarity` et `opacity`.
- À arbitrer : contrôle visuel complet du bouton All et validation Safari iPad réelle, impossibles dans cet environnement.


## 13. V0.3.4 — Correction iconographique : échelle, lisibilité et composition

### Objectif

Corriger le rendu artistique des médaillons sans changer la taxonomie, les coordonnées, le layout global ni l’architecture de fluidité.

### Tâches

- [x] Agrandir nettement les illustrations internes des styles et structures.
- [x] Réduire et remonter le reflet blanc des médaillons.
- [x] Alléger le fond interne par un dégradé plus respirant.
- [x] Renforcer les contours des verres et accessoires.
- [x] Augmenter la présence visuelle des liquides.
- [x] Rendre les mousses plus volumineuses et lisibles.
- [x] Rapprocher et agrandir les accessoires autour du verre.
- [x] Remonter le texte pour mieux l’intégrer à l’emblème.
- [x] Contrôler spécifiquement IPA, West Coast IPA, Black IPA, Double IPA et Mixte sauvage dans les recettes/compositions.
- [!] Validation visuelle réelle via bouton All et Safari iPad indisponible dans l’environnement agent ; validation humaine obligatoire.

### Critère de sortie

V0.3.4 est prête pour validation humaine dès que `npm run validate` réussit et que le bouton All confirme la lisibilité globale dans un navigateur réel.

## 14. Journal d’avancement — complément V0.3.4

### 2026-06-14 — Correction iconographique : échelle, lisibilité et composition

- Passage applicatif en 0.3.4 sans modifier la taxonomie ni la présentation cartographique.
- Agrandissement des illustrations dans les médaillons, avec traitement plus fort pour les nœuds structurels.
- Réduction du reflet elliptique, fond interne moins massif et texte remonté sous l’illustration.
- Verres élargis, contours renforcés, liquides remontés, mousses plus expressives et accessoires rapprochés.
- Contrôle prioritaire des recettes IPA, West Coast IPA, Black IPA, Double IPA et Mixte sauvage.
- À arbitrer : validation visuelle complète du bouton All et validation Safari iPad réelle, impossibles dans cet environnement.

## 15. V0.4.0 — Taxonomie complète et Zythosphère radiale

### Objectif

Intégrer le canon ZythoHunt Taxonomy 1.0.0, remplacer la cartographie pyramidale par une arborescence radiale générée et préparer les données communes pour la future Brassopédie sans développer cette vue.

### Tâches

- [x] Auditer le dépôt et exécuter la validation initiale.
- [x] Intégrer les 6 univers et 201 styles capturables du canon.
- [x] Ajouter les structures intermédiaires nécessaires, pour 272 nœuds au total.
- [x] Générer les liens hiérarchiques depuis `parentId`.
- [x] Ajouter les migrations d’identifiants historiques.
- [x] Générer la présentation radiale 2.0.0 et le fichier `data/generated/zythosphere-layout.json`.
- [x] Ajouter les commandes `build:taxonomy`, `build:layout`, `validate:taxonomy` et `validate:layout`.
- [x] Générer une recette iconographique validable pour chaque style capturable.
- [x] Vérifier les alias canoniques demandés par la mission.
- [!] Validation Safari iPad réelle indisponible dans l’environnement agent ; validation humaine obligatoire.

### Journal d’avancement — 2026-06-14

- Passage applicatif en 0.4.0, taxonomie en 1.0.0 et présentation cartographique en 2.0.0.
- Corpus porté à 272 nœuds : 71 structures, 201 styles capturables et 271 liens hiérarchiques.
- Layout radial déterministe généré autour de Bière avec secteurs d’univers pondérés et sous-anneaux pour branches denses.
- Rapport généré : collisions restantes 0, croisements restants 0.
- À arbitrer : contrôle visuel complet et validation de fluidité sur Safari iPad réel, impossibles dans cet environnement.


## V0.4.1 — Layout radial organique et routage Bézier sans collisions

### Tâches

- [x] Centraliser les métriques maximales de nœuds.
- [x] Remplacer les anneaux fixes par des secteurs radiaux organiques.
- [x] Générer des routes Bézier cubiques précalculées.
- [x] Remplacer le dessin global des liens par `scene.visibleLinks` avec culling.
- [x] Publier un rapport géométrique V0.4.1 avec dimensions du monde et compteurs finaux.
- [!] Validation tactile Safari iPad réelle indisponible dans l’environnement agent.

## Journal d’avancement — complément V0.4.1

### 2026-06-14 — Layout radial organique et routage Bézier

- Ajout de métriques partagées pour réserver les états inconnus, découverts et sélectionnés des styles.
- Remplacement du générateur radial à anneaux par un placement déterministe à secteurs et rayons variables.
- Suppression du routage `radial-arc` généré au profit de Bézier cubiques précalculées.
- Ajout du culling de rendu des nœuds et liens visibles dans le viewport.
- À arbitrer : validation visuelle fine et test Safari iPad réel, impossibles dans cet environnement.
