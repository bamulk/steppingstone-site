// Program expectations, shared across the home, cost, and apply pages.
export const agreements = [
  { title: "Find a sponsor", detail: "Within your first 10 days in the house." },
  { title: "Go to three meetings a week", detail: "In the recovery program you work." },
  { title: "Come to the weekly house meeting", detail: "Everyone in the house, every week." },
  { title: "Share the chores", detail: "We keep the kitchen and common rooms clean together." },
  { title: "Stay clean and sober", detail: "No drugs or alcohol. Every house is drug tested." },
];

export const amenities = [
  "Furnished bedrooms",
  "Free WiFi",
  "Free parking",
  "Washer and dryer",
  "Dishwasher",
  "Coffee maker",
];

export const mission =
  "Our mission is to provide a safe, supportive, and structured sober living environment where women and women with children can heal, grow, and build sustainable lives in recovery. We empower residents through accountability, community, and compassionate support, fostering independence, resilience, and long-term sobriety.";

export const vision =
  "Our vision is a future where women and their children thrive in recovery—free from addiction, strengthened by community, and equipped with the tools to create healthy, stable, and purpose-driven lives.";

export type Letter = { id: string; from: string; paragraphs: string[] };

// Resident letters, carried over word for word from the previous site.
export const letters: Letter[] = [
  {
    id: "janean",
    from: "Janean Bradley",
    paragraphs: [
      "My name is Janean Bradley. I have lived at Stepping Stones sober Living since December of 2019. Upon move in Ashley bent over backwards to accomodate me, helping me move, worked with me to make sure my needs were met, etc.",
      "The program was gracious when I was struggling to get back on my feet and has provided safety and support as I fight my way back to recovery. I am now 6 months clean and sober, I am employed full time, I am learning to care for myself and my needs and I have a safe place to call home.",
      "I know without a doubt I would not still be clean and sober without the foundation I have been gifted with at Stepping Stones. Thank you.",
    ],
  },
  {
    id: "april",
    from: "April B.",
    paragraphs: [
      "I moved into Stepping Stone 7/30/20 I had 4 days sober. I can tell you it has been one of my many rewarding experiences since I got sober. I love Monday night’s where we do a women’s check in with each other. Getting to know one another with our personal shares.",
      "We have game night’s learning how to interact have fun without mind altering substance. Alcohol free. I’ve been treated like an adult. Freedom to work a program. I’ve got the Sponsor, I do the meetings. I’m changing.",
      "I was so in despair emotionally, spiritually, physically when I got here. 4 months later I have a smile I laugh. I can’t thank this clean & sober environment enough. The woman who runs it is one of us. She’s genuine she’s real. I feel safe here.",
      "Sincerely, From my heart.",
    ],
  },
];
