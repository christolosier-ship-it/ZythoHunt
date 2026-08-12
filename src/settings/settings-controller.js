import packageMeta from "../../package.json";
import { createAppDataManager, validateBackup } from "../storage/app-data-manager.js";
import { clearZythoHuntCaches, getPwaDisplayMode, getStorageEstimate, checkForPwaUpdate } from "../pwa/pwa-tools.js";

function notificationState(settings) {
  if (settings?.notificationsEnabled === false) {
    return { code: "disabled", label: "désactivées dans ZythoHunt", canRequest: false };
  }
  if (!globalThis.Notification) {
    return { code: "unsupported", label: "non disponibles sur ce navigateur", canRequest: false };
  }
  if (Notification.permission === "granted") {
    return { code: "granted", label: "autorisées", canRequest: false };
  }
  if (Notification.permission === "denied") {
    return { code: "denied", label: "refusées par le navigateur", canRequest: false };
  }
  return { code: "default", label: "à autoriser", canRequest: true };
}

/**
 * @param {{
 *   root?: HTMLElement | null,
 *   settingsStore?: any,
 *   collectionCatalog?: any[],
 *   dataManager?: any,
 *   onRestart?: (() => void) | null,
 *   onNotice?: ((detail: { message: string, tone?: "info" | "warning" | "error" | "success", duration?: number | null }) => void) | null
 * }} [options]
 */
export function createSettingsController({
  root,
  settingsStore,
  collectionCatalog = [],
  dataManager = null,
  onRestart = () => globalThis.location?.reload?.(),
  onNotice = null
} = {}) {
  const appDataManager = dataManager || createAppDataManager({
    collectionCatalog,
    appVersion: packageMeta.version
  });
  let view = null;
  let viewPromise = null;

  /** @param {string} message @param {"info" | "warning" | "error" | "success"} [tone] @param {number | null} [duration] */
  function notice(message, tone = "info", duration = 6000) {
    onNotice?.({ message, tone, duration });
  }

  const getSnapshot = () => ({
    settings: settingsStore?.getState?.() || {},
    notifications: notificationState(settingsStore?.getState?.() || {}),
    about: {
      version: packageMeta.version,
      displayMode: getPwaDisplayMode(),
      storageMode: "Données locales uniquement"
    }
  });

  async function ensureView() {
    if (view) return view;
    if (!root) return null;
    if (!viewPromise) {
      viewPromise = Promise.all([
        import("./settings-view.js"),
        import("./settings.css")
      ]).then(([{ createSettingsView }]) => {
        view = createSettingsView({ root, controller: api });
        view.mount();
        return view;
      }).catch((error) => {
        viewPromise = null;
        throw error;
      });
    }
    return viewPromise;
  }

  async function handleViewChange(viewId) {
    if (viewId !== "reglages") return;
    const wasMounted = Boolean(view);
    const current = await ensureView();
    if (wasMounted) current?.refresh?.();
  }

  function setPreference(name, value) {
    const result = settingsStore?.setPreference?.(name, value);
    if (!result?.ok) {
      notice("Le réglage n'a pas pu être enregistré sur cet appareil.", "warning", 8000);
      view?.refresh?.();
      return result;
    }
    view?.refresh?.();
    return result;
  }

  async function requestNotificationPermission() {
    if (!globalThis.Notification?.requestPermission) {
      return { ok: false, permission: "unsupported" };
    }
    try {
      const permission = await Notification.requestPermission();
      view?.refresh?.();
      return { ok: permission === "granted", permission };
    } catch (error) {
      notice("La demande d'autorisation de notification a échoué.", "warning");
      return { ok: false, permission: "failed", error };
    }
  }

  function exportData() {
    const result = appDataManager.exportBackup();
    if (!result?.ok) notice("La sauvegarde n'a pas pu être préparée.", "warning", 8000);
    return result;
  }

  function inspectImport(backup) {
    return validateBackup(backup);
  }

  function importData(backup) {
    const result = appDataManager.importBackup(backup);
    if (!result?.ok) {
      notice("La sauvegarde n'a pas pu être importée. Les données actuelles ont été conservées.", "error", 9000);
      return result;
    }
    notice("Sauvegarde importée. ZythoHunt va redémarrer.", "success", 3000);
    onRestart?.();
    return result;
  }

  function resetProgress() {
    const result = appDataManager.resetProgress();
    if (!result?.ok) {
      notice("La progression n'a pas pu être entièrement réinitialisée.", "error", 9000);
      return result;
    }
    notice("Progression réinitialisée. ZythoHunt va redémarrer.", "success", 2500);
    onRestart?.();
    return result;
  }

  function resetSettings() {
    const result = settingsStore?.reset?.();
    if (!result?.ok) {
      notice("Les réglages par défaut n'ont pas pu être restaurés.", "warning", 8000);
      return result;
    }
    notice("Réglages par défaut restaurés.", "success");
    view?.refresh?.();
    return result;
  }

  async function resetAll() {
    const dataResult = appDataManager.resetAll();
    if (!dataResult?.ok) {
      notice("La remise à zéro complète a échoué avant suppression des caches.", "error", 9000);
      return { ok: false, data: dataResult, caches: null };
    }
    const cacheResult = await clearZythoHuntCaches();
    if (!cacheResult.ok) {
      notice("Les données ont été effacées, mais le cache hors ligne n'a pas pu être entièrement vidé.", "warning", 9000);
    }
    onRestart?.();
    return { ok: true, data: dataResult, caches: cacheResult };
  }

  async function clearOfflineCache() {
    const result = await clearZythoHuntCaches();
    notice(
      result.ok ? `Cache hors ligne vidé${result.deleted ? ` (${result.deleted} cache${result.deleted > 1 ? "s" : ""})` : ""}.` : "Le cache hors ligne n'a pas pu être vidé.",
      result.ok ? "success" : "warning"
    );
    return result;
  }

  async function checkForUpdate() {
    const result = await checkForPwaUpdate();
    if (result.status === "ready") notice("Une mise à jour est prête. Elle sera proposée par l'application.", "success");
    else if (result.ok) notice("Recherche de mise à jour terminée.", "info");
    else notice("Impossible de vérifier les mises à jour dans ce contexte.", "warning");
    return result;
  }

  const api = {
    handleViewChange,
    getSnapshot,
    setPreference,
    requestNotificationPermission,
    exportData,
    inspectImport,
    importData,
    resetProgress,
    resetSettings,
    resetAll,
    clearOfflineCache,
    getStorageInfo: () => getStorageEstimate(),
    checkForUpdate,
    refresh: () => view?.refresh?.()
  };

  return api;
}
