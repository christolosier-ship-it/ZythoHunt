export const SENSORY_ROLES = Object.freeze(["primary", "fallback", "overlay", "excluded"]);

const c = (collectionId, primary = [], fallback = [], overlay = [], excluded = []) => Object.freeze({
  collectionId,
  primary: Object.freeze(primary),
  fallback: Object.freeze(fallback),
  overlay: Object.freeze(overlay),
  excluded: Object.freeze(excluded)
});

/**
 * Cartographie exhaustive des 251 cartes classiques.
 * primary: candidat autonome ; fallback: famille large ; overlay: signature transversale ;
 * excluded: carte encyclopédique non déductible de façon fiable par la seule dégustation.
 */
export const sensoryRoleCollections = Object.freeze([
  c("lagers-et-fermentations-basses", [
    "international-light-lager","german-leichtbier","american-light-lager","contemporary-american-light-lager","mexican-light-lager","international-pale-lager","international-pilsner","german-pilsner","italian-pilsner","czech-pale-lager","czech-premium-pale-lager","american-pilsner","contemporary-american-pilsner","west-coast-pilsner","rice-lager","india-pale-lager","munich-helles","dortmunder-european-export","festbier-german-oktoberfest","vienna-lager","marzen","franconian-rotbier","international-amber-lager","czech-amber-lager","american-amber-lager","american-marzen-oktoberfest","mexican-amber-lager","munich-dunkel","schwarzbier","international-dark-lager","european-dark-lager","czech-dark-lager","american-dark-lager","mexican-dark-lager","traditional-bock-dunkles-bock","helles-bock-maibock","doppelbock","eisbock","american-lager","contemporary-american-lager","mexican-pale-lager"
  ], ["lager","pilsner","hoppy-lager","bock"]),

  c("pale-ales-bitters-et-ipa", [
    "ordinary-bitter","special-best-bitter","extra-special-bitter-esb","english-summer-ale","classic-english-pale-ale","british-golden-ale","golden-blonde-ale","australian-sparkling-ale","classic-australian-pale-ale","australian-pale-ale","international-pale-ale","new-zealand-pale-ale","american-pale-ale","american-extra-special-bitter","juicy-hazy-pale-ale","american-strong-pale-ale","juicy-hazy-strong-pale-ale","kolsch","session-ipa","english-ipa","american-ipa","new-zealand-ipa","west-coast-ipa","neipa-juicy-hazy-ipa","double-imperial-ipa","juicy-hazy-double-imperial-ipa","belgian-ipa","black-ipa","brown-ipa","red-ipa","rye-ipa","white-ipa","brut-ipa"
  ], ["pale-ale","bitter","ipa-india-pale-ale"]),

  c("porters-stouts", [
    "english-porter","brown-porter","robust-porter","american-porter","pre-prohibition-porter","baltic-porter","american-imperial-porter","smoke-porter","dry-stout-irish-dry-stout","irish-extra-stout","export-stout-foreign-extra-stout","tropical-stout","sweet-milk-cream-stout","oatmeal-stout","american-stout","imperial-stout","british-imperial-stout","american-imperial-stout"
  ], ["porter","stout"], ["dessert-pastry-beer","coffee-stout-or-porter"]),

  c("traditions-belges-et-francaises", [
    "belgian-table-beer","belgian-session-ale","belgian-single","belgian-pale-ale","speciale-belge","belgian-blonde-ale","belgian-golden-strong-ale-belgian-strong-blonde-ale","belgian-dark-strong-ale","dubbel","tripel","quadrupel","saison","biere-de-garde-style-franco-belge","american-belgo-ale"
  ], ["belgian-ale-ale-belge","specialty-saison"], ["belgian-fruit-beer"]),

  c("bieres-de-ble-et-de-seigle", [
    "american-wheat-beer","witbier","weissbier-hefeweizen","kristallweizen","leichtes-weizen","bernsteinfarbenes-weizen","dunkelweizen","weizenbock","wheatwine","roggenbier-german-rye-ale"
  ], ["biere-de-ble-wheat-beer","biere-de-seigle-rye-beer"], ["fruit-wheat-beer"]),

  c("bieres-acides-sauvages-et-spontanees", [
    "berliner-weisse","gose","leipzig-gose","contemporary-gose","flanders-red-ale","oud-bruin","lambic","gueuze","fruit-lambic","contemporary-belgian-style-spontaneously-fermented-ale"
  ], ["biere-acide-sour-beer","american-wild-ale","wild-beer","biere-de-fermentation-spontanee-spontaneous-sour-ale","specialty-berliner-weisse","american-sour-ale"], ["fruited-american-sour-ale","brett-beer","mixed-culture-brett-beer","wood-and-barrel-aged-sour-beer","fruited-wood-and-barrel-aged-sour-beer"]),

  c("ales-ambrees-brunes-maltees-et-fortes", [
    "english-pale-mild-ale","english-dark-mild-ale","english-brown-ale","london-brown-ale","irish-red-ale","old-ale","british-barley-wine","scottish-light-ale","scottish-heavy-ale","scottish-export-ale","scotch-ale-wee-heavy","peated-scotch-ale","american-amber-red-ale","american-brown-ale","american-black-ale","double-hoppy-red-ale","imperial-red-ale","american-strong-ale","american-barley-wine","altbier"
  ], ["ale","mild-ale","brown-ale","amber-ale","red-ale","strong-ale","barley-wine"]),

  c("styles-singuliers-historiques-et-hybrides", [
    "cream-ale","california-common-steam-beer","kentucky-common","american-malt-liquor","pre-prohibition-lager","kellerbier-zwickelbier","grodziskie-piwo-grodziskie","lichtenhainer","adambier","dutch-kuyt-kuit","sahti","gotlandsdricke","breslau-schoeps","grape-ale-italian-grape-ale","ginjo-beer-sake-yeast-beer","weiss-rauchbier","helles-rauchbier","marzen-rauchbier","bock-rauchbier"
  ], ["rauchbier-smoke-beer"], ["fruit-beer","field-beer","pumpkin-squash-pumpkin-spice-beer","chili-beer","herb-and-spice-beer","tea-beer","green-tea-beer","chocolate-beer","coffee-beer","honey-beer","alternative-grain-beer","alternative-sugar-beer","autumn-seasonal-beer","winter-seasonal-beer","fresh-hop-beer","wood-and-barrel-aged-beer","wood-and-barrel-aged-strong-beer","wood-and-barrel-aged-strong-stout","wood-and-barrel-aged-dessert-pastry-beer","aged-beer"]),

  c("appellations-commerciales", [], ["panache","radler-shandy"], [], [
    "blonde","blanche","ambree","rousse","brune","noire","rouge","biere-dabbaye","trappiste","biere-artisanale-craft-beer","biere-biologique-bio","biere-speciale","biere-de-noel","biere-de-printemps-biere-de-mars","biere-forte-strong-beer","biere-legere-light-beer","session-beer","double","triple","quadruple","biere-sans-alcool","0-0-pourcent","biere-sans-gluten","pur-malt","biere-a","biere-aromatisee-a","biere-de-fermentation-lactique","biere-de-garde-mention-legale-francaise"
  ])
]);

export const sensoryRoleEntries = Object.freeze(sensoryRoleCollections.flatMap((collection) => SENSORY_ROLES.flatMap((role) => collection[role].map((cardId) => Object.freeze({ collectionId: collection.collectionId, cardId, role })))));
export const sensoryRoleByKey = Object.freeze(Object.fromEntries(sensoryRoleEntries.map((entry) => [`${entry.collectionId}:${entry.cardId}`, entry.role])));
export const SENSORY_ROLE_COUNTS = Object.freeze(sensoryRoleEntries.reduce((counts, { role }) => { counts[role] += 1; return counts; }, { primary: 0, fallback: 0, overlay: 0, excluded: 0 }));
export const getSensoryRole = (collectionId, cardId) => sensoryRoleByKey[`${collectionId}:${cardId}`] || null;
