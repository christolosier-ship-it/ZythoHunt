# Architecture

ZythoHunt est une PWA Vite en HTML/CSS/JavaScript, sans backend. L'application conserve les données utilisateur localement et charge les collections ainsi que les fonctionnalités secondaires à la demande.

## Démarrage

```text
index.html
→ src/main.js
→ navigation principale
→ bootApp()
→ préférences locales et politique d'expérience
→ catalogue léger des collections
→ chargement de la collection active
→ session ZythoSphère
```

`src/data/collection-catalog.js` est le registre léger chargé au démarrage. Il contient les métadonnées nécessaires à la navigation et des fonctions `import()` vers les bundles réels. `createLazyCollectionManager()` est l'unique gestionnaire de collections du runtime.

Les préférences sont lues avant de choisir la collection initiale : le démarrage peut reprendre la dernière collection ou repartir de la première. Une collection secrète mémorisée n'est jamais restaurée comme active si elle est de nouveau verrouillée.

## Données de collection

Chaque collection possède :

- un fichier canonique dans `src/data/brassopedie/collection-XX-*.js` ;
- un mapping d'assets dans `src/data/card-assets/` ;
- un petit module `*-collection.js` qui compose les deux via `createCollectionBundle()`.

Les dix fichiers Brassopédie sont les sources éditoriales de vérité. Il n'existe plus de registre eager parallèle ni de jeu de cartes prototype.

Le domaine Dégustation possède en complément **un seul référentiel canonique** : `src/data/sensory-profiles.js`. Il contient les 251 signatures statiques, regroupées visuellement par collection dans le même fichier. Les 40 profils du prototype initial n'ont plus de statut particulier et il n'existe aucun agrégateur, fragment `PartN` ou sous-catalogue sensoriel parallèle. La liaison avec la Brassopédie repose sur les `collectionId` et `cardId` stables.

Chaque profil sensoriel porte également son statut de vérification documentaire. Une signature ne peut être déclarée `verified` sans source explicite et date de revue.

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

## Flux Dégustation

```text
ouverture de Dégustation
→ import dynamique du contrôleur et de son catalogue statique 251
→ parcours libre ou à l'aveugle
→ profil sensoriel local
→ moteur pur de correspondance
→ classement qualitatif + overlays
→ association facultative à une carte
→ persistance dans le carnet local
```

Le moteur ne modifie jamais la progression, les badges ou les découvertes. Une dégustation est une donnée personnelle indépendante de la révélation d'une carte.

## Responsabilités principales

- `src/app/` : composition runtime, navigation, changement de collection et cycle de session ;
- `src/data/` : catalogue, bundles, règles de collections, sources Brassopédie et référentiel sensoriel unique ;
- `src/discovery/` : résolution des saisies, progression et registre des découvertes ;
- `src/carousel/` : carrousel, snap, navigation et sélection des cartes ;
- `src/components/` : structure DOM commune des cartes ;
- `src/reveal/` et `src/animation/` : cycle de révélation et animations GSAP ;
- `src/brassopedie/` : panneau de fiche et bibliothèque encyclopédique ;
- `src/badges/` : définitions, moteur, statistiques, stockage, notifications et contrôleur de feature ;
- `src/tasting/` : modèle, stockage, vocabulaire, moteur sensoriel, comparaison, contrôleur et vue Dégustation ;
- `src/settings/` : préférences, politique d'expérience, contrôleur et vue Réglages ;
- `src/background/` : fond liquide, profils d'ambiance et transitions de collection ;
- `src/storage/` : primitives communes de persistance et gestionnaire central des données ZythoHunt ;
- `src/pwa/` : enregistrement, état, mises à jour et outils de cache ;
- `src/utils/` : chemins d'assets, préchargement et utilitaires partagés ;
- `public/sw.js` : cache PWA et comportement hors ligne.

## Chargement et performances

Le démarrage ne charge que la collection active et les modules nécessaires à la ZythoSphère. Les autres collections restent derrière leurs `import()` dynamiques.

Les vues secondaires Badges, Réglages, Dégustation et bibliothèque Brassopédie chargent leur JavaScript et leur CSS à leur première ouverture. Pour Réglages, le contrôleur, le gestionnaire d'import/export et les outils PWA restent eux aussi derrière cet import dynamique ; seules les petites préférences nécessaires au démarrage et aux notifications sont chargées au boot.

Dégustation charge son contrôleur à la demande ; le contrôleur importe directement `src/data/sensory-profiles.js`. Le même tableau sert au matching, à la recherche de styles et à la comparaison avec une fiche liée. Il n'existe ni `sensory-runtime`, ni second index sensoriel, ni reconstruction à partir des neuf bundles classiques.

