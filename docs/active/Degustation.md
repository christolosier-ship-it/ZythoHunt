# Dégustation

Statut : **actif — V1**

## Intention produit

Dégustation transforme ZythoHunt en carnet personnel d’exploration du verre, sans confondre cette activité avec la progression de collection.

Deux états restent distincts :

- **Découverte** : une carte de la Brassopédie a été révélée dans la ZythoSphère ;
- **Dégustée** : l’utilisateur a réellement enregistré une dégustation d’une bière, avec ou sans style Brassopédie associé.

Une même carte peut correspondre à plusieurs dégustations. Le carnet conserve donc des événements indépendants et non un simple booléen « déjà goûté ».

La V1 reste volontairement personnelle, locale et non compétitive : aucune note communautaire, aucun classement social et aucun badge de dégustation.

## Parcours utilisateur

L’écran Dégustation propose deux entrées :

- **Dégustation libre** : le style peut être associé dès le départ ;
- **À l’aveugle** : les sensations sont renseignées avant toute proposition de style.

Le parcours comporte six étapes :

1. **La bière** : nom, brasserie, date et style facultatif ;
2. **Le coup d’œil** : couleur, limpidité et mousse ;
3. **Le nez** : familles aromatiques avec intensité discrète, présente ou dominante ;
4. **La bouche** : arômes, amertume, sucrosité, acidité, corps, carbonatation, alcool perçu et finale ;
5. **Mon verdict** : réaction personnelle, note facultative et souvenir libre ;
6. **Le résultat** : pistes de styles, signatures supplémentaires et comparaison avec une fiche Brassopédie liée.

Le parcours doit rester praticable en environ une à trois minutes. Les champs sensoriels sont facultatifs : une réponse non renseignée signifie **inconnue**, jamais zéro ni absence.

## Modèle et stockage

Le modèle versionné se trouve dans `src/tasting/tasting-model.js`.

La persistance locale est centralisée par `src/tasting/tasting-storage.js` sous la clé :

```text
zythohunt.tastings.v1
```

Le store contient :

```text
TastingStore
├── schemaVersion
├── items
│   └── <id>: Tasting
└── order[]
```

Une dégustation conserve notamment :

```text
Tasting
├── id
├── createdAt / updatedAt / tastedAt
├── beer
│   ├── name
│   └── brewery
├── blind
├── style?
│   ├── collectionId
│   ├── cardId
│   └── name?
├── appearance
├── nose
├── palate
├── structure
├── finish[]
└── verdict
```

Les photos ne font pas partie de la V1 afin de ne pas stocker de données binaires dans `localStorage`.

### Réglages et sauvegardes

`src/storage/app-data-manager.js` traite le carnet comme une donnée ZythoHunt :

- l’export JSON l’inclut ;
- l’import valide sa structure avant toute suppression ;
- **Réinitialiser la progression** conserve les dégustations ;
- **Remettre ZythoHunt entièrement à zéro** supprime le carnet ;
- aucune opération n’utilise `localStorage.clear()`.

## Référentiel sensoriel

Le référentiel du moteur se trouve dans :

```text
src/data/sensory/sensory-profiles.js
```

Ce fichier est la **source de vérité du domaine de correspondance sensorielle**. Il ne remplace pas les fiches éditoriales de la Brassopédie et ne constitue pas un patch d’enrichissement de leur contenu.

Les responsabilités sont séparées :

- `src/data/brassopedie/collection-XX-*.js` reste la source éditoriale canonique pour les textes, données historiques et techniques des cartes ;
- `src/data/sensory/sensory-profiles.js` porte uniquement les signatures normalisées nécessaires au calcul ;
- la liaison se fait par `collectionId` + `cardId` stables.

Cette séparation évite de dupliquer des paragraphes encyclopédiques dans le moteur tout en gardant un référentiel calculable, testable et versionnable.

### Pilote V1

Le pilote contient exactement **40 profils** :

- **37 `primary`** : styles pouvant être classés comme résultat principal ;
- **1 `fallback`** : `radler-shandy`, catégorie large pouvant remonter lorsque le profil reste plus générique ;
- **2 `overlay`** : `coffee-beer` et `wood-and-barrel-aged-beer`, signatures transversales qui se superposent à un style de base.

La Collection 10 — Bizarre et insolite est explicitement exclue du référentiel sensoriel V1.

## Génération et validation de l’index

`scripts/generate-sensory-index.mjs` vérifie au build :

