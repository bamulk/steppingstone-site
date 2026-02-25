import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(180%) blur(14px)",
        background: "rgba(244,245,247,.72)",
        borderBottom: "1px solid rgba(11,11,11,.08)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          gap: 18,
        }}
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
