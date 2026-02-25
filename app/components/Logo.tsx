import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Stepping Stone Sober Living home">
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <span
          aria-hidden
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "var(--forest)",
            boxShadow: "0 10px 20px rgba(38,55,27,.22)",
            position: "relative",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: 8,
              borderRadius: 8,
              border: "2px solid var(--gold)",
              opacity: 0.9,
            }}
          />
        </span>
        <span style={{ lineHeight: 1.1 }}>
          <span style={{ fontWeight: 900, letterSpacing: ".02em" }}>
            Stepping Stone
          </span>
          <br />
          <span style={{ fontSize: 13, color: "rgba(11,11,11,.64)", fontWeight: 700 }}>
            Sober Living
          </span>
        </span>
      </span>
    </Link>
  );
}
