# ZythoHunt

Application autonome de collection et de révélation de cartes consacrées aux styles de bières.

## Stack

- HTML, CSS et JavaScript vanilla
- GSAP et Draggable
- Vite
- Tests Node
- GitHub Pages

## Installation

```bash
pnpm install
pnpm dev
```

## Vérifications

```bash
pnpm check
```

Cette commande exécute le typecheck JavaScript, les tests et le build Vite.

## Structure

```text
src/
  animation/   timeline de révélation
  carousel/    navigation et interactions du carrousel
  components/  construction des cartes et panneau de réglages
  data/        cartes et collections
  discovery/   résolution des styles et progression
  reveal/      orchestration de la révélation
  utils/       assets et géométrie
```

ZythoHunt propose plusieurs collections de styles à découvrir et à archiver dans la Brassopédie.
