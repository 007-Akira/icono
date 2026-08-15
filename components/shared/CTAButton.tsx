import Link from "next/link";

export function CTAButton({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
}) {
  const styles =
    variant === "dark"
      ? "bg-smoke text-floral border-smoke"
      : variant === "light"
        ? "bg-floral text-smoke border-floral"
        : "border-smoke text-smoke hover:bg-smoke hover:text-floral";
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border px-7 py-3 text-xs font-semibold uppercase tracking-[.16em] transition-opacity hover:opacity-75 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
