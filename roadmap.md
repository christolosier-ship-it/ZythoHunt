# Roadmap ZythoHunt

## [~] V0.5.0 — Nuage compact de bulles

Décisions conservées :

- ratios ×0,8 / ×1 / ×1,2 / ×1,5 / ×2 ;
- base de style 72 ;
- zoom 80–120 % ;
- contenu graphique fixe ;
- carte jamais entièrement cadrée ;
- liens droits ;
- layout calculé hors navigateur ;
- déterminisme contrôlé par deux builds successifs.

Limite confirmée : la densité et les proportions sont validées, mais la planarité réelle des liens de la V0.5.0 n’était pas validée par l’ancien validateur.

## [x] V0.5.1 — Construction incrémentale planaire

- primitives géométriques segment/segment, segment/cercle et cercle/cercle ajoutées ;
- validateur indépendant recalculant le JSON final ;
- génération atomique du layout ;
- modèle interne `SubtreeBlock` introduit ;
- rapports générés depuis le layout final ;
- tests unitaires de géométrie intégrés à `npm run validate`.

### Journal d’avancement

- 2026-06-16 : passage V0.5.1, réparation du validateur, preuve d’échec du layout V0.5.0, génération atomique et validation indépendante.
- 2026-06-15 : migration V0.5.0 vers `compact-bubble-cloud`, suppression du zoom sémantique runtime, liens droits, versionnement 0.5.0.

## Historique bref

- V0.4.4 : carte radiale étendue avec routes Bézier et vue complète. Cette philosophie n’est plus active.
