import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  metadataBase: new URL("https://steppingstonesle.com"),
  title: {
    default: `${siteConfig.name} | Sacramento Sober Living`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Sacramento Sober Living`,
    description: siteConfig.description,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="mobileOnly">
          <StickyMobileBar />
        </div>
        <style>{`
          @media (min-width: 820px){ .mobileOnly{ display:none; } }
        `}</style>
      </body>
    </html>
  );
}
