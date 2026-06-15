# Layout V0.5.0 — nuage compact de bulles

La Zythosphère est désormais un nuage hiérarchique compact précalculé hors navigateur. La carte est volontairement plus grande que le viewport : l’exploration se fait localement par pan, avec un zoom limité à 80–120 %, sans vue complète.

## Ratios verrouillés

La référence est `STYLE_BASE_RADIUS = 72`.

- style inconnu : ×0,8 = 57,6 ;
- style découvert : ×1 = 72 ;
- style sélectionné ou en révélation : ×1,2 = 86,4 ;
- structure : ×1,5 = 108 ;
- Bière : ×2 = 144.

Le layout réserve toujours le rayon maximal des styles (86,4) afin qu’une révélation ou sélection ne déplace aucun voisin.

## Contenu fixe et zoom

Le zoom ne modifie aucun contenu. Les styles inconnus affichent uniquement `?`. Les styles découverts et les structures affichent leur illustration complète, leurs accessoires, reflets et libellés à toutes les échelles.

## Packing et compactage

`scripts/build-cloud-layout.mjs` mesure les sous-arbres, place Bière au centre logique, distribue les six univers autour d’elle, puis packe récursivement les enfants au plus près de leur parent avec une asymétrie déterministe dérivée des identifiants. Les sous-arbres sont traités comme des blocs cohérents et les passes de compactage réduisent les espaces morts sans recalcul runtime.

## Liens droits

Chaque relation est un segment unique avec `start`, `end`, `boundingBox` et `visibleByDefault`. Les points de départ et d’arrivée sont attachés au bord circulaire des bulles. Les champs Bézier (`control1`, `control2`, `segments`) sont obsolètes.

## Validation

La validation s’appuie sur des cercles pour les collisions, des segments contre cercles pour les liens-nœuds, et des segments contre segments pour les croisements. Les rapports générés exposent les métriques de monde, distances, longueurs de liens, collisions, intersections, croisements, attaches et déterminisme.

Commandes :

```bash
npm run build:layout
npm run validate:layout
npm run validate:determinism
npm run validate
```

## Schéma runtime

Les nœuds stockent position, niveau visuel, palette, lignes de libellé, rayons `layoutRadius`, `collisionRadius`, `routingRadius`, `cullingRadius` et boîtes dérivées. Les liens stockent seulement source, cible, segment droit, boîte de culling et visibilité initiale.
