"use client";
import { useEffect, useState } from "react";

const SESSION_KEY = "icono-intro-played";
const STANDARD_DURATION_MS = 1450;
const REDUCED_MOTION_DURATION_MS = 320;

type IntroPhase = "checking" | "playing" | "hidden";

export function IntroOverlay() {
  const [phase, setPhase] = useState<IntroPhase>("checking");

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem(SESSION_KEY) === "true";
    let hideTimer: number | undefined;

    if (!hasPlayed) {
      sessionStorage.setItem(SESSION_KEY, "true");
    }

    const animationFrame = window.requestAnimationFrame(() => {
      if (hasPlayed) {
        setPhase("hidden");
        return;
      }

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPhase("playing");
      hideTimer = window.setTimeout(
        () => setPhase("hidden"),
        prefersReducedMotion ? REDUCED_MOTION_DURATION_MS : STANDARD_DURATION_MS,
      );
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-smoke ${phase === "playing" ? "intro-overlay" : ""}`}
      aria-hidden="true"
    >
      <span
        className={`display text-6xl lowercase text-floral sm:text-8xl ${phase === "playing" ? "intro-mark" : "opacity-0"}`}
      >
        icono
      </span>
    </div>
  );
}
