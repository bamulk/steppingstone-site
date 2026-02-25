import Link from "next/link";
import type { Home } from "@/lib/homes";

export function HomeCard({ home }: { home: Home }) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div className="kicker">{home.area}</div>
          <div style={{ fontWeight: 950, fontSize: 18, marginTop: 6 }}>{home.name}</div>
        </div>
        <div className="badge">from ${home.startingPrice}/mo</div>
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
        {home.highlights.slice(0, 4).map((h) => (
          <div key={h} className="small">✓ {h}</div>
        ))}
      </div>

      <div className="small" style={{ marginTop: 12, color: "rgba(11,11,11,.70)" }}>
        {home.availabilityNote}
      </div>

      <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link
          className="btn"
          href={`/homes#${home.id}`}
          style={{ background: "white", borderColor: "rgba(11,11,11,.12)", boxShadow: "var(--shadow)" }}
        >
          View details
        </Link>
        <Link
          className="btn"
          href="/apply"
          style={{ background: "var(--forest)", color: "white", borderColor: "transparent", boxShadow: "0 12px 24px rgba(38,55,27,.16)" }}
        >
          Apply
        </Link>
      </div>
    </div>
  );
}
