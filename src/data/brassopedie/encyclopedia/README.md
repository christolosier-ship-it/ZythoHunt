# Architecture de la Brassopédie encyclopédique

Cette couche sépare volontairement la **taxonomie** (identité d’une carte) de son **contenu encyclopédique** (savoir éditorial long).

## Source de vérité

La taxonomie reste portée par les fichiers `src/data/brassopedie/collection-*.json` pour les champs structurels : identifiant, nom, nature, parent, alias, origine, plages de style, fermentation, service et description courte.

Lorsqu’une collection déclare une encyclopédie, les champs éditoriaux historiques encore présents dans un ancien JSON (`histoireEtOrigines`, `recette`, `sources`) sont ignorés lors de l’assemblage. La couche `encyclopedia/` est l’unique source de vérité runtime pour ces trois champs. Ils doivent être retirés des JSON historiques au fil de leur migration.

## Frontière stricte

Une entrée encyclopédique ne peut définir que :

- `histoireEtOrigines`
- `recette`
- `sources`

`apply-encyclopedic-enrichment.js` rejette toute tentative d’écraser un champ taxonomique ou de cibler un ID inconnu.

## Organisation des collections

Les contenus longs sont découpés par **domaines brassicoles lisibles**, jamais par taille de fichier (`part-1`, `part-2`, etc.). Chaque collection possède un `index.js` qui ne fait qu’assembler ses domaines via `composeEncyclopedicCards()`.

L’index ne contient aucun correctif individuel. Une correction appartient au module thématique qui possède la fiche. La composition rejette les doublons d’ID afin d’éviter les écrasements silencieux.

## Sources

Les helpers et références réutilisables vivent dans `encyclopedia/sources.js`. Les collections peuvent ajouter des sources propres à un sujet, mais les organismes communs (guides de styles, malteries, levuriers, institutions récurrentes) ne doivent pas être dupliqués collection par collection.

Une date de consultation est une donnée documentaire, pas une constante de test : les tests vérifient son format lorsqu’elle existe, jamais une date précise.

## Assemblage

`createCollectionBundle()` accepte une option `encyclopedia`. Le fichier d’une collection déclare donc seulement sa taxonomie, son encyclopédie et ses assets ; il ne connaît pas la mécanique de fusion.

## Tests

Les tests prennent la taxonomie comme autorité pour la liste des IDs, jamais les assets. Ils contrôlent la frontière taxonomie/encyclopédie, la couverture, la structure minimale des recettes, la traçabilité des sources et les collisions entre modules, sans imposer de nombre de mots ou de paragraphes.
