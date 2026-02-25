"use client";

import { siteConfig } from "@/site.config";

export function StickyMobileBar() {
  return (
    <div
      aria-label="Quick actions"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        padding: "12px 14px",
        background: "rgba(255,255,255,.92)",
        borderTop: "1px solid rgba(11,11,11,.10)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container" style={{ display: "flex", gap: 12 }}>
        <a className="btn btn-primary" style={{ flex: 1 }} href={`tel:${siteConfig.phoneTel}`}>
          Call
        </a>
        <a
          className="btn"
          style={{
            flex: 1,
            background: "var(--forest)",
            color: "white",
            borderColor: "transparent",
            boxShadow: "0 12px 24px rgba(38,55,27,.18)",
          }}
          href={`sms:${siteConfig.smsTel}`}
        >
          Text
        </a>
      </div>
    </div>
  );
}
