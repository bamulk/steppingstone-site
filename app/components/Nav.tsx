"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

const links = [
  { href: "/homes", label: "Homes" },
  { href: "/pricing", label: "Pricing & Requirements" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "flex-end",
      }}
    >
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontWeight: 800,
              fontSize: 14,
              padding: "10px 10px",
              borderRadius: 12,
              color: active ? "var(--forest)" : "rgba(11,11,11,.74)",
              background: active ? "rgba(200,164,75,.22)" : "transparent",
            }}
          >
            {l.label}
          </Link>
        );
      })}
      <a
        className="btn btn-primary"
        href={`tel:${siteConfig.phoneTel}`}
        style={{ padding: "10px 14px", borderRadius: 14 }}
      >
        {siteConfig.ctaPrimary}
      </a>
    </nav>
  );
}
