# Audit code, dette technique et performances — 11 août 2026

## 1. Portée

Référence : `main` au commit `5c6ec99661f25cedaf1e50d8b98fba01869793c8`, après l'achèvement de la ZythoSphère et des 10 collections Brassopédie.

Cette passe complète l'audit du 8 août et se concentre sur :

- dette anti-spaghetti ;
- fichiers morts, temporaires ou trompeurs ;
- frontières de chargement ;
- temps de démarrage et de changement de collection ;
- préparation des futurs chantiers Badges, Réglages et Dégustation.

Le README racine reste volontairement hors périmètre : il appartient à l'étape 2 de la feuille de route.

## 2. Résumé exécutif

Le dépôt n'est plus dans l'état monolithique constaté début août. Le chargement dynamique des collections a déjà supprimé l'ancien bundle initial d'environ 1,29 Mio.

Cette passe corrige quatre catégories de dette :

1. **Recherche globale trop lourde** : une saisie externe ou inconnue pouvait importer plusieurs bundles contenant les articles Brassopédie.
2. **Vues secondaires payées au boot** : Badges et bibliothèque Brassopédie chargeaient leur interface avant d'être ouvertes.
3. **Double infrastructure de collections** : un ancien registre eager et un manager synchrone cohabitaient encore avec l'architecture lazy.
4. **Reliquats de prototype et documentation fausse** : plusieurs fichiers n'avaient plus de rôle mais continuaient à compliquer le dépôt ou à induire en erreur.

Aucun P0 de corruption, de persistance ou de rupture fonctionnelle n'a été détecté.

## 3. Corrections appliquées

### P1 corrigé — Recherche globale sans import encyclopédique en cascade

Les 10 fichiers canoniques Brassopédie représentent environ **2,11 Mio de source JavaScript**. Le resolver global parcourait auparavant les collections en chargeant leurs bundles complets pour rechercher un nom ou un alias.

`scripts/generate-beer-search-index.mjs` génère désormais `public/beer-search-index.json` avant `dev` et `build`. Cet index contient uniquement les informations nécessaires à la résolution : collection, carte, nom et alias normalisés.

Au runtime :

- la collection active est résolue directement en mémoire ;
- une recherche externe consulte ensuite le petit index ;
- une recherche inconnue ne charge aucun autre bundle ;
- la collection cible n'est importée qu'après correspondance, lorsque l'application change effectivement de collection ;
- l'index est précaché pour conserver la recherche inter-collections hors ligne.

Les tests couvrent explicitement l'absence de chargement lourd pour une recherche externe ou inconnue.

### P1 partiellement corrigé — Logo PWA surdimensionné

`public/logo.png` pèse **2 840 970 octets**. Il reste utilisé comme favicon, Apple Touch Icon et icône du manifeste.

La correction immédiate consiste à le retirer du shell PWA précaché obligatoire. L'installation ou la mise à jour du service worker ne télécharge donc plus ces 2,84 Mo uniquement pour constituer le shell hors ligne.

Dette restante : produire des variantes optimisées dédiées au favicon, à l'Apple Touch Icon et aux icônes PWA tout en conservant exactement le visuel actuel.

### P2 corrigé — Un seul chemin de gestion des collections

L'ancien chemin eager a été supprimé :

- suppression de `src/data/collections.js`, qui importait immédiatement les neuf collections classiques ;
- suppression de `createCollectionManager()` dans `src/data/collection-manager.js` ;
- conservation de `createLazyCollectionManager()` comme unique gestionnaire runtime ;
- réécriture de `collection-manager.test.js` avec de petits bundles factices ;
- tests vérifiant que l'énumération et le changement de collection ne chargent aucun bundle avant demande explicite.

Le premier passage CI a en plus débusqué un reliquat dépendant du prototype supprimé. `src/data/prototype-carousel.js` a donc été retiré avec `src/data/cards.js`.

### P2 corrigé — Vues secondaires réellement paresseuses

Badges et bibliothèque Brassopédie ne chargent plus leur JavaScript et leur CSS au démarrage de la ZythoSphère.

- `badges-view.js` et `badges.css` sont importés à la première ouverture des Badges ;
- `brassopedie-library-view.js` et `brassopedie-library.css` sont importés à la première ouverture de la bibliothèque ;
- leurs instances sont ensuite conservées et rafraîchies ;
- le moteur de badges reste actif au boot, car il fait partie de la progression et des notifications.

### P3 corrigé — Résidus et documentation devenue fausse

Fichiers supprimés :

