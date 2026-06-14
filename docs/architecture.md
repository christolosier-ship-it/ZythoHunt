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
- `scripts/build-radial-layout.mjs` génère positions et Bézier hors navigateur.
- `scripts/validate-taxonomy.mjs`, `scripts/validate-icons.mjs` et `scripts/validate-layout.mjs` contrôlent les données.
