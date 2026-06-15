# Layout de la Zythosphère

Le layout est généré hors navigateur par `npm run build:layout`. Le navigateur charge uniquement `data/generated/zythosphere-layout.json` et dessine des segments cubiques précalculés sur Canvas : aucune dépendance D3, simulation, collision, Catmull-Rom ou recherche de chemin n’est exécutée dans `src/`.

## Architecture V0.4.5 — D3 hybride build-only

Le moteur `layoutEngine = "d3-hybrid"` version `1.0.0` sépare les responsabilités :

1. taxonomie canonique inchangée ;
2. hiérarchie déterministe avec `d3-hierarchy` ;
3. amorce radiale avec `d3.tree()` ;
4. relaxation statique avec `d3-force` ;
5. compactage déterministe hors navigateur ;
6. génération de waypoints ;
7. lissage `curveCatmullRom.alpha(0.5)` via `d3-shape` ;
8. export en segments cubiques Canvas ;
9. validation indépendante par `scripts/validate-layout.mjs`.

Les paramètres majeurs sont centralisés dans `scripts/layout/layout-config.mjs` : phases, ticks, marges, échantillonnage, candidats et limites de passes exactes.

## Hiérarchie et secteurs

`build-hierarchy.mjs` construit une racine unique `beer` depuis `id` et `parentId`. L’ordre est stable par parent puis identifiant. Les six univers conservent des secteurs distincts et la racine reste au centre.

## Simulation statique

`d3-relaxation.mjs` crée une simulation arrêtée immédiatement, sans timer ni événement `tick`. Les phases sont : structure, compaction et finition, pour 620 ticks déterministes. Les forces utilisées sont link, collide, charge faible et contraintes préparées pour secteur, radialité souple et compaction.

## Géométrie réelle

`src/map/layout/node-metrics.js` expose `visualRadius`, `collisionRadius`, `routingRadius` et `cullingRadius`. L’ancien obstacle de routage 2 × 2 a été supprimé au profit du rayon de routage réel. Les libellés restent dessinés dans les médaillons et ne créent pas de boîte texte externe fictive.

## Routes Catmull-Rom

Chaque lien est défini par des waypoints : attache parent, sortie, dérives organiques, approche et attache enfant. `catmull-rom.mjs` utilise `curveCatmullRom.alpha(0.5)` avec un collecteur de contexte Canvas qui exporte `start` et `segments[]` en cubiques. Le runtime ne reçoit pas de chaîne SVG et n’a pas besoin de `Path2D`.

## Validation et déterminisme

`validate-layout.mjs` recharge le JSON produit, recalcule attaches, longueurs, compteurs et métriques de densité. `npm run validate:determinism` exécute deux générations successives et compare le hash SHA-256 du layout. Les rapports ne sont pas chargés par le navigateur.
