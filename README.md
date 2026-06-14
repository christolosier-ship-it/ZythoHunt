# ZythoHunt

**ZythoHunt** — « Buvez-les toutes. »  
Carte interactive : **la Zythosphère**. Encyclopédie future : **la Brassopédie**.

## Versions

- Application : **0.3.3**
- Taxonomie : **0.1.2-prototype.3**
- Présentation cartographique : **1.2.0**

## V0.3.0 — Refonte visuelle et UX de référence

La V0.3.0 remplace la direction artistique mousse/caramel par une Zythosphère bleue et cyan inspirée de la référence visuelle jointe à la mission : fond bleu profond pétillant, ramifications dorées, médaillons en verre, pictogrammes brassicoles vectoriels et hiérarchie descendante/radiale.

La fluidité V0.2.7 reste le socle technique : un seul Canvas plein écran, une surface caméra transformée en CSS pendant pan/pinch, aucun rendu Canvas complet pendant `pointermove`, puis un rendu final au commit du geste.

## Données et présentation

- `data/taxonomy-nodes.json` conserve le corpus taxonomique actuel.
- `data/map-presentation.json` est la source de vérité visuelle : version de présentation, monde 4800 × 3000, coordonnées, niveau visuel, pictogramme et palette.
- Les noms, parents, alias et relations restent dans les fichiers taxonomiques existants.

## Règle de visibilité

- Les nœuds structurels sont toujours visibles et nommés.
- Toutes les bulles de styles capturables sont visibles dès le départ.
- Un style inconnu affiche `?` uniquement lorsque sa taille apparente le permet ; en vue générale il peut rester une perle anonyme.
- Un style inconnu ne révèle aucun nom, alias ou description.
- Un style inconnu n’est pas consultable, focusable ni cliquable.
- Un style découvert affiche son pictogramme et son nom selon le zoom, puis devient sélectionnable.
- Les liens stylistiques inconnus restent discrets ; les liens révélés sont renforcés.
- Chaque style reste découvert individuellement.
- Une révélation ne révèle aucun autre nom.

## Zoom sémantique

La géométrie est fixe et zoomée uniformément. Les détails changent seulement au rendu validé :

1. **Overview** : médaillons simplifiés, styles en pastilles, liens principaux.
2. **Structure** : noms des structures, pictogrammes structurels, inconnus anonymes ou `?` petits.
3. **Branch** : styles découverts abrégés, pictogrammes, sélection.
4. **Detail** : noms complets, reflets, contours et états renforcés.

## Navigation globale

La navigation permanente contient :

1. Zythosphère ;
2. Brassopédie ;
3. Dégustations ;
4. Progression.

La Zythosphère reste active. Les trois autres entrées affichent seulement un toast provisoire et ne développent pas encore leurs vues.

## Limites actuelles

- Pas de persistance, IndexedDB, localStorage ni cookie.
- Pas de Brassopédie fonctionnelle.
- Pas de journal de dégustation.
- Pas de vue Progression fonctionnelle.
- Pas de PWA, manifeste ni service worker.
- Validation tactile réelle Safari iPad à faire humainement.

## Lancement

```bash
python3 -m http.server 4173
```

Ouvrir `http://127.0.0.1:4173/`.

## Validation

```bash
npm run validate
```

## Conception responsable

ZythoHunt s’adresse à un public adulte et encourage la curiosité brassicole sans pression de consommation. Les données personnelles futures resteront locales, exportables, séparées du référentiel commun et sans compte obligatoire.

## V0.3.1 — Iconographie modulaire et révélation cadrée

La V0.3.1 introduit une bibliothèque iconographique Canvas sans dépendance : contenants normalisés, liquides, mousses, motifs brassicoles, recettes déclaratives par style et illustrations dédiées pour les nœuds structurels. Les détails changent selon le zoom sémantique sans modifier la géométrie des bulles.

Les recettes de styles sont séparées de la taxonomie dans `data/style-icon-recipes.json`. Le cache mémoire produit des sources 64, 128 ou 256 px et ne dépend ni de la caméra, ni du pan, ni de la taille exacte à l’écran. Les styles inconnus restent anonymes : fond familial générique, `?`, aucun motif distinctif et aucun nom.

La barre de révélation ajoute un bouton de test **All** au-dessus de **Révéler**. Il révèle tous les styles en mémoire pour contrôle visuel, sans persistance, sans focus et sans animation individuelle. La révélation normale cadre désormais le style puis lance l’animation seulement après la fin du focus.

## V0.3.3 — Refonte iconographique générale

La V0.3.3 supprime la copie JavaScript des recettes : `data/style-icon-recipes.json` est désormais l’unique source de vérité chargée par le loader et attachée aux nœuds capturables. La présentation cartographique passe en **1.2.0** sans modifier la taxonomie.

Le système iconographique Canvas est découpé en verres, liquides, mousses, accessoires et compositions. Les sources de cache passent à 64, 128 et 256 px avec une clé fondée sur la signature de recette, le niveau de détail, la résolution canonique, la version de thème et la version de schéma. Le focus de révélation utilise une transformation CSS temporaire et ne redessine le Canvas qu’à l’arrivée.
