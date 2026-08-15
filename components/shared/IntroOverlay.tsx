"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const SESSION_KEY = "icono-desktop-intro-played-v2";
const STANDARD_DURATION_MS = 2400;
const REDUCED_MOTION_DURATION_MS = 320;

type IntroPhase = "checking" | "playing" | "hidden";

export function IntroOverlay() {
  const [phase, setPhase] = useState<IntroPhase>("checking");

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    let hideTimer: number | undefined;

    const animationFrame = window.requestAnimationFrame(() => {
      if (!isDesktop) {
        setPhase("hidden");
        return;
      }

      const hasPlayed = sessionStorage.getItem(SESSION_KEY) === "true";
      if (hasPlayed) {
        setPhase("hidden");
        return;
      }

      // Write only when playback actually begins. This avoids React Strict Mode's
      // development-only effect cleanup marking a cancelled animation as played.
      sessionStorage.setItem(SESSION_KEY, "true");
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
      className={`fixed inset-0 z-[100] hidden place-items-center overflow-hidden bg-smoke lg:grid ${phase === "playing" ? "intro-overlay" : ""}`}
      aria-hidden="true"
    >
      <div
        className={`intro-content flex w-full max-w-xl flex-col items-center px-10 ${phase === "playing" ? "" : "opacity-0"}`}
      >
        <div className="intro-wordmark-crop w-full overflow-hidden">
          <Image
            src="/brand/icono-logo.svg"
            alt=""
            width={1149}
            height={574}
            priority
            className="intro-wordmark-image h-auto w-full"
          />
        </div>
        <p className="display mt-8 text-xl tracking-wide text-floral">Beauty, considered.</p>
      </div>
    </div>
  );
}
