# ZythoHunt — Badges

Document de conception des badges pour **ZythoHunt Reveal Lab**.

Objectif : proposer une liste complète, cohérente et sans doublons logiques, organisée en 5 familles :

1. Progression globale
2. Progression par collection
3. Exploration équilibrée
4. Révéler
5. Badges secrets

Base actuelle de l’application :

- 9 collections
- 251 cartes révélables au total
- Découverte stockée par collection
- Vue “Badge” déjà prévue dans l’interface, mais non encore implémentée

## Convention de correspondance badges / icônes

Chaque badge possède un numéro unique de **001 à 107**.

Ce numéro sert de correspondance directe avec les fichiers d’icônes :

```txt
001.webp → Badge 001
002.webp → Badge 002
...
107.webp → Badge 107
```

L’ordre de numérotation suit strictement l’ordre du présent document :

1. Progression globale
2. Progression par collection
3. Exploration équilibrée
4. Révéler
5. Badges secrets

---

## Règles générales

### Progression globale

Ces badges récompensent uniquement le **nombre total de cartes découvertes**, toutes collections confondues.

Ils ne doivent pas être doublonnés par des badges du type “X cartes trouvées via Révéler”, puisque dans l’état actuel de l’application, la découverte passe déjà par le champ Révéler.

### Progression par collection

Pour chaque collection :

- 1 badge à la première carte découverte
- 1 badge à chaque palier de 5 cartes découvertes
- 1 badge lorsque la collection est complète

Si la complétion tombe sur un multiple de 5, le badge de collection complète remplace le palier final.

Exemple :

- Appellations commerciales contient 30 cartes
- À 30 cartes, on attribue uniquement le badge de complétion
- On évite donc un doublon “30 cartes” + “collection complète”

### Exploration équilibrée

Ces badges récompensent le fait d’explorer toutes les collections, et pas seulement une seule.

Ils doivent rester distincts de la progression globale.

### Révéler

Ces badges ne doivent pas compter les découvertes.

Ils récompensent uniquement les comportements spécifiques au champ Révéler :

- noms inconnus
- erreurs d’affilée
- cartes déjà découvertes retapées
- bascules vers une autre collection

### Badges secrets

Ces badges peuvent être masqués dans l’interface tant qu’ils ne sont pas débloqués.

Affichage conseillé avant déblocage :

```txt
???
Badge secret
Condition inconnue
```

---

# 1. Progression globale

Ces badges récompensent le nombre total de cartes découvertes, toutes collections confondues.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 001 | 1 carte découverte | **Première gorgée du destin** |
| 002 | 10 cartes découvertes | **Début de descente contrôlée** |
| 003 | 25 cartes découvertes | **Chasseur de capsules** |
| 004 | 50 cartes découvertes | **Palais en rodage** |
| 005 | 75 cartes découvertes | **Foie en bêta-test** |
| 006 | 100 cartes découvertes | **Brassophile semi-pro** |
| 007 | 125 cartes découvertes | **Mi-fût, mi-homme** |
| 008 | 150 cartes découvertes | **Moine du malt turbulent** |
| 009 | 175 cartes découvertes | **Explorateur des tréfonds houblonnés** |
| 010 | 200 cartes découvertes | **Gardien du Grand Casier** |
| 011 | 225 cartes découvertes | **Légende locale du comptoir** |
| 012 | 250 cartes découvertes | **Il n’en reste presque plus, patron** |
| 013 | 251 cartes découvertes | **ZythoHunt : Maître absolu du Brassivers** |

Total : **13 badges**

---

# 2. Progression par collection

## 2.1 Lagers et fermentations basses

Collection de **45 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 014 | 1 carte découverte | **Premier demi bien droit** |
| 015 | 5 cartes découvertes | **Casier de blondettes** |
| 016 | 10 cartes découvertes | **Pils sur la piste** |
| 017 | 15 cartes découvertes | **Fermentation sous contrôle** |
| 018 | 20 cartes découvertes | **Frigo diplômé** |
| 019 | 25 cartes découvertes | **Gardien du froid sacré** |
| 020 | 30 cartes découvertes | **Lagernaute certifié** |
| 021 | 35 cartes découvertes | **Moine du freezer** |
| 022 | 40 cartes découvertes | **Grand pingouin de la mousse** |
| 023 | 45 cartes découvertes, collection complète | **Empereur des basses températures** |

