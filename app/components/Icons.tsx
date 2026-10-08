// Small line icons, one stroke weight.
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CheckIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.3 2.4 2.4 4.8-5.2" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg {...base} width={18} height={18}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
