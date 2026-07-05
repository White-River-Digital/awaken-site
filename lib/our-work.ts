export type OurWorkLink = {
  label: string;
  href: string;
};

export type OurWorkPage = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  eyebrow: "Current program" | "Past program";
  paragraphs: string[];
  imageKey?: "healthcare" | "education" | "water" | "vocational" | "marrc";
};

/** Original program pages — linked from the Our Work nav. */
export const ourWorkNav = {
  current: [
    { label: "healthcare", href: "/healthcare" },
    { label: "education", href: "/education" },
    { label: "clean-water-sanitation", href: "/clean-water-sanitation" },
  ] satisfies OurWorkLink[],
  past: [
    { label: "vocational-training", href: "/vocational-training" },
    { label: "marrc", href: "/marrc" },
  ] satisfies OurWorkLink[],
} as const;

export const ourWorkPages: OurWorkPage[] = [
  {
    slug: "healthcare/clinics-birthing-center",
    title: "Clinics & birthing center",
    subtitle: "Essential health services and maternal care in Behsood District.",
    description:
      "AWAKEN's Behsood Health Clinic and maternal & child health unit serve rural communities in eastern Afghanistan.",
    eyebrow: "Current program",
    imageKey: "healthcare",
    paragraphs: [
      "Health care is at the core of our work. AWAKEN provides essential health services to rural and hard-to-reach communities near Behsood, Afghanistan — positively impacting over 100,000 lives.",
      "The Behsood Health Clinic opened in 2011 and serves about 40,000 people, with roughly 100 patients each day. Most are women and children, many walking several kilometers to reach care.",
      "With support from the Rotary Foundation, AWAKEN established the Maternal & Child Health Unit in 2016 — improving birthing outcomes in a region with extremely high maternal and infant mortality. Services include prenatal and postnatal care, delivery, and family planning for approximately 200 women each month.",
    ],
  },
  {
    slug: "healthcare/cancer-patients",
    title: "Cancer patients",
    subtitle: "Supporting patients who need specialized care beyond our clinic walls.",
    description:
      "AWAKEN helps connect and support cancer patients in need of treatment and compassionate care.",
    eyebrow: "Current program",
    imageKey: "healthcare",
    paragraphs: [
      "AWAKEN works to support Afghan women and families facing cancer with access to care, referrals, and community assistance where resources allow.",
      "More details about this program will be shared here as we continue to document current services and partnerships.",
    ],
  },
  {
    slug: "healthcare/neurokids-partnership",
    title: "Partnership with NeuroKids",
    subtitle: "Collaborating to expand neurological care for children in need.",
    description:
      "AWAKEN's partnership with NeuroKids supports children who need specialized neurological care.",
    eyebrow: "Current program",
    imageKey: "healthcare",
    paragraphs: [
      "Through partnership with NeuroKids, AWAKEN is working to improve access to neurological evaluation and care for Afghan children.",
      "Program details and impact stories will be added to this page soon.",
    ],
  },
  {
    slug: "education/scholarships",
    title: "Scholarships",
    subtitle: "University scholarships for graduates pursuing higher education.",
    description:
      "AWAKEN provides university scholarships covering tuition, room, board, and mentorship.",
    eyebrow: "Current program",
    imageKey: "education",
    paragraphs: [
      "Gross enrollment for Afghans attending university is below 10%; for women it is less than 5%. Each year AWAKEN provides scholarships to deserving graduates — both men and women — covering tuition, room, and board, along with mentorship for success.",
      "100+ students have graduated through our scholarship program, with more than $18,000 in scholarships provided per year to support students in need.",
    ],
  },
  {
    slug: "education/midwife-training",
    title: "Midwife training",
    subtitle: "Partnership with Friends of Afghanistan (FOA) to train life-saving midwives.",
    description:
      "Midwife training in Jalalabad equips women with maternal health skills to serve their communities.",
    eyebrow: "Current program",
    imageKey: "education",
    paragraphs: [
      "In partnership with Friends of Afghanistan and the United Service Foundation, AWAKEN is launching a Midwife Training Program in Jalalabad to equip women with life-saving maternal health skills.",
      "At a time when maternal mortality remains devastatingly high, trained midwives are essential to safe deliveries and healthier families across eastern Afghanistan.",
    ],
  },
  {
    slug: "education/homeschools",
    title: "Homeschools",
    subtitle: "Reaching rural children who cannot access a formal school building.",
    description:
      "AWAKEN supports home-school programs for children in remote villages across Behsood District.",
    eyebrow: "Current program",
    imageKey: "education",
    paragraphs: [
      "Many rural villages lack physical school buildings or safe routes for children — especially girls — to attend class. AWAKEN supports home-school programs that bring literacy and basic education into communities.",
      "These programs complement our work at Qala-e-Malakh School and expand opportunity for families far from established schools.",
    ],
  },
  {
    slug: "necessities/water-wells",
    title: "Water wells",
    subtitle: "Clean water and sanitation for rural communities in need.",
    description:
      "AWAKEN provides access to clean water and basic sanitation across Behsood District.",
    eyebrow: "Current program",
    imageKey: "water",
    paragraphs: [
      "Providing clean water and sanitation strengthens health, education, and livelihoods. AWAKEN is committed to water and sanitation at the communities and facilities we serve.",
      "AWAKEN has built water wells and hand-washing stations at the Behsood Health Clinic, Qala-e-Malakh School, and other program sites — powered in many cases by renewable solar energy.",
    ],
  },
  {
    slug: "necessities/entrepreneurship",
    title: "Entrepreneurship",
    subtitle: "Helping families build livelihoods and self-sufficiency.",
    description:
      "AWAKEN supports entrepreneurs launching small businesses in eastern Afghanistan.",
    eyebrow: "Current program",
    imageKey: "water",
    paragraphs: [
      "AWAKEN has supported entrepreneurs to launch ventures including a dental clinic and clothing store, promoting self-sufficiency for Afghan families.",
      "Additional entrepreneurship initiatives are documented here as programs continue to grow.",
    ],
  },
  {
    slug: "necessities/qurbani-ramadan",
    title: "Qurbani / Ramadan",
    subtitle: "Seasonal food support for families during Ramadan and Eid.",
    description:
      "AWAKEN provides Qurbani and Ramadan food assistance to families in need.",
    eyebrow: "Current program",
    imageKey: "water",
    paragraphs: [
      "During Ramadan and Eid al-Adha, AWAKEN distributes food and Qurbani meat to vulnerable families across Behsood District.",
      "These seasonal programs help families observe holy days with dignity and adequate nutrition.",
    ],
  },
  {
    slug: "necessities/widow-orphan-relief",
    title: "Widow & orphan relief",
    subtitle: "Supporting Afghanistan's most vulnerable women and children.",
    description:
      "Relief programs for widows and orphans affected by conflict and poverty.",
    eyebrow: "Current program",
    imageKey: "water",
    paragraphs: [
      "Conflict and economic hardship have left many Afghan widows and orphans without traditional support networks. AWAKEN provides relief including food, essentials, and connection to longer-term programs.",
      "Details on current widow and orphan relief efforts will be updated on this page.",
    ],
  },
  {
    slug: "necessities/emergency-food-services",
    title: "Emergency food services",
    subtitle: "Rapid food aid for families in crisis.",
    description:
      "Emergency food assistance for families affected by disaster, displacement, and hunger.",
    eyebrow: "Current program",
    imageKey: "water",
    paragraphs: [
      "AWAKEN provides emergency food aid when earthquakes, flooding, or economic crisis leave rural families without enough to eat.",
      "Recent relief efforts have included earthquake response supporting hundreds of families across Behsood District.",
    ],
  },
  {
    slug: "past/healthcare-history",
    title: "Healthcare program history",
    subtitle: "Two decades of clinics, maternal care, and community health in Behsood.",
    description:
      "A look back at AWAKEN's healthcare work in eastern Afghanistan.",
    eyebrow: "Past program",
    imageKey: "healthcare",
    paragraphs: [
      "Since 2011, AWAKEN's healthcare programs have grown from a single clinic to comprehensive maternal, child, and mobile health services reaching tens of thousands of patients each year.",
      "This page will document the history of AWAKEN's healthcare milestones, partnerships, and community impact.",
    ],
  },
  {
    slug: "past/education-history",
    title: "Education program history",
    subtitle: "From one village school to thousands of graduates.",
    description:
      "A look back at AWAKEN's education work in Afghanistan.",
    eyebrow: "Past program",
    imageKey: "education",
    paragraphs: [
      "AWAKEN founded Qala-e-Malakh School in 2004 when the village had no physical school building. The school has grown to serve thousands of students in grades 1–12 and has produced thousands of graduates.",
      "This page will capture the full history of AWAKEN's education programs, including early home schools and scholarship efforts.",
    ],
  },
  {
    slug: "past/necessities-history",
    title: "Necessities program history",
    subtitle: "Water, food relief, and livelihood support over the years.",
    description:
      "A look back at AWAKEN's necessities and relief work in Afghanistan.",
    eyebrow: "Past program",
    imageKey: "water",
    paragraphs: [
      "AWAKEN's necessities work has included clean water projects, seasonal food distribution, emergency relief, and support for widows and orphans across Behsood District.",
      "This page will document the history of these programs and their impact on Afghan families.",
    ],
  },
  {
    slug: "past/vocational-training",
    title: "Vocational training",
    subtitle: "Sewing, literacy, and hygiene programs for Afghan women.",
    description:
      "AWAKEN's vocational training program — now archived as a past program area.",
    eyebrow: "Past program",
    imageKey: "vocational",
    paragraphs: [
      "AWAKEN launched its vocational program in 2005. Each year, more than 60 women completed a six-month program in sewing, literacy, and hygiene. Graduates received a sewing machine, cloth, scissors, needles, and tailoring supplies.",
      "In 2017, AWAKEN launched Saheli Centers with Rotary International support, offering literacy, family planning education, and tailoring or computer skills. More than 500 women have graduated from vocational training through AWAKEN.",
    ],
  },
  {
    slug: "past/marrc",
    title: "MARRC",
    subtitle: "Muncie Afghan Refugee Resettlement Committee — mission completed.",
    description:
      "MARRC helped resettle Afghan refugees in East-Central Indiana (2021–2022).",
    eyebrow: "Past program",
    imageKey: "marrc",
    paragraphs: [
      "The Muncie Afghan Refugee Resettlement Committee (MARRC) was a subcommittee of AWAKEN. From September 2021 to October 2022, MARRC helped resettle over 120 Afghan refugees within East-Central Indiana through the support of the local community.",
      "MARRC completed its mission of six months of urgent resettlement assistance on October 31, 2022. Thank you to everyone who contributed time, resources, and welcome to Afghan families in Indiana.",
    ],
  },
  {
    slug: "past/rickshaw",
    title: "Rickshaw program",
    subtitle: "Livelihood support through rickshaw grants.",
    description:
      "AWAKEN's rickshaw program helped families earn income through transportation.",
    eyebrow: "Past program",
    imageKey: "water",
    paragraphs: [
      "AWAKEN's rickshaw program provided vehicles to help Afghan families generate income and support their households.",
      "Historical details and impact from this program will be added to this page.",
    ],
  },
  {
    slug: "past/mobile-clinic",
    title: "Mobile clinic",
    subtitle: "Reaching remote villages with vaccines and essential care.",
    description:
      "AWAKEN's mobile health clinic served remote villages across Behsood District.",
    eyebrow: "Past program",
    imageKey: "healthcare",
    paragraphs: [
      "Launched in April 2019, the mobile clinic reached remote villages with a five-person staff, traveling five days a week. Services included screenings and life-saving vaccines for 2,000+ people per month across 10+ villages.",
      "Nearly 75% of Afghans live in rural areas with poor infrastructure — the mobile clinic brought care to families who could not reach the Behsood Health Clinic.",
    ],
  },
  {
    slug: "past/disaster-relief",
    title: "Disaster relief",
    subtitle: "Earthquake and emergency response for Afghan families.",
    description:
      "AWAKEN's disaster relief efforts for earthquakes and humanitarian crises.",
    eyebrow: "Past program",
    imageKey: "water",
    paragraphs: [
      "AWAKEN has responded to earthquakes and other emergencies with food, shelter materials, and direct aid for families in crisis across Behsood District.",
      "Recent earthquake relief provided tens of thousands of dollars in aid to hundreds of families. Historical disaster response efforts will be documented on this page.",
    ],
  },
];

const pageBySlug = new Map(ourWorkPages.map((page) => [page.slug, page]));

export function getOurWorkPage(slug: string): OurWorkPage | undefined {
  return pageBySlug.get(slug);
}

export function allOurWorkSlugs(): string[] {
  return ourWorkPages.map((page) => page.slug);
}
