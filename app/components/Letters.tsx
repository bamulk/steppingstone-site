import { letters } from "@/lib/content";

export function Letters() {
  return (
    <div className="letters">
      {letters.map((l) => (
        <figure key={l.id} className="letter">
          <blockquote>
            {l.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </blockquote>
          <figcaption className="letter-from">{l.from}</figcaption>
        </figure>
      ))}
    </div>
  );
}
