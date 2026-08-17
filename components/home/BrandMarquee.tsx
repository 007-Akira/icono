import Image from "next/image";

const brands = [
  {
    name: "L’Oréal Professionnel Paris",
    src: "/images/brands/loreal-professionnel.webp",
    width: 289,
    height: 101,
  },
  {
    name: "Schwarzkopf Professional",
    src: "/images/brands/schwarzkopf-professional.webp",
    width: 205,
    height: 115,
  },
  {
    name: "Wella Professionals",
    src: "/images/brands/wella-professionals.webp",
    width: 720,
    height: 199,
  },
  {
    name: "Shahnaz Husain",
    src: "/images/brands/shahnaz-husain.webp",
    width: 167,
    height: 42,
  },
  {
    name: "O3+ Professional",
    src: "/images/brands/o3plus.webp",
    width: 457,
    height: 240,
  },
] as const;

function BrandSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="brand-marquee-copy flex shrink-0 items-center gap-12 pr-12 sm:gap-20 sm:pr-20 lg:gap-24 lg:pr-24"
      aria-hidden={duplicate || undefined}
    >
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex h-24 w-48 shrink-0 items-center justify-center sm:h-28 sm:w-60 lg:h-32 lg:w-72"
        >
          <Image
            src={brand.src}
            alt={duplicate ? "" : brand.name}
            width={brand.width}
            height={brand.height}
            sizes="(min-width: 1024px) 288px, (min-width: 640px) 240px, 192px"
            className="max-h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section
      className="brand-marquee-viewport overflow-hidden border-y border-smoke/10 bg-white py-10 sm:py-12 lg:py-14"
      aria-label="Professional brands used at Icono"
    >
      <div className="brand-marquee-track flex w-max items-center">
        <BrandSet />
        <BrandSet duplicate />
      </div>
    </section>
  );
}
