export type Home = {
  id: string;
  name: string;
  area: string;
  type: "Men";
  startingPrice: number;
  highlights: string[];
  availabilityNote: string;
};

export const homes: Home[] = [
  {
    id: "carmichael",
    name: "Carmichael Home",
    area: "Carmichael",
    type: "Men",
    startingPrice: 750,
    highlights: ["Structured living", "Weekly house meeting", "Nearby meetings", "Quiet residential neighborhood"],
    availabilityNote: "Call/text for current availability.",
  },
  {
    id: "citrus-heights",
    name: "Citrus Heights Home",
    area: "Citrus Heights",
    type: "Men",
    startingPrice: 750,
    highlights: ["Peer accountability", "Clean shared spaces", "Chore rotation", "Recovery-focused culture"],
    availabilityNote: "Openings vary week to week.",
  },
  {
    id: "fair-oaks",
    name: "Fair Oaks Home",
    area: "Fair Oaks",
    type: "Men",
    startingPrice: 950,
    highlights: ["Private room options", "Strong house leadership", "Stable routines", "Supportive roommates"],
    availabilityNote: "Ask about private rooms.",
  },
  {
    id: "arden-arcade",
    name: "Arden-Arcade Home",
    area: "Arden-Arcade",
    type: "Men",
    startingPrice: 750,
    highlights: ["Central access", "Structured expectations", "Drug tested", "Respectful environment"],
    availabilityNote: "Call for the fastest response.",
  },
];
