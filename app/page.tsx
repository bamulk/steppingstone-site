import Link from "next/link";
import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";
import { HomeCard } from "./components/HomeCard";
import { homes } from "@/lib/homes";

export default function Page() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <div>
              <div className="kicker">Why Stepping Stone</div>
              <h2 className="h2" style={{ marginTop: 10 }}>
                Recovery requires the right environment.
              </h2>
              <p className="lead" style={{ marginTop: 12 }}>
                Stepping Stone Sober Living provides structured, supportive housing for men serious about recovery.
                Our homes emphasize accountability, peer support, and clear expectations so residents can rebuild stability and independence.
              </p>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div className="kicker">Program Requirements</div>
              <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                {[
                  "Have a sponsor within 10 days of moving in",
                  "Attend 3 meetings per week (your program)",
                  "Attend the weekly house meeting",
                  "Participate in chores and keep common areas clean",
                  "Be willing to live cooperatively and respect the house culture",
                ].map((x) => (
                  <div key={x} className="small">✓ {x}</div>
                ))}
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn btn-primary" href="/pricing">See full pricing & requirements</Link>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 26 }} className="grid grid-3">
            <div className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 950 }}>Accountability</div>
              <div className="small" style={{ marginTop: 8 }}>
                Clear rules and consistent follow-through—built for men doing the work.
              </div>
            </div>
            <div className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 950 }}>Support</div>
              <div className="small" style={{ marginTop: 8 }}>
                Live with others committed to recovery and stability.
              </div>
            </div>
            <div className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 950 }}>Stability</div>
              <div className="small" style={{ marginTop: 8 }}>
                A clean, safe home that supports routines: meetings, work, and life.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div className="kicker">Homes / Locations</div>
              <h2 className="h2" style={{ marginTop: 10 }}>Choose the right fit.</h2>
              <p className="muted" style={{ marginTop: 10, maxWidth: 620 }}>
                Sacramento-area homes with clear expectations, supportive roommates, and stable routines.
              </p>
            </div>
            <Link className="btn" href="/homes" style={{ background: "white", borderColor: "rgba(11,11,11,.12)", boxShadow: "var(--shadow)" }}>
              View all homes
            </Link>
          </div>

          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {homes.slice(0, 3).map((h) => (
              <HomeCard key={h.id} home={h} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ padding: 22 }}>
            <div className="grid grid-2" style={{ alignItems: "center" }}>
              <div>
                <div className="kicker">Pricing Snapshot</div>
                <h2 className="h2" style={{ marginTop: 10 }}>Simple, transparent monthly rates.</h2>
                <p className="lead" style={{ marginTop: 12 }}>
                  Shared rooms starting at <strong>$750</strong>. Private rooms starting at <strong>$950</strong>.
                </p>
                <p className="small" style={{ marginTop: 8 }}>
                  Availability changes weekly—call/text for the fastest answer.
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
                <Link className="btn btn-primary" href="/apply">Check availability</Link>
                <Link className="btn" href="/pricing" style={{ background: "white", borderColor: "rgba(11,11,11,.12)", boxShadow: "var(--shadow)" }}>
                  Full details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
