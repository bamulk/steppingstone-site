"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

export function StickyMobileBar() {
  const pathname = usePathname();
  return (
    <nav className="mobilebar" aria-label="Quick contact">
      <a className="btn btn--accent" href={`tel:${siteConfig.phoneTel}`}>Call</a>
      <a className="btn btn--plain" href={`sms:${siteConfig.smsTel}`}>Text</a>
      {pathname !== "/apply" && <Link className="btn btn--plain" href="/apply">Apply</Link>}
    </nav>
  );
}