Total : **10 badges**

---

## 2.2 Pale Ales, Bitters et IPA

Collection de **36 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 024 | 1 carte découverte | **Premier houblon dans l’œil** |
| 025 | 5 cartes découvertes | **Pif en agrumes** |
| 026 | 10 cartes découvertes | **Amertume apprivoisée** |
| 027 | 15 cartes découvertes | **Cascadeur de Cascade** |
| 028 | 20 cartes découvertes | **Dompteur d’IBU** |
| 029 | 25 cartes découvertes | **Trompette à houblon** |
| 030 | 30 cartes découvertes | **Grand prêtre de la résine** |
| 031 | 35 cartes découvertes | **Dernier zeste avant impact** |
| 032 | 36 cartes découvertes, collection complète | **Seigneur des IPA et autres morsures vertes** |

Total : **9 badges**

---

## 2.3 Porters & Stouts

Collection de **22 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 033 | 1 carte découverte | **Première ombre dans le verre** |
| 034 | 5 cartes découvertes | **Café dans la moustache** |
| 035 | 10 cartes découvertes | **Torréfaction suspecte** |
| 036 | 15 cartes découvertes | **Chevalier du malt noir** |
| 037 | 20 cartes découvertes | **Caveau presque vidé** |
| 038 | 22 cartes découvertes, collection complète | **Baron du goudron délicieux** |

Total : **6 badges**

---

## 2.4 Traditions belges et françaises

Collection de **17 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 039 | 1 carte découverte | **Premier clocher qui mousse** |
| 040 | 5 cartes découvertes | **Abbaye de poche** |
| 041 | 10 cartes découvertes | **Levure en sabots** |
| 042 | 15 cartes découvertes | **Pèlerin du terroir liquide** |
| 043 | 17 cartes découvertes, collection complète | **Grand notaire des traditions fermentées** |

Total : **5 badges**

---

## 2.5 Bières de blé et de seigle

Collection de **13 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 044 | 1 carte découverte | **Moustache de blé** |
| 045 | 5 cartes découvertes | **Banane réglementaire** |
| 046 | 10 cartes découvertes | **Clou de girofle dans le guidon** |
| 047 | 13 cartes découvertes, collection complète | **Sorcier du pain qui pétille** |

Total : **4 badges**

---

## 2.6 Bières acides, sauvages et spontanées

Collection de **21 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 048 | 1 carte découverte | **Premier citron diplomatique** |
| 049 | 5 cartes découvertes | **Grimace élégante** |
| 050 | 10 cartes découvertes | **Brett dans la cabane** |
| 051 | 15 cartes découvertes | **Acidonaute instable** |
| 052 | 20 cartes découvertes | **Presque avalé par le lambic** |
| 053 | 21 cartes découvertes, collection complète | **Duc du vinaigre noble** |

Total : **6 badges**

---

## 2.7 Ales ambrées, brunes, maltées et fortes

Collection de **27 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 054 | 1 carte découverte | **Premier caramel de combat** |
| 055 | 5 cartes découvertes | **Malt sur les bottes** |
| 056 | 10 cartes découvertes | **Ambré mais dangereux** |
| 057 | 15 cartes découvertes | **Brune dans le brouillard** |
| 058 | 20 cartes découvertes | **Biscuit de guerre** |
| 059 | 25 cartes découvertes | **Presque roi du malt costaud** |
| 060 | 27 cartes découvertes, collection complète | **Maréchal des degrés sournois** |

Total : **7 badges**

---

## 2.8 Styles singuliers, historiques et hybrides

