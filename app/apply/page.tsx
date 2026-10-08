import { homes } from "@/lib/homes";
import { agreements } from "@/lib/content";
import { siteConfig } from "@/site.config";
import { ApplyForm } from "./ApplyForm";

export const metadata = {
  title: "Apply",
  description: "Apply for a bed at Stepping Stone Sober Living. It takes a few minutes, and we'll call or text you back.",
};

export default function ApplyPage({ searchParams }: { searchParams: { home?: string } }) {
  const chosen = homes.find((h) => h.id === searchParams.home);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">Apply for a bed</h1>
          <p className="lead">
            This takes a few minutes. Only your name and phone number are required, and we&apos;ll call or text you back. If you&apos;d rather just talk, call or text <a className="phone" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>.
          </p>
        </div>
      </section>

      <section className="band band--stone" aria-label="Application">
        <div className="wrap apply-grid">
          <div className="panel">
            <ApplyForm defaultHome={chosen?.name ?? ""} homeNames={homes.map((h) => ({ name: h.name, forWho: h.forWho }))} />
          </div>

          <aside className="aside-stack">
            <div className="panel aside-panel">
              <h2 className="subtitle">Good to know before you apply</h2>
              <ul className="ticks">
                {agreements.map((a) => (
                  <li key={a.title}>{a.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="subtitle">Need a bed soon?</h2>
              <p style={{ marginTop: 8 }}>Calling or texting is faster than the form.</p>
              <div className="actions" style={{ marginTop: 16 }}>
                <a className="btn btn--primary" href={`tel:${siteConfig.phoneTel}`}>Call us</a>
                <a className="btn btn--plain" href={`sms:${siteConfig.smsTel}`}>Text us</a>
              </div>
              <p className="quiet" style={{ marginTop: 20 }}>
                We aren&apos;t a medical facility. If you are in crisis or need medical help right now, call 911.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
