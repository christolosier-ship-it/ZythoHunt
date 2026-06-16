# Layout V0.5.1 — construction incrémentale du nuage

La Zythosphère est un layout `compact-bubble-cloud` précalculé hors navigateur. Le renderer Canvas consomme uniquement les nœuds, rayons, boîtes et segments droits générés.

## Ratios verrouillés

La référence est `STYLE_BASE_RADIUS = 72`.

- style inconnu : ×0,8 = 57,6 ;
- style découvert : ×1 = 72 ;
- style sélectionné ou en révélation : ×1,2 = 86,4 ;
- structure : ×1,5 = 108 ;
- Bière : ×2 = 144.

Le layout réserve le rayon maximal des styles afin qu’une révélation ou sélection ne déplace aucun voisin.

## Packing

Le moteur manipule des blocs internes de type `SubtreeBlock` : racine, nœuds, liens, bornes, profondeur, score et direction extérieure. Un bloc déjà validé est déplacé comme un objet rigide : translation et rotation seulement, jamais relaxation individuelle des nœuds.

La construction se fait bas en haut : feuilles, structures, puis assemblage racine autour de Bière. Les enfants sont ordonnés de façon stable. Les candidats de placement sont déterministes, évalués par validation cercles/segments, puis sélectionnés par score. Un faisceau borné conserve plusieurs états partiels et fournit un retour arrière local si une insertion bloque.

Le compactage accepte uniquement des déplacements rigides qui améliorent le score et gardent la validation complète. Aucun corridor large n’est réservé autour des liens : le rayon `routingRadius` des bulles est la marge géométrique.

## Liens droits

Chaque relation est un segment unique avec `start`, `end`, `boundingBox` et `visibleByDefault`. Les points de départ et d’arrivée sont attachés au bord circulaire des bulles. Les champs Bézier (`control1`, `control2`, `segments`) sont obsolètes.

Tous les liens participent à la validation, y compris les liens masqués au démarrage et ceux révélés par All.

## Validation indépendante

Le rapport de build n’est jamais une preuve. `scripts/validate-layout.mjs` recharge `data/generated/zythosphere-layout.json` ou un fichier fourni, puis recalcule collisions nœud-nœud, intersections lien-nœud, croisements, superpositions, attaches et métriques de densité.

Commandes :

```bash
npm run test:geometry
npm run build:layout
npm run validate:layout
npm run validate:determinism
npm run validate
```
