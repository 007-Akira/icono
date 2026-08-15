import Image from "next/image";

export function BrandLogo({ className = "h-14 w-28" }: { className?: string }) {
  return <Image src="/brand/icono-logo.svg" alt="Icono Makeover Studio & Beauty World" width={1149} height={574} priority className={`object-contain ${className}`} />;
}
