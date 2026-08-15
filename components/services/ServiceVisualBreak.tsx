import Image from "next/image";

export function ServiceVisualBreak({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-48 overflow-hidden md:h-64">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover opacity-90"
      />
    </div>
  );
}
