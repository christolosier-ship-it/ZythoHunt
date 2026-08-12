import gsap from "gsap";
import { motionTokens as defaultMotionTokens } from "./motion-tokens.js";
import { captureRect } from "../utils/geometry.js";
import { cloneCardForReveal } from "../components/create-card.js";

function prefersReducedMotion(check = null) {
  if (typeof check === "function") return Boolean(check());
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** @param {any} options @returns {any} */
export function createRevealTimeline(/** @type {any} */ {
  cardEl,
  cardData,
  stageEl,
  overlayEl,
  sceneContext,
  motionTokens = defaultMotionTokens,
  isReducedMotion = null
}) {
  if (prefersReducedMotion(isReducedMotion)) {
    return createReducedReveal({ cardEl, cardData, stageEl, overlayEl });
  }

  const rect = captureRect(cardEl);
  const clone = cloneCardForReveal(cardEl, rect, cardData);
  stageEl.appendChild(clone);
  gsap.set(cardEl, { opacity: 0 });

  const cloneBack = clone.querySelector(".card-back");
  const cloneFront = clone.querySelector(".card-front");
  const cloneIll = clone.querySelector(".card-illustration");
  const cloneFrame = clone.querySelector(".card-frame");
  const cloneName = clone.querySelector(".card-name");
  const cloneSpecular = clone.querySelector(".card-specular");
  const cloneGlow = clone.querySelector(".card-glow-behind");

  gsap.set(clone, { transformStyle: "preserve-3d", transformPerspective: motionTokens.perspective });
  gsap.set(cloneBack, { backfaceVisibility: "hidden" });
  gsap.set(cloneFront, { backfaceVisibility: "hidden", rotateY: 180 });
  gsap.set([cloneIll, cloneFrame, cloneName], { opacity: 0 });
  gsap.set(cloneSpecular, { opacity: 0 });
  gsap.set(cloneGlow, { opacity: 0 });

  const neighborMotions = sceneContext?.neighborMotions || [];
  const vh = window.innerHeight;
  const headerH = document.getElementById("app-header")?.getBoundingClientRect().height || 0;
  const formH = document.getElementById("reveal-search-form")?.getBoundingClientRect().height || 0;
  const availableH = Math.max(260, vh - headerH - formH - 40);
  const targetH = Math.min(availableH * 0.82, 460);
  const cardAspect = rect.height / rect.width;
  const targetW = targetH / cardAspect;
  const vc = { x: window.innerWidth / 2, y: vh / 2 };
  const targetX = vc.x - targetW / 2;
  const targetY = Math.max(headerH + 8, (vh - targetH) / 2);

  const tl = gsap.timeline({ paused: true });
  tl.to(overlayEl, { opacity: 0.55, duration: 0.25, ease: "power2.out" }, 0);
  if (sceneContext?.contentEl) {
    tl.to(sceneContext.contentEl, {
      filter: `blur(${Math.min(motionTokens.backgroundBlur, 12)}px) brightness(0.6)`,
      duration: 0.25,
      ease: "power2.out"
    }, 0);
  }
  if (sceneContext?.chromeEls?.length) {
    tl.to(sceneContext.chromeEls, { opacity: 0.4, duration: 0.2, ease: "power2.out" }, 0);
  }

  neighborMotions.forEach(({ el, x, y, rotation }) => {
    tl.to(el, { x, y, rotation, duration: 0.35, ease: "power2.out" }, 0.1);
  });

  const ext = motionTokens.extractionDuration;
  tl.set(clone, { willChange: "transform, box-shadow" }, 0.2)
    .to(clone, {
      left: targetX,
      top: targetY,
      width: targetW,
      height: targetH,
      rotateX: motionTokens.tiltX * 0.4,
      rotateZ: motionTokens.tiltZ * 0.3,
      scale: motionTokens.finalScale ?? 1,
      boxShadow: `0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(180,100,20,${motionTokens.glowIntensity * 0.3})`,
      duration: ext,
      ease: "power3.inOut"
    }, 0.2);

  const tensionStart = 0.2 + ext * 0.7;
  tl.to(cloneSpecular, {
    opacity: motionTokens.specularIntensity,
    duration: 0.3,
    ease: "power2.in"
  }, tensionStart)
    .to(cloneGlow, {
      opacity: motionTokens.glowIntensity * 0.5,
      duration: 0.3,
      ease: "power2.in"
    }, tensionStart);

  const flipStart = 0.2 + ext;
  const flip = motionTokens.flipDuration;
  tl.to(cloneSpecular, { opacity: 0, duration: 0.15, ease: "power2.in" }, flipStart)
    .to(clone, {
      rotateY: 90,
      rotateX: motionTokens.tiltX * 0.6,
      rotateZ: motionTokens.tiltZ * 0.5,
      scaleX: 0.96,
      boxShadow: `0 40px 100px rgba(0,0,0,0.9), 0 0 60px rgba(180,100,20,${motionTokens.glowIntensity * 0.5})`,
      duration: flip * 0.5,
      ease: "power2.in"
    }, flipStart)
    .to(clone, {
      rotateY: 180,
      rotateX: motionTokens.tiltX * -0.2,
      rotateZ: motionTokens.tiltZ * -0.15,
      scaleX: 1,
      boxShadow: `0 25px 70px rgba(0,0,0,0.6), 0 0 50px rgba(180,100,20,${motionTokens.glowIntensity * 0.6})`,
      duration: flip * 0.5,
      ease: "power2.out"
    }, flipStart + flip * 0.5);

  const frontStart = flipStart + flip * 0.45;
  tl.to(cloneIll, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }, frontStart)
    .fromTo(cloneIll, { scale: 1.06 }, { scale: 1.03, duration: 0.35, ease: "power2.out" }, frontStart)
    .to(cloneFrame, { opacity: 1, duration: 0.25, ease: "power1.out" }, frontStart + 0.1)
    .fromTo(cloneName, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }, frontStart + 0.3);

  const sigStart = frontStart + 0.4;
  tl.to(cloneGlow, {
    opacity: motionTokens.glowIntensity * 0.7,
    duration: 0.5,
    ease: "power2.inOut"
  }, sigStart)
    .to(cloneSpecular, {
      opacity: motionTokens.specularIntensity * 0.25,
      duration: 0.4,
      ease: "power2.inOut"
    }, sigStart + 0.2);

  const settleStart = flipStart + flip + 0.15;
  const settle = motionTokens.settleDuration;
  tl.to(clone, {
    rotateX: 0,
    rotateZ: 0,
    boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(180,100,20,${motionTokens.glowIntensity * 0.45})`,
    duration: settle,
    ease: "power3.out"
  }, settleStart)
    .set(clone, { willChange: "auto" }, settleStart + settle);

  return { tl, cloneEl: clone };
}

function createReducedReveal(/** @type {any} */ { cardEl, cardData, stageEl, overlayEl }) {
  const rect = captureRect(cardEl);
  const clone = cloneCardForReveal(cardEl, rect, cardData);
  stageEl.appendChild(clone);
  gsap.set(cardEl, { opacity: 0 });

  const cloneFront = clone.querySelector(".card-front");
  const cloneBack = clone.querySelector(".card-back");
  const cloneIll = clone.querySelector(".card-illustration");
  const cloneFrame = clone.querySelector(".card-frame");
  const cloneCopy = clone.querySelector(".card-copy");

  gsap.set(clone, { transformStyle: "preserve-3d", transformPerspective: 1400 });
  gsap.set(cloneBack, { backfaceVisibility: "hidden" });
  gsap.set(cloneFront, { backfaceVisibility: "hidden", rotateY: 180 });
  gsap.set([cloneIll, cloneFrame, cloneCopy], { opacity: 0 });

  const vh = window.innerHeight;
  const headerH = document.getElementById("app-header")?.getBoundingClientRect().height || 0;
  const formH = document.getElementById("reveal-search-form")?.getBoundingClientRect().height || 0;
  const availableH = Math.max(260, vh - headerH - formH - 40);
  const targetH = Math.min(availableH * 0.82, 460);
  const cardAspect = rect.height / rect.width;
  const targetW = targetH / cardAspect;
  const targetX = window.innerWidth / 2 - targetW / 2;
  const targetY = Math.max(headerH + 8, (vh - targetH) / 2);

  const tl = gsap.timeline({ paused: true });
  tl.to(overlayEl, { opacity: 0.5, duration: 0.08, ease: "power2.out" }, 0)
    .to(clone, { left: targetX, top: targetY, width: targetW, height: targetH, duration: 0.12, ease: "power2.out" }, 0)
    .to(clone, { rotateY: 180, duration: 0.12, ease: "power2.inOut" }, 0.12)
    .to([cloneIll, cloneFrame, cloneCopy], { opacity: 1, duration: 0.08, ease: "power2.out" }, 0.24);

  return { tl, cloneEl: clone };
}

/** @param {any} options @returns {any} */
export function createQuickReveal(/** @type {any} */ { cardEl, cardData, stageEl, overlayEl, isReducedMotion = null }) {
  const rect = captureRect(cardEl);
  const clone = cloneCardForReveal(cardEl, rect, cardData);
  stageEl.appendChild(clone);
  gsap.set(cardEl, { opacity: 0 });

  const cloneFront = clone.querySelector(".card-front");
  const cloneBack = clone.querySelector(".card-back");
  const cloneSpecular = clone.querySelector(".card-specular");
  const cloneGlow = clone.querySelector(".card-glow-behind");

  gsap.set(clone, { transformStyle: "preserve-3d", transformPerspective: 1400 });
  gsap.set(cloneBack, { backfaceVisibility: "hidden" });
  gsap.set(cloneFront, { backfaceVisibility: "hidden", rotateY: 180, opacity: 1 });
  gsap.set(clone, { rotateY: 180 });
  gsap.set(cloneSpecular, { opacity: 0 });
  gsap.set(cloneGlow, { opacity: 0 });

  const vh = window.innerHeight;
  const headerH = document.getElementById("app-header")?.getBoundingClientRect().height || 0;
  const formH = document.getElementById("reveal-search-form")?.getBoundingClientRect().height || 0;
  const availableH = Math.max(260, vh - headerH - formH - 40);
  const targetH = Math.min(availableH * 0.82, 460);
  const cardAspect = rect.height / rect.width;
  const targetW = targetH / cardAspect;
  const targetX = window.innerWidth / 2 - targetW / 2;
  const targetY = Math.max(headerH + 8, (vh - targetH) / 2);
  const reduced = prefersReducedMotion(isReducedMotion);

  const tl = gsap.timeline({ paused: true });
  tl.to(overlayEl, { opacity: 0.5, duration: reduced ? 0.08 : 0.15, ease: "power2.out" }, 0)
    .to(clone, {
      left: targetX,
      top: targetY,
      width: targetW,
      height: targetH,
      duration: reduced ? 0.14 : 0.5,
      ease: "power3.out",
      boxShadow: `0 25px 70px rgba(0,0,0,0.6), 0 0 40px rgba(180,100,20,0.4)`
    }, 0);

  if (!reduced) {
    tl.to(cloneSpecular, { opacity: 0.2, duration: 0.3, ease: "power2.inOut" }, 0.3)
      .to(cloneGlow, { opacity: 0.4, duration: 0.3, ease: "power2.inOut" }, 0.4)
      .to(cloneSpecular, { opacity: 0.05, duration: 0.3, ease: "power2.out" }, 0.65);
  }

  return { tl, cloneEl: clone };
}
