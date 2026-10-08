import { resourceGroups, resourcesChecked, telHref } from "@/lib/resources";
import { Closing } from "@/app/components/Closing";

export const metadata = {
  title: "Resources",
  description:
    "Sacramento-area detox, treatment, financial help and meeting resources for women in recovery and their families, gathered by Stepping Stone Sober Living.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">
            Sacramento-area resources
          </h1>
          <p className="lead">
            Sober living is one step among several. If you or someone you love needs detox, treatment, or help with money and food first, these are places to call. We aren&apos;t affiliated with them and can&apos;t promise openings, but they are where we would start.
          </p>
          <ul className="jump" aria-label="On this page">
            {resourceGroups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`}>{g.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="urgent" aria-label="In an emergency">
        <div className="wrap urgent-row">
          <p>
            <strong>In an emergency, call <a href="tel:911">911</a>.</strong> If you are thinking about suicide or are in emotional crisis, call or text <a href="tel:988">988</a>, any time.
          </p>
        </div>
      </section>

      {resourceGroups.map((g, i) => (
        <section key={g.id} id={g.id} className={`band ${i % 2 === 0 ? "band--white" : ""}`} aria-labelledby={`${g.id}-title`}>
          <div className="wrap resource-group">
            <div>
              <h2 id={`${g.id}-title`} className="title">{g.title}</h2>
              <p className="lead">{g.intro}</p>
            </div>
            <ul className="resources">
              {g.items.map((r) => (
                <li key={r.name} className="resource">
                  <h3 className="resource-name">{r.name}</h3>
                  <p className="resource-what">{r.what}</p>
                  <dl className="resource-contact">
                    {r.phone && (
                      <div>
                        <dt>Phone</dt>
                        <dd>
                          <a className="phone" href={telHref(r.phone)}>{r.phone}</a>
                          {r.phoneNote && <span className="quiet"> · {r.phoneNote}</span>}
                        </dd>
                      </div>
                    )}
                    {r.url && (
                      <div>
                        <dt>Website</dt>
                        <dd>
                          <a href={r.url} target="_blank" rel="noopener noreferrer">
                            {r.urlLabel}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </dd>
                      </div>
                    )}
                    {r.address && (
                      <div>
                        <dt>Address</dt>
                        <dd>{r.address}</dd>
                      </div>
                    )}
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="band" aria-label="About this list">
        <div className="wrap">
          <p className="quiet resource-note">
            Last checked {resourcesChecked}. Phone numbers, programs and openings change, so please call to confirm before you go. Being listed here is not an endorsement, and Stepping Stone Sober Living is not a medical or treatment provider. If something on this page is out of date, tell us and we&apos;ll fix it.
          </p>
        </div>
      </section>

      <Closing />
    </>
  );
}
