"use client";
import { useState } from "react";
import { reviews } from "@/data/reviews";

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  return (
    <section className="bg-bone/45 py-section">
      <div className="page-shell mx-auto max-w-5xl text-center">
        <p className="eyebrow text-olive">Client Reviews</p>
        <div aria-live="polite">
          <p className="display mt-9 text-4xl leading-tight sm:text-6xl">“{review.quote}”</p>
          <p className="eyebrow mt-8 text-olive">{review.author}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}
            aria-label="Previous review"
            className="grid size-11 place-items-center border border-smoke"
          >
            ←
          </button>
          <span className="text-sm text-olive">
            {index + 1} / {reviews.length}
          </span>
          <button
            onClick={() => setIndex((index + 1) % reviews.length)}
            aria-label="Next review"
            className="grid size-11 place-items-center border border-smoke"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