Les images du carrousel sont préchargées par fenêtre de miniatures ; l'image HD d'une carte n'est demandée que lorsqu'elle doit être inspectée.

Le service worker précache un shell minimal. Les images de collections sont gérées par un cache borné et ne font pas partie du shell initial. L'identifiant de cache est dérivé du build par `scripts/prepare-service-worker.mjs`, ce qui permet de retirer automatiquement les anciens caches ZythoHunt lors de l'activation d'une nouvelle version.

## Réglages et politique d'expérience

`src/settings/settings-storage.js` conserve un objet de préférences versionné. `src/settings/settings-policy.js` est la source commune pour les décisions d'animation :

- `auto` respecte `prefers-reduced-motion` ;
- `full` force l'expérience complète ;
- `reduced` force les séquences réduites.

L'ambiance du fond peut être complète, allégée ou statique. Ces modes modulent les particules et le mouvement sans remplacer les palettes éditoriales propres aux collections.

`src/settings/settings-controller.js` orchestre l'écran Réglages et charge sa vue/CSS à la demande. `app-runtime.js` ne contient pas l'implémentation détaillée de la feature.

## Dégustation et moteur sensoriel

`src/tasting/sensory-score.js` et `src/tasting/sensory-matcher.js` forment un noyau métier pur : ils reçoivent un profil utilisateur et le catalogue complet, puis retournent un classement, une confiance qualitative, des éléments d'explication et des overlays.

Ils n'accèdent ni au DOM, ni au stockage, ni aux badges, ni à la navigation.

Le référentiel `src/data/sensory-profiles.js` comporte exactement 251 profils statiques : 165 `primary`, 29 `fallback`, 29 `overlay` et 28 `excluded`. La Collection 10 est explicitement interdite. `scripts/validate-sensory-catalog.mjs` valide au build les références de cartes, le vocabulaire, les rôles et les métadonnées documentaires. Le script valide ; il ne fabrique aucun payload ni aucun profil.

Il n'existe plus de reconstruction `40 curated + 211 derived`, de raffinements experts exécutés après dérivation, de cartographie de rôles parallèle, de fallback runtime qui réanalyse les textes Brassopédie, ni de découpage du catalogue en fragments arbitraires.

Le matcher exige le catalogue complet de 251 profils et refuse explicitement un ancien sous-ensemble de prototype.

Une valeur non renseignée est toujours ignorée par le calcul. Elle ne devient jamais une valeur nulle ou une absence sensorielle artificielle.

Les overlays sont évalués séparément du classement principal. Ils peuvent donc compléter un style, jamais le remplacer.

Le détail du contrat fonctionnel, du statut documentaire et des tests se trouve dans `docs/active/Degustation.md`.

## Persistance, sauvegarde et remise à zéro

La progression des collections, les badges, les statistiques de révélation, la collection active, les préférences applicatives et le carnet de dégustation utilisent le stockage local via les helpers communs de `src/storage/`. Les échecs de persistance sont remontés à l'interface au lieu d'être silencieusement ignorés.

`src/storage/app-data-manager.js` définit la frontière des données appartenant à ZythoHunt. Il permet :

- d'exporter une sauvegarde JSON versionnée ;
- de valider strictement l'enveloppe et les structures connues avant import ;
- de valider la collection active avant toute suppression ;
- de valider le carnet de dégustation avant remplacement des données courantes ;
- d'importer une sauvegarde avec restauration de secours en cas d'échec d'écriture ;
- de réinitialiser la progression sans toucher aux préférences, au carnet de dégustation ni aux caches ;
- de remettre entièrement ZythoHunt à zéro sans appeler `localStorage.clear()` et sans supprimer les clés appartenant à une autre application.

La remise à zéro complète couvre également les futures données ZythoHunt utilisant l'espace de noms `zythohunt.*`. Les caches PWA sont supprimés séparément via Cache Storage. Les permissions système du navigateur, notamment la permission de notification, restent sous le contrôle du navigateur.

Aucun compte, serveur applicatif ou stockage cloud n'est nécessaire au fonctionnement de ZythoHunt.

## Garde-fou anti-spaghetti

`src/app/app-runtime.js` reste l'orchestrateur général, mais ne doit pas devenir l'implémentation détaillée de chaque feature. Badges, Réglages et Dégustation disposent de leurs contrôleurs propres. Le runtime reste responsable de la composition, de la navigation et du cycle de session.

Pour Dégustation, les données sensorielles sont statiques et explicites dans **un seul fichier canonique**. Une séparation en nouveaux fichiers n'est justifiée que par une responsabilité métier réellement différente, jamais uniquement parce qu'un fichier de données est long. Le build valide le catalogue mais ne le transforme pas. Toute évolution sensorielle doit modifier le profil concerné et, lorsqu'elle est documentée, sa provenance.
