export async function runRevealCycle({
  card,
  carousel,
  revealEngine,
  store,
  ensureImage = async () => {},
  beforeReveal,
  afterReveal,
  onAlreadyDiscovered,
  onDiscovered
}) {
  let prepared = false;
  let revealStarted = false;

  try {
    await carousel.prepareForReveal();
    prepared = true;
    await carousel.focusCard(card.id);

    if (store.isDiscovered(card.id)) {
      await carousel.highlight(card.id);
      await onAlreadyDiscovered?.(card);
      return { status: "already-discovered" };
    }

    await ensureImage(card);
    revealStarted = true;
    await beforeReveal?.(card);

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
      beforeSourceRestore: () => {
        store.markDiscovered(card.id);
        carousel.setDiscovered(card.id, true);
        onDiscovered?.(card);
      }
    });

    return { status: "completed" };
  } finally {
    if (revealStarted) await afterReveal?.(card);
    if (prepared) carousel.unlock();
  }
}
