import Link from "next/link";
import { siteConfig } from "@/site.config";

export function CTA() {
  return (
    <section style={{ padding: "54px 0", background: "linear-gradient(135deg, var(--forest), #1d2a14)" }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <div className="kicker" style={{ color: "rgba(255,255,255,.70)" }}>
              Ready to take the next step?
            </div>
            <h2 className="h2" style={{ color: "white", marginTop: 10 }}>
              Ready for a structured sober environment?
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,.82)", marginTop: 10, maxWidth: 560 }}>
              Call or text for the fastest response. If it’s a fit, we’ll help you find the right home and move-in plan.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a className="btn btn-primary" href={`tel:${siteConfig.phoneTel}`}>Call Now</a>
            <a className="btn btn-ghost" href={`sms:${siteConfig.smsTel}`}>Text</a>
            <Link className="btn btn-ghost" href="/apply">Apply Online</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
