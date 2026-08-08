import gsap from "gsap";
import { createQuickReveal, createRevealTimeline } from "../animation/reveal-timeline.js";

const STATES = {
  IDLE: "idle",
  PREPARING: "preparing",
  REVEALING: "revealing",
  COMPLETE: "complete",
  RETURNING: "returning",
  DESTROYED: "destroyed"
};

const BACKGROUND_SELECTORS = ["#app-sidebar", "#app-shell-main"];
const FOCUSABLE_SELECTOR = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export function createRevealEngine({
  stageEl,
  overlayEl,
  revealOverlay,
  revealActions,
  revealHeadline,
  btnContinue,
  motionTokens
}) {
  let state = STATES.IDLE;
  let currentTimeline = null;
  let currentClone = null;
  let currentSourceEl = null;
  let currentCardData = null;
  let currentSceneContext = null;
  let previousFocus = null;
  let cleanupModal = null;
  const previousInertState = new Map();

  function isBusy() {
    return [STATES.PREPARING, STATES.REVEALING, STATES.COMPLETE, STATES.RETURNING].includes(state);
  }

  function hideActions() {
    if (revealActions) revealActions.hidden = true;
  }

  function setBackgroundInert(value) {
    if (value) {
      BACKGROUND_SELECTORS.forEach((selector) => {
        const element = document.querySelector(selector);
        if (!(element instanceof HTMLElement) || element === revealOverlay) return;
        if (!previousInertState.has(element)) previousInertState.set(element, Boolean(element.inert));
        element.inert = true;
      });
      return;
    }

    previousInertState.forEach((wasInert, element) => {
      element.inert = wasInert;
    });
    previousInertState.clear();
  }

  function getFocusableElements() {
    return Array.from(revealOverlay?.querySelectorAll(FOCUSABLE_SELECTOR) || [])
      .filter((element) => element instanceof HTMLElement && !element.hasAttribute("disabled") && element.offsetParent !== null);
  }

  function focusInsideModal() {
    const [first] = getFocusableElements();
    if (first instanceof HTMLElement) {
      first.focus({ preventScroll: true });
      return;
    }
    if (revealOverlay instanceof HTMLElement) {
      revealOverlay.tabIndex = -1;
      revealOverlay.focus({ preventScroll: true });
    }
  }

  function activateModal() {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setBackgroundInert(true);

    const onFocusIn = (event) => {
      if (!revealOverlay || revealOverlay.hidden) return;
      const target = event.target;
      if (target instanceof Node && revealOverlay.contains(target)) return;
      focusInsideModal();
    };

    const onKeyDown = (event) => {
      if (event.key !== "Escape" && event.key !== "Tab") return;

      if (event.key === "Escape") {
        event.preventDefault();
        if (state === STATES.COMPLETE) btnContinue?.click();
        return;
      }

      const focusables = getFocusableElements();
      if (!focusables.length) {
        event.preventDefault();
        focusInsideModal();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (!revealOverlay?.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    focusInsideModal();

    cleanupModal = () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      setBackgroundInert(false);
      const focusTarget = previousFocus;
      cleanupModal = null;
      previousFocus = null;
      focusTarget?.focus?.({ preventScroll: true });
    };
  }

  function waitForContinue() {
    if (revealHeadline) revealHeadline.textContent = "Nouvelle carte révélée";
    if (revealActions) revealActions.hidden = false;
    btnContinue?.focus({ preventScroll: true });
    return new Promise((resolve) => {
      const done = () => resolve();
      btnContinue?.addEventListener("click", done, { once: true });
    });
  }

  function showOverlay() {
    if (revealOverlay) revealOverlay.hidden = false;
    if (stageEl) stageEl.innerHTML = "";
  }

  function restoreSource() {
    if (currentSourceEl) gsap.set(currentSourceEl, { opacity: 1 });
  }

  function resetSceneVisuals() {
    if (overlayEl) gsap.to(overlayEl, { opacity: 0, duration: 0.3, ease: "power2.out" });
    if (revealOverlay) revealOverlay.hidden = true;
    hideActions();
  }

  async function restoreContext() {
    if (currentSceneContext?.restore) await currentSceneContext.restore();
  }

  function clearCurrentScene() {
    currentTimeline = null;
    currentClone = null;
    currentSourceEl = null;
    currentCardData = null;
    currentSceneContext = null;
  }

  async function finalizeReturn() {
    restoreSource();
    currentClone?.remove();
    resetSceneVisuals();
    cleanupModal?.();
    try {
      await restoreContext();
    } catch (error) {
      console.error("Le contexte de révélation n'a pas pu être restauré.", error);
    }
    clearCurrentScene();
    state = STATES.IDLE;
  }

  async function reveal({ cardEl, cardData, sceneContext, mode = "full" }) {
    if (state === STATES.DESTROYED) return { status: "destroyed", cardData };
    if (isBusy() || state === STATES.COMPLETE) return { status: "busy", cardData: currentCardData };
    if (!cardEl || !cardData) return { status: "invalid", cardData };

    state = STATES.PREPARING;
    currentSourceEl = cardEl;
    currentCardData = cardData;
    currentSceneContext = sceneContext || null;
    showOverlay();
    activateModal();
    hideActions();

    try {
      const result = mode === "quick"
        ? createQuickReveal({ cardEl, cardData, stageEl, overlayEl })
        : createRevealTimeline({ cardEl, cardData, stageEl, overlayEl, sceneContext, motionTokens });

      currentTimeline = result.tl;
      currentClone = result.cloneEl;
      state = STATES.REVEALING;
      await currentTimeline.play();
      state = STATES.COMPLETE;
      await waitForContinue();
      return { status: "completed", cardData };
    } catch (error) {
      await cleanupAfterError();
      throw error;
    }
  }

  /**
   * @param {{ beforeSourceRestore?: ((detail: { cardEl: HTMLElement | null, cardData: any }) => void | Promise<void>) | null }} [options]
   */
  async function returnToSource({ beforeSourceRestore } = {}) {
    if (state === STATES.DESTROYED) return { status: "destroyed" };

    const sourceEl = currentSourceEl;
    const cardData = currentCardData;
    const cloneEl = currentClone;
    let deferredError = null;

    state = STATES.RETURNING;
    currentTimeline?.kill();

    try {
      if (cloneEl && sourceEl) {
        const originalRect = sourceEl.getBoundingClientRect();
        await gsap.to(cloneEl, {
          left: originalRect.left,
          top: originalRect.top,
          width: originalRect.width,
          height: originalRect.height,
          rotateY: 0,
          rotateX: 0,
          rotateZ: 0,
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          duration: 0.45,
          ease: "power3.inOut"
        });
      }

      if (beforeSourceRestore) await beforeSourceRestore({ cardEl: sourceEl, cardData });
    } catch (error) {
      deferredError = error;
    } finally {
      await finalizeReturn();
    }

    if (deferredError) throw deferredError;
    return { status: cloneEl && sourceEl ? "returned" : "idle", cardData };
  }

  async function cleanupAfterError() {
    currentTimeline?.kill();
    currentClone?.remove();
    restoreSource();
    resetSceneVisuals();
    cleanupModal?.();
    try {
      await restoreContext();
    } catch (error) {
      console.error("Le contexte n'a pas pu être restauré après une erreur de révélation.", error);
    }
    clearCurrentScene();
    state = STATES.IDLE;
  }

  function destroy() {
    if (state === STATES.DESTROYED) return;
    currentTimeline?.kill();
    currentClone?.remove();
    restoreSource();
    resetSceneVisuals();
    cleanupModal?.();
    if (currentSceneContext?.restore) {
      Promise.resolve(currentSceneContext.restore()).catch((error) => {
        console.error("Le contexte n'a pas pu être restauré pendant la destruction.", error);
      });
    }
    clearCurrentScene();
    state = STATES.DESTROYED;
  }

  return { reveal, returnToSource, isBusy, destroy };
}
