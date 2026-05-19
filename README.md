# AWAKEN site (Next.js)

Nonprofit site rebuilt with **Next.js 14** (App Router), **Tailwind CSS**, and **shadcn/ui** components. Content and routes mirror [awakeninc.org](https://www.awakeninc.org) so you can host independently (e.g. **Vercel**).

## Scripts

- `npm run dev` — local development
- `npm run build` / `npm start` — production
- `npm run download-images` — crawl live Wix pages, dedupe downloads into **`public/images/assets/`**, and regenerate **`lib/images-manifest.json`** (per-page URL lists, logo, hero picks, home slideshow). Run after content changes on the legacy site.

## Email list & contact form

- `POST /api/subscribe` — `{ "email": "...", "source": "..." }`
- `POST /api/contact` — `{ "name": "...", "email": "...", "message": "..." }`

**Local:** submissions append to `data/subscribers.json` and `data/messages.json` (gitignored).

**Vercel:** the filesystem is not persisted between invocations — requests succeed but only log to **Function Logs**. Connect Mailchimp, Resend, or a DB when you’re ready.

## Donations

Primary Givebutter campaign URL is set in `lib/constants.ts` (`siteConfig.givebutter.campaignUrl`). The legacy widget id is noted on the donate page for optional embed code from Givebutter.

## Images

- **Canonical files:** `public/images/assets/<hash>.<ext>` (deduplicated; same URL never stored twice).
- **Mapping:** `lib/images-manifest.json` lists every Wix URL, `byPage` (which images appeared on which route), auto-picked **heroes** per page, **logo**, and **heroSlides** for the home carousel.
- **App usage:** [`lib/site-images.ts`](lib/site-images.ts) reads the manifest; gallery and education grids use `byPage` from the same JSON.
- **Legacy folder:** `public/images/downloaded/` may remain from an older script; new runs use **assets** + manifest only.
