import { siteConfig } from "@/site.config";

export function Rates() {
  return (
    <>
      <dl className="rates">
        <div>
          <dt className="rate-label">Shared room</dt>
          <dd className="rate-amount">${siteConfig.rates.shared}<small>a month and up</small></dd>
        </div>
        <div>
          <dt className="rate-label">Private room</dt>
          <dd className="rate-amount">${siteConfig.rates.private}<small>a month and up</small></dd>
        </div>
      </dl>
      <p className="quiet">
        Rates can vary by house and room, and openings change from week to week. Call or text and we&apos;ll tell you what&apos;s available.
      </p>
    </>
  );
}
