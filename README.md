<div align="center">
  <img src="./public/logo.png" alt="ZythoHunt logo" width="112" height="112" />

# ZythoHunt

**Explorez, révélez, collectionnez et dégustez les styles de bières dans une Brassopédie interactive.**

[![Version](https://img.shields.io/badge/version-0.2.0-c68b3c?style=flat-square)](./package.json)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-43853d?style=flat-square&logo=node.js&logoColor=white)](./package.json)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tests](https://img.shields.io/badge/tests-Node.js%20%2B%20Playwright-3c873a?style=flat-square)](#qualité-et-vérifications)
[![PWA](https://img.shields.io/badge/PWA-installable-8b4513?style=flat-square)](./public/manifest.webmanifest)

[Présentation](#présentation) · [Fonctionnalités](#fonctionnalités) · [Dégustation](#dégustation) · [Démarrage](#démarrage-rapide) · [Architecture](#architecture)

</div>

## Présentation

ZythoHunt est une application web de découverte, de collection et de dégustation consacrée aux styles de bières. L’utilisateur peut saisir le nom d’un style identifié, déclencher une révélation animée, archiver la carte correspondante et enrichir progressivement sa **Brassopédie**.

Un carnet de dégustation personnel complète cette première boucle : il permet de décrire un verre, rapprocher ses sensations d’un référentiel sensoriel et conserver la trace des bières réellement goûtées sans confondre dégustation et progression de collection.

L’expérience repose sur une direction artistique sombre et brassicole, des carrousels animés, des collections thématiques, un système de badges, un carnet local et une progression conservée dans le navigateur.

> [!NOTE]
> ZythoHunt est un outil ludique de découverte. Les informations brassicoles présentées ne remplacent pas les référentiels officiels des organismes de classification.

## Fonctionnalités

- Recherche et révélation d’un style de bière à partir de son nom ou de ses alias.
- Navigation entre **neuf collections classiques et une dixième collection secrète**.
- Carrousel interactif animé avec GSAP et interactions tactiles.
- Séquence de révélation cinématique avec ajout automatique à la collection.
- Brassopédie permettant de consulter les cartes découvertes et leurs fiches détaillées.
- Progression indépendante pour chaque collection.
- Détection des styles appartenant à une autre collection et bascule automatique.
- Déverrouillage de la collection secrète **Bizarre et insolite** à partir de 50 % de progression sur les collections classiques.
- Système de badges fondé sur les découvertes et les habitudes de révélation.
- **Dégustation guidée** en mode libre ou à l’aveugle.
- **Carnet personnel local** avec historique, recherche, modification et suppression.
- Rapprochement sensoriel qualitatif avec un pilote de 40 profils Brassopédie.
- Signatures transversales séparées du style principal, notamment café et élevage bois.
- Comparaison non normative entre les sensations renseignées et le portrait sensoriel d’un style lié.
- Réglages locaux pour les notifications, les animations, l’ambiance et le comportement au démarrage.
- Export, import et remise à zéro sélective ou complète des données ZythoHunt.
- Fond de bière animé adapté à l’identité de chaque collection.
- Persistance locale de la progression, des badges, des préférences, de la collection active et des dégustations.
- Installation en PWA et mise en cache progressive des ressources consultées.
- Interface responsive pensée pour mobile, tablette et ordinateur.

## Collections

ZythoHunt regroupe actuellement les familles suivantes :

- Lagers et fermentations basses
- Pale Ales, Bitters et IPA
- Porters et Stouts
- Traditions belges et françaises
- Bières de blé et de seigle
- Bières acides, sauvages et spontanées
- Ales ambrées, brunes, maltées et fortes
- Styles singuliers, historiques et hybrides
- Appellations commerciales
- Bizarre et insolite, collection secrète

Chaque collection possède ses propres cartes, alias de recherche, progression, identité visuelle et réglages d’ambiance. Les neuf collections classiques totalisent 251 cartes et la collection secrète en ajoute 42.

## Dégustation

Dégustation est une boucle personnelle distincte de la découverte des cartes. Une carte peut être découverte sans avoir été goûtée, et plusieurs bières réelles peuvent être enregistrées pour un même style.

Le parcours guidé comporte six étapes :

1. **La bière** : nom, brasserie, date et style facultatif ;
2. **Le coup d’œil** : couleur, limpidité et mousse ;
3. **Le nez** : familles aromatiques avec intensité ;
4. **La bouche** : arômes, structure et finale ;
5. **Mon verdict** : réaction personnelle, note facultative et souvenir libre ;
6. **Le résultat** : pistes de styles, signatures supplémentaires et comparaison éventuelle avec la Brassopédie.

Le mode **À l’aveugle** retarde toute proposition de style jusqu’à la dernière étape.

Le moteur ne transforme jamais un champ ignoré en valeur zéro. Sa confiance reste qualitative : profil ambigu, correspondance fragile, plausible ou forte. Il n’affiche aucun pourcentage de « réussite » du dégustateur.

La V1 utilise un référentiel pilote de 40 signatures sensorielle normalisées : 37 résultats principaux, un fallback Radler / Shandy et deux overlays transversaux. La Collection 10 n’entre pas dans ce moteur.

Le carnet est entièrement local. Il n’utilise ni compte, ni backend, ni API externe. Les photos, la synchronisation cloud, les statistiques avancées et les badges de dégustation sont volontairement hors périmètre de cette première version.

La spécification technique détaillée se trouve dans [`docs/active/Degustation.md`](./docs/active/Degustation.md).

## Démarrage rapide

### Prérequis

- [Node.js 24](https://nodejs.org/)
- [pnpm 10](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/christolosier-ship-it/ZythoHunt.git
cd ZythoHunt
pnpm install
pnpm dev
```

Ouvrez ensuite l’adresse affichée par Vite, généralement `http://localhost:5173`.

### Build de production

```bash
pnpm build
pnpm preview
```

## Utilisation

1. Sélectionnez une collection dans la ZythoSphère.
2. Saisissez le nom d’un style de bière dans le champ de révélation.
3. Validez pour lancer la séquence animée.
4. Retrouvez la carte découverte dans le carrousel et la Brassopédie.
5. Ouvrez **Dégustation** pour enregistrer un verre en mode libre ou à l’aveugle.
6. Consultez **Badges** pour suivre les exploits débloqués.
7. Utilisez **Réglages** pour adapter l’expérience, sauvegarder ou restaurer les données locales.

Les variantes orthographiques et noms alternatifs peuvent être reconnus grâce aux alias définis dans les données de chaque carte. La recherche inter-collections et le sélecteur de styles de Dégustation s’appuient sur un index léger généré automatiquement afin d’éviter de charger inutilement les contenus encyclopédiques des autres collections.

## Installation PWA et mode hors ligne

L’application fournit un manifest et un service worker. Une fois déployée sur HTTPS, elle peut être installée depuis le navigateur comme une application autonome.

Le service worker utilise :

- une stratégie **network first** pour les pages, scripts et feuilles de style ;
- une stratégie **stale while revalidate** avec cache borné pour les images ;
- une stratégie **stale while revalidate** pour les polices, le manifest et l’index léger de recherche inter-collections ;
- un identifiant de cache dérivé du build afin d’éliminer les anciens caches ZythoHunt lors d’une mise à jour.

> [!WARNING]
> Le shell PWA et l’index de recherche sont précachés, mais les bundles de collections et les images se chargent progressivement. Une ressource de collection qui n’a jamais été chargée peut donc rester indisponible hors connexion.

## Données et confidentialité

Les données utilisateur sont conservées localement dans le navigateur. ZythoHunt ne nécessite ni compte, ni backend, ni clé API pour fonctionner.

Les données locales couvrent notamment :

- les cartes révélées ;
- la collection active ;
- les statistiques de révélation ;
- les badges débloqués et notifications associées ;
- les préférences applicatives ;
- le carnet de dégustation.

L’écran **Réglages** permet d’exporter ou importer une sauvegarde JSON versionnée, de réinitialiser uniquement la progression, de restaurer les préférences par défaut ou de remettre complètement ZythoHunt à zéro. La réinitialisation de progression conserve le carnet ; la remise à zéro complète le supprime. Ces opérations ne suppriment jamais les clés locales appartenant à une autre application.

## Architecture

```text
ZythoHunt/
├── public/
│   ├── assets/                    # Illustrations et ressources statiques
│   ├── icons/                     # Icônes dédiées favicon, PWA et maskable
│   ├── manifest.webmanifest       # Métadonnées PWA
│   └── sw.js                      # Cache et mises à jour hors ligne
├── scripts/                       # Génération miniatures, index sensoriel/recherche et PWA
├── src/
│   ├── animation/                 # Timelines et effets de révélation
│   ├── app/                       # Navigation, session et composition applicative
│   ├── background/                # Fond de bière animé et presets
│   ├── badges/                    # Définitions, stockage, moteur et contrôleur de badges
│   ├── brassopedie/               # Bibliothèque et consultation des cartes
│   ├── carousel/                  # Navigation et interactions du carrousel
│   ├── components/                # Construction des éléments d’interface
│   ├── data/
│   │   ├── brassopedie/           # Sources éditoriales canoniques
│   │   └── sensory/               # Référentiel calculable du moteur sensoriel
│   ├── discovery/                 # Résolution des styles et progression
│   ├── pwa/                       # Enregistrement, état et outils PWA
│   ├── reveal/                    # Orchestration des révélations
│   ├── settings/                  # Préférences, politique d’expérience et vue Réglages
│   ├── storage/                   # Persistance sûre et gestion des données ZythoHunt
│   ├── tasting/                   # Carnet, moteur sensoriel, comparaison et interface
│   ├── utils/                     # Géométrie, préchargement et résolution des assets
│   └── main.js                    # Point d’entrée et composition globale
├── index.html                     # Structure principale de l’application
├── package.json                   # Scripts et dépendances
└── vite.config.js                 # Configuration Vite et GitHub Pages
```

Le catalogue léger `src/data/collection-catalog.js` est chargé au démarrage. Les bundles complets des collections restent derrière des `import()` dynamiques et ne sont chargés qu’à la demande. Les vues Badges, Réglages, Dégustation et bibliothèque Brassopédie chargent également leur JavaScript et leur CSS à leur première ouverture.

Le flux principal de révélation suit cette chaîne :

```text
Saisie du style
      ↓
Résolution du nom et des alias dans la collection active
      ↓
Consultation de l’index léger si une recherche inter-collections est nécessaire
      ↓
Vérification de la collection et de la progression
      ↓
Animation de révélation
      ↓
Archivage local, mise à jour de la Brassopédie et évaluation des badges
```

Le moteur Dégustation suit un flux indépendant :

```text
Profil sensoriel renseigné
      ↓
Normalisation des réponses
      ↓
Score pur des profils pilotes
      ↓
Classement + confiance qualitative + overlays
      ↓
Association facultative à une carte
      ↓
Enregistrement dans le carnet local
```

## Stack technique

| Technologie | Utilisation |
| --- | --- |
| HTML5 | Structure sémantique et accessibilité |
| CSS3 | Direction artistique, responsive design et animations |
| JavaScript ES Modules | Architecture modulaire et logique applicative |
| GSAP | Carrousel, transitions et séquences de révélation |
| Vite | Serveur de développement et build de production |
| TypeScript | Vérification statique du JavaScript via `checkJs` |
| Node Test Runner | Tests unitaires automatisés sans framework supplémentaire |
| Playwright + axe-core | Tests end-to-end et contrôles d’accessibilité |
| @fontsource | Polices embarquées localement |
| Local Storage | Progression, badges, préférences et carnet de dégustation |
| Service Worker et Cache API | Installation PWA et cache progressif |

## Qualité et vérifications

La commande principale génère d’abord les index de contenu, puis exécute les deux niveaux de typecheck, les tests unitaires et le build de production :

```bash
pnpm check
```

Les commandes peuvent également être lancées séparément :

```bash
pnpm content-index:generate
pnpm sensory-index:generate
pnpm typecheck
pnpm typecheck:strict
pnpm test
pnpm test:e2e
pnpm assets:thumbs:check
pnpm build
```

Le générateur sensoriel vérifie notamment que les 40 profils pilotes pointent vers de vraies cartes, respectent le vocabulaire autorisé et excluent la Collection 10.

> [!TIP]
> Lors de l’ajout d’une collection ou d’une carte, vérifiez les identifiants, alias, images, miniatures, clés de progression et presets visuels. Les validateurs de collection et d’index signalent les incohérences en développement.

## Ajouter ou modifier une collection

Une collection est généralement composée de :

1. un fichier canonique Brassopédie dans `src/data/brassopedie/collection-XX-*.js` ;
2. un mapping des images et miniatures dans `src/data/card-assets/` ;
3. un module `*-collection.js` composant les données et les assets dans un bundle ;
4. une entrée de métadonnées et de chargement dynamique dans `src/data/collection-catalog.js` ;
5. une clé de progression locale unique ;
6. un preset d’arrière-plan.

Chaque carte expose notamment un identifiant stable, un nom, des alias, une description, ses images et ses données Brassopédie. Les index légers de recherche et de validation sensorielle sont régénérés automatiquement avant `dev` et `build`.

## Déploiement sur GitHub Pages

Le projet est conçu pour être publié comme site statique :

```bash
pnpm check
pnpm build
```

Publiez ensuite le contenu généré dans `dist/` via GitHub Pages ou un workflow GitHub Actions.

> [!IMPORTANT]
> Conservez la configuration de base relative utilisée par Vite. Elle permet aux assets, au manifest et au service worker de fonctionner correctement sous le sous-chemin GitHub Pages du dépôt.
