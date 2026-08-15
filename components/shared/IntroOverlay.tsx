"use client";
import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("icono-intro-seen")) {
      sessionStorage.setItem("icono-intro-seen", "true");
      const showTimer = window.setTimeout(() => setShow(true), 0);
      const hideTimer = window.setTimeout(() => setShow(false), 1450);
      return () => { window.clearTimeout(showTimer); window.clearTimeout(hideTimer); };
    }
  }, []);
  if (!show) return null;
  return <div className="intro-overlay fixed inset-0 z-[100] grid place-items-center bg-smoke text-floral" aria-hidden="true"><div className="text-center"><p className="intro-mark display text-5xl sm:text-7xl">ICONO</p><p className="eyebrow mt-4 text-bone">Beauty World & Makeover Studio</p></div></div>;
}
