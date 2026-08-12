const SW_UPDATE_MESSAGE = { type: "SKIP_WAITING" };

/**
 * @param {{ onUpdateReady?: ((detail: { registration: ServiceWorkerRegistration, applyUpdate: () => void }) => void) | null }} [options]
 */
export async function registerServiceWorker({ onUpdateReady = null } = {}) {
  if (!("serviceWorker" in navigator)) return null;

  let refreshing = false;
  let updateAccepted = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!updateAccepted || refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, {
    scope: import.meta.env.BASE_URL,
    updateViaCache: "none"
  });

  const announceUpdate = (worker) => {
    if (!worker || !navigator.serviceWorker.controller) return;
    const applyUpdate = () => {
      updateAccepted = true;
      worker.postMessage(SW_UPDATE_MESSAGE);
    };
    if (onUpdateReady) onUpdateReady({ registration, applyUpdate });
    else console.info("Une mise à jour ZythoHunt est prête à être appliquée.");
  };

  const watchInstallingWorker = () => {
    const worker = registration.installing;
    if (!worker) return;
    worker.addEventListener("statechange", () => {
      if (worker.state === "installed") announceUpdate(worker);
    });
  };

  registration.addEventListener("updatefound", watchInstallingWorker);
  if (registration.waiting) announceUpdate(registration.waiting);

  // Vérifie les mises à jour sans les activer de force pendant une interaction.
  await registration.update();
  return registration;
}
