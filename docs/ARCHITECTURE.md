# Architecture

ZythoHunt est une PWA Vite en HTML/CSS/JavaScript, sans backend. L'application conserve les données utilisateur localement et charge les collections à la demande.

## Démarrage

```text
index.html
→ src/main.js
→ navigation principale
→ bootApp()
→ catalogue léger des collections
→ chargement de la collection active
→ session ZythoSphère
```

`src/data/collection-catalog.js` est le registre léger chargé au démarrage. Il contient les métadonnées nécessaires à la navigation et des fonctions `import()` vers les bundles réels. `createLazyCollectionManager()` est l'unique gestionnaire de collections du runtime.

## Données de collection

Chaque collection possède :

- un fichier canonique dans `src/data/brassopedie/collection-XX-*.js` ;
- un mapping d'assets dans `src/data/card-assets/` ;
- un petit module `*-collection.js` qui compose les deux via `createCollectionBundle()`.

Les dix fichiers Brassopédie sont les sources éditoriales de vérité. Il n'existe plus de registre eager parallèle ni de jeu de cartes prototype.

## Flux ZythoSphère

```text
saisie d'un style ou alias
→ résolution dans la collection active
→ sinon consultation de beer-search-index.json
→ changement de collection uniquement si nécessaire
→ révélation GSAP
→ persistance de la découverte
→ évaluation des badges et progression
```

`public/beer-search-index.json` est généré avant `dev` et `build` par `scripts/generate-beer-search-index.mjs`. Il permet la recherche inter-collections sans importer les textes encyclopédiques des collections candidates.

## Responsabilités principales

- `src/app/` : composition runtime, navigation, changement de collection et cycle de session ;
- `src/data/` : catalogue, bundles, règles de collections et sources Brassopédie ;
- `src/discovery/` : résolution des saisies, progression et registre des découvertes ;
- `src/carousel/` : carrousel, snap, navigation et sélection des cartes ;
- `src/components/` : structure DOM commune des cartes ;
- `src/reveal/` et `src/animation/` : cycle de révélation et animations GSAP ;
- `src/brassopedie/` : panneau de fiche et bibliothèque encyclopédique ;
- `src/badges/` : définitions, moteur, statistiques, stockage et notifications ;
- `src/background/` : fond liquide et transitions de collection ;
- `src/storage/` : primitives communes de persistance locale ;
- `src/utils/` : chemins d'assets, préchargement et utilitaires partagés ;
- `public/sw.js` : cache PWA et comportement hors ligne.

## Chargement et performances

Le démarrage ne charge que la collection active et les modules nécessaires à la ZythoSphère. Les autres collections restent derrière leurs `import()` dynamiques.

Les vues secondaires Badges et bibliothèque Brassopédie chargent leur JavaScript et leur CSS à leur première ouverture. Les images du carrousel sont préchargées par fenêtre de miniatures ; l'image HD d'une carte n'est demandée que lorsqu'elle doit être inspectée.

Le service worker précache un shell minimal. Les images de collections sont gérées par un cache borné et ne font pas partie du shell initial.

## Persistance

La progression des collections, les badges, les statistiques de révélation et les préférences applicatives utilisent le stockage local via les helpers communs de `src/storage/`. Les échecs de persistance sont remontés à l'interface au lieu d'être silencieusement ignorés.

Aucun compte, serveur applicatif ou stockage cloud n'est nécessaire au fonctionnement de ZythoHunt.

## Garde-fou anti-spaghetti

`src/app/app-runtime.js` reste l'orchestrateur général, mais ne doit pas devenir l'implémentation détaillée de chaque feature. Les évolutions Badges, Réglages et Dégustation doivent isoler leurs contrôleurs propres et laisser au runtime la composition, la navigation et le cycle de session.
