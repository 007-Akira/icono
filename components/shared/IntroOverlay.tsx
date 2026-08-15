"use client";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function IntroOverlay() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("icono-intro-seen")) {
      sessionStorage.setItem("icono-intro-seen", "true");
      const showTimer = window.setTimeout(() => setShow(true), 0);
      const hideTimer = window.setTimeout(() => setShow(false), 1450);
      return () => {
        window.clearTimeout(showTimer);
        window.clearTimeout(hideTimer);
      };
    }
  }, []);
  if (!show) return null;
  return (
    <div
      className="intro-overlay fixed inset-0 z-[100] grid place-items-center bg-smoke"
      aria-hidden="true"
    >
      <div className="intro-mark">
        <BrandLogo className="h-auto w-64 sm:w-80" />
      </div>
    </div>
  );
}
