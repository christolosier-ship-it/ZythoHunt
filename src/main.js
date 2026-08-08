import "./fonts.css";
import "./styles.css";
import "./card-presentation.css";
import "./background/background-integration.css";
import "./brassopedie/brassopedie-panel.css";
import "./brassopedie/brassopedie-library.css";
import "./badges/badges.css";
import "./carousel/carousel-layout.css";
import "./app/app-shell.css";
import { createAppNavigation } from "./app/app-navigation.js";
import { bootApp } from "./app/app-runtime.js";
import { showAppNotice } from "./app/app-notice.js";
import { registerServiceWorker } from "./pwa/register-service-worker.js";

const $ = (id) => document.getElementById(id);

function getNavigationViews() {
  return {
    zythosphere: $("zythosphere-view"),
    brassopedie: $("brassopedie-view"),
    degustation: $("degustation-view"),
    badges: $("badges-view"),
    reglages: $("reglages-view")
  };
}

function showStartupError(error) {
  console.error("ZythoHunt startup failed", error);
  const loadingLabel = document.querySelector(".loading-label");
  if (loadingLabel) loadingLabel.textContent = "Erreur de chargement. Tu peux relancer l'application.";
  const loadingInner = document.querySelector(".loading-inner");
  if (loadingInner && !loadingInner.querySelector("[data-retry-startup]")) {
    const retry = document.createElement("button");
    retry.type = "button";
    retry.dataset.retryStartup = "true";
    retry.textContent = "Réessayer";
    retry.addEventListener("click", () => window.location.reload());
    loadingInner.append(retry);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navigation = createAppNavigation({ views: getNavigationViews(), initialView: "zythosphere" });
  void registerServiceWorker({
    onUpdateReady: ({ applyUpdate }) => showAppNotice({
      message: "Une nouvelle version de ZythoHunt est disponible.",
      tone: "info",
      actionLabel: "Mettre à jour",
      onAction: applyUpdate,
      duration: null
    })
  }).catch((error) => console.warn("Service worker registration failed", error));
  void bootApp(navigation).catch(showStartupError);
});
