import manifest from "./images-manifest.json";
import {
  curatedAnnualLetterIllustrationPath,
  curatedAnnualLetterPhotoPath,
  curatedBodyImagePath,
  curatedHeroForManifestSlug,
  curatedSiteLogoPath,
} from "./page-image-curation";

/** All paths come from `scripts/download-images.mjs` → `lib/images-manifest.json` */
export const siteImages = {
  logo: curatedSiteLogoPath(),
  /** Single static hero on the homepage (matches live site). */
  homeHero: curatedHeroForManifestSlug(manifest, "home"),
  /** Family photo on the homepage annual-letter promo card. */
  annualLetterPhoto: curatedAnnualLetterPhotoPath(manifest),
  /** AWAKEN figures wordmark shown beside the annual letter copy. */
  annualLetterIllustration: curatedAnnualLetterIllustrationPath(manifest),
  heroSlides: manifest.heroSlides,
  education: {
    hero: curatedHeroForManifestSlug(manifest, "education"),
    body: {
      graduates: curatedBodyImagePath(
        manifest,
        "education",
        ["530743a33b89", "afg_grads"],
        "/images/assets/bf4bacc41d5b50a18d10.jpg",
      ),
      scholarships: curatedBodyImagePath(
        manifest,
        "education",
        ["8748cb5a867b"],
        "/images/assets/997fc7f6d8d363dff769.jpg",
      ),
    },
  },
  healthcare: {
    hero: curatedHeroForManifestSlug(manifest, "healthcare"),
    body: {
      clinic: curatedBodyImagePath(
        manifest,
        "healthcare",
        ["3e5804e57e934", "dsc00404", "0c4c84a34e634", "img_6972"],
        "/images/assets/bfb7e150bbee1ae2550c.jpg",
      ),
      maternal: curatedBodyImagePath(
        manifest,
        "healthcare",
        ["458656a829dc", "img_8776"],
        "/images/assets/4b91df51ebb36a2efbbe.jpg",
      ),
      mobile: curatedBodyImagePath(
        manifest,
        "healthcare",
        ["520f1ef2f557", "awaken_healthcare", "86034cd70f7d"],
        "/images/assets/7b9d331a479372eb0c92.jpg",
      ),
    },
  },
  vocational: {
    hero: curatedHeroForManifestSlug(manifest, "vocational-training"),
    body: {
      sewingHandoff: curatedBodyImagePath(
        manifest,
        "vocational-training",
        ["qluo3485", "308f22f2fccc"],
        "/images/assets/91cc7fb5c27b8288f20d.jpg",
      ),
      trainingClass: curatedBodyImagePath(
        manifest,
        "vocational-training",
        ["a0bc076eb38f"],
        "/images/assets/61d8e70eecdd2459dc96.jpg",
      ),
    },
  },
  water: {
    hero: curatedHeroForManifestSlug(manifest, "clean-water-sanitation"),
    body: {
      waterProject: curatedBodyImagePath(
        manifest,
        "clean-water-sanitation",
        ["43b73ec58cbb", "water3"],
        "/images/assets/a9977fc5c6a88ee8be31.jpg",
      ),
      fieldWork: curatedBodyImagePath(
        manifest,
        "clean-water-sanitation",
        ["b57af8ddb4a9", "dsc02106"],
        "/images/assets/b9e8740eff7614aa0f1f.jpg",
      ),
    },
  },
  marrc: {
    hero: curatedHeroForManifestSlug(manifest, "marrc"),
  },
  donate: {
    hero: curatedHeroForManifestSlug(manifest, "donate"),
  },
  contact: {
    hero: curatedHeroForManifestSlug(manifest, "contact"),
  },
  foundersStory: {
    hero: curatedHeroForManifestSlug(manifest, "founders-story"),
  },
  ourTeam: {
    hero: curatedHeroForManifestSlug(manifest, "our-team"),
  },
  gallery: {
    hero: curatedHeroForManifestSlug(manifest, "gallery"),
  },
  reports: {
    hero: curatedHeroForManifestSlug(manifest, "reports"),
  },
  endOfYearLetter2025: {
    hero: curatedHeroForManifestSlug(manifest, "end-of-year-letter-2025"),
  },
  dinner: {
    hero: curatedHeroForManifestSlug(manifest, "dinner"),
  },
  news: {
    hero: curatedHeroForManifestSlug(manifest, "news"),
  },
} as const;
