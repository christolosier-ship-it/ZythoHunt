# ZythoHunt Reveal Lab

Prototype autonome du carrousel de collection et de l’animation de révélation de cartes de ZythoHunt.

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
  data/        cartes et collection de démonstration
  discovery/   résolution des styles et progression
  reveal/      orchestration de la révélation
  utils/       assets et géométrie
```

Le laboratoire contient neuf emplacements, dont trois styles révélables : Stout, Imperial Stout et Baltic Porter.
