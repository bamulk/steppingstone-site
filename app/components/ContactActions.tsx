import Link from "next/link";
import { siteConfig } from "@/site.config";

export function ContactActions({ className = "", applyHref = "/apply" }: { className?: string; applyHref?: string | null }) {
  return (
    <div className={`actions ${className}`}>
      <a className="btn btn--primary" href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a>
      <a className="btn btn--plain" href={`sms:${siteConfig.smsTel}`}>Text us</a>
      {applyHref && <Link className="btn btn--plain" href={applyHref}>Apply online</Link>}
    </div>
  );
}