Collection de **40 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 061 | 1 carte découverte | **Premier truc pas net** |
| 062 | 5 cartes découvertes | **Musée des curiosités liquides** |
| 063 | 10 cartes découvertes | **Archéologue du demi bizarre** |
| 064 | 15 cartes découvertes | **Fouille-mousse confirmé** |
| 065 | 20 cartes découvertes | **Gardien des recettes oubliées** |
| 066 | 25 cartes découvertes | **Hybrideur imprudent** |
| 067 | 30 cartes découvertes | **Historien qui sent la cave** |
| 068 | 35 cartes découvertes | **Cartographe du n’importe quoi noble** |
| 069 | 40 cartes découvertes, collection complète | **Conservateur suprême des bières cheloues** |

Total : **9 badges**

---

## 2.9 Appellations commerciales

Collection de **30 cartes**.

| N° | Condition | Nom du badge |
|---:|---:|---|
| 070 | 1 carte découverte | **Première étiquette qui claque** |
| 071 | 5 cartes découvertes | **Marketing en sous-bock** |
| 072 | 10 cartes découvertes | **Rayon grande surface apprivoisé** |
| 073 | 15 cartes découvertes | **Nom vendeur, palais méfiant** |
| 074 | 20 cartes découvertes | **Collectionneur de slogans mousseux** |
| 075 | 25 cartes découvertes | **Grand lecteur d’étiquettes** |
| 076 | 30 cartes découvertes, collection complète | **PDG du rayon bière** |

Total : **7 badges**

---

## Total progression par collection

| Collection | Nombre de badges |
|---|---:|
| Lagers et fermentations basses | 10 |
| Pale Ales, Bitters et IPA | 9 |
| Porters & Stouts | 6 |
| Traditions belges et françaises | 5 |
| Bières de blé et de seigle | 4 |
| Bières acides, sauvages et spontanées | 6 |
| Ales ambrées, brunes, maltées et fortes | 7 |
| Styles singuliers, historiques et hybrides | 9 |
| Appellations commerciales | 7 |
| **Total** | **63** |

---

# 3. Exploration équilibrée

Ces badges récompensent la progression répartie sur toutes les collections.

| N° | Condition | Nom du badge |
|---|---|
| 077 | Au moins 1 carte dans chaque collection | **Touriste intégral du houblon** |
| 078 | Au moins 5 cartes dans chaque collection | **Casiers alignés au cordeau** |
| 079 | Au moins 10 cartes dans chaque collection | **Décathlon de la mousse** |
| 080 | Au moins 50 % de chaque collection découverte | **Palais panoramique** |
| 081 | Au moins 75 % de chaque collection découverte | **Grand équilibriste du comptoir** |

Total : **5 badges**

## Seuils techniques recommandés

Pour les badges à pourcentage, utiliser un arrondi supérieur collection par collection.

### Badge : Palais panoramique

Condition : au moins **50 %** de chaque collection découverte.

| Collection | Total cartes | Seuil 50 % |
|---|---:|---:|
| Lagers et fermentations basses | 45 | 23 |
| Pale Ales, Bitters et IPA | 36 | 18 |
| Porters & Stouts | 22 | 11 |
| Traditions belges et françaises | 17 | 9 |
| Bières de blé et de seigle | 13 | 7 |
| Bières acides, sauvages et spontanées | 21 | 11 |
| Ales ambrées, brunes, maltées et fortes | 27 | 14 |
| Styles singuliers, historiques et hybrides | 40 | 20 |
| Appellations commerciales | 30 | 15 |

### Badge : Grand équilibriste du comptoir

Condition : au moins **75 %** de chaque collection découverte.

| Collection | Total cartes | Seuil 75 % |
|---|---:|---:|
| Lagers et fermentations basses | 45 | 34 |
| Pale Ales, Bitters et IPA | 36 | 27 |
| Porters & Stouts | 22 | 17 |
| Traditions belges et françaises | 17 | 13 |
| Bières de blé et de seigle | 13 | 10 |
| Bières acides, sauvages et spontanées | 21 | 16 |
| Ales ambrées, brunes, maltées et fortes | 27 | 21 |
| Styles singuliers, historiques et hybrides | 40 | 30 |
| Appellations commerciales | 30 | 23 |

---

# 4. Révéler

Ces badges récompensent les comportements spécifiques au champ Révéler.

Ils nécessitent un tracking dédié des statistiques Reveal, distinct des découvertes.

## Statistiques recommandées

