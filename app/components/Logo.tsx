import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Stepping Stone Sober Living, home">
      <Image src="/images/logo.png" alt="" width={2120} height={435} priority sizes="228px" />
    </Link>
  );
}
