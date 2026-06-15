# Layout de la Zythosphère

Le layout est généré hors navigateur par `npm run build:layout`. Le navigateur charge uniquement `data/generated/zythosphere-layout.json` pour dessiner la carte Canvas ; aucune collision, aucun routage et aucun recalcul lourd ne sont effectués pendant pan, pinch ou zoom.

## Philosophie compacte V0.4.4

La carte reste radiale et hiérarchique : `beer` est au centre, les six univers gardent un ordre stable et chaque descendant reste dans le secteur de sa branche. Le rang taxonomique ne définit plus un anneau strict : les rayons varient selon la taille réelle du parent, de l’enfant, du bouquet local et de la profondeur utile du sous-arbre.

La densification vient du placement initial compact, de pas radiaux dépendants des boîtes réelles, de bouquets terminaux et de secteurs moins étirés. Les sous-arbres sont déplacés comme des groupes cohérents lors des corrections.

## Boîtes géométriques

Toutes les métriques viennent de `src/map/layout/node-metrics.js`.

- `visualBox` : dessin visible maximal du nœud, médaillon, contour et libellé utile.
- `collisionBox` : `visualBox` plus respiration nœud-nœud adaptée au type de nœud.
- `routingObstacleBox` : obstacle utilisé par les validations et ports de routage.
- `cullingBox` : zone de viewport avec halo et overscan raisonnable.

Le renderer utilise la `cullingBox` pour limiter le dessin et ne réutilise pas la boîte de collision comme boîte universelle.

## Placement et bouquets

Le générateur mesure chaque sous-arbre, alloue un secteur local et place les enfants avec un rayon variable. Les parents avec peu d’enfants forment un éventail court ; les parents denses alternent des profondeurs et décalages déterministes pour éviter les colliers mécaniques. Les variations organiques sont dérivées de l’identifiant stable du nœud.

## Résolution et compactage

La génération conserve une passe de résolution des collisions sur `collisionBox`, puis produit le monde à partir des limites réellement obtenues. Le rapport expose les métriques de densité : dimensions, surface, longueurs de Bézier, attaches et conflits.

## Routage

Les liens sont précalculés sous forme de routes Bézier. Le format V0.4.4 ajoute `segments`, tableau d’un ou deux segments cubiques continus, tout en conservant `control1` et `control2` de compatibilité pour le premier et dernier segment. Les extrémités sont recalculées sur le bord circulaire des médaillons source et cible. Le marqueur lumineux reste dessiné uniquement côté enfant.

## Validation

`npm run validate:layout` recharge le layout runtime, échantillonne les routes, contrôle les boîtes de nœuds, les attaches circulaires, les intersections lien-nœud, les croisements lien-lien et les dimensions du monde. Les objectifs V0.4.4 sont : 0 collision, 0 intersection lien-nœud, 0 croisement lien-lien et 0 erreur d’attache.
