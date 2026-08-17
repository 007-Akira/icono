import Image from "next/image";

const brands = [
  {
    name: "L’Oréal Professionnel Paris",
    src: "/images/brands/loreal-professionnel.webp",
    width: 289,
    height: 101,
    displayClass: "max-h-16 max-w-40 sm:max-h-20 sm:max-w-48",
  },
  {
    name: "Schwarzkopf Professional",
    src: "/images/brands/schwarzkopf-professional.webp",
    width: 205,
    height: 115,
    displayClass: "max-h-20 max-w-36 sm:max-h-24 sm:max-w-44",
  },
  {
    name: "Wella Professionals",
    src: "/images/brands/wella-professionals.webp",
    width: 720,
    height: 199,
    displayClass: "max-h-16 max-w-44 sm:max-h-20 sm:max-w-52",
  },
  {
    name: "Shahnaz Husain",
    src: "/images/brands/shahnaz-husain.webp",
    width: 225,
    height: 225,
    displayClass: "max-h-20 max-w-20 sm:max-h-24 sm:max-w-24",
  },
  {
    name: "O3+ Professional",
    src: "/images/brands/o3plus.webp",
    width: 457,
    height: 240,
    displayClass: "max-h-20 max-w-36 sm:max-h-24 sm:max-w-44",
  },
] as const;

function BrandSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="brand-marquee-copy flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
      aria-hidden={duplicate || undefined}
    >
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex h-24 w-44 shrink-0 items-center justify-center sm:h-28 sm:w-56 lg:h-32 lg:w-64"
        >
          <Image
            src={brand.src}
            alt={duplicate ? "" : brand.name}
            width={brand.width}
            height={brand.height}
            sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
            className={`h-auto w-auto object-contain ${brand.displayClass}`}
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
