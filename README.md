<div align="center">
  <img src="./public/logo.png" alt="ZythoHunt logo" width="112" height="112" />

# ZythoHunt

**Explorez, révélez et collectionnez les styles de bières dans une Brassopédie interactive.**

[![Version](https://img.shields.io/badge/version-1.0.0-c68b3c?style=flat-square)](./package.json)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-43853d?style=flat-square&logo=node.js&logoColor=white)](./package.json)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tests](https://img.shields.io/badge/tests-Node.js-3c873a?style=flat-square)](#qualité-et-vérifications)
[![PWA](https://img.shields.io/badge/PWA-installable-8b4513?style=flat-square)](./public/manifest.webmanifest)

[Présentation](#présentation) · [Fonctionnalités](#fonctionnalités) · [Démarrage](#démarrage-rapide) · [Architecture](#architecture)

</div>

## Présentation

ZythoHunt est une application web de découverte et de collection consacrée aux styles de bières. L’utilisateur saisit le nom d’un style identifié, déclenche une révélation animée, archive la carte correspondante et enrichit progressivement sa **Brassopédie**.

L’expérience repose sur une direction artistique sombre et brassicole, des carrousels animés, des collections thématiques, un système de badges et une progression conservée localement dans le navigateur.

> [!NOTE]
> ZythoHunt est un outil ludique de découverte. Les informations brassicoles présentées ne remplacent pas les référentiels officiels des organismes de classification.

## Fonctionnalités

- Recherche et révélation d’un style de bière à partir de son nom ou de ses alias.
- Navigation entre **neuf collections thématiques**.
- Carrousel interactif animé avec GSAP et interactions tactiles.
- Séquence de révélation cinématique avec ajout automatique à la collection.
- Brassopédie permettant de consulter les cartes découvertes et leurs fiches détaillées.
- Progression indépendante pour chaque collection.
- Détection des styles appartenant à une autre collection et bascule automatique.
- Système de badges fondé sur les découvertes et les habitudes de révélation.
- Fond de bière animé adapté à l’identité de chaque collection.
- Persistance locale de la progression, des badges et de la collection active.
- Installation en PWA et mise en cache progressive des ressources consultées.
- Interface responsive pensée pour mobile, tablette et ordinateur.

> [!IMPORTANT]
> Les sections **Dégustation** et **Réglages** sont actuellement des écrans préparatoires. La Brassopédie, les collections, les révélations et les badges constituent les fonctionnalités actives.

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

Chaque collection possède ses propres cartes, alias de recherche, progression, identité visuelle et réglages d’ambiance.

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
5. Consultez l’onglet **Badge** pour suivre les exploits débloqués.

Les variantes orthographiques et noms alternatifs peuvent être reconnus grâce aux alias définis dans les données de chaque carte.

## Installation PWA et mode hors ligne

L’application fournit un manifest et un service worker. Une fois déployée sur HTTPS, elle peut être installée depuis le navigateur comme une application autonome.

Le service worker utilise :

- une stratégie **network first** pour les pages, scripts et feuilles de style ;
- une stratégie **stale while revalidate** pour les images, polices et le manifest.

> [!WARNING]
> Le cache se remplit au fil de l’utilisation. Les cartes et ressources qui n’ont jamais été chargées peuvent rester indisponibles hors connexion. Les polices Google externes ne sont pas gérées par le cache applicatif ; des polices de secours sont alors utilisées.

## Données et confidentialité

La progression utilisateur est conservée localement dans le navigateur. ZythoHunt ne nécessite ni compte, ni backend, ni clé API pour fonctionner.

Les données locales couvrent notamment :

- les cartes révélées ;
- la collection active ;
- les statistiques de révélation ;
- les badges débloqués et notifications associées.

Effacer les données du site depuis le navigateur réinitialise la progression.

## Architecture

```text
ZythoHunt/
├── public/
│   ├── assets/                    # Illustrations et ressources statiques
│   ├── logo.png                   # Logo et icône principale
│   ├── manifest.webmanifest       # Métadonnées PWA
│   └── sw.js                      # Cache et mises à jour hors ligne
├── src/
│   ├── animation/                 # Timelines et effets de révélation
│   ├── app/                       # Navigation, session et état applicatif
│   ├── background/                # Fond de bière animé et presets
│   ├── badges/                    # Définitions, stockage et moteur de badges
│   ├── brassopedie/               # Bibliothèque et consultation des cartes
│   ├── carousel/                  # Navigation et interactions du carrousel
│   ├── components/                # Construction des éléments d’interface
│   ├── data/                      # Collections, cartes et métadonnées
│   ├── discovery/                 # Résolution des styles et progression
│   ├── pwa/                       # Enregistrement du service worker
│   ├── reveal/                    # Orchestration des révélations
│   ├── utils/                     # Géométrie et résolution des assets
│   └── main.js                    # Point d’entrée et composition globale
├── index.html                     # Structure principale de l’application
├── package.json                   # Scripts et dépendances
└── vite.config.js                 # Configuration Vite et GitHub Pages
```

Le flux principal suit cette chaîne :

```text
Saisie du style
      ↓
Résolution du nom et des alias
      ↓
Vérification de la collection et de la progression
      ↓
Animation de révélation
      ↓
Archivage local, mise à jour de la Brassopédie et évaluation des badges
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
| Node Test Runner | Tests automatisés sans framework supplémentaire |
| Local Storage | Progression, badges et préférences locales |
| Service Worker et Cache API | Installation PWA et cache progressif |

## Qualité et vérifications

La commande principale exécute le typecheck, les tests puis le build de production :

```bash
pnpm check
```

Les commandes peuvent également être lancées séparément :

```bash
pnpm typecheck
pnpm test
pnpm build
```

> [!TIP]
> Lors de l’ajout d’une collection ou d’une carte, vérifiez les identifiants, alias, images, miniatures, clés de progression et presets visuels. Les validateurs de collection signalent les incohérences en développement.

## Ajouter ou modifier une collection

Une collection est généralement composée de :

1. données Brassopédie au format JSON ;
2. module JavaScript décrivant la collection et ses cartes ;
3. mapping des images et miniatures ;
4. clé de progression locale unique ;
5. preset d’arrière-plan ;
6. ajout du bundle dans `src/data/collections.js`.

Chaque carte expose notamment un identifiant stable, un nom, des alias, une description, ses images et ses données Brassopédie.

## Déploiement sur GitHub Pages

Le projet est conçu pour être publié comme site statique :

```bash
pnpm check
pnpm build
```

Publiez ensuite le contenu généré dans `dist/` via GitHub Pages ou un workflow GitHub Actions.

> [!IMPORTANT]
> Conservez la configuration de base relative utilisée par Vite. Elle permet aux assets, au manifest et au service worker de fonctionner correctement sous le sous-chemin GitHub Pages du dépôt.
