import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { getGalleryPhotos } from "@/lib/gallery";

export function Header() {
  // The Gallery link only appears once there are photos to show.
  const showGallery = getGalleryPhotos().length > 0;
  return (
    <header className="header">
      <div className="wrap header-row">
        <Logo />
        <Nav showGallery={showGallery} />
      </div>
    </header>
  );
}
