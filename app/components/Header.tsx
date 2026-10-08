import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="header">
      <div className="wrap header-row">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
