# Contribuer à ZythoHunt

Merci de vouloir améliorer ZythoHunt. Le projet mélange interface, logique de collection, contenus Brassopédie, assets graphiques et moteur sensoriel : une petite modification peut donc toucher plusieurs couches. L’objectif de ce guide est de garder les contributions simples à relire et faciles à tester.

## Avant de commencer

Pour un bug ou une amélioration, ouvre d’abord une Issue avec le modèle adapté. Une Issue claire évite les PR qui réparent trois choses différentes à la fois.

Pour les changements éditoriaux de la Brassopédie, respecte la charte :

- [`docs/BRASSOPEDIE_CHARTE_EDITORIALE_NARRATIVE.md`](docs/BRASSOPEDIE_CHARTE_EDITORIALE_NARRATIVE.md)

Pour les changements d’architecture, consulte :

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## Environnement local

Prérequis : Node.js 24 et pnpm 10.12.4.

```bash
git clone https://github.com/christolosier-ship-it/ZythoHunt.git
cd ZythoHunt
corepack enable
corepack prepare pnpm@10.12.4 --activate
pnpm install --frozen-lockfile
pnpm dev
```

## Avant d’ouvrir une Pull Request

Exécute au minimum :

```bash
pnpm check
pnpm assets:thumbs:check
pnpm test:e2e
```

La CI vérifie également le typecheck standard et strict, les tests unitaires, le build, Playwright et axe.

## Principes de contribution

- une PR = un objectif principal ;
- ne duplique pas une source de données existante ;
- évite les couches de compatibilité ou overrides sans justification ;
- conserve le chargement dynamique des collections et des vues secondaires ;
- n’ajoute pas de dépendance externe si le besoin peut être couvert simplement par le code existant ;
- privilégie les textes d’interface courts et utiles ;
- accompagne une correction métier d’un test lorsque c’est pertinent ;
- pour les assets de cartes, respecte les dimensions et conventions de nommage du dépôt.

## Licence des contributions

ZythoHunt sépare la licence du logiciel de celle de ses contenus créatifs :

- les contributions de **code source, scripts, tests et configuration logiciels** sont destinées à être distribuées sous la [licence MIT](LICENSE) ;
- les contributions de **contenus éditoriaux, sensoriels ou visuels originaux** sont destinées à être distribuées sous [CC BY-NC-SA 4.0](LICENSE-CONTENT.md).

En proposant une contribution, tu confirmes disposer des droits nécessaires pour la soumettre sous la licence applicable. N’intègre pas de contenu tiers sans vérifier ses conditions d’utilisation et sans conserver les mentions de droits ou de licence requises.

Si une contribution mélange code et contenu, chaque partie reste soumise à la licence correspondant à sa nature.

## Signaler un bug

Une bonne Issue de bug précise :

1. l’appareil et le navigateur ;
2. la vue concernée ;
3. les étapes exactes pour reproduire ;
4. le résultat observé ;
5. le résultat attendu ;
6. si possible, une capture d’écran.

## Proposer une fonctionnalité

Décris d’abord le problème utilisateur. Une solution simple et cohérente avec l’architecture existante sera préférée à une feature très large qui ajoute une nouvelle couche technique.

## Pull Requests

Dans la description de la PR, indique :

- ce qui change ;
- pourquoi ;
- les fichiers ou domaines concernés ;
- les tests exécutés ;
- les éventuelles limites connues.

Les modifications purement visuelles gagnent à être accompagnées d’une capture avant/après.

Merci de contribuer à garder ZythoHunt lisible, léger et agréable à utiliser. 🍺
