# ZythoHunt

**Slogan :** « Buvez-les toutes. »  
**Cartographie interactive :** la **Zythosphère**  
**Encyclopédie :** la **Brassopédie**

## Statut

Le dépôt contient le prototype technique **V0.1.1**. Il corrige la taxonomie structurelle, le monde SVG, le cadrage, les tests et les outils développeur de la V0.1.0 avant toute direction artistique V0.2.0.

## Périmètre V0.1.1

- 8 nœuds structurels visibles par défaut.
- 4 modes de fermentation structurels : Ale, Lager, Fermentation spontanée, Fermentation mixte / sauvage.
- 20 styles capturables masqués tant qu'ils ne sont pas dans un scénario ou révélés par l'outil debug.
- 27 liens principaux et 2 liens secondaires.
- Monde SVG cohérent `2400 × 1800`.
- Pan, zoom, pinch et vue générale sans dépendance externe.
- Validateur et tests automatisés sans dépendance npm.

Sont volontairement absents : vraie capture publique, Brassopédie, fiches, dégustations, persistance, IndexedDB, PWA, manifeste, service worker, notifications et backend.

## Lancement local

```bash
python3 -m http.server 8080
```

Puis ouvrir : <http://localhost:8080/>

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

Ajouter `?debug=1` pour afficher **Outils développeur V0.1.1**. Exemple :

```text
http://localhost:8080/?scenario=empty&debug=1
```

La section **Révéler un style de test** accepte un nom officiel, un nom court, un nom original ou un alias : `West Coast IPA`, `WCIPA`, `NEIPA`, `Hazy IPA`, `APA`, `IPL`, `Blanche belge`.

Exemple de contrôle cardinal :

1. ouvrir les outils développeur ;
2. saisir `West Coast IPA` ou `WCIPA` ;
3. cliquer sur « Révéler » ;
4. vérifier que seuls le style demandé et ses lignes apparaissent ;
5. vérifier qu'IPA et American IPA restent cachées.

Le panneau développeur ne persiste rien dans IndexedDB, localStorage, cookie ou JSON et n'apparaît jamais sans `debug=1`.

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

## Prochaine phase

La prochaine phase prévue est **V0.2.0**, uniquement après validation humaine explicite de la V0.1.1.
