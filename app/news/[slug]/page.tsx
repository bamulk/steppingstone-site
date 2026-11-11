import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatDate, getArticle } from "@/lib/news";
import { Closing } from "@/app/components/Closing";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: { title: a.title, description: a.excerpt, type: "article", publishedTime: a.date, images: a.image ? [a.image.src] : undefined },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  return (
    <>
      <article className="article">
        <div className="wrap article-wrap">
          <p className="article-back">
            <Link href="/news">All news</Link>
          </p>
          <time className="article-date" dateTime={a.date}>{formatDate(a.date)}</time>
          <h1 className="title article-title">{a.title}</h1>

          {a.image && (
            <figure className="article-figure">
              <Image src={a.image.src} alt={a.image.alt} width={a.image.width} height={a.image.height} sizes="(max-width: 760px) 92vw, 440px" priority />
              {a.image.caption && <figcaption>{a.image.caption}</figcaption>}
            </figure>
          )}

          <div className="article-body">
            {a.body.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i} className="subtitle">{b.text}</h2>
              ) : b.type === "ul" ? (
                <ul key={i}>
                  {b.items.map((item, j) => (
                    <li key={j}>
                      {item.lead && <strong>{item.lead}</strong>}
                      {item.lead && " "}
                      {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.text}</a> : item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{b.text}</p>
              )
            )}
          </div>
        </div>
      </article>

      <Closing />
    </>
  );
}
