# Architecture ZythoHunt V0.5.0

La V0.5.0 conserve une carte Canvas unique et remplace le générateur radial par `scripts/build-cloud-layout.mjs`.

## Pipeline de données

1. `npm run build:taxonomy` prépare le référentiel taxonomique canonique.
2. `npm run build:layout` génère un layout `compact-bubble-cloud` précalculé.
3. `npm run validate:layout` et `npm run validate:determinism` contrôlent la géométrie et la reproductibilité.

La taxonomie, les recettes iconographiques et le layout généré restent séparés. Le navigateur charge uniquement les fichiers runtime nécessaires, jamais les diagnostics comme source applicative.

## Renderer Canvas

`src/canvas/canvas-map-renderer.js` applique uniquement caméra, culling, dessin des segments droits, dessin des bulles et synchronisation d’accessibilité. Il ne calcule ni layout, ni collision, ni routage, ni croisement.

## Caméra

La caméra démarre sur Bière à 100 %. Le zoom est borné entre 80 % et 120 %. Le recentrage revient sur Bière à 100 %, et le focus de révélation centre le style à 120 %. Il n’existe plus de vue complète.

## Liens et iconographie

Les liens sont des segments droits précalculés et réattachés au runtime selon le rayon visuel courant. L’iconographie utilise un rendu complet fixe, sans variantes de zoom sémantique.