```js
{
  revealStats: {
    totalAttempts: 0,
    validAttempts: 0,
    unknownAttempts: 0,
    alreadyDiscoveredAttempts: 0,
    externalCollectionMatches: 0,
    currentUnknownStreak: 0,
    bestUnknownStreak: 0,
    lastRevealOutcome: null
  }
}
```

## Liste des badges Révéler

| N° | Condition | Nom du badge |
|---:|---:|---|
| 082 | 1 nom inexistant tapé | **Ça n’existe pas, chef** |
| 083 | 10 noms inexistants tapés | **Brasseur de chimères** |
| 084 | 25 noms inexistants tapés | **Catalogue du n’importe quoi** |
| 085 | 50 noms inexistants tapés | **Inventeur de bières imaginaires** |
| 086 | 100 noms inexistants tapés | **Grand mythomalt** |
| 087 | 5 erreurs d’affilée | **Le clavier a soif, pas toi** |
| 088 | 10 erreurs d’affilée | **Le mur répond mieux que toi** |
| 089 | 1 carte déjà découverte retapée | **Déjà bu, déjà vu** |
| 090 | 10 cartes déjà découvertes retapées | **Radoteur de comptoir** |
| 091 | 25 cartes déjà découvertes retapées | **Vieille mousse, vieux réflexe** |
| 092 | 1 bière trouvée dans une autre collection | **Tir trans-casier** |
| 093 | 5 bascules vers une autre collection | **GPS de cave humide** |
| 094 | 10 bascules vers une autre collection | **Cartographe du mauvais rayon** |

Total : **13 badges**

---

# 5. Badges secrets

Ces badges peuvent être affichés en silhouettes tant qu’ils ne sont pas débloqués.

| N° | Condition | Nom du badge |
|---|---|
| 095 | Atteindre exactement 69 cartes découvertes | **Position de dégustation avancée** |
| 096 | Révéler la dernière carte manquante d’une collection | **Le dernier bouchon saute** |
| 097 | Compléter Porters & Stouts | **La lumière a quitté le verre** |
| 098 | Compléter Bières acides, sauvages et spontanées | **Champion de la grimace noble** |
| 099 | Compléter Styles singuliers, historiques et hybrides | **Directeur du musée des mauvaises idées** |
| 100 | Faire 3 erreurs puis trouver une bonne réponse | **Rédemption en pression** |
| 101 | Retaper une carte déjà découverte juste après une nouvelle découverte | **Retour au vieux demi** |
| 102 | Révéler une carte après minuit | **Nyctalope du houblon** |
| 103 | Révéler une carte le matin avant 8h | **Petit-déj de champion douteux** |
| 104 | Revenir après 7 jours sans découverte puis révéler une carte | **Le revenant du frigo** |
| 105 | Révéler une carte dans 3 collections différentes sur une même session | **Papillon de brasserie** |
| 106 | Révéler une carte dans chaque collection sur une même session | **Tournée générale cosmique** |
| 107 | Révéler la dernière carte totale du jeu | **Fin de chasse, début de légende** |

Total : **13 badges**

---

# Récapitulatif global

| Famille | Nombre de badges |
|---|---:|
| Progression globale | 13 |
| Progression par collection | 63 |
| Exploration équilibrée | 5 |
| Révéler | 13 |
| Badges secrets | 13 |
| **Total général** | **107 badges** |

---

# Notes d’implémentation

## Structure de badge recommandée

```js
{
  number: "001",
  id: "global-first-discovery",
  family: "global",
  name: "Première gorgée du destin",
  description: "Découvrir ta première carte ZythoHunt.",
  hidden: false,
  condition: {
    type: "totalDiscoveredAtLeast",
    count: 1
  }
}
```

## Exemple pour une collection

```js
{
  number: "023",
  id: "lagers-complete",
  family: "collection",
  collectionId: "lagers-et-fermentations-basses",
  name: "Empereur des basses températures",
  description: "Compléter la collection Lagers et fermentations basses.",
  hidden: false,
  condition: {
    type: "collectionComplete"
  }
}
```

## Exemple pour Révéler

