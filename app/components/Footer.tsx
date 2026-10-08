import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-name">{siteConfig.name}</p>
            <p className="footer-tag">Safe. Clean. Sober.</p>
            <p className="footer-about">
              Four furnished sober living homes for women in the Sacramento area, including one for women with children.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2>Explore</h2>
            <ul className="footer-links">
              <li><Link href="/homes">The houses</Link></li>
              <li><Link href="/pricing">Cost &amp; expectations</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/apply">Apply</Link></li>
            </ul>
          </nav>
          <div>
            <h2>Reach us</h2>
            <ul className="footer-links">
              <li><a href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a></li>
              <li><a href={`sms:${siteConfig.smsTel}`}>Text {siteConfig.phoneDisplay}</a></li>
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>We are not a medical or detox facility. In an emergency, call 911.</span>
        </div>
      </div>
    </footer>
  );
}
