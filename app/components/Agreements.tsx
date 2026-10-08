import { agreements } from "@/lib/content";

export function Agreements() {
  return (
    <ul className="agreements">
      {agreements.map((a) => (
        <li key={a.title}>
          <strong>{a.title}</strong>
          <span>{a.detail}</span>
        </li>
      ))}
    </ul>
  );
}
