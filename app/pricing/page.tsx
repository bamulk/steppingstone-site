import Link from "next/link";

export const metadata = {
  title: "Pricing & Requirements",
  description: "Monthly pricing and program requirements for Stepping Stone Sober Living in Sacramento.",
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Pricing & Requirements</div>
        <h1 className="h1" style={{ marginTop: 10 }}>Clear expectations. Simple pricing.</h1>
        <p className="lead" style={{ marginTop: 14, maxWidth: 820 }}>
          We keep it straightforward: structure, accountability, and a supportive environment for men committed to recovery.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18, alignItems: "start" }}>
          <div className="card" style={{ padding: 18 }}>
            <div className="kicker">Monthly Rates</div>
            <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
              <div className="card" style={{ padding: 14, boxShadow: "none" }}>
                <div style={{ fontWeight: 950 }}>Shared Rooms</div>
                <div className="small" style={{ marginTop: 4 }}>Starting at <strong>$750/month</strong></div>
              </div>
              <div className="card" style={{ padding: 14, boxShadow: "none" }}>
                <div style={{ fontWeight: 950 }}>Private Rooms</div>
                <div className="small" style={{ marginTop: 4 }}>Starting at <strong>$950/month</strong></div>
              </div>
              <div className="small">
                Notes: Rates can vary by location/room. Availability changes weekly—call/text to confirm.
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div className="kicker">Move-in basics</div>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              {[
                "Pay monthly rent on time (ask about exact due date and move-in pro-rate)",
                "Follow house rules and respect staff and house leadership",
                "Maintain cleanliness (chores required)",
                "No drugs/alcohol; drug testing enforced",
              ].map((x) => (
                <div key={x} className="small">✓ {x}</div>
              ))}
            </div>
            <div style={{ marginTop: 14 }}>
              <Link className="btn btn-primary" href="/apply">Apply Online</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-2" style={{ marginTop: 18, alignItems: "start" }}>
          <div className="card" style={{ padding: 18 }}>
            <div className="kicker">Program Requirements</div>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              {[
                "Have a sponsor within 10 days of moving in",
                "Attend 3 meetings per week (your recovery program)",
                "Attend the weekly house meeting",
                "Participate in chores and keep common areas clean",
                "Be willing to live cooperatively and respect the house culture",
              ].map((x) => (
                <div key={x} className="small">✓ {x}</div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div className="kicker">Fit check</div>
            <div style={{ fontWeight: 950, fontSize: 18, marginTop: 8 }}>Who this is for</div>
            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              {[
                "Men who want structure and accountability",
                "Men who will attend meetings and work a program",
                "Men who can respect roommates and house standards",
              ].map((x) => (
                <div key={x} className="small">✓ {x}</div>
              ))}
            </div>

            <div style={{ fontWeight: 950, fontSize: 18, marginTop: 16 }}>Who this is NOT for</div>
            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              {[
                "Anyone unwilling to follow rules",
                "Anyone actively using substances",
                "Anyone unwilling to participate in chores and meetings",
              ].map((x) => (
                <div key={x} className="small">• {x}</div>
              ))}
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/apply">Apply</Link>
              <Link className="btn" href="/homes" style={{ background: "white", borderColor: "rgba(11,11,11,.12)", boxShadow: "var(--shadow)" }}>
                See homes
              </Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 18, marginTop: 18 }}>
          <div className="kicker">FAQ</div>
          <div className="grid" style={{ marginTop: 12 }}>
            <div>
              <div style={{ fontWeight: 900 }}>How fast can I move in?</div>
              <div className="small" style={{ marginTop: 6 }}>
                Openings change weekly. Call or text for the fastest availability check.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 900 }}>Do you drug test?</div>
              <div className="small" style={{ marginTop: 6 }}>
                Yes. We maintain a clean and sober environment.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 900 }}>Do I need a sponsor?</div>
              <div className="small" style={{ marginTop: 6 }}>
                We require a sponsor within 10 days of move-in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
