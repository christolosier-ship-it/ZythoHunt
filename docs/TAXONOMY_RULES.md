# Règles taxonomiques — ZythoHunt

## Principe général

La taxonomie de ZythoHunt doit être considérée comme :

- une hiérarchie principale ;
- complétée par des liens secondaires ;
- avec une profondeur variable ;
- exploitable comme un graphe.

Il ne faut pas imposer artificiellement le même nombre de rangs à toutes les branches.

## Types de nœuds

Types de nœuds envisagés :

- `root` ;
- `fermentation` ;
- `family` ;
- `branch` ;
- `style` ;
- `substyle` ;
- `variant`.

Plusieurs types peuvent être structurels ou capturables selon leur rôle réel. Le type taxonomique ne suffit pas à déterminer le comportement de capture.

## Types fonctionnels

Deux types fonctionnels sont distingués :

- `structure` : nœud d’organisation, visible par défaut, non capturable ;
- `capturable` : nœud pouvant être découvert individuellement.

Une appellation ne doit pas être capturable simplement parce qu’elle existe dans la hiérarchie.

## Relations

- La racine peut ne pas avoir de parent principal.
- Tous les autres nœuds doivent avoir un parent principal.
- Un nœud peut avoir zéro ou plusieurs liens secondaires.
- La duplication d’un nœud est interdite pour simuler une double appartenance.
- La hiérarchie principale ne doit contenir aucune boucle.

## Identifiants

Convention stable :

- minuscules ;
- ASCII ;
- mots séparés par des tirets ;
- identifiant indépendant du nom affiché ;
- identifiant jamais réutilisé ;
- identifiant jamais changé après publication sauf migration explicite.

Exemples non définitifs :

- `beer` ;
- `fermentation-high` ;
- `family-pale-ale-ipa` ;
- `american-ipa` ;
- `west-coast-ipa`.

Ces exemples ne figent pas la taxonomie définitive.

## Alias

Un style ou nœud peut posséder :

- un nom officiel ;
- un nom français éventuel ;
- un nom original ;
- des abréviations ;
- des variantes orthographiques ;
- des alias historiques ;
- des alias de recherche.

Un alias ne doit jamais créer un second style.

## Modificateurs transversaux

Les éléments suivants ne doivent pas automatiquement devenir des rangs taxonomiques :

- fruité ;
- fumé ;
- barriqué ;
- café ;
- cacao ;
- lactose ;
- seigle ;
- sans gluten ;
- sans alcool ;
- dry-hopped ;
- hazy ;
- couleur ;
- puissance.

Ils doivent généralement être enregistrés comme attributs ou modificateurs.

## Cas hybrides

Certains styles peuvent posséder plusieurs parentés ou nécessiter des liens secondaires. Leur gestion doit être prévue sans remplir leur classification complète pendant la Phase 0.

Cas à étudier ultérieurement :

- Baltic Porter ;
- Weizenbock ;
- White IPA ;
- India Pale Lager ;
- Gose ;
- Kellerbier.

## Sources

Chaque style futur devra prévoir :

- les sources utilisées ;
- la date de vérification ;
- la classification correspondante ;
- un statut traditionnel, contemporain, local, provisoire ou expérimental.

Les descriptions futures devront être originales et ne pas recopier les textes protégés des classifications de référence.
