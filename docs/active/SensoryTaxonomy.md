# Taxonomie sensorielle des 251 cartes classiques

Statut : **cartographie V1 active**

## But

Cette cartographie prépare l'extension du moteur Dégustation au-delà des 40 profils pilotes sans transformer les 251 cartes de la Brassopédie en concurrents artificiellement équivalents.

Chaque carte classique reçoit exactement un rôle algorithmique :

- **primary** : style suffisamment autonome pour être candidat principal ;
- **fallback** : famille large, utile lorsque plusieurs descendants restent indifférenciables ;
- **overlay** : signature transversale qui se superpose à un style de base ;
- **excluded** : carte encyclopédique dont le sens commercial, légal ou contextuel ne peut pas être déduit de façon fiable par la seule dégustation.

La Collection 10 reste hors de ce référentiel.

## Répartition V1

| Rôle | Nombre |
| --- | ---: |
| primary | 165 |
| fallback | 29 |
| overlay | 29 |
| excluded | 28 |
| **Total** | **251** |

Le référentiel se trouve dans `src/data/sensory/sensory-role-map.js`.

## Principes de classement

### Familles

Les cartes parentes très larges telles que `lager`, `pilsner`, `pale-ale`, `bitter`, `porter`, `stout`, `ale`, `biere-de-ble-wheat-beer` ou `biere-acide-sour-beer` sont classées `fallback`. Elles peuvent expliquer une proximité de famille sans écraser leurs descendants plus précis.

### Transverses

Les catégories basées sur un ajout ou une transformation applicable à plusieurs styles sont classées `overlay` : café, fruit, épices, miel, grains alternatifs, houblon frais, bois/barrique, vieillissement ou fermentation Brett selon les cas.

Les overlays n'ont pas vocation à devenir automatiquement le résultat principal du moteur.

### Appellations commerciales

La Collection 9 est volontairement traitée avec prudence. La majorité de ses cartes décrit une couleur commerciale, un statut, une mention réglementaire, une force ou une méthode de commercialisation. Ces informations ne sont pas déductibles de façon fiable depuis le verre et sont donc `excluded`.

`panache` et `radler-shandy` restent `fallback` car leur signature de boisson mélangée peut être sensoriellement utile sans constituer un style technique précis.

## Compatibilité avec le pilote 40

La cartographie ne remplace pas encore `sensory-profiles.js`. Les 40 profils détaillés continuent d'alimenter le moteur actuel.

Le générateur `scripts/generate-sensory-index.mjs` vérifie désormais que :

1. les neuf collections classiques contiennent exactement 251 cartes ;
2. les 251 cartes possèdent exactement un rôle ;
3. aucune carte Collection 10 n'est cartographiée ;
4. aucun rôle ne pointe vers une carte inexistante ;
5. les 40 profils pilotes conservent le même rôle que la cartographie globale ;
6. la répartition globale reste 165 primary / 29 fallback / 29 overlay / 28 excluded.

Une nouvelle carte classique non classée ou une divergence de rôle fait donc échouer le build.

## Étape suivante

La prochaine phase consiste à définir la **généalogie sensorielle** : parents réutilisables, héritage contrôlé et overrides des descendants. Le runtime continuera de recevoir des profils complètement résolus ; l'héritage restera un outil de construction du référentiel et non une complexité ajoutée au matching.
