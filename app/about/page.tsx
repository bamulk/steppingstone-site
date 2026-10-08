import { mission, vision } from "@/lib/content";
import { Letters } from "@/app/components/Letters";
import { Closing } from "@/app/components/Closing";

export const metadata = {
  title: "About us",
  description:
    "Stepping Stone Sober Living provides safe, supportive, structured sober living homes for women and women with children in the Sacramento area.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">About Stepping Stone</h1>
          <p className="lead">
            Stepping Stone is transitional housing for women in Sacramento who are coming out of treatment or already in recovery, and who want a supportive, clean and sober place to get back on their feet. It&apos;s a home where women come together to support one another and help each other stay sober.
          </p>
        </div>
      </section>

      <section className="band" aria-labelledby="mission-title">
        <div className="wrap split">
          <div>
            <h2 id="mission-title" className="title">Our mission.</h2>
            <p style={{ marginTop: 16, maxWidth: "58ch" }}>{mission}</p>
          </div>
          <div>
            <h2 className="title">Our vision.</h2>
            <p style={{ marginTop: 16, maxWidth: "58ch" }}>{vision}</p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="what-title">
        <div className="wrap split">
          <div>
            <h2 id="what-title" className="title">What Stepping Stone is.</h2>
            <ul className="ticks" style={{ marginTop: 22 }}>
              <li>A furnished home shared with other women in recovery</li>
              <li>A program-based house: meetings and a sponsor are part of living here</li>
              <li>A weekly house meeting and a shared routine</li>
              <li>A clean, safe, drug and alcohol free place to live</li>
            </ul>
          </div>
          <div>
            <h2 className="subtitle">And what it isn&apos;t.</h2>
            <p style={{ marginTop: 14, maxWidth: "52ch" }}>
              We aren&apos;t a medical facility, a detox, or a treatment program. Stepping Stone is where you live while you do that work, alongside women who understand it.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="letters-title">
        <div className="wrap">
          <div className="field-head">
            <h2 id="letters-title" className="title">From women who have lived here.</h2>
          </div>
          <Letters />
        </div>
      </section>

      <Closing />
    </>
  );
}
