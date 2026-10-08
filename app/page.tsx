import Image from "next/image";
import Link from "next/link";
import { homes } from "@/lib/homes";
import { amenities } from "@/lib/content";
import { siteConfig } from "@/site.config";
import { Rates } from "./components/Rates";
import { Agreements } from "./components/Agreements";
import { Letters } from "./components/Letters";
import { Closing } from "./components/Closing";
import { ArrowIcon, CheckIcon } from "./components/Icons";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1 className="display hero-title">Sober living homes for women in the Sacramento area.</h1>
            <p className="lead">
              Stepping Stone Sober Living is four furnished houses where women in recovery live together, look out for each other, and get back on their feet. We can accommodate children too.
            </p>
            <div className="actions hero-actions">
              <Link className="btn btn--accent" href="/apply">
                Apply for a bed <ArrowIcon />
              </Link>
              <Link className="btn btn--plain" href="/homes">
                See the houses
              </Link>
            </div>
            <p className="hero-note">
              Or call or text <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>.
            </p>
          </div>

          <div className="hero-art">
            <Image
              src="/images/hero-women-white.png"
              alt="Watercolour painting of five women in everyday clothes walking side by side holding hands, seen from behind. One carries a toddler on her hip."
              width={1536}
              height={1024}
              sizes="(max-width: 860px) 92vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="facts" aria-label="At a glance">
        <ul className="wrap facts-row">
          <li>
            <strong>Sacramento area</strong>
            <span>Rio Linda and Rosemont</span>
          </li>
          <li>
            <strong>Four houses</strong>
            <span>One for women with children</span>
          </li>
          <li>
            <strong>Fully furnished</strong>
            <span>Bring only your own things</span>
          </li>
          <li>
            <strong>From ${siteConfig.rates.shared} a month</strong>
            <span>Shared and private rooms</span>
          </li>
        </ul>
      </section>

      <section className="band band--white" aria-labelledby="steps-title">
        <div className="wrap">
          <div className="field-head">
            <h2 id="steps-title" className="title">How moving in works.</h2>
          </div>
          <ol className="steps">
            <li>
              <h3 className="subtitle">Reach out</h3>
              <p>Call, text, or send the online application. Only your name and phone number are required.</p>
            </li>
            <li>
              <h3 className="subtitle">We talk it through</h3>
              <p>We call or text you back to go over what&apos;s open, the cost, and what we ask of everyone in the house.</p>
            </li>
            <li>
              <h3 className="subtitle">Pick a house and move in</h3>
              <p>We help you choose the house that fits. They&apos;re furnished, so you only bring your own things.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="band band--dark" aria-labelledby="inhouse-title">
        <div className="wrap split split--center">
          <div>
            <h2 id="inhouse-title" className="title">
              Everything you need, when you arrive.
            </h2>
            <p className="lead">
              You don&apos;t need to bring furniture or set anything up. The houses are ready, so you can focus on you.
            </p>
            <p className="split-link">
              <Link className="textlink" href="/homes">
                See all four houses <ArrowIcon />
              </Link>
            </p>
          </div>
          <ul className="checklist">
            {amenities.map((a) => (
              <li key={a}>
                <CheckIcon /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="cost-title">
        <div className="wrap split">
          <div>
            <h2 id="cost-title" className="title">What it costs.</h2>
            <Rates />
          </div>
          <div>
            <h2 className="title">What we ask of everyone.</h2>
            <p className="lead">
              These are the same for every woman in every house. They&apos;re what keep the homes safe and steady.
            </p>
            <Agreements />
            <p className="split-link">
              <Link className="textlink" href="/pricing">
                More on cost, move-in, and common questions <ArrowIcon />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band band--white" aria-labelledby="letters-title">
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
