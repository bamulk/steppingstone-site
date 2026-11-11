import "./news.css";
import Image from "next/image";
import Link from "next/link";
import { articles, formatDate } from "@/lib/news";
import { Closing } from "@/app/components/Closing";
import { ArrowIcon } from "@/app/components/Icons";

export const metadata = {
  title: "News",
  description: "News and stories from Stepping Stone Sober Living, sober living homes for women in the Sacramento area.",
};

export default function NewsPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">News</h1>
          <p className="lead">Events, updates and thoughts on recovery from the women of Stepping Stone.</p>
        </div>
      </section>

      <section className="band" aria-label="Articles">
        <div className="wrap">
          <ul className="articles">
            {articles.map((a) => (
              <li key={a.slug} className="article-card">
                {a.image && (
                  <Link href={`/news/${a.slug}`} className="article-card-image" tabIndex={-1} aria-hidden="true">
                    <Image src={a.image.src} alt="" width={a.image.width} height={a.image.height} sizes="(max-width: 760px) 92vw, 360px" />
                  </Link>
                )}
                <div className="article-card-body">
                  <time className="article-date" dateTime={a.date}>{formatDate(a.date)}</time>
                  <h2 className="subtitle">
                    <Link href={`/news/${a.slug}`}>{a.title}</Link>
                  </h2>
                  <p className="article-excerpt">{a.excerpt}</p>
                  <Link className="textlink" href={`/news/${a.slug}`} aria-hidden="true" tabIndex={-1}>
                    Read more <ArrowIcon />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Closing />
    </>
  );
}
