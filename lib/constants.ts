export const siteConfig = {
  name: "AWAKEN",
  fullName:
    "AWAKEN — Afghan Women’s And Kids’ Education & Necessities",
  description:
    "Help Afghan women & children through education, healthcare, vocational training, and clean water in Afghanistan.",
  url: "https://www.awakeninc.org",
  email: "admin@awakeninc.org",
  mailingAddress: {
    name: "AWAKEN",
    line1: "P.O. Box 515",
    city: "Yorktown",
    state: "IN",
    zip: "47396",
  },
  taxId: "30-0135327",
  social: {
    facebook: "https://www.facebook.com/awaken2002/",
    twitter: "https://twitter.com/AWAKEN_Peace",
    instagram: "https://www.instagram.com/awakeninc2002/",
    amazon:
      "https://smile.amazon.com/gp/chpf/homepage?q=afghan+womens+and+kids+education+necessities+inc",
  },
  /** Wix footer icons (78×78) from site crawl */
  socialIcons: {
    facebook: "/images/assets/d6568ff98b84ce5d8635.png",
    twitter: "/images/assets/285a8b65d103494996ee.png",
    instagram: "/images/assets/0e2ed5627b482c3964f8.png",
    amazon: "/images/assets/c3f357b0db34e9288fe2.png",
  },
  givebutter: {
    /** Primary donation landing (matches current site CTAs) */
    campaignUrl:
      "https://givebutter.com/Q7RgQD?gbtid=3c6a9c1e-68f3-4fab-97ba-9a4019629bb9",
    /** Embed widget key from legacy Wix implementation */
    widgetId: "krueJF5Is9LUy47T",
  },
};

export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      items: { label: string; href: string }[];
    };

