# Architecture

Le dépôt contient une seule application Vite à la racine.

## Flux principal

```text
saisie du style
→ résolution exacte du nom ou de l’alias
→ focus du carrousel
→ révélation GSAP
→ retour de la carte
→ persistance par cardId
```

## Responsabilités

- `src/main.js` compose les modules et démarre l’application.
- `src/data/` contient la collection et les neuf emplacements du prototype.
- `src/discovery/` gère la saisie, les alias et la progression locale.
- `src/carousel/` gère Draggable, le snap, les limites et l’inspection légère.
- `src/components/` construit une structure de carte unique utilisée par le carrousel et la révélation.
- `src/reveal/` orchestre le cycle de vie modal.
- `src/animation/` contient la timeline GSAP et ses réglages.
- `src/utils/` gère les chemins d’assets, le préchargement et la capture géométrique.

## Stockage

- `zythohunt_progress_v2` pour les cartes découvertes.
- `zythohunt_motion_tokens` pour les réglages de révélation.
- `zythohunt_carousel_tokens` pour les réglages du carrousel.

Aucun backend, compte ou cloud n’est utilisé.
