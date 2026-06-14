# Taxonomie

La taxonomie canonique est `ZythoHunt Taxonomy 1.0.0`.

## Nœuds

Types utilisés : `root`, `universe`, `family`, `subfamily`, `style-group` et `style`. Les nœuds structurels organisent la carte ; les nœuds `style` capturables sont les styles à découvrir.

Chaque nœud non racine possède un parent principal unique via `parentId`. Les rangs sont variables selon les branches et ne doivent pas imposer un cercle graphique unique.

## Identifiants et alias

Les identifiants sont stables, ASCII, en kebab-case et ne doivent pas être réutilisés. Les alias servent uniquement à la recherche : ils ne créent jamais de style supplémentaire.

La recherche normalise casse, accents, ponctuation et espaces. Les cas suivis incluent NEIPA, ESB, Weissbier, Wee Heavy, Maibock et IPL.

## Séparation des responsabilités

La taxonomie ne doit pas porter les décisions de placement graphique. Les coordonnées, boîtes et routes sont générées dans le layout runtime.