export const mainNav: NavItem[] = [
  {
    label: "About Us",
    items: [
      { label: "Overview", href: "/" },
      { label: "Our Team", href: "/our-team" },
      { label: "Founder's Story", href: "/founders-story" },
    ],
  },
  {
    label: "Our Work",
    items: [
      { label: "Healthcare", href: "/healthcare" },
      { label: "Education", href: "/education" },
      { label: "Vocational Training", href: "/vocational-training" },
      { label: "Clean Water & Sanitation", href: "/clean-water-sanitation" },
      { label: "Refugee Resettlement (MARRC)", href: "/marrc" },
    ],
  },
  {
    label: "Media",
    items: [
      { label: "End of Year Letter 2025", href: "/end-of-year-letter-2025" },
      { label: "Reports", href: "/reports" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Fundraising Dinner", href: "/dinner" },
  { label: "Contact", href: "/contact" },
];

export const impactStats = [
  {
    value: 200_000,
    suffix: "+",
    label: "patients provided with essential, free health care",
  },
  {
    value: 3_500,
    suffix: "+",
    label: "students graduated from our education programs",
  },
  {
    value: 1_500,
    suffix: "+",
    label: "women graduated our vocational training program",
  },
] as const;

export const programCards = [
  {
    title: "Education",
    description:
      "Serves 1,860 children and teens in grades 1 to 12 and provides college scholarships",
    href: "/education",
  },
  {
    title: "Health Care",
    description:
      "Cares for more than 36,000 patients per year, providing key maternal & child health support",
    href: "/healthcare",
  },
  {
    title: "Vocational Training",
    description:
      "Provides more than 60 women each year vocational, literacy & hygiene training",
    href: "/vocational-training",
  },
  {
    title: "Clean Water & Sanitation",
    description:
      "Provides access to clean water and basic sanitation for rural communities in need",
    href: "/clean-water-sanitation",
  },
] as const;

export const reportLinks = {
  "2023-24": [
    {
      label: "Budget FY 2023 - 24",
      href: "https://www.awakeninc.org/_files/ugd/086de0_939b5d47c0c344dba891ec056e504dd7.xlsx?dn=Budget-FY2023-24.xlsx",
    },
    {
      label: "Balance FY 2023 -24",
      href: "https://www.awakeninc.org/_files/ugd/086de0_9f260876188c4abeb0a2d4bb8db0ec6a.xls?dn=Balance%20sheet%20FY2023-24.xls",
    },
    {
      label: "Revenue & Expenses FY 2023 -24",
      href: "https://www.awakeninc.org/_files/ugd/086de0_915f4b52ad77453b8ab99836ca39ba06.xls?dn=Revenues%20%26%20Expenses%20FY2023-24.xls",
    },
    {
      label:
        "Contributions, Restricted Contributions and Spending of Restricted Contributions FY 2023 -24",
      href: "https://www.awakeninc.org/_files/ugd/086de0_59678c2af1e7479998d4621665e2608a.xlsx?dn=Contributions%2C%20Restricted%20Contributions%20and%20Spending%20of%20Restricted%20Contributions%20FY%202023-2",
    },
  ],
  "2022-23": [
    {
      label: "Budget FY 2022 -23",
      href: "https://www.awakeninc.org/_files/ugd/086de0_53295d09528e4a81bf41347afd7fce73.xls?dn=Budget-Fy2020.xls",
    },
    {
      label: "Balance FY 2022 -23",
      href: "https://www.awakeninc.org/_files/ugd/086de0_0543710918b64ee4bb64526769b373bd.xls?dn=Balance%20sheetfy%20FY20%20thru%2010.31.20.xls",
    },
    {
      label: "Revenue & Expenses FY 2022 -23",
      href: "https://www.awakeninc.org/_files/ugd/086de0_eea3b9049bb243828ec2cc189a72658f.xls?dn=Rev%26ExpFY2020%20thru%2010.31.20.xls",
    },
    {
      label:
        "Contributions, Restricted Contributions and Spending of Restricted Contributions FY 2022 -23",
      href: "https://www.awakeninc.org/_files/ugd/086de0_309d08e68dbf4640980b4929644ef20b.xls?dn=Contributions%2C%20Restricted%20Contributions%20and%20Spending%20of%20Restricted%20Contributions%20FY%202019-2",
    },
  ],
  "2021-22": [
    {
      label: "Budget FY 2021 -22",
      href: "https://www.awakeninc.org/_files/ugd/086de0_53295d09528e4a81bf41347afd7fce73.xls?dn=Budget-Fy2020.xls",
    },
    {
      label: "Balance FY 2021 -22",
      href: "https://www.awakeninc.org/_files/ugd/086de0_0543710918b64ee4bb64526769b373bd.xls?dn=Balance%20sheetfy%20FY20%20thru%2010.31.20.xls",
    },
    {
      label: "Revenue & Expenses FY 2021 -22",
      href: "https://www.awakeninc.org/_files/ugd/086de0_eea3b9049bb243828ec2cc189a72658f.xls?dn=Rev%26ExpFY2020%20thru%2010.31.20.xls",
    },
    {
      label:
        "Contributions, Restricted Contributions and Spending of Restricted Contributions FY 2021 -22",
      href: "https://www.awakeninc.org/_files/ugd/086de0_309d08e68dbf4640980b4929644ef20b.xls?dn=Contributions%2C%20Restricted%20Contributions%20and%20Spending%20of%20Restricted%20Contributions%20FY%202019-2",
    },
  ],
  "2020-21": [
    {
      label: "Budget FY 2020 -21",
      href: "https://www.awakeninc.org/_files/ugd/086de0_53295d09528e4a81bf41347afd7fce73.xls?dn=Budget-Fy2020.xls",
    },
    {
      label: "Balance FY 2020 -21",
      href: "https://www.awakeninc.org/_files/ugd/086de0_0543710918b64ee4bb64526769b373bd.xls?dn=Balance%20sheetfy%20FY20%20thru%2010.31.20.xls",
    },
    {
      label: "Revenue & Expenses FY 2020 -21",
      href: "https://www.awakeninc.org/_files/ugd/086de0_eea3b9049bb243828ec2cc189a72658f.xls?dn=Rev%26ExpFY2020%20thru%2010.31.20.xls",
    },
    {
      label:
        "Contributions, Restricted Contributions and Spending of Restricted Contributions FY 2020 -21",
      href: "https://www.awakeninc.org/_files/ugd/086de0_309d08e68dbf4640980b4929644ef20b.xls?dn=Contributions%2C%20Restricted%20Contributions%20and%20Spending%20of%20Restricted%20Contributions%20FY%202019-2",
    },
  ],
  "2019-20": [
    {
      label: "Budget FY 2019 - 20",
      href: "https://www.awakeninc.org/_files/ugd/086de0_53295d09528e4a81bf41347afd7fce73.xls?dn=Budget-Fy2020.xls",
    },
    {
      label: "Balance FY 2019 -20",
      href: "https://www.awakeninc.org/_files/ugd/086de0_0543710918b64ee4bb64526769b373bd.xls?dn=Balance%20sheetfy%20FY20%20thru%2010.31.20.xls",
    },
    {
      label: "Revenue & Expenses FY 2019-20",
      href: "https://www.awakeninc.org/_files/ugd/086de0_eea3b9049bb243828ec2cc189a72658f.xls?dn=Rev%26ExpFY2020%20thru%2010.31.20.xls",
    },
    {
      label:
        "Contributions, Restricted Contributions and Spending of Restricted Contributions FY 2019-20",
      href: "https://www.awakeninc.org/_files/ugd/086de0_309d08e68dbf4640980b4929644ef20b.xls?dn=Contributions%2C%20Restricted%20Contributions%20and%20Spending%20of%20Restricted%20Contributions%20FY%202019-2",
    },
  ],
} as const;

export const boardMembers = [
  { name: "Bibi Bahrami", role: "Founder & President" },
  { name: "Zaki Bahrami", role: "Vice President" },
  { name: "Gary Garofolo", role: "Treasurer" },
  { name: "Cara Bow", role: "Secretary" },
  { name: "Ann Clevenger", role: "Board Member" },
  { name: "Susan Magrath", role: "Board Member" },
  { name: "Cindy Buchanon", role: "Board Member" },
  { name: "Kristin Williams", role: "Board Member" },
  { name: "Cecil Bohanon", role: "Board Member" },
  { name: "Anwar Abdalah", role: "Board Member" },
  { name: "Scott Shockley", role: "Board Member" },
  { name: "Amy Beckett", role: "Board Member" },
] as const;

export const afghanistanTeam = [
  { name: "Abdullah Noori", role: "Director", org: "AWAKEN Afghanistan" },
] as const;
