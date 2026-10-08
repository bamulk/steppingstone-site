import Image from "next/image";
import Link from "next/link";
import type { Home } from "@/lib/homes";
import { ArrowIcon } from "./Icons";

export function HouseRow({ home }: { home: Home }) {
  return (
    <li id={home.id} className="house">
      <Image
        className="house-photo"
        src={home.photo.src}
        alt={home.photo.alt}
        width={home.photo.width}
        height={home.photo.height}
        sizes="(max-width: 760px) 92vw, 500px"
      />
      <div className="house-body">
        <h3 className="house-name">{home.name}</h3>
        <p className="house-who">{home.forWho}</p>
        <p className="house-summary">{home.summary}</p>
        <ul className="house-details">
          {home.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <Link className="house-link" href={`/apply?home=${home.id}`}>
          Apply for {home.name} <ArrowIcon />
        </Link>
      </div>
    </li>
  );
}
