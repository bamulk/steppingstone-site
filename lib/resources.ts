export type Resource = {
  name: string;
  what: string;
  phone?: string; // display form
  phoneNote?: string;
  url?: string;
  urlLabel?: string;
  address?: string;
};

export type ResourceGroup = { id: string; title: string; intro: string; items: Resource[] };

// Last checked against county and organization sources: October 2026.
// Phone numbers and programs change. Re-check this list a couple of times a year.
export const resourcesChecked = "October 2026";

export const resourceGroups: ResourceGroup[] = [
  {
    id: "start",
    title: "Where to start",
    intro:
      "If you aren't sure what kind of help you need, or you have Medi-Cal or no insurance, these lines will assess you and point you to the right program.",
    items: [
      {
        name: "Sacramento County Behavioral Health Screening and Coordination",
        what: "The county's single front door for substance use and mental health treatment, including detox and residential programs. They do the assessment by phone and make the referral. Answered 24 hours a day.",
        phone: "(916) 875-1055",
        phoneNote: "Toll-free (888) 881-4881",
        url: "https://dhs.saccounty.gov/BHS/Pages/BHS-Home.aspx",
        urlLabel: "dhs.saccounty.gov",
      },
      {
        name: "SAMHSA National Helpline",
        what: "Free, confidential treatment referral and information, 24 hours a day, in English and Spanish. Their website lets you search for treatment programs by zip code.",
        phone: "1-800-662-4357",
        url: "https://findtreatment.gov",
        urlLabel: "findtreatment.gov",
      },
    ],
  },
  {
    id: "detox",
    title: "Detox",
    intro:
      "Withdrawal from alcohol, benzodiazepines and some other substances can be dangerous. Detox should be medically supervised. Stepping Stone is not a detox.",
    items: [
      {
        name: "WellSpace Health Residential and Withdrawal Management",
        what: "Medically supervised withdrawal management (detox) and residential treatment. Call to ask about current openings and what coverage they accept.",
        phone: "(916) 921-6598",
        url: "https://www.wellspacehealth.org",
        urlLabel: "wellspacehealth.org",
        address: "1550 Juliesse Avenue, Sacramento",
      },
      {
        name: "County referral for detox",
        what: "Most county-funded detox and residential beds need a county assessment first. The Screening and Coordination line above is the way in.",
        phone: "(916) 875-1055",
      },
    ],
  },
  {
    id: "treatment",
    title: "Treatment programs",
    intro:
      "Residential and outpatient programs in Sacramento. Each one has its own intake, so call to ask who they serve, what they cost, and whether they have space.",
    items: [
      {
        name: "Bridges Professional Treatment Services",
        what: "Outpatient substance use treatment with walk-in hours on weekdays.",
        phone: "(916) 647-5343",
        url: "https://www.bridgesinc.net",
        urlLabel: "bridgesinc.net",
        address: "3600 Power Inn Road, Suites A–C, Sacramento",
      },
      {
        name: "Bridges programs for women and children",
        what: "Programs for women, including women with children. Call to ask what is currently offered.",
        phone: "(916) 450-0700",
        url: "https://www.bridgesinc.net",
        urlLabel: "bridgesinc.net",
        address: "2501 Cottage Way, Sacramento",
      },
      {
        name: "Sacramento Recovery House (Gateway House)",
        what: "Residential treatment that contracts with Sacramento County. Ask who the house currently serves when you call.",
        phone: "(916) 451-9312",
        address: "4049 Miller Way, Sacramento",
      },
    ],
  },
  {
    id: "money",
    title: "Money, food and health coverage",
    intro: "Help with the basics while you get back on your feet.",
    items: [
      {
        name: "Sacramento County Department of Human Assistance",
        what: "Apply for CalFresh (food), CalWORKs (cash aid for families), General Assistance and Medi-Cal. One phone line covers all four; you can also apply online at BenefitsCal.",
        phone: "1-800-560-0976",
        url: "https://www.benefitscal.com",
        urlLabel: "benefitscal.com",
      },
      {
        name: "211 Sacramento",
        what: "Free referrals for housing, food, counseling, employment and more, 24 hours a day. Tell them what you need and they'll find who offers it.",
        phone: "2-1-1",
        phoneNote: "or (916) 498-1000",
        url: "https://www.211sacramento.org",
        urlLabel: "211sacramento.org",
      },
      {
        name: "Sacramento Food Bank & Family Services",
        what: "Free groceries at distribution sites around the county, plus other family services.",
        phone: "(916) 456-1980",
        url: "https://www.sacramentofoodbank.org",
        urlLabel: "sacramentofoodbank.org",
        address: "3333 Third Avenue, Sacramento",
      },
    ],
  },
  {
    id: "meetings",
    title: "Meetings",
    intro: "Find a meeting near any of our houses.",
    items: [
      {
        name: "Alcoholics Anonymous, Central California Fellowship",
        what: "The Sacramento-area AA office. Call the hotline to talk with a member, or use the meeting finder on their website.",
        phone: "(916) 454-1100",
        url: "https://aasacramento.org",
        urlLabel: "aasacramento.org",
      },
      {
        name: "Narcotics Anonymous meeting search",
        what: "Search for NA meetings by city or zip code, in person and online.",
        url: "https://na.org/meetingsearch",
        urlLabel: "na.org/meetingsearch",
      },
    ],
  },
];

export const telHref = (display: string) => {
  const digits = display.replace(/\D/g, "");
  if (digits.length === 3) return `tel:${digits}`;
  return `tel:+${digits.length === 10 ? "1" : ""}${digits}`;
};
