import { homes } from "@/lib/homes";
import { amenities } from "@/lib/content";
import { HouseRow } from "@/app/components/HouseRow";
import { ContactActions } from "@/app/components/ContactActions";
import { Closing } from "@/app/components/Closing";
import { CheckIcon } from "@/app/components/Icons";

export const metadata = {
  title: "The houses",
  description:
    "Four furnished sober living homes for women in Rio Linda and Rosemont, in the Sacramento area. One home is for women with children.",
};

export default function HomesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">Our four houses</h1>
          <p className="lead">
            Two in Rio Linda and two in Rosemont. All of them are furnished, and all of them have meetings close by. Not sure which one is right? Call or text and we&apos;ll talk it through.
          </p>
          <ContactActions />
        </div>
      </section>

      <section className="band band--white" aria-label="The houses">
        <div className="wrap">
          <ul className="houses">
            {homes.map((h) => (
              <HouseRow key={h.id} home={h} />
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="inhouse-title">
        <div className="wrap">
          <div className="field-head">
            <h2 id="inhouse-title" className="title">In every house.</h2>
            <p className="lead">You don&apos;t need to bring furniture or set anything up. It&apos;s all here.</p>
          </div>
          <ul className="checklist checklist--grid">
            {amenities.map((a) => (
              <li key={a}>
                <CheckIcon /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Closing />
    </>
  );
}
