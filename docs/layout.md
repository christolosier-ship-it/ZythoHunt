# Layout de la Zythosphère

Le layout est généré hors navigateur par `npm run build:layout`. Le navigateur charge uniquement `data/generated/zythosphere-layout.json` pour dessiner la carte.

## Placement

Le générateur construit un placement radial organique : les six univers reçoivent des secteurs, les sous-arbres héritent d’un secteur local et les rangs taxonomiques n’imposent pas un rayon unique.

## Métriques

Les boîtes de collision proviennent de `src/map/layout/node-metrics.js`. Elles réservent médaillon, texte, contour et marge de sécurité pour l’état maximal utile.

## Routage

Les liens runtime sont des Bézier cubiques avec `start`, `control1`, `control2`, `end` et `boundingBox`. Les coordonnées sont précalculées et ne sont pas recalculées pendant les gestes.

## Validation

`npm run validate:layout` recalcule les collisions et intersections depuis le layout runtime. En V0.4.2, l’audit indépendant confirme 0 collision de nœuds et 0 croisement lien-lien, mais signale encore des intersections lien-nœud : la validation échoue tant que la correction de routage n’est pas terminée.
