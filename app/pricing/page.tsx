import Link from "next/link";
import { Rates } from "@/app/components/Rates";
import { Agreements } from "@/app/components/Agreements";
import { Closing } from "@/app/components/Closing";

export const metadata = {
  title: "Cost & expectations",
  description:
    "What it costs to live at Stepping Stone Sober Living and what we ask of every resident. Shared rooms from $750 a month, private rooms from $950.",
};

const faqs = [
  {
    q: "How soon can I move in?",
    a: "Openings change from week to week. Calling or texting is the quickest way to find out what's available right now.",
  },
  {
    q: "Do you drug test?",
    a: "Yes. Every house is drug tested. It's how we keep the homes clean and sober for everyone living in them.",
  },
  {
    q: "Do I need a sponsor before I move in?",
    a: "No. We ask that you have one within your first 10 days in the house.",
  },
  {
    q: "Can my children live with me?",
    a: "Yes, at our Rio Linda house, which is set aside for women and their children.",
  },
  {
    q: "Is this a treatment program?",
    a: "No. We aren't a medical or detox facility. Stepping Stone is a place to live, with structure and with other women in recovery, while you work your own program.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">Cost and expectations</h1>
          <p className="lead">
            Here is what it costs to live at Stepping Stone and what we ask of each other. If anything is unclear, ask us. We would rather you know everything before you decide.
          </p>
        </div>
      </section>

      <section className="band" aria-labelledby="cost-title">
        <div className="wrap split">
          <div>
            <h2 id="cost-title" className="title">What it costs.</h2>
            <Rates />
          </div>
          <div>
            <h2 className="title">Moving in.</h2>
            <ul className="ticks" style={{ marginTop: 22 }}>
              <li>Rent is paid monthly. Ask us about the due date and your first month.</li>
              <li>The houses are furnished, so you only need your own things.</li>
              <li>You&apos;ll share chores and common rooms with the other women in the house.</li>
              <li>No drugs or alcohol, and every house is drug tested.</li>
            </ul>
            <p style={{ marginTop: 26 }}>
              <Link className="btn btn--primary" href="/apply">Apply online</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="ask-title">
        <div className="wrap split">
          <div>
            <h2 id="ask-title" className="title">What we ask of everyone.</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              These are the same for every woman in every house. They aren&apos;t there to police anyone. They&apos;re what keep the homes safe and steady for all of us.
            </p>
          </div>
          <Agreements />
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="fit-title">
        <div className="wrap split">
          <div>
            <h2 id="fit-title" className="title">Stepping Stone is a good fit if you…</h2>
            <ul className="ticks" style={{ marginTop: 22 }}>
              <li>want some structure and people around you while you rebuild</li>
              <li>are ready to go to meetings and work a program</li>
              <li>can live respectfully with housemates and share the work of a home</li>
            </ul>
          </div>
          <div>
            <h2 className="subtitle">It may not be the right time if…</h2>
            <p style={{ marginTop: 14, maxWidth: "52ch" }}>
              you are still using, or you aren&apos;t ready yet for meetings, chores, and house agreements. If that&apos;s where you are today, call us anyway. We can talk about what would need to come first.
            </p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="field-head">
            <h2 id="faq-title" className="title">Common questions.</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}