- que le pilote contient exactement 40 profils ;
- que le nombre de rôles correspond au contrat 37 / 1 / 2 ;
- que chaque `collectionId` et `cardId` pointe vers une vraie carte classique ;
- qu’aucun profil de Collection 10 ne fuit dans l’index ;
- que descripteurs, axes, finales et plages utilisent le vocabulaire autorisé ;
- qu’aucun profil n’est dupliqué.

Le script génère `src/data/sensory/generated-sensory-index.js` comme artefact de validation déterministe. Le runtime utilise le référentiel sensoriel léger et l’index de recherche existant `public/beer-search-index.json` pour afficher les noms de styles sans charger toutes les fiches encyclopédiques.

## Moteur de correspondance

Le moteur est volontairement pur :

```text
profil utilisateur
+
référentiel sensoriel
↓
classement + confiance + explications + overlays
```

Il ne connaît ni les badges, ni la progression, ni le DOM, ni la navigation, ni le stockage.

### Pondérations

Les familles de signaux utilisent actuellement les poids suivants :

| Groupe | Poids |
| --- | ---: |
| Apparence | 15 |
| Nez | 25 |
| Bouche aromatique | 25 |
| Amertume / sucrosité / acidité | 15 |
| Corps / carbonatation / alcool | 10 |
| Finale | 10 |

Les marqueurs aromatiques rares reçoivent une pondération de type fréquence inverse : un couple très discriminant comme banane + girofle porte davantage qu’un marqueur répandu comme céréale.

Les contradictions explicites réduisent le score d’un candidat. Aucun score négatif, `NaN` ou `Infinity` n’est exposé.

### Confiance

La confiance est volontairement qualitative :

- **Profil trop ambigu** ;
- **Correspondance fragile** ;
- **Correspondance plausible** ;
- **Correspondance forte**.

L’interface ne présente pas de pourcentage de « justesse » du palais. La dégustation n’est pas un examen.

### Overlays

Un overlay est calculé dans une voie séparée du classement principal. Il ne peut donc jamais remplacer le style de base.

Exemple :

```text
Imperial Stout
+
Wood / Barrel-Aged Beer
```

Le premier décrit le style principal, le second une signature supplémentaire.

## Comparaison avec la Brassopédie

Lorsqu’une dégustation est liée à une carte possédant un profil sensoriel pilote, `src/tasting/tasting-comparison.js` produit une explication non normative :

- repères retrouvés ;
- repères classiques non relevés ;
- éventuelles sensations supplémentaires ;
- finale commune.

Les formulations décrivent des correspondances, jamais une réussite ou un échec du dégustateur.

## Architecture du module

```text
src/tasting/
├── tasting-controller.js     # orchestration et chargement à la demande
├── tasting-view.js           # écrans et interactions
├── tasting.css               # responsive mobile / tablette / desktop
├── tasting-model.js          # schéma et validation d’une dégustation
├── tasting-storage.js        # CRUD local sûr
├── tasting-comparison.js     # comparaison à une signature connue
├── tasting-vocabulary.js     # vocabulaire sensoriel partagé
├── sensory-score.js          # score pur d’un candidat
└── sensory-matcher.js        # classement, confiance et overlays
```

Dégustation est chargée dynamiquement lors de sa première ouverture depuis `app-runtime.js`. Le module ne doit pas regonfler le chemin critique du démarrage.

## Tests d’acceptation

Le moteur pilote est protégé par :

- 8 signatures étalons ;
- 24 cas de duels entre styles voisins ;
- cas ambigus et données manquantes ;
- rareté des marqueurs ;
- fallback Radler / Shandy ;
- overlays café et bois ;
- invariants d’exclusion de la Collection 10 ;
- déterminisme du classement ;
- contrôle des bornes numériques.

Le stockage est couvert pour le CRUD, les échecs d’écriture, l’export/import et les deux niveaux de remise à zéro.

Playwright couvre le parcours principal, la persistance après rechargement et le mode à l’aveugle. Les écrans sont également contrôlés avec axe-core.

## Hors périmètre V1

Sont volontairement différés :

- photos de dégustation ;
- compte, cloud ou synchronisation ;
- reconnaissance d’étiquette ;
- notes communautaires ;
- partage social ;
- cave physique et gestion de stock ;
- géolocalisation automatique ;
- statistiques avancées « Mon palais » ;
- badges liés aux dégustations ;
- extension du référentiel sensoriel aux 251 cartes classiques avant validation du pilote.
