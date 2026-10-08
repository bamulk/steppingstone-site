import Image from "next/image";
import Link from "next/link";
import { getGalleryPhotos } from "@/lib/gallery";
import { Closing } from "@/app/components/Closing";

export const metadata = {
  title: "Gallery",
  description: "Photos of the Stepping Stone Sober Living houses in Rio Linda and Rosemont.",
};

export default function GalleryPage() {
  const photos = getGalleryPhotos();

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1 className="display">Gallery</h1>
          <p className="lead">A look inside and around our houses.</p>
        </div>
      </section>

      <section className="band" aria-label="Photos">
        <div className="wrap">
          {photos.length === 0 ? (
            <div className="gallery-empty">
              <h2 className="subtitle">Photos are on the way.</h2>
              <p>
                We&apos;re putting together photos of each house. In the meantime, you can read about them on the{" "}
                <Link href="/homes">houses page</Link>, or call or text and we&apos;ll tell you more.
              </p>
            </div>
          ) : (
            <ul className="gallery">
              {photos.map((p, i) => (
                <li key={p.src}>
                  <a href={p.src} target="_blank" rel="noopener noreferrer">
                    <span className="gallery-frame">
                      <Image
                        src={p.src}
                        alt={p.caption || `Stepping Stone house photo ${i + 1}`}
                        fill
                        sizes="(max-width: 560px) 92vw, (max-width: 960px) 46vw, 360px"
                      />
                    </span>
                    {p.caption && <span className="gallery-caption">{p.caption}</span>}
                    <span className="sr-only"> (opens full size in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Closing />
    </>
  );
}
