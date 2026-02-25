import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Stepping Stone Sober Living—structured, supportive sober living for men in Sacramento.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">About</div>
        <h1 className="h1" style={{ marginTop: 10 }}>A stable home for a stable life.</h1>
        <p className="lead" style={{ marginTop: 14, maxWidth: 860 }}>
          We provide structured sober living homes for men who are serious about recovery. Our focus is on a safe environment,
          clear expectations, and a culture where residents support each other through accountability and consistency.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18, alignItems: "start" }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18 }}>Our approach</div>
            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              {[
                "Structure: predictable routines and clear rules",
                "Accountability: follow-through and responsibility",
                "Community: supportive roommates doing the work",
                "Respect: clean living, chores, and cooperation",
              ].map((x) => (
                <div key={x} className="small">✓ {x}</div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18 }}>What we are (and aren&apos;t)</div>
            <div className="small" style={{ marginTop: 10 }}>
              We are not a medical facility or detox. We are a peer-supported, structured living environment designed to help residents
              practice recovery routines while building stability.
            </div>
            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/apply">Apply</Link>
              <Link className="btn" href="/pricing" style={{ background: "white", borderColor: "rgba(11,11,11,.12)", boxShadow: "var(--shadow)" }}>
                Pricing & Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
