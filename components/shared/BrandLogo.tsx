import Image from "next/image";

export function BrandLogo({
  className = "h-14 w-28",
  variant = "original",
}: {
  className?: string;
  variant?: "original" | "navbar";
}) {
  const src =
    variant === "navbar" ? "/brand/icono-logo-navbar-dark-on-floral.svg" : "/brand/icono-logo.svg";
  return (
    <Image
      src={src}
      alt="Icono Makeover Studio & Beauty World"
      width={1149}
      height={574}
      priority
      className={`object-contain ${className}`}
    />
  );
}
