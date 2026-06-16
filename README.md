# ZythoHunt

ZythoHunt est un prototype de chasse et de découverte des styles de bière. La V0.5.1 fait évoluer la Zythosphère vers un moteur `compact-bubble-cloud` incrémental, construit hors navigateur et validé par recalcul géométrique.

## Zythosphère V0.5.1

- nuage de bulles hiérarchique ;
- carte volontairement plus grande que l’écran, même à 80 % ;
- exploration locale par pan ;
- zoom limité à 80–120 % ;
- aucun élément n’apparaît ou ne disparaît selon le zoom ;
- absence de vue complète : le recentrage cible Bière ;
- liens droits entre bords circulaires ;
- validation géométrique réelle par cercles et segments ;
- construction hors navigateur, sans calcul lourd au runtime ;
- densité recherchée par placement au plus proche compatible avec la validation.

Les styles inconnus affichent seulement un `?`. Une capture révèle uniquement le style capturé. Les structures et bulles inconnues restent visibles par défaut.

## Versions

- application : 0.5.1 ;
- taxonomie : 1.0.0 ;
- présentation cartographique : 3.1.0 ;
- moteur : `compact-bubble-cloud` 1.1.0 ;
- schéma runtime : 3.

## Commandes

```bash
npm run build:taxonomy
npm run build:layout
npm run test:geometry
npm run validate:taxonomy
npm run validate:icons
npm run validate:layout
npm run validate:determinism
npm run validate
```