```js
{
  number: "086",
  id: "reveal-unknown-50",
  family: "reveal",
  name: "Inventeur de bières imaginaires",
  description: "Taper 50 noms qui ne correspondent à aucun style connu.",
  hidden: false,
  condition: {
    type: "unknownAttemptsAtLeast",
    count: 50
  }
}
```

## Exemple pour badge secret

```js
{
  number: "095",
  id: "secret-69-discoveries",
  family: "secret",
  name: "Position de dégustation avancée",
  description: "Atteindre exactement 69 cartes découvertes.",
  hidden: true,
  condition: {
    type: "totalDiscoveredEquals",
    count: 69
  }
}
```

---

# Recommandation UX

Dans l’onglet Badge, il est conseillé d’afficher les familles dans cet ordre :

1. Progression
2. Collections
3. Exploration
4. Révéler
5. Secrets

Pour chaque badge :

- icône ou médaillon
- nom
- description courte
- état verrouillé / débloqué
- date de déblocage si disponible
- progression numérique si applicable

Exemples :

```txt
Chasseur de capsules
25 / 50 cartes découvertes
```

```txt
Inventeur de bières imaginaires
37 / 50 noms inexistants
```

```txt
Empereur des basses températures
40 / 45 cartes découvertes
```

---


---

# Icônes et notifications locales

## Principe général

Chaque badge doit posséder son propre petit icône.

À l’obtention d’un badge, l’application doit déclencher une notification locale affichant :

- l’icône du badge
- le nom du badge
- un court message de déblocage

Exemple :

```txt
🏅 Badge débloqué
🍺 Première gorgée du destin
```

ou :

```txt
🏅 Nouveau trophée ZythoHunt
🐧 Grand pingouin de la mousse
```

## Règle produit

Chaque badge doit contenir au minimum :

```js
{
  number: "001",
  id: "global-first-discovery",
  family: "global",
  name: "Première gorgée du destin",
  description: "Découvrir ta première carte ZythoHunt.",
  icon: "🍺",
  hidden: false,
  condition: {
    type: "totalDiscoveredAtLeast",
    count: 1
  }
}
```

Le champ `icon` est obligatoire.

## Notification de badge

Lorsqu’un badge est débloqué pour la première fois :

1. Le badge est enregistré comme obtenu.
2. Sa date d’obtention est sauvegardée.
3. Une notification locale est générée.
4. La notification affiche l’icône et le nom du badge.
5. Le badge ne doit pas redéclencher la notification s’il est déjà obtenu.

Exemple de logique :

```js
function unlockBadge(badge) {
  if (isBadgeUnlocked(badge.id)) return;

  saveUnlockedBadge({
    id: badge.id,
    unlockedAt: new Date().toISOString()
  });

  notifyBadgeUnlocked(badge);
}
```

## Format recommandé de notification

```js
function notifyBadgeUnlocked(badge) {
  const title = "Badge débloqué";
  const body = `${badge.icon} ${badge.name}`;

  showLocalNotification({
    title,
    body,
    icon: badge.icon,
    badgeId: badge.id
  });
}
```

## UX recommandée

La notification doit être courte, lisible et gratifiante.

Format conseillé :

```txt
Badge débloqué
🍺 Première gorgée du destin
```

Format alternatif plus ZythoHunt :

```txt
Trophée brassicole obtenu
🍺 Première gorgée du destin
```

## Fallback obligatoire

Si les notifications système ne sont pas disponibles ou pas autorisées, afficher une notification interne dans l’application.

Exemple :

```txt
🍺 Badge débloqué : Première gorgée du destin
```

Cette notification interne peut prendre la forme :

- d’un toast en bas d’écran
- d’une petite bannière en haut
- d’un médaillon animé temporaire
- d’un panneau “Nouveau badge” après la révélation d’une carte

## Comportement recommandé

Lorsqu’un ou plusieurs badges sont obtenus en même temps :

- afficher d’abord la révélation de la carte
- puis afficher les badges obtenus
- si plusieurs badges sont obtenus, les présenter en file d’attente
- éviter de spammer l’utilisateur avec 5 notifications système d’un coup

Exemple :

```txt
🏅 3 badges débloqués
🍺 Première gorgée du destin
❄️ Premier demi bien droit
🧭 Touriste intégral du houblon
```

