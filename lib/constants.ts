export const siteConfig = {
  name: "AWAKEN",
  fullName:
    "AWAKEN — Afghan Women’s And Kids’ Education & Necessities",
  organizationName:
    "Afghan Women's And Kids' Education & Necessities",
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
  donation: {
    paypalGivingFund:
      "https://www.paypal.com/us/fundraiser/charity/1655951",
    venmo: "https://venmo.com/awaken2020",
    /** Update when LaunchGood campaign URL is confirmed */
    launchGood: "https://www.launchgood.com/v4/campaign/support_awaken",
  },
  storefront: {
    /** Legacy Wix store — product links below use this origin */
    shopAllUrl: "https://www.awakeninc.org/category/all-products",
  },
};

export type DonationOption = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export const donationOptions: DonationOption[] = [
  {
    title: "Givebutter",
    description:
      "Our primary online giving platform with $0 platform fees — the same secure checkout linked from our annual letter and events. Supports one-time and recurring gifts with tax receipts.",
    href: siteConfig.givebutter.campaignUrl,
    buttonLabel: "Give on Givebutter",
  },
  {
    title: "PayPal Giving Fund",
    description:
      "Donate through PayPal with no fees to AWAKEN — PayPal delivers 100% of your gift to our nonprofit account and provides a donation receipt for your records.",
    href: siteConfig.donation.paypalGivingFund,
    buttonLabel: "Give via PayPal",
  },
  {
    title: "Venmo",
    description:
      "Send a quick gift from your phone — ideal for spontaneous support or sharing AWAKEN with friends. Use @awaken2020 in the Venmo app.",
    href: siteConfig.donation.venmo,
    buttonLabel: "Give on Venmo",
  },
  {
    title: "LaunchGood",
    description:
      "Give through a faith-inspired crowdfunding community that supports humanitarian work in Afghanistan — especially meaningful during Ramadan and for zakat-eligible giving.",
    href: siteConfig.donation.launchGood,
    buttonLabel: "Give on LaunchGood",
  },
];

export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      items: { label: string; href: string }[];
    };

/** Set to true when the annual fundraising dinner page should be live. */
export const dinnerPageEnabled = false;

const baseMainNav: NavItem[] = [
  {
    label: "About Us",
    items: [
      { label: "Overview", href: "/mission" },
      { label: "Our Team", href: "/our-team" },
      { label: "Founder's Story", href: "/founders-story" },
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
  { label: "Storefront", href: "/storefront" },
  { label: "Contact", href: "/contact" },
];

export type StorefrontProduct = {
  title: string;
  description: string;
  href: string;
};

export const storefrontProducts: StorefrontProduct[] = [
  {
    title: "Bibi's Cookbook (digital)",
    description:
      "Ten favorite Afghan recipes from our founder — instant PDF download.",
    href: "https://www.awakeninc.org/product-page/bibi-s-cookbook-10-recipes-you-know-love-digital-pdf",
  },
  {
    title: "Bibi's Cookbook (print)",
    description:
      "The same ten recipes in a printed edition — a beautiful gift for food lovers.",
    href: "https://www.awakeninc.org/product-page/bibi-s-cookbook-10-recipes-you-know-love-physical-copy",
  },
  {
    title: "Bibi's Cookies",
    description: "Fresh-baked cookies sold as a fundraiser for AWAKEN programs.",
    href: "https://www.awakeninc.org/product-page/bibi-s-cookies",
  },
  {
    title: "Bibi's Cookies (2 dozen)",
    description: "Two dozen cookies — perfect for sharing at gatherings.",
    href: "https://www.awakeninc.org/product-page/bibi-s-cookies-2-dozen",
  },
  {
    title: "Bibi's Cookies (3 dozen)",
    description: "Three dozen cookies for larger events and holiday orders.",
    href: "https://www.awakeninc.org/product-page/bibi-s-cookies-3-dozen",
  },
  {
    title: "Dinner with Bibi (4 guests)",
    description:
      "An intimate home-cooked Afghan dinner with founder Bibi Bahrami.",
    href: "https://www.awakeninc.org/product-page/dinner-with-bibi-for-4",
  },
  {
    title: "Dinner with Bibi (8 guests)",
    description:
      "A larger dinner experience with Bibi — ideal for small groups.",
    href: "https://www.awakeninc.org/product-page/dinner-with-bibi-for-8",
  },
];

export const mainNav: NavItem[] = dinnerPageEnabled
  ? baseMainNav
  : baseMainNav.filter(
      (item) => !("href" in item && item.href === "/dinner"),
    );

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
    image: "/images/assets/42aff59dc3635eb5cbf9.jpg",
    imageAlt: "Students in AWAKEN education programs",
  },
  {
    title: "Health Care",
    description:
      "Cares for more than 36,000 patients per year, providing key maternal & child health support",
    href: "/healthcare",
    image: "/images/assets/dcf862d8550f38549d14.jpg",
    imageAlt: "Healthcare for women and children at AWAKEN clinic",
  },
  {
    title: "Vocational Training",
    description:
      "Provides more than 60 women each year vocational, literacy & hygiene training",
    href: "/vocational-training",
    image: "/images/assets/8c74cf6a42ec9837db18.jpg",
    imageAlt: "Women in vocational tailoring training",
  },
  {
    title: "Clean Water & Sanitation",
    description:
      "Provides access to clean water and basic sanitation for rural communities in need",
    href: "/clean-water-sanitation",
    image: "/images/assets/a88a44c6adc0c4b5936c.jpg",
    imageAlt: "Clean water and sanitation work in rural Afghanistan",
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
  { name: "Scott Shockley", role: "Board Member" },
  { name: "Amy Beckett", role: "Board Member" },
  { name: "Kevin McNamara", role: "Board Member" },
  { name: "Pam Richards", role: "Board Member" },
  { name: "Sue Errington", role: "Board Member" },
] as const;

export const afghanistanTeam = [
  { name: "Abdullah Noori", role: "Director", org: "AWAKEN Afghanistan" },
] as const;
