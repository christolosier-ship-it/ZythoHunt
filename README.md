# ZythoHunt

**Slogan :** « Buvez-les toutes. »  
**Cartographie interactive :** la **Zythosphère**  
**Encyclopédie :** la **Brassopédie**

## Statut

La Phase 0 documentaire a été validée humainement. Le dépôt contient maintenant un prototype technique **V0.1.0** limité à une Zythosphère minimale.

Ce prototype n'est pas une version publique prête à l'emploi. Il démontre uniquement la représentation d'un petit référentiel taxonomique à positions fixes, autour des Pale Ale, IPA et deux styles voisins. La taxonomie est provisoire et ciblée sur les tests techniques.

## Périmètre V0.1.0

- 6 nœuds structurels visibles par défaut.
- 20 styles capturables masqués tant qu'ils ne sont pas dans un scénario de démonstration.
- 25 liens principaux et 2 liens secondaires.
- Pan et zoom natifs sur SVG.
- Validateur et tests automatisés sans dépendance npm.

Sont volontairement absents : capture utilisateur, Brassopédie, dégustations, persistance, IndexedDB, PWA, manifeste, service worker, notifications et backend.

## Lancement local

```bash
python3 -m http.server 8080
```

Puis ouvrir : <http://localhost:8080/>

L'ouverture directe en `file://` affiche un message indiquant qu'un serveur HTTP local est nécessaire.

## Tests

```bash
npm test
```

## Scénarios

- Structure seule : `?scenario=empty`
- Test cardinal : `?scenario=cardinal`
- Liens secondaires : `?scenario=secondary`
- Mixte : `?scenario=mixed`

## Mode développeur

Ajouter `?debug=1` pour afficher **Outils développeur V0.1.0**. Exemple :

```text
?scenario=cardinal&debug=1
```

Le panneau développeur ne persiste rien dans IndexedDB ou localStorage et n'apparaît jamais sans `debug=1`.

## Documentation

- [Roadmap](roadmap.md)
- [Instructions agents](AGENTS.md)
- [Charte projet](docs/PROJECT_CHARTER.md)
- [Règles UX](docs/UX_RULES.md)
- [Règles taxonomiques](docs/TAXONOMY_RULES.md)
- [Modèle de données](docs/DATA_MODEL.md)

## Prochaine phase

La prochaine phase prévue est **V0.2.0**, uniquement après validation humaine explicite de la V0.1.0.
