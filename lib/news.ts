export type Block = { type: "p"; text: string } | { type: "h2"; text: string };

export type Article = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  image?: { src: string; width: number; height: number; alt: string; caption?: string };
  body: Block[];
};

// Carried over from the previous WordPress site, newest first.
export const articles: Article[] = [
  {
    slug: "recovery-happens-at-the-state-capitol",
    title: "Recovery Happens at the State Capitol",
    date: "2025-09-08",
    excerpt:
      "We spent the day at Recovery Happens at the State Capitol, meeting programs and people from across California who are committed to recovery.",
    image: {
      src: "/images/news/recovery-happens-capitol.jpg",
      width: 1200,
      height: 1600,
      alt: "Four women from Stepping Stone Sober Living standing behind the Stepping Stone information table under a white event tent.",
      caption: "Our table at Recovery Happens.",
    },
    body: [
      {
        type: "p",
        text: "This past week, we had the opportunity to attend Recovery Happens at the State Capitol, and it was an incredible experience. The event brought together people in recovery, their families, and organizations from all across the state to celebrate the power of sobriety and the strength of community.",
      },
      {
        type: "p",
        text: "For us, it was more than just an event—it was a chance to connect. We were able to meet with so many different programs and resources, from treatment providers and sober living networks to job training opportunities and wellness supports. Each conversation reminded us that no one has to walk the path of recovery alone; there are countless people and organizations committed to helping.",
      },
      {
        type: "p",
        text: "It was inspiring to see the Capitol grounds filled with hope, encouragement, and proof that recovery is possible. We left feeling grateful, energized, and motivated to continue supporting the women in our homes as they build new lives in sobriety.",
      },
    ],
  },
  {
    slug: "why-choose-sober-living",
    title: "Why Choose Sober Living? The Benefits of Stepping Stone Sober Living in Sacramento",
    date: "2025-08-28",
    excerpt:
      "Recovery doesn't end when treatment does. Here is why a structured, supportive sober living home can make the transition back to everyday life easier.",
    body: [
      {
        type: "p",
        text: "Recovery doesn’t end when treatment does—it’s a lifelong journey. For many people, the transition back into everyday life after rehab can feel overwhelming. That’s where Stepping Stone Sober Living in Sacramento, California comes in. Our homes provide a structured, supportive, and safe environment that helps women build the foundation for lasting sobriety.",
      },
      {
        type: "p",
        text: "If you’re wondering why sober living is the right choice, here are the top reasons to take this important step toward long-term recovery.",
      },
      { type: "h2", text: "1. A safe and supportive environment" },
      {
        type: "p",
        text: "At Stepping Stone Sober Living, we provide clean, fully furnished homes in Sacramento and nearby areas like Roseville and Rio Linda. Every property is substance-free and designed to give residents the security and stability they need. With safe surroundings and accountability, women can focus on rebuilding their lives without distractions or triggers.",
      },
      { type: "h2", text: "2. Structure that encourages independence" },
      {
        type: "p",
        text: "Sober living bridges the gap between treatment and independent living. Our homes balance freedom and accountability—you can work, attend school, and care for your family, while also following structured guidelines that support recovery. House rules, curfews, and meeting attendance requirements help reinforce healthy habits without taking away your independence.",
      },
      { type: "h2", text: "3. Community and peer support" },
      {
        type: "p",
        text: "Recovery can feel lonely, but at Stepping Stone you’re never alone. Our sober living homes foster a community of women who understand and support one another. Whether it’s attending meetings together, sharing experiences, or simply having someone to talk to, the bonds built here often last a lifetime.",
      },
      { type: "h2", text: "4. Accountability that builds strength" },
      {
        type: "p",
        text: "We know accountability is essential to maintaining sobriety. That’s why we encourage participation in recovery programs, sponsorships, and community involvement. With regular check-ins and peer accountability, residents stay motivated and focused on their recovery journey.",
      },
      { type: "h2", text: "5. Transitional housing for moms" },
      {
        type: "p",
        text: "One of the things that sets Stepping Stone apart is our commitment to supporting mothers in recovery. We offer housing options where women can live with their children, creating a safe space to heal and rebuild family life while staying focused on sobriety.",
      },
      { type: "h2", text: "6. Building life skills for the future" },
      {
        type: "p",
        text: "Sober living is more than just housing—it’s about preparing for independence. Residents at Stepping Stone gain practical life skills like budgeting, managing responsibilities, and developing healthier routines. These skills provide the tools necessary for success long after leaving our program.",
      },
      { type: "h2", text: "7. Long-term recovery success" },
      {
        type: "p",
        text: "Studies consistently show that people who live in sober living homes after treatment have higher rates of sustained sobriety than those who return directly to their old environments. By choosing Stepping Stone Sober Living, you’re giving yourself the best chance at lasting recovery.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Sober living isn’t just about having a safe place to stay—it’s about creating a strong foundation for the future. At Stepping Stone Sober Living in Sacramento, we provide the structure, support, and community you need to thrive in recovery.",
      },
      {
        type: "p",
        text: "If you or a loved one is ready to take the next step, Stepping Stone Sober Living is here to help you build a new life of stability, growth, and freedom from addiction.",
      },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
