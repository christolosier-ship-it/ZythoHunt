# ZythoHunt

ZythoHunt est une application web native HTML/CSS/JavaScript dédiée à l’exploration progressive des styles de bière. Sa carte interactive, la **Zythosphère**, affiche la structure complète du corpus tout en gardant les styles non découverts anonymes.

## État actuel

- Application : **0.4.2**.
- Taxonomie : **1.0.0**.
- Présentation cartographique : **2.1.0**.
- Corpus : 272 nœuds, 201 styles capturables, 71 nœuds structurels, 271 relations principales, 1 racine et 6 univers.

## Fonctions disponibles

- Carte Canvas unique avec pan, zoom, focus, recentrage et vue complète.
- Styles inconnus visibles sous forme de bulles anonymes `?`.
- Recherche normalisée par casse, accents, ponctuation et alias.
- Révélation individuelle d’un style découvert.
- Bouton de contrôle **All** pour révéler tous les styles en mémoire.
- Navigation basse préparée pour Brassopédie, Dégustations et Progression, encore non fonctionnelles.

## Architecture réelle

- `index.html`, `styles/` et `src/` forment l’application native sans framework.
- `data/taxonomy-nodes.json` contient la taxonomie canonique.
- `data/taxonomy-links.json` et `data/aliases.json` restent chargés tant que leur migration n’est pas terminée.
- `data/style-icon-recipes.json` reste la source iconographique active.
- `data/generated/zythosphere-layout.json` est le layout runtime chargé par le navigateur.
- `data/generated/zythosphere-layout-report.json` contient les métriques de génération et n’est pas nécessaire au rendu.

## Lancement local

```bash
python3 -m http.server 4173
```

Ouvrir `http://127.0.0.1:4173/`.

## Commandes npm

```bash
npm run build:layout
npm run validate:taxonomy
npm run validate:icons
npm run validate:layout
npm run validate
```

## Statut géométrique V0.4.2

La V0.4.2 sépare le runtime du rapport et ajoute une validation indépendante qui recalcule la géométrie à partir du fichier réellement chargé. L’audit confirme que les collisions entre boîtes de nœuds sont résolues, mais que le routage Bézier conserve actuellement des intersections lien-nœud. `npm run validate:layout` échoue donc volontairement tant que ces conflits ne sont pas réellement corrigés.

## Limites connues

- Brassopédie complète, dégustations, progression, persistance, comptes, cloud et PWA sont hors périmètre.
- Validation réelle Safari iPad non effectuée dans l’environnement agent.
- Migration des recettes vers profils iconographiques et suppression des données dérivables restent à terminer après correction géométrique.
