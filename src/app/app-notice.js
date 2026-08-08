let hideTimer = null;

/**
 * Affiche un message non bloquant dans le chrome applicatif.
 * @param {{
 *   root?: HTMLElement | null,
 *   message: string,
 *   tone?: "info" | "warning" | "error" | "success",
 *   actionLabel?: string | null,
 *   onAction?: (() => void | Promise<void>) | null,
 *   duration?: number | null
 * }} options
 */
export function showAppNotice({
  root = document.getElementById("app-notice"),
  message,
  tone = "info",
  actionLabel = null,
  onAction = null,
  duration = 6500
}) {
  if (!root || !message) return false;

  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  root.replaceChildren();
  root.dataset.tone = tone;
  root.hidden = false;

  const text = document.createElement("span");
  text.className = "app-notice-message";
  text.textContent = message;
  root.append(text);

  if (actionLabel && onAction) {
    const action = document.createElement("button");
    action.type = "button";
    action.className = "app-notice-action";
    action.textContent = actionLabel;
    action.addEventListener("click", async () => {
      action.disabled = true;
      try {
        await onAction();
      } finally {
        action.disabled = false;
      }
    });
    root.append(action);
  }

  const close = document.createElement("button");
  close.type = "button";
  close.className = "app-notice-close";
  close.setAttribute("aria-label", "Fermer le message");
  close.textContent = "×";
  close.addEventListener("click", () => hideAppNotice(root));
  root.append(close);

  if (duration && duration > 0 && !actionLabel) {
    hideTimer = setTimeout(() => hideAppNotice(root), duration);
  }

  return true;
}

/** @param {HTMLElement | null} [root] */
export function hideAppNotice(root = document.getElementById("app-notice")) {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  if (!root) return;
  root.hidden = true;
  root.replaceChildren();
  delete root.dataset.tone;
}
