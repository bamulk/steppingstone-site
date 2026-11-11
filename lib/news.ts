export type ListItem = { lead?: string; text: string; href?: string };

export type Block = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "ul"; items: ListItem[] };

export type Article = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  image?: { src: string; width: number; height: number; alt: string; caption?: string };
  body: Block[];
};

// Newest first. The two oldest were carried over from the previous WordPress site.
export const articles: Article[] = [
  {
    slug: "staying-steady-through-the-holidays",
    title: "Staying Steady Through the Holidays: A Gentle Guide for Women in Recovery and Their Families",
    date: "2026-11-11",
    excerpt:
      "The weeks between Thanksgiving and New Year's can be beautiful and hard when you're in recovery. Here are simple ideas for staying steady, for women in recovery and the families who love them.",
    image: {
      src: "/images/news/staying-steady-through-the-holidays.png",
      width: 1200,
      height: 630,
      alt: "Illustration of stepping stones across dark water toward a setting sun, with the title Staying Steady Through the Holidays.",
    },
    body: [
      {
        type: "p",
        text: "The season between Thanksgiving and New Year's can be one of the most beautiful times of the year. It can also be one of the hardest when you're in recovery. There are parties, family gatherings, old traditions, busy schedules and sometimes old hurts that come back up around the table. If you're feeling a little nervous about the weeks ahead, you're not alone, and there's nothing wrong with you. It just means your recovery matters to you.",
      },
      {
        type: "p",
        text: "Here are some simple ideas that women in our community, and the families who love them, have found helpful.",
      },
      { type: "h2", text: "Make a plan before the plans start" },
      {
        type: "p",
        text: "The holidays have a way of filling up fast. Before the invitations roll in, take a few minutes to think about which events feel safe, which ones feel risky, and which ones you can skip this year. It's okay to say no. It's okay to say yes for an hour and leave early.",
      },
      { type: "p", text: "A few things that can help when you do go:" },
      {
        type: "ul",
        items: [
          { text: "Bring your own drink, so there's always something in your hand." },
          { text: "Have your own way home, so you can leave whenever you need to." },
          { text: "Bring a sober friend, or plan a check-in call with your sponsor before and after." },
          { text: 'Know your "exit line" ahead of time, something simple like "I\'ve got an early morning."' },
        ],
      },
      { type: "h2", text: "Keep your routines close" },
      {
        type: "p",
        text: "When the calendar gets crowded, the things that keep us steady are often the first to slip: meetings, sleep, meals, quiet time, a phone call to someone who gets it. Try to protect them like any other appointment. Many recovery meetings stay open through the holidays, and some groups hold special gatherings on the holidays themselves, so you don't have to spend the day alone. If you're traveling, online and phone meetings can go with you.",
      },
      { type: "h2", text: "Give yourself room to feel" },
      {
        type: "p",
        text: "The holidays can bring up grief, loneliness, guilt, or memories of holidays that didn't go well. They can also bring up hope. All of that is normal. Write it down, talk it through, pray, take a walk, or sit with a housemate over a cup of coffee. You don't have to fix every feeling. You only have to get through today without picking up.",
      },
      { type: "h2", text: "For families: what helps" },
      {
        type: "p",
        text: "If someone you love is in recovery, your support means more than you may know. A few gentle ways to show it:",
      },
      {
        type: "ul",
        items: [
          { text: "Ask ahead of time what would make the gathering easier for her." },
          { text: "Offer alcohol-free drinks without making a big deal of it." },
          { text: "Let her leave early without questions or hurt feelings." },
          { text: "Celebrate the person, not just the milestones." },
        ],
      },
      {
        type: "p",
        text: "Families need support too. Al-Anon Family Groups is a Twelve Step fellowship for relatives and friends of people who drink too much, with meetings in person, by phone, online and in its mobile app. Alateen offers the same kind of support for teens ages 13 to 18.",
      },
      { type: "h2", text: "If you need help, reach out" },
      { type: "p", text: "Asking for help is a strength, not a setback. Here are a few free places to start:" },
      {
        type: "ul",
        items: [
          {
            lead: "988 Suicide & Crisis Lifeline:",
            text: "call or text 988, or chat online, any time of day. It's free and confidential, and it helps with mental health and substance use concerns, including when you're worried about someone else.",
          },
          {
            lead: "SAMHSA's National Helpline:",
            text: "a free, confidential treatment referral and information line for individuals and families facing mental health or substance use challenges, open 24 hours a day, every day of the year, in English and Spanish. Call 1-800-662-HELP (4357).",
          },
          {
            lead: "Sacramento County Behavioral Health Services Screening and Coordination (BHS-SAC):",
            text: "the county's main entry point for mental health and substance use services, open 24 hours a day, 365 days a year. Family members and friends can call on someone's behalf. Most services require Medi-Cal eligibility. Call (916) 875-1055 or toll-free (888) 881-4881. California Relay: 711.",
          },
        ],
      },
      { type: "p", text: "If you or someone else is in immediate danger, call 911." },
      { type: "h2", text: "One day at a time, even in December" },
      {
        type: "p",
        text: "The holidays don't have to be perfect to be good. A quiet dinner, a meeting, a phone call, a good night's sleep: these are real gifts. Wherever you are on your journey this season, we're cheering you on.",
      },
      {
        type: "p",
        text: "From all of us at Stepping Stone Sober Living, we wish you a peaceful, sober and hopeful holiday season.",
      },
      { type: "h2", text: "Sources" },
      {
        type: "ul",
        items: [
          { text: "SAMHSA, National Helpline", href: "https://www.samhsa.gov/find-help/helplines/national-helpline" },
          { text: "American Foundation for Suicide Prevention, 988 Suicide & Crisis Lifeline", href: "https://afsp.org/988" },
          {
            text: "Sacramento County Department of Health Services, Behavioral Health Services Screening and Coordination (BHS-SAC)",
            href: "https://dhs.saccounty.gov/us/en/behavioral-health/behavioral-health-services/entry-point/bhs-sac.html",
          },
          {
            text: "Al-Anon Family Groups, Finding a Meeting Is Just a Click Away",
            href: "https://al-anon.org/blog/finding-a-meeting-is-just-a-click-away/",
          },
        ],
      },
    ],
  },
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
