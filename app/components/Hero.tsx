import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Hero() {
  return (
    <section
      style={{
        padding: "64px 0 34px",
        background:
          "radial-gradient(1200px 400px at 10% 0%, rgba(200,164,75,.20), transparent 60%), radial-gradient(1000px 600px at 80% 20%, rgba(38,55,27,.18), transparent 60%), linear-gradient(180deg, rgba(255,255,255,.75), rgba(244,245,247,1))",
      }}
    >
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <div className="kicker">Sacramento sober living</div>
            <h1 className="h1" style={{ marginTop: 10 }}>
              {siteConfig.tagline}
            </h1>
            <p className="lead" style={{ marginTop: 14, maxWidth: 560 }}>
              Safe, accountability-driven homes for men serious about recovery—clear expectations, peer support, and structure that helps you stabilize and move forward.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a className="btn btn-primary" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.ctaPrimary}
              </a>
              <Link
                className="btn"
                href="/apply"
                style={{
                  background: "white",
                  borderColor: "rgba(11,11,11,.12)",
                  boxShadow: "var(--shadow)",
                  color: "var(--black)",
                }}
              >
                {siteConfig.ctaSecondary}
              </Link>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
              <span className="badge">✓ Structured program</span>
              <span className="badge">✓ Weekly house meeting</span>
              <span className="badge">✓ Drug tested homes</span>
              <span className="badge">✓ Sacramento locations</span>
            </div>
          </div>

          <div>
            <div
              className="card"
              style={{
                overflow: "hidden",
                borderRadius: 24,
                background: "linear-gradient(135deg, var(--forest), #1d2a14)",
                color: "white",
              }}
            >
              <div style={{ padding: 22 }}>
                <div className="kicker" style={{ color: "rgba(255,255,255,.72)" }}>
                  What you can expect
                </div>
                <div style={{ marginTop: 10, display: "grid", gap: 12 }}>
                  {[
                    { title: "Accountability", desc: "Clear rules, consistent follow-through, and structure." },
                    { title: "Peer Support", desc: "Live with others doing the work—together." },
                    { title: "Stability", desc: "A clean, safe home that supports recovery routines." },
                  ].map((x) => (
                    <div key={x.title} style={{ display: "grid", gap: 4 }}>
                      <div style={{ fontWeight: 900, fontSize: 16 }}>{x.title}</div>
                      <div style={{ color: "rgba(255,255,255,.80)", fontSize: 14 }}>
                        {x.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 18,
                    padding: 14,
                    borderRadius: 16,
                    background: "rgba(255,255,255,.10)",
                    border: "1px solid rgba(255,255,255,.16)",
                  }}
                >
                  <div style={{ fontWeight: 900 }}>Need a bed soon?</div>
                  <div style={{ color: "rgba(255,255,255,.80)", fontSize: 14, marginTop: 4 }}>
                    Call or text now—we&apos;ll confirm fit, location, and availability.
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                    <a className="btn btn-ghost" href={`tel:${siteConfig.phoneTel}`}>Call</a>
                    <a className="btn btn-ghost" href={`sms:${siteConfig.smsTel}`}>Text</a>
                  </div>
                </div>
              </div>
              <div
                aria-hidden
                style={{
                  height: 14,
                  background: "linear-gradient(90deg, rgba(200,164,75,.90), rgba(184,115,51,.85))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
