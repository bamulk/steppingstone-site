import { homes } from "@/lib/homes";
import { HomeCard } from "@/app/components/HomeCard";
import Link from "next/link";

export const metadata = {
  title: "Homes & Locations",
  description: "Sacramento-area sober living homes for men—structured, supportive housing and accountability.",
};

export default function HomesPage() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <div className="kicker">Homes / Locations</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Sacramento-area homes.</h1>
          <p className="lead" style={{ marginTop: 14, maxWidth: 760 }}>
            Each home is designed around a recovery-focused culture: accountability, respect, chores, and weekly house meetings.
          </p>
          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/apply">Apply for a Bed</Link>
            <Link className="btn" href="/pricing" style={{ background: "white", borderColor: "rgba(11,11,11,.12)", boxShadow: "var(--shadow)" }}>
              Pricing & Requirements
            </Link>
          </div>
        </div>

        <div className="grid grid-3" style={{ marginTop: 18 }}>
          {homes.map((h) => (
            <div key={h.id} id={h.id}>
              <HomeCard home={h} />
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 18, marginTop: 18 }}>
          <div className="kicker">Availability</div>
          <div style={{ fontWeight: 950, fontSize: 18, marginTop: 8 }}>Openings move fast.</div>
          <p className="small" style={{ marginTop: 8 }}>
            Call/text for current availability, move-in requirements, and to confirm fit. We prioritize applicants who are ready to follow the program expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
