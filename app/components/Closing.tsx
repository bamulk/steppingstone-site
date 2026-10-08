import { siteConfig } from "@/site.config";
import { ContactActions } from "./ContactActions";

export function Closing() {
  return (
    <section className="closing">
      <div className="wrap closing-grid">
        <div>
          <h2 className="display">Ready to take the next step?</h2>
          <p className="lead">
            Calling or texting <a className="phone" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a> is the quickest way to reach us. Ask anything. There&apos;s no pressure and no wrong question.
          </p>
        </div>
        <ContactActions className="actions--onDark" />
      </div>
    </section>
  );
}
