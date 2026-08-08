export async function runRevealCycle({
  card,
  carousel,
  revealEngine,
  store,
  ensureImage = async (_card) => {},
  beforeReveal,
  afterReveal,
  onAlreadyDiscovered,
  onDiscovered,
  onPersistenceFailure
}) {
  let prepared = false;
  let revealStarted = false;
  let persistence = { ok: true, persisted: true, error: null };

  try {
    await carousel.prepareForReveal();
    prepared = true;
    await carousel.focusCard(card.id);

    if (store.isDiscovered(card.id)) {
      await carousel.highlight(card.id);
      if (onAlreadyDiscovered) await onAlreadyDiscovered();
      return { status: "already-discovered" };
    }

    await ensureImage(card);
    revealStarted = true;
    if (beforeReveal) await beforeReveal();

    const revealResult = await revealEngine.reveal({
      cardEl: carousel.getCardElement(card.id),
      cardData: card,
      sceneContext: carousel.createRevealContext(card.id),
      mode: "full"
    });

    if (revealResult.status !== "completed") {
      return { status: revealResult.status || "interrupted" };
    }

    await revealEngine.returnToSource({
      beforeSourceRestore: async () => {
        persistence = store.markDiscovered(card.id);
        carousel.setDiscovered(card.id, true);

        if (persistence.ok) {
          if (onDiscovered) await onDiscovered();
        } else if (onPersistenceFailure) {
          await onPersistenceFailure(persistence);
        }
      }
    });

    return {
      status: persistence.ok ? "completed" : "completed-unsaved",
      persistence
    };
  } finally {
    if (revealStarted && afterReveal) await afterReveal();
    if (prepared) carousel.unlock();
  }
}
