import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { siteConfig } from "@/site.config";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://steppingstonesle.com"),
  title: {
    default: `${siteConfig.name} | Sober living homes for women in Sacramento`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Sober living homes for women in Sacramento`,
    description: siteConfig.description,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
