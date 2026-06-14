# Layout radial V0.4.0

Le layout est généré par `scripts/build-radial-layout.mjs`.

1. Chargement de `data/taxonomy-nodes.json`.
2. Construction de l'arbre depuis `parentId`.
3. Comptage des feuilles capturables descendantes.
4. Attribution des secteurs d'univers avec `sqrt(descendantLeafCount)`.
5. Placement sur anneaux radiaux par rang, avec sous-anneaux pour fratries denses.
6. Export de `data/generated/zythosphere-layout.json` et `data/map-presentation.json`.
7. Rapport validé : nœuds, styles, structures, liens, profondeur, sous-anneaux, collisions restantes et croisements restants.

Les coordonnées monde sont indépendantes de la résolution écran. Les liens graphiques restent hiérarchiques ; les relations secondaires ne sont pas dessinées dans la Zythosphère.
