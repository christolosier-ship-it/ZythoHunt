# ZythoHunt

**ZythoHunt** — « Buvez-les toutes. »  
Carte interactive : **la Zythosphère**. Encyclopédie future : **la Brassopédie**.

## Versions

- Application : **0.2.1**
- Taxonomie : **0.1.1-prototype.2** (inchangée)

## V0.2.1 — Canvas et UX de révélation

La V0.2.1 remplace le rendu SVG massif par un moteur **Canvas 2D natif** par défaut :

- un Canvas statique pour le fond, les liens au repos, les structures et les bulles ;
- un Canvas dynamique réservé aux effets transitoires ;
- une couche HTML légère pour l’accessibilité et les styles découverts visibles ;
- culling des éléments hors viewport ;
- niveaux de détail selon le zoom ;
- cache de sprites générés en mémoire ;
- fond plus clair, vert bouteille / malt / ambre ;
- banc logique de charge jusqu’à 300 nœuds synthétiques.

Le moteur SVG est conservé temporairement comme moteur historique de comparaison, non destiné à la production.

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

## Barre de révélation

Une barre publique permet de saisir un style goûté. La recherche utilise noms officiels, noms courts, noms originaux et alias, avec normalisation de casse, accents, tirets et espaces. Elle ne propose pas d’autocomplétion révélatrice. Les découvertes restent **uniquement en mémoire** : elles sont réinitialisées au rechargement.

## Navigation basse

La barre inférieure contient : Zythosphère, Brassopédie, Dégustations, Progression. La Zythosphère est active ; les autres entrées annoncent une prochaine version sans changer d’écran.

## Limites actuelles

- Pas de persistance, IndexedDB, localStorage ni cookie.
- Pas de Brassopédie fonctionnelle.
- Pas de journal de dégustation.
- Pas de PWA, manifeste ni service worker.
- Le moteur SVG historique reste disponible pour comparaison.

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

## Conception responsable

ZythoHunt s’adresse à un public adulte et encourage la curiosité brassicole sans pression de consommation. Les données personnelles futures resteront locales, exportables, séparées du référentiel commun et sans compte obligatoire.
