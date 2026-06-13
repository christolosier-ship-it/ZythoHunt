# Règles UX — ZythoHunt

## Zythosphère

- La Zythosphère repose sur une carte à géométrie fixe.
- Le zoom et le déplacement doivent permettre l’exploration mobile et desktop.
- Les microanimations sont autorisées si elles restent discrètes.
- Aucune simulation physique permanente ne doit déplacer les nœuds.
- La stabilité spatiale prime sur l’effet spectaculaire.
- Les positions doivent être mémorisables par l’utilisateur.
- Les animations doivent s’arrêter ou se réduire pendant les gestes de pan et de zoom.

## Nœuds structurels

- Les nœuds structurels sont toujours visibles.
- Ils ne sont pas capturables.
- Ils sont plus grands que les styles ordinaires.
- Ils ont une apparence plus mate.
- Ils doivent rester visuellement distincts des bulles de styles.
- Leur rôle est organisationnel : ils aident à comprendre la carte sans compter comme découvertes.

## Styles inconnus

- Toutes les bulles de styles inconnus sont visibles au repos sous forme de `?`.
- Aucun nom de style inconnu n’est visible.
- Aucune fiche de style inconnu n’est consultable.
- Aucune suggestion ne doit révéler leur identité.
- Leurs positions existent dans les données.
- Leurs ramifications peuvent être représentées sans afficher leur bulle.

## Capture

1. L’utilisateur recherche un style.
2. L’application trouve une correspondance valide.
3. La Zythosphère fait le focus sur la zone du style.
4. La bulle du style apparaît.
5. Un `?` stylisé est affiché.
6. Une animation de liquide accompagne la révélation.
7. Le nom du style est révélé.
8. Une définition courte est affichée.
9. Le clic ou toucher sur la bulle est activé.
10. La découverte est enregistrée.

## Règle de non-propagation

La capture de West Coast IPA ne révèle pas :

- IPA ;
- American IPA ;
- New England IPA ;
- tout autre parent, enfant ou voisin.

Chaque style doit être capturé individuellement. Une capture peut éclairer un chemin graphique, mais ne fait apparaître aucune autre bulle cachée.

## Bulles de bière

- Contour avec effet verre ;
- liquide coloré ;
- nuances par famille ;
- reflet ;
- halo ;
- microbulles ;
- respiration légère ;
- `?` stylisé avant révélation ;
- nom lisible après découverte ;
- contenu minimal dans la bulle pour préserver la lisibilité.

## Typographie

- Prévoir une police d’identité pour les moments forts.
- Prévoir une police d’interface très lisible.
- Ne pas utiliser de police décorative pour les longs textes.
- Prévoir la gestion des noms longs par retour à la ligne, réduction mesurée ou abréviation contrôlée.
- Aucune police n’est choisie ou téléchargée à ce stade.

## Brassopédie

- La Brassopédie utilise la même source de données que la Zythosphère.
- Les styles découverts y sont visibles.
- Les styles inconnus y restent verrouillés.
- Aucun nom caché ne doit être divulgué.
- Une fiche commune doit pouvoir être ouverte depuis la carte ou depuis la bibliothèque.

## Modale encyclopédique

- Sur mobile, la fiche s’ouvre en bottom sheet.
- Sur écran large, la fiche s’ouvre dans un panneau ou une grande modale.
- La fermeture doit ramener à la position précédente de la carte.
- Le contenu doit être structuré et lisible.
- La fiche ne doit pas être affichée dans une petite fenêtre étriquée.

## Accessibilité

- Respecter la réduction des animations.
- Assurer un contraste suffisant.
- Prévoir une taille tactile minimale adaptée au mobile.
- Prévoir la navigation clavier future.
- Ne porter aucune information uniquement par la couleur.


## Règle V0.2.1 — Bulles inconnues visibles

- Les nœuds structurels sont toujours visibles.
- Toutes les bulles de styles sont toujours visibles.
- Un style inconnu affiche uniquement `?`.
- Un style inconnu ne révèle aucun nom, alias ou description.
- Un style inconnu n’est pas consultable.
- Un style découvert affiche son nom.
- Les liens stylistiques sont révélés progressivement.
- Chaque style reste découvert individuellement.
- Une révélation ne révèle aucun autre nom.
