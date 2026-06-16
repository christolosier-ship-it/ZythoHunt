# Architecture ZythoHunt V0.5.1

La V0.5.1 conserve une carte Canvas unique et un layout `compact-bubble-cloud` précalculé par `scripts/build-cloud-layout.mjs`.

## Pipeline de données

1. `npm run build:taxonomy` prépare le référentiel taxonomique canonique.
2. `npm run test:geometry` vérifie les primitives géométriques.
3. `npm run build:layout` génère atomiquement le layout.
4. `npm run validate:layout` recharge le JSON final et recalcule la géométrie.
5. `npm run validate:determinism` contrôle deux builds successifs.

La taxonomie, les recettes iconographiques et le layout généré restent séparés. Le navigateur charge uniquement les fichiers runtime nécessaires, jamais les diagnostics comme source applicative.

## Renderer Canvas

`src/canvas/canvas-map-renderer.js` applique uniquement caméra, culling, dessin des segments droits, dessin des bulles et synchronisation d’accessibilité. Il ne calcule ni layout, ni collision, ni routage, ni croisement.

## Caméra

La caméra démarre sur Bière à 100 %. Le zoom est borné entre 80 % et 120 %. Le recentrage revient sur Bière à 100 %, et le focus de révélation centre le style à 120 %. Il n’existe plus de vue complète.

## Liens et validation

Les liens sont des segments droits précalculés et réattachés au runtime selon le rayon visuel courant. Tous les liens, visibles ou masqués, sont validés hors navigateur par le validateur indépendant.
