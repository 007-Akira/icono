import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroOverlay } from "@/components/shared/IntroOverlay";

export const metadata: Metadata = {
  metadataBase: new URL("https://iconobeauty.example"),
  title: { default: "ICONO Beauty World & Makeover Studio", template: "%s | ICONO" },
  description: "Discover ICONO Beauty World & Makeover Studio, a founder-led beauty and makeover studio in Kollam.",
  openGraph: { title: "ICONO Beauty World & Makeover Studio", description: "A considered beauty and makeover experience in Kollam.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en"><body><IntroOverlay /><Navbar /><main>{children}</main><Footer /></body></html>
  );
}
