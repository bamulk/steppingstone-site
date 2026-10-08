"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

const links = [
  { href: "/homes", label: "The houses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Cost & expectations" },
  { href: "/about", label: "About us" },
  { href: "/resources", label: "Resources" },
  { href: "/apply", label: "Apply" },
];

export function Nav({ showGallery = false }: { showGallery?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="nav" aria-label="Primary">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-list"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <ul id="nav-list" className="nav-list" data-open={open}>
        {links
          .filter((l) => l.href !== "/gallery" || showGallery)
          .map((l) => (
          <li key={l.href}>
            <Link className="nav-link" href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <a className="btn btn--primary btn--small nav-call" href={`tel:${siteConfig.phoneTel}`}>
        Call {siteConfig.phoneDisplay}
      </a>
    </nav>
  );
}
