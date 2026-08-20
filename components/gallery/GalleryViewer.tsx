"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem, StudioItem } from "@/data/gallery";

type ViewerItem = Pick<GalleryItem, "src" | "alt" | "ratio"> | StudioItem;

function imageRatio(ratio: ViewerItem["ratio"]) {
  if (ratio === "tall") return "aspect-[3/5]";
  if (ratio === "portrait") return "aspect-[3/4]";
  if (ratio === "square") return "aspect-square";
  if (ratio === "panorama") return "aspect-[16/9]";
  return "aspect-[4/3]";
}

function Lightbox({
  items,
  activeIndex,
  onChange,
  onClose,
}: {
  items: ViewerItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const previous = () => onChange((activeIndex - 1 + items.length) % items.length);
  const next = () => onChange((activeIndex + 1) % items.length);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
  touchStartX.current = event.touches[0].clientX;
  touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
  if (touchStartX.current === null || touchStartY.current === null) return;

  const deltaX = event.changedTouches[0].clientX - touchStartX.current;
  const deltaY = event.changedTouches[0].clientY - touchStartY.current;

  touchStartX.current = null;
  touchStartY.current = null;

  // Ignore mostly-vertical swipes
  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;

  if (deltaX < 0) {
    next();
  } else {
    previous();
  }
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div
      className="fixed inset-0 z-[100] bg-smoke/95"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-20 grid size-12 place-items-center text-3xl font-light text-floral transition-opacity hover:opacity-60 sm:right-8 sm:top-8"
        aria-label="Close image viewer"
      >
        ×
      </button>

      <div
        className="absolute inset-0 touch-pan-y px-5 py-20 sm:px-20 sm:py-12"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={items[activeIndex].src}
          alt={items[activeIndex].alt}
          fill
          sizes="100vw"
          className="object-contain px-5 py-20 sm:px-20 sm:py-12"
          priority
        />
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previous();
        }}
        className="absolute left-3 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-floral/20 bg-smoke/30 text-floral backdrop-blur-sm transition-all hover:scale-105 hover:bg-smoke/60 sm:left-6"
        aria-label="Previous image"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-6"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          next();
        }}
        className="absolute right-3 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-floral/20 bg-smoke/30 text-floral backdrop-blur-sm transition-all hover:scale-105 hover:bg-smoke/60 sm:right-6"
        aria-label="Next image"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-6"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export function GalleryViewer({
  workItems,
  studioItems,
}: {
  workItems: GalleryItem[];
  studioItems: StudioItem[];
}) {
  const allItems = useMemo(() => [...workItems, ...studioItems], [workItems, studioItems]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openWorkImage = (index: number) => setActiveIndex(index);
  const openStudioImage = (index: number) => setActiveIndex(workItems.length + index);

  return (
    <>
      <section className="pb-section">
        <div className="page-shell columns-1 gap-5 sm:columns-2 lg:columns-3">
          {workItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openWorkImage(index)}
              className="relative mb-5 block w-full break-inside-avoid cursor-zoom-in overflow-hidden bg-bone text-left"
              aria-label={`View ${item.alt}`}
            >
              <span className={`relative block ${imageRatio(item.ratio)}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="editorial-image object-cover"
                  style={{ objectPosition: item.focalPoint }}
                />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="border-y border-olive/15 bg-bone/35 py-section">
        <div className="page-shell mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-olive">Inside Icono</p>
            <h2 className="display mt-4 text-5xl sm:text-7xl">The Studio</h2>
          </div>
          <p className="max-w-lg leading-7 text-olive md:col-span-4 md:col-start-9">
            A look inside our thoughtfully arranged beauty, hair and treatment spaces in Karicode,
            Kollam.
          </p>
        </div>

        <div className="page-shell columns-1 gap-5 sm:columns-2 lg:columns-3">
          {studioItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openStudioImage(index)}
              className="relative mb-5 block w-full break-inside-avoid cursor-zoom-in overflow-hidden bg-floral text-left"
              aria-label={`View ${item.alt}`}
            >
              <span className={`relative block ${imageRatio(item.ratio)}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="editorial-image object-cover"
                />
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={allItems}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
