# Roadmap ZythoHunt

## État courant

- Version applicative : **0.4.3**.
- Taxonomie : **1.0.0** inchangée.
- Corpus attendu et conservé : 272 nœuds, 201 styles capturables, 71 structures, 271 relations, 1 racine, 6 univers.
- Phase active : stabilisation V0.4.3.

## Décisions verrouillées

- La Zythosphère utilise un seul moteur Canvas.
- Les styles inconnus restent visibles mais anonymes.
- Chaque style est capturé individuellement.
- Capture et dégustation restent deux objets distincts.
- La taxonomie, le layout généré et l’iconographie déclarative ont des responsabilités séparées.
- Aucun PNG, framework ou moteur SVG ne doit être introduit.

## V0.4.3 — Stabilisation

- [x] Auditer la taxonomie et confirmer les compteurs du corpus.
- [x] Séparer le layout runtime du rapport de génération.
- [x] Ajouter un validateur de layout indépendant recalculant les conflits.
- [x] Supprimer les zéros artificiels du rapport de build.
- [x] Consolider les métriques partagées de nœuds.
- [!] Corriger réellement toutes les intersections lien-nœud restantes.
- [x] Documenter l’architecture actuelle et l’état géométrique réel.
- [!] Terminer la migration vers profils iconographiques.
- [!] Dériver liens et alias seulement après preuve d’absence de perte.

## Critères de sortie V0.4.3

- `npm run validate` réussit.
- Collisions nœud-nœud finales : 0.
- Intersections lien-nœud finales : 0.
- Croisements lien-lien finaux : 0.
- Aucun résultat géométrique n’est écrit en dur.
- Le navigateur charge uniquement les JSON nécessaires au runtime.

## Hors périmètre

Brassopédie complète, dégustations, progression, IndexedDB, comptes, cloud, nouvelle taxonomie et nouvelle direction artistique.

## Journal d’avancement

### 2026-06-14 — Audit V0.4.3

- Corpus confirmé à 272 nœuds et 201 styles.
- Audit géométrique recalculé : collisions de nœuds résolues, 20 intersections lien-nœud restantes après espacement renforcé, 0 croisement lien-lien.
- Le rapport de build ne masque plus les conflits par des valeurs finales forcées à zéro.
- À arbitrer : stratégie de routage finale pour supprimer les 20 intersections restantes sans modifier la taxonomie.

### 2026-06-15 — Correction V0.4.3 des attaches circulaires

- Source unique des rayons de médaillons ajoutée dans `src/map/layout/node-metrics.js`.
- Routage généré avec attaches sur circonférences réelles et tangentes via `control1`/`control2`.
- Rendu runtime des extrémités dynamiques selon état visuel sans reroutage navigateur.
- Validation des attaches source/cible ajoutée au validateur de layout.
