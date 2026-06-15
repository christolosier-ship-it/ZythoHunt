# Architecture

ZythoHunt est une application web native sans framework. L’interface charge des modules ES depuis `src/`, des styles CSS statiques et des fichiers JSON du dossier `data/`.

## Runtime

- `src/app.js` orchestre le chargement, la recherche, la révélation et le renderer.
- `src/domain/taxonomy-loader.js` charge la taxonomie, les liens, les alias, les versions, le layout généré et les recettes iconographiques.
- `src/canvas/canvas-map-renderer.js` dessine la Zythosphère sur un Canvas unique.
- La caméra applique pan/pinch par transformation CSS pendant les gestes, puis redessine au commit.
- Le rendu utilise `scene.visibleLinks` et applique un culling simple par boîte englobante.

## Données

- Taxonomie : `data/taxonomy-nodes.json`.
- Liens : `data/taxonomy-links.json`.
- Alias : `data/aliases.json`.
- Iconographie active : `data/style-icon-recipes.json`.
- Layout runtime : `data/generated/zythosphere-layout.json`.
- Rapport de build : `data/generated/zythosphere-layout-report.json`.

## Scripts

- `scripts/build-taxonomy.mjs` prépare la taxonomie.
- `scripts/build-layout.mjs` génère positions, waypoints et routes Catmull-Rom hors navigateur avec `d3-hierarchy`, `d3-force` et `d3-shape` comme tooling de build uniquement.
- `scripts/validate-taxonomy.mjs`, `scripts/validate-icons.mjs`, `scripts/validate-layout.mjs` et `scripts/validate-determinism.mjs` contrôlent les données.

D3 est interdit au runtime : aucun import D3 n’existe dans `src/`, l’application reste vanilla JavaScript et Canvas.
