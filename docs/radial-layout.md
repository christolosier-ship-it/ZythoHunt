# Layout radial V0.4.1

La V0.4.1 remplace le layout à anneaux fixes par une génération radiale organique précalculée.

## Principes

- Le rang taxonomique reste logique et ne force plus un rayon unique.
- Les six univers reçoivent des secteurs distincts, pondérés par l'encombrement mesuré des sous-arbres.
- Les coordonnées, boîtes de collision et routes sont générées hors navigateur dans `data/generated/zythosphere-layout.json`, puis recopiées dans `data/map-presentation.json`.
- Les métriques de nœuds sont partagées dans `src/map/layout/node-metrics.js` et réservent l'état maximal d'un style sélectionné.
- Tous les liens primaires sont des Bézier cubiques précalculées avec `start`, `control1`, `control2` et `end` sur les bords des boîtes de nœuds.

## Validation géométrique

Le rapport généré expose les compteurs réels de la passe V0.4.1 : collisions de nœuds avant/après résolution, intersections lien-nœud, croisements lien-lien, dimensions du monde, profondeur spatiale et longueurs de Bézier.

Les valeurs finales attendues sont :

- `nodeCollisionsAfterResolution = 0` ;
- `linkNodeIntersectionsAfterResolution = 0` ;
- `linkCrossingsAfterResolution = 0` ;
- `minimumNodeGap >= 0`.

## Rendu

Le renderer Canvas ne parcourt plus tous les liens : il dessine `scene.visibleLinks`, puis applique un culling par boîte englobante pour les nœuds et les liens intersectant le viewport monde augmenté d'un overscan.
