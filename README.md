# ZythoHunt

**Slogan :** « Buvez-les toutes. »  
**Cartographie interactive :** la **Zythosphère**  
**Encyclopédie :** la **Brassopédie**

## Statut

Le dépôt contient le prototype applicatif **V0.2.0**. Cette version pose la direction artistique définitive de la Zythosphère et prépare le moteur visuel des bulles, sans modifier la taxonomie **0.1.1-prototype.2**.

## Périmètre V0.2.0

- 8 nœuds structurels visibles par défaut.
- 20 styles capturables masqués tant qu'ils ne sont pas dans un scénario, révélés en debug ou en aperçu de révélation.
- Orbes brassicoles SVG : verre, liquide, reflet, halo et microbulles discrètes.
- Palette centralisée par famille visuelle.
- Liens principaux courbes et liens secondaires pointillés.
- Sélection visuelle d'un style découvert et mise en évidence de son chemin vers la racine.
- État « approfondi » préparé et testable uniquement dans le laboratoire développeur.
- Aperçu de révélation développeur avec `?`, apparition du nom, découverte en mémoire et sélection temporaire.
- Contrôle public « Réduire les animations » respectant aussi `prefers-reduced-motion`.
- Suspension CSS des animations décoratives pendant les interactions de carte et lorsque l'onglet est masqué.

Sont volontairement absents : vraie capture publique, persistance, Brassopédie, fiches encyclopédiques, dégustations, statistiques, badges, IndexedDB, PWA, manifeste, service worker, photos, compte utilisateur, cloud et backend.

## Direction artistique

La Zythosphère évoque une constellation brassicole : un fond sombre en dégradés CSS, des structures bronzées et mates, et des styles découverts sous forme d'orbes contenant un liquide de couleur familiale. Le monde reste stable ; seules des animations internes légères donnent une impression vivante.

## États visuels

Priorité documentée : `reveal-pending` puis `selected` puis `explored` puis `discovered`. Les nœuds structurels gardent toujours l'état `structure`.

- **Style masqué** : absent du DOM, sans cercle, nom, focus ni zone cliquable.
- **Révélation en attente** : bulle temporaire avec `?`, réservée au debug.
- **Style découvert** : orbe complète avec nom, halo et microbulles.
- **Style sélectionné** : halo renforcé, anneau clair et chemin principal actif.
- **Style approfondi** : état préparé par anneau/repères discrets, sans règle métier.

## Palette par famille

Les couleurs sont centralisées dans `styles/tokens.css` : cœur structurel bronze, Pale Ale/IPA ambré, blé doré pâle, lager doré, spontané rouge-orangé et mixte/sauvage violet.

## Géométrie fixe

Les coordonnées, relations et fichiers JSON ne sont pas recalculés par la V0.2.0. Les animations sont appliquées au groupe interne `.node-motion`, jamais au groupe qui porte `translate(x y)`.

## Animations décoratives

- Respiration lente de 1 à 2 % maximum pour les styles.
- Respiration structurelle plus mate et plus faible.
- Trois microbulles maximum par style visible, avec positions déterministes.
- Aucun `requestAnimationFrame` décoratif permanent.

## Réduction des animations

Le contrôle public « Réduire les animations » agit en mémoire uniquement. La préférence système `prefers-reduced-motion: reduce` démarre automatiquement en mode réduit. Aucune valeur n'est stockée dans `localStorage` ou IndexedDB.

## Mode développeur

Ajouter `?debug=1` pour afficher les outils développeur V0.2.0, dont le **Laboratoire visuel** :

- sélection d'un style découvert ;
- aperçu de révélation ;
- état approfondi ;
- retrait de sélection ;
- réduction des animations ;
- état visuel courant.

Exemple :

```text
http://localhost:8080/?scenario=empty&debug=1
```

## Scénarios

- Structure seule : `?scenario=empty`
- Test cardinal : `?scenario=cardinal`
- Liens secondaires : `?scenario=secondary`
- Mixte : `?scenario=mixed`

## Lancement local

```bash
python3 -m http.server 8080
```

Puis ouvrir : <http://localhost:8080/>

## Tests

```bash
npm test
```

## Conception responsable

ZythoHunt est destiné à la découverte culturelle et sensorielle des styles de bière. L'application ne doit pas encourager la vitesse de consommation, la quantité, les séries quotidiennes liées à l'alcool, la compétition sur les volumes ou une consommation irresponsable.

Le slogan « Buvez-les toutes. » est une identité humoristique liée à l'exploration et à la collection. Il ne constitue pas une incitation à tout boire rapidement.

## Documentation

- [Roadmap](roadmap.md)
- [Instructions agents](AGENTS.md)
- [Charte projet](docs/PROJECT_CHARTER.md)
- [Règles UX](docs/UX_RULES.md)
- [Règles taxonomiques](docs/TAXONOMY_RULES.md)
- [Modèle de données](docs/DATA_MODEL.md)