- `.staging/fingerprints.txt` ;
- `src/data/brassopedie/index.json` ;
- `src/data/cards.js` ;
- `src/data/collections.js` ;
- `src/data/prototype-carousel.js` ;
- `docs/ASSETS_A_AJOUTER.md` ;
- `docs/active/README-BRASSOPEDIE-JSON.md`.

`.staging/` est désormais ignoré par Git.

Le README interne de `src/data/brassopedie/` décrit maintenant les 10 fichiers `.js` canoniques comme unique source éditoriale de vérité. `docs/ARCHITECTURE.md` a également été réécrit pour refléter l'architecture réelle au lieu du prototype à neuf emplacements.

## 4. Vérification des chargements d'images

Le préchargement du carrousel est sain et n'appelle pas de refactor supplémentaire dans cette passe :

- fenêtre initiale de **7 miniatures** autour de la carte active (`radius = 3`) ;
- même stratégie lors du déplacement dans le carrousel ;
- image HD d'une carte demandée uniquement lors de son inspection ;
- cache d'images du service worker borné, hors shell initial.

Il n'existe donc pas de chargement caché de toutes les images HD d'une collection lors de son ouverture.

## 5. Dette restante

### P2 — `app-runtime.js` devient le prochain point de concentration possible

`src/app/app-runtime.js` orchestre collection active, session, navigation, Badges, Brassopédie, collection secrète, persistance, réglages de debug et transitions.

Le fichier reste cohérent, mais les futures features ne doivent pas continuer à y déposer leur logique interne. Les étapes Badges, Réglages et Dégustation devront extraire leurs contrôleurs propres et laisser au runtime la composition générale.

### P2/P3 — Bundle actif encore couplé au contenu encyclopédique

Chaque bundle de collection contient encore les données de jeu et les articles Brassopédie complets. La correction du resolver supprime le principal effet négatif, car les collections non utilisées ne sont plus importées pour une simple recherche.

Les fichiers canoniques individuels vont d'environ 100 à 315 Ko de source. Séparer davantage données de carte et article encyclopédique pourrait encore réduire le parse de la collection active, mais ce refactor serait beaucoup plus invasif. Il doit être guidé par une mesure réelle du boot avant d'ajouter une nouvelle couche de données dérivées.

### P3 — CSS historique

`src/styles.css` contient encore des sélecteurs hérités de l'ancienne grille 3 × 3, notamment `#grid-container`, `.grid-glow` et `#card-grid`.

`.card-slot` n'est en revanche **pas** mort : cette classe est toujours générée par `src/components/create-card.js` et utilisée par le carrousel. Le retrait des seuls sélecteurs morts est donc différé à une passe avec contrôle visuel. Le gain de poids serait faible et ne justifie pas une régression de layout.

### P1 restant — Icônes applicatives

Le plus gros gain binaire encore évident est la déclinaison du logo actuel en tailles adaptées : favicon, 180 × 180, 192 × 192 et 512 × 512 optimisé.

## 6. Garde-fous retenus

- une seule source canonique par collection ;
- aucun registre eager parallèle au catalogue lazy ;
- aucun service léger ne doit importer un bundle encyclopédique par commodité ;
- vues secondaires derrière `import()` ;
- préchargement image par fenêtre, jamais collection HD complète ;
- nouvelles features isolées de `app-runtime.js` ;
- suppression uniquement des fichiers dont l'obsolescence est prouvée par les références, les tests ou la CI.

## 7. Vérifications de la PR

La CI doit rester verte sur :

- contrôle des thumbnails ;
- typecheck standard et strict ;
- tests Node ;
- génération de l'index de recherche ;
- build Vite et préparation PWA ;
- Playwright + axe sur desktop, mobile et tablette.

Parcours manuels recommandés après merge : démarrage, recherche locale/externe/inconnue, changement de collection, révélation, notification de badge, ouverture Badges, ouverture Brassopédie et comportement hors ligne.

## 8. Conclusion

Le point 1 ne révèle pas un dépôt actuellement « spaghetti ». Il révèle surtout les dernières traces de son histoire de prototype et deux frontières de chargement qui n'avaient pas suivi la croissance de la Brassopédie.

Après cette passe, le runtime possède un seul chemin de collections, la recherche globale ne siphonne plus les articles encyclopédiques, les vues secondaires sont réellement différées et les principaux fichiers/documentations obsolètes ont disparu.

La priorité suivante côté performance reste l'optimisation binaire des icônes. Côté architecture, le garde-fou essentiel pour les étapes 3, 4 et 5 est déjà posé : ne pas faire grossir `app-runtime.js` avec la logique détaillée des nouvelles features.
