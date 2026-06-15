# ZythoHunt

ZythoHunt est un prototype de chasse et de découverte des styles de bière. La V0.5.0 refond la Zythosphère en carte Canvas compacte, organisée comme un nuage hiérarchique de bulles.

## Zythosphère V0.5.0

- nuage dense et compact de bulles ;
- carte volontairement plus grande que l’écran, même à 80 % ;
- exploration locale fluide par pan ;
- zoom unique limité à 80–120 % ;
- aucun élément n’apparaît ou ne disparaît selon le zoom ;
- absence de vue complète : le recentrage cible Bière ;
- liens droits entre bords circulaires ;
- validation géométrique par cercles et segments ;
- layout calculé hors navigateur.

Les styles inconnus affichent seulement un `?`. Une capture révèle uniquement le style capturé. Les structures et bulles inconnues restent visibles par défaut.

## Versions

- application : 0.5.0 ;
- taxonomie : 1.0.0 ;
- présentation cartographique : 3.0.0 ;
- moteur : `compact-bubble-cloud` 1.0.0.

## Commandes

```bash
npm run build:taxonomy
npm run build:layout
npm run validate:taxonomy
npm run validate:icons
npm run validate:layout
npm run validate:determinism
npm run validate
```
