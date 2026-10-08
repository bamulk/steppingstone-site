export type Home = {
  id: string;
  name: string;
  forWho: string;
  photo: { src: string; width: number; height: number; alt: string };
  summary: string;
  details: string[];
};

export const homes: Home[] = [
  {
    id: "rio-linda",
    name: "Rio Linda",
    forWho: "For women and their children",
    photo: {
      src: "/images/rio-linda.jpg",
      width: 500,
      height: 326,
      alt: "The Rio Linda house: a yellow single-story home with a covered front porch and a wide green yard.",
    },
    summary:
      "Country living on three acres. This house is set aside for women and their children, with a pool, farm animals, and plenty of room to be outside.",
    details: [
      "Three acres, a pool, and farm animals",
      "About 10 minutes from the freeway and 15 from downtown",
      "Close to shopping and meetings",
    ],
  },
  {
    id: "rio-linda-2",
    name: "Rio Linda #2",
    forWho: "For single women",
    photo: {
      src: "/images/rio-linda-2.jpg",
      width: 500,
      height: 326,
      alt: "The second Rio Linda house: a gray single-story home behind a shady tree and a green lawn.",
    },
    summary:
      "A home for single women in recovery, with comfortable shared living spaces and a pool to unwind by.",
    details: [
      "Shared living spaces and a pool",
      "Close to bus routes",
      "Meetings nearby",
    ],
  },
  {
    id: "rosemont-1",
    name: "Rosemont #1",
    forWho: "For single women",
    photo: {
      src: "/images/rosemont-1.jpg",
      width: 500,
      height: 326,
      alt: "The first Rosemont house: a tan single-story home with a tree in the front yard.",
    },
    summary:
      "A warm house for single women on a quiet street, a short walk from Manlove Park.",
    details: [
      "Quiet neighborhood",
      "Near shopping, meetings, and transit",
      "A short walk to Manlove Park",
    ],
  },
  {
    id: "rosemont-2",
    name: "Rosemont #2",
    forWho: "For women",
    photo: {
      src: "/images/rosemont-2.jpg",
      width: 500,
      height: 326,
      alt: "The second Rosemont house: a two-story blue home with brick trim.",
    },
    summary:
      "A spacious two-story home for women, with room to spread out and everything you need day to day close by.",
    details: [
      "Two stories, plenty of space",
      "Near shopping and the bus stop",
      "Meetings nearby",
    ],
  },
];
