"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function BrandIntro() {
  const section = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = section.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} className="relative overflow-hidden bg-bone/55 py-16 sm:py-20 lg:py-24">
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -left-3 top-2 select-none font-sans text-[clamp(8rem,20vw,16rem)] font-semibold uppercase leading-none tracking-[-0.09em] text-smoke transition-all duration-1000 ease-out lg:left-[1vw] lg:top-5 ${revealed ? "translate-y-0 opacity-[0.07]" : "translate-y-5 opacity-0"}`}
      >
        Icono
      </span>

      <div className="page-shell relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="hidden pt-4 lg:col-span-5 lg:block">
          <p className="eyebrow text-olive">01 — Icono</p>
          <div
            className={`mt-8 h-px origin-left bg-olive/55 transition-transform duration-700 ease-out ${revealed ? "scale-x-100" : "scale-x-0"}`}
          />
        </div>

        <div className="lg:col-span-7">
          <div
            className={`transition-all duration-700 ease-out ${revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <p className="eyebrow text-olive lg:hidden">01 — Icono</p>
            <p className="eyebrow mt-5 max-w-xl text-olive lg:mt-0">
              Beauty World &amp; Makeover Studio · Karicode, Kollam
            </p>
            <div
              className={`mt-6 h-px origin-left bg-olive/55 transition-transform duration-700 ease-out lg:hidden ${revealed ? "scale-x-100" : "scale-x-0"}`}
            />
            <h2 className="display mt-8 max-w-3xl text-[clamp(3.2rem,6vw,4.6rem)] leading-[1.02]">
              Beauty, shaped with intention.
            </h2>
          </div>

          <div
            className={`transition-all delay-100 duration-700 ease-out ${revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <p className="eyebrow mt-8 text-olive">Hair · Skin · Bridal · Beauty</p>
            <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-8 text-olive sm:text-lg">
              Icono brings hair, facial, bridal, makeup and grooming services together in one
              refined beauty destination near TKM&nbsp;Arts College, Karicode.
            </p>
            <Link
              href="/about"
              className="eyebrow mt-8 inline-flex items-center gap-2 border-b border-smoke pb-1 transition-all hover:gap-3"
            >
              Discover Icono <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