## Icônes recommandées par famille

| Famille | Style d’icône recommandé |
|---|---|
| Progression globale | trophées, chopes, capsules, couronnes |
| Progression par collection | icônes liées au style de bière |
| Exploration équilibrée | cartes, boussoles, compas, étagères |
| Révéler | clavier, loupe, parchemin, radar, point d’interrogation |
| Secrets | cadenas, silhouette, étoile noire, coffre |

## Exemples d’icônes par famille

### Progression globale

| Badge | Icône |
|---|---|
| Première gorgée du destin | 🍺 |
| Chasseur de capsules | 🧢 |
| Gardien du Grand Casier | 🗄️ |
| ZythoHunt : Maître absolu du Brassivers | 👑 |

### Collections

| Collection | Style d’icônes |
|---|---|
| Lagers et fermentations basses | ❄️, 🧊, 🐧 |
| Pale Ales, Bitters et IPA | 🌿, 🍊, 🌲 |
| Porters & Stouts | ☕, 🌑, 🍫 |
| Traditions belges et françaises | ⛪, 🧙, 🕯️ |
| Bières de blé et de seigle | 🌾, 🍌, 🍞 |
| Bières acides, sauvages et spontanées | 🍋, 🦠, 🧪 |
| Ales ambrées, brunes, maltées et fortes | 🍯, 🔥, 🥨 |
| Styles singuliers, historiques et hybrides | 🏺, 🦴, 🧬 |
| Appellations commerciales | 🏷️, 🛒, 📣 |

### Révéler

| Badge | Icône |
|---|---|
| Ça n’existe pas, chef | ❓ |
| Inventeur de bières imaginaires | 🧠 |
| Le mur répond mieux que toi | 🧱 |
| Déjà bu, déjà vu | 🔁 |
| Tir trans-casier | 🎯 |

### Secrets

| Badge | Icône |
|---|---|
| Position de dégustation avancée | 😏 |
| Le dernier bouchon saute | 🍾 |
| Nyctalope du houblon | 🦉 |
| Tournée générale cosmique | 🌌 |
| Fin de chasse, début de légende | 🏆 |

## Recommandation technique

Créer un module dédié aux badges, par exemple :

```txt
src/badges/
  badge-definitions.js
  badge-engine.js
  badge-storage.js
  badge-notifications.js
  badge-icons.js
  badges-view.js
  badges.css
```

### Responsabilités recommandées

| Fichier | Rôle |
|---|---|
| `badge-definitions.js` | contient la liste complète des badges |
| `badge-engine.js` | évalue les conditions de déblocage |
| `badge-storage.js` | sauvegarde les badges obtenus |
| `badge-notifications.js` | déclenche les notifications locales ou internes |
| `badge-icons.js` | centralise les icônes |
| `badges-view.js` | affiche l’onglet Badge |
| `badges.css` | style de la vue Badge |

## Règle anti-doublon

Un badge déjà obtenu ne doit jamais déclencher une deuxième notification.

Structure de stockage recommandée :

```js
{
  schemaVersion: 1,
  unlocked: {
    "global-first-discovery": {
      unlockedAt: "2026-06-28T20:42:00.000Z"
    }
  }
}
```

## Clé localStorage recommandée

```txt
zythohunt.badges.v1
```

## Résumé de la règle finale

Chaque badge doit avoir :

- un `id`
- une `family`
- un `name`
- une `description`
- un `icon`
- une condition de déblocage
- un état caché ou visible
- une date d’obtention après déblocage

À chaque déblocage réel :

```txt
Notification locale ou interne :
[icône] [nom du badge]
```

Exemple final :

```txt
Badge débloqué
🐧 Grand pingouin de la mousse
```

# Ton éditorial

Les noms doivent rester :

- humoristiques
- légèrement absurdes
- cohérents avec l’univers bière / chasse / collection
- compréhensibles sans lire une documentation
- jamais trop longs pour une carte de badge mobile

L’objectif est que l’onglet Badge ressemble à un petit musée de trophées brassicoles, pas à une feuille Excel déguisée en sous-bock.
