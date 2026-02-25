import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer style={{ padding: "40px 0 80px", background: "white", borderTop: "1px solid rgba(11,11,11,.08)" }}>
      <div className="container">
        <div className="grid grid-3" style={{ gap: 18 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>{siteConfig.name}</div>
            <div className="small" style={{ marginTop: 8, maxWidth: 420 }}>
              Structured, supportive sober living homes for men committed to recovery in the Sacramento area.
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="badge" href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a>
              <a className="badge" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>

          <div>
            <div className="kicker">Quick Links</div>
            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              <Link href="/homes">Homes / Locations</Link>
              <Link href="/pricing">Pricing & Requirements</Link>
              <Link href="/apply">Apply</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div>
            <div className="kicker">Service Area</div>
            <div className="small" style={{ marginTop: 10 }}>
              Sacramento • Carmichael • Citrus Heights • Fair Oaks • Arden-Arcade • Rancho Cordova
            </div>
            <div className="small" style={{ marginTop: 10 }}>
              Keywords: Sacramento sober living, men&apos;s sober living Sacramento, structured sober living Sacramento.
            </div>
          </div>
        </div>

        <hr className="hr" style={{ margin: "26px 0" }} />
        <div className="small" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="muted">Not a medical facility. For emergencies call 911.</span>
        </div>
      </div>
    </footer>
  );
}
