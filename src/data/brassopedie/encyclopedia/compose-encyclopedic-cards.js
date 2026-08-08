export function composeEncyclopedicCards(...modules) {
  const cards = {};

  modules.forEach((module, moduleIndex) => {
    Object.entries(module || {}).forEach(([id, entry]) => {
      if (Object.prototype.hasOwnProperty.call(cards, id)) {
        throw new Error(`Duplicate encyclopedic entry ${id} while composing module ${moduleIndex + 1}`);
      }
      cards[id] = entry;
    });
  });

  return Object.freeze(cards);
}
