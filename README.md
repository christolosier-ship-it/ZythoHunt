# ZythoHunt

**ZythoHunt** — « Buvez-les toutes. »  
Carte interactive : **la Zythosphère**. Encyclopédie future : **la Brassopédie**.

## Versions

- Application : **0.2.2**
- Taxonomie : **0.1.1-prototype.2** (inchangée)

## V0.2.2 — Interface plein écran et shell applicatif

La V0.2.2 consolide l’UX de la Zythosphère sans modifier la taxonomie ni démarrer les vues futures :

- suppression du header public et des versions visibles dans l’interface principale ;
- shell applicatif plein écran avec `app-shell`, `view-root` et navigation globale extérieure aux vues ;
- Zythosphère sur toute la surface disponible, derrière des overlays fixes ;
- barre de révélation compacte en haut, compatible safe area iPhone ;
- barre de contrôles de carte en bas, juste au-dessus de la navigation ;
- navigation globale permanente avec quatre icônes SVG inline distinctes ;
- fond CSS clair inspiré de mousse de bière ;
- Canvas statique transparent : le moteur Canvas ne redessine plus le fond vert à chaque rendu ;
- calcul d’insets pour protéger le fit et le focus sous les overlays.

## Moteur Canvas

Le moteur **Canvas 2D natif** reste le moteur par défaut :

- un Canvas statique pour les liens, structures et bulles ;
- un Canvas dynamique réservé aux effets transitoires ;
- une couche HTML légère pour l’accessibilité et les styles découverts visibles ;
- culling des éléments hors viewport ;
- niveaux de détail selon le zoom ;
- cache de sprites générés en mémoire.

Le moteur SVG historique est conservé temporairement en comparaison debug avec `?debug=1&renderer=svg`.

## Règle de visibilité

- Les nœuds structurels sont toujours visibles et nommés.
- Toutes les bulles de styles capturables sont visibles dès le départ.
- Un style inconnu affiche uniquement `?`.
- Un style inconnu ne révèle aucun nom, alias ou description.
- Un style inconnu n’est pas consultable, focusable ni cliquable.
- Un style découvert affiche son nom et devient sélectionnable.
- Les liens stylistiques sont révélés progressivement.
- Chaque style reste découvert individuellement.
- Une révélation ne révèle aucun autre nom.

## Révélation

La barre supérieure permet de saisir un style goûté. La recherche utilise noms officiels, noms courts, noms originaux et alias, avec normalisation de casse, accents, tirets et espaces. Elle ne propose pas d’autocomplétion révélatrice.

Les découvertes restent **uniquement en mémoire** : elles sont réinitialisées au rechargement. La révélation de `West Coast IPA` ne révèle pas `IPA`, `American IPA` ni aucun autre style.

## Navigation globale

La navigation permanente contient :

1. Zythosphère ;
2. Brassopédie ;
3. Dégustations ;
4. Progression.

La Zythosphère reste active. Les trois autres entrées affichent seulement un toast provisoire et ne développent pas encore leurs vues.

## Safe areas et responsive

Les overlays utilisent les safe areas (`env(safe-area-inset-*)`) et une mesure de hauteur partagée via `--global-nav-height`, `--zytho-search-height` et `--map-toolbar-height`. Ces mesures alimentent les insets de carte afin que la vue générale et le focus ne placent pas volontairement les bulles sous la recherche, les contrôles ou la navigation basse.

## Limites actuelles

- Pas de persistance, IndexedDB, localStorage ni cookie.
- Pas de Brassopédie fonctionnelle.
- Pas de journal de dégustation.
- Pas de vue Progression fonctionnelle.
- Pas de PWA, manifeste ni service worker.
- Les bulles peuvent encore être améliorées artistiquement après validation humaine.

## Lancement

```bash
python3 -m http.server 4173
```

Ouvrir `http://127.0.0.1:4173/`.

## Tests

```bash
npm test
```

## Paramètres debug

- `?debug=1&renderer=canvas` : force le moteur Canvas.
- `?debug=1&renderer=svg` : moteur SVG historique de comparaison.
- `?debug=1&load=200` : scénario de charge logique accepté (20, 50, 100, 200, 300).

Le panneau debug conserve les compteurs et versions retirés de l’interface publique.

## Conception responsable

ZythoHunt s’adresse à un public adulte et encourage la curiosité brassicole sans pression de consommation. Les données personnelles futures resteront locales, exportables, séparées du référentiel commun et sans compte obligatoire.

## V0.2.3 — Optimisation Canvas, gestes mobiles et confort de navigation

La V0.2.3 consolide le moteur Canvas existant sans remplacer la technologie ni démarrer la Brassopédie, la persistance ou la PWA.

- **Ordonnanceur de rendu** : les demandes rapides de pan, zoom, révélation et synchronisation HTML sont fusionnées via `requestAnimationFrame` par `createRenderScheduler`.
- **Redimensionnement conditionnel** : les Canvas ne sont redimensionnés que si la taille CSS ou le DPR effectif change ; les compteurs debug exposent les resize.
- **Hit layer persistant** : les boutons HTML des styles découverts sont conservés par identifiant, repositionnés et masqués hors viewport au lieu d’être reconstruits globalement.
- **Gestes dédiés au viewport** : pan, molette et pointer events sont attachés à `.zythosphere-viewport`, pas aux contrôles de carte.
- **Accueil et Tout voir** : Accueil restaure une vue de départ centrée sur la structure ; Tout voir ajuste la cartographie complète avec le minimum dynamique.
- **LOD réels** : les niveaux éloigné, intermédiaire et proche ont des profils distincts, avec hystérésis, texte court et microbulles limitées au niveau riche.
- **Cache borné** : le cache de sprites utilise des tailles canoniques, une clé stable incluant thème/DPR/LOD et une éviction LRU plafonnée.
- **Canvas dynamique** : la couche dynamique est réservée aux états transitoires de révélation et sélection, puis reste inactive au repos.
- **Thème Canvas** : les couleurs principales sont lues depuis les variables CSS pour éviter les duplications en dur.
- **Révélation** : la barre affiche un état en cours, un succès temporaire, les erreurs précises, le cas déjà révélé et un bouton d’effacement accessible.
- **Accessibilité** : les Canvas restent `aria-hidden`, les zones tactiles des styles découverts visent au moins 44 px et la live region est réservée aux actions importantes.
- **Tests de charge** : le banc synthétique reste disponible pour 20, 50, 100, 200 et 300 nœuds via le mode debug.

Les bulles inconnues restent visibles avec `?`, non interactives et sans nom accessible. Une révélation ne dévoile aucun autre style.
