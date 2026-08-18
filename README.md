# ICONO Beauty World & Makeover Studio

Production website for **ICONO Beauty World & Makeover Studio**, Karicode, Kollam. The site is a premium, editorial, information-first experience that helps visitors discover services, view ICONO's work, learn about founder Ms. Revathy, and start an appointment enquiry through WhatsApp.

Live site: [iconomakeoverstudio.in](https://iconomakeoverstudio.in)

## Project scope

- Next.js App Router frontend; there is no application backend or database.
- Appointment enquiries are prepared in the visitor's browser and opened in WhatsApp. The site does not receive or store the form submission.
- Service information is intentionally **price-free**. Do not add prices, placeholders, pricing tables, “starts from,” or price-on-consultation copy unless the client explicitly approves a future pricing feature.
- Authentic founder and portfolio photography must remain distinguishable from editorial imagery.
- Preserve the approved luxury editorial design, responsive layouts, copy, imagery, and interactions unless a change is specifically requested.

## Technology

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 3 plus global CSS
- ESLint and Prettier
- OpenNext for Cloudflare
- Cloudflare Workers and static assets

Node.js `>=20.9.0` and npm `>=10.0.0` are required. Runtime requirements belong in `package.json`; this frontend does not use Python and must not have a root `requirements.txt`.

## Local setup

```bash
git clone <repository-url>
cd icono
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set the local environment value as follows:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Do not commit `.env.local` or any other `.env` file. `.env.example` is the only environment template intended for version control.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server using webpack |
| `npm run build` | Create a production Next.js build; the postbuild step generates the OpenNext bundle |
| `npm run start` | Run the built Next.js application locally |
| `npm run lint` | Run ESLint across the repository |
| `npm run typecheck` | Run TypeScript checks without emitting files |
| `npm run format` | Format application and configuration files |
| `npm run format:check` | Check formatting without changing files |
| `npm run preview` | Build and preview the OpenNext Cloudflare output |
| `npm run deploy` | Build and deploy through OpenNext/Wrangler |

Before handing over or merging a meaningful change, run:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Use `npm audit` when dependencies change. Review major-version upgrades separately instead of applying them blindly.

## Repository structure

```text
app/                         Routes, metadata routes, favicon and global styles
  services/[slug]/           Shared dynamic service-page route
components/
  home/                      Homepage sections and appointment enquiry UI
  layout/                    Navbar and footer
  policy/                    Shared legal/supporting-page layout
  services/                  Reusable service-page sections
  shared/                    Logo, buttons, icons and labels
data/                        Editable business, service, gallery and policy content
lib/                         SEO and WhatsApp URL/message helpers
public/brand/                Production logo assets
public/images/editorial/     Editorial and founder imagery
public/images/work/          Authentic portfolio photography
public/images/brands/        Product-brand logos used by the marquee
public/images/social/        Open Graph/social preview images
design-reference/            Approved reference material; not served by the app
next.config.mjs              Next.js, redirects and response security headers
open-next.config.ts          OpenNext adapter configuration
wrangler.jsonc               Cloudflare Worker and asset configuration
icono-website-current-plan.md Historical product and visual-direction notes
```

## Routes

- `/` — homepage
- `/about` — Ms. Revathy and the ICONO story
- `/explore` — service discovery
- `/services/[slug]` — individual service categories
- `/gallery` — portfolio
- `/contact` — contact details and enquiry path
- `/privacy-policy`, `/terms-and-conditions`, `/disclaimer`, `/appointment-policy`, `/accessibility` — supporting pages
- `/robots.txt` and `/sitemap.xml` — generated SEO routes

Current service slugs are defined by `ServicePageData` in `data/services.ts`. Never hardcode a second copy of the service catalogue inside a component.

## Editing business information

`data/business.ts` is the single source of truth for business and owner names, contact channels, social profiles, address, map data, opening hours, and the canonical site URL.

Verify changes with the client before publishing. WhatsApp numbers must use country code plus digits only, with no `+`, spaces, or punctuation. The currently published owner name is **Ms. Revathy**, and the listed opening time is **9:00 AM–7:00 PM**.

The footer contains developer LinkedIn credits. Keep them only while the client has approved public attribution.

## Editing services

All catalogue content is in `data/services.ts` and uses this shape:

```ts
type ServiceItem = {
  name: string;
  description: string;
  pendingConfirmation?: boolean;
};

type ServiceCategory = {
  title: string;
  description?: string;
  items: ServiceItem[];
};
```

Guidelines:

- Publish only services supported by client-provided material or direct confirmation.
- Keep descriptions factual; avoid medical or guaranteed-result claims.
- Do not add pricing fields or render prices.
- Keep every enquiry CTA price-free and routed through the shared WhatsApp helpers.
- When adding a service page, add accurate metadata. `app/sitemap.ts` consumes the shared `services` array automatically.

## WhatsApp enquiry flow

`components/home/AppointmentEnquiry.tsx` collects name, phone, service, preferred date, preferred time, and message. `lib/whatsapp.ts` sanitizes control characters, normalizes whitespace, applies length limits, URL-encodes the message, and opens a `wa.me` URL.

No form data is posted to ICONO infrastructure. If a future maintainer adds a backend, review the privacy policy, server-side validation, data retention, rate limiting, abuse protection, and Cloudflare configuration before release.

## Images and brand assets

- Production photography is stored as compressed WebP.
- Preserve meaningful `alt` text and avoid cropping faces or essential work details.
- Keep source/reference material out of `public/`; anything in `public/` is directly downloadable.
- Update centralized paths in `data/images.ts` instead of scattering filenames through components.
- The navbar and footer logo variants live in `public/brand/`. Preserve transparency inside both “o” letterforms.
- `next.config.mjs` currently sets `images.unoptimized: true` because Cloudflare's image route previously returned the same bytes with extra latency. For further optimization, generate responsive WebP sizes at build time and use `srcset`/`sizes` rather than simply re-enabling that runtime optimizer.

When replacing an image, use a new descriptive filename if browser or CDN caching could retain the old asset. Check both mobile and desktop layouts after every replacement.

## SEO and deployment environment

The only application environment variable is:

```env
NEXT_PUBLIC_SITE_URL=https://iconomakeoverstudio.in
```

The exact variable name matters. In Cloudflare, configure it as a **build variable**, because Next.js inlines `NEXT_PUBLIC_*` values during compilation. Trigger a new build after changing it.

The production value controls canonical URLs, Open Graph URLs, sitemap URLs, and the indexing guard. When the value is absent or points to localhost, `robots.txt` intentionally disallows indexing.

After a production deployment, verify:

```text
https://iconomakeoverstudio.in/
https://iconomakeoverstudio.in/robots.txt
https://iconomakeoverstudio.in/sitemap.xml
```

Confirm that `robots.txt` allows crawling, sitemap entries use the production domain, and page-source canonical URLs use the same origin.

## Cloudflare deployment

The application is adapted with `@opennextjs/cloudflare`. `wrangler.jsonc` points to `.open-next/worker.js` and publishes `.open-next/assets` through the `ASSETS` binding.

Cloudflare build settings should use:

- Build command: `npm run build`
- Node.js: a supported version satisfying `package.json` (Node 20 or newer)
- Build variable: `NEXT_PUBLIC_SITE_URL=https://iconomakeoverstudio.in`
- Output/deployment: the generated OpenNext Worker configuration

Do not introduce a Python dependency-install step. A root `requirements.txt` makes Cloudflare attempt `pip install` and breaks this frontend deployment.

Dashboard checks after DNS or domain changes:

- Force HTTPS and confirm the certificate is active.
- Enable Browser Integrity Check.
- Consider Bot Fight Mode based on observed traffic.
- Restrict or prevent indexing of preview deployments.
- Enable HSTS only after HTTPS works reliably across the intended domain and subdomains.

## Security notes

Security headers are configured in `next.config.mjs`, including Content Security Policy, MIME sniffing protection, referrer policy, permissions policy, and clickjacking protection. When adding a third-party resource, update CSP only for the exact required origin and retest fonts, maps, images, and client-side navigation.

Repository rules:

- Never commit API tokens, Cloudflare credentials, private keys, `.env` files, customer enquiry data, or unpublished client documents.
- `NEXT_PUBLIC_*` variables are visible to browsers and must never contain secrets.
- Use `rel="noopener noreferrer"` for external links opened in a new tab.
- Keep user-controlled text encoded through the shared helpers; do not build raw HTML from enquiry data.
- Run `npm audit`, lint, type checking, and a production build before release.

## Making the repository public

The current tracked files contain no detected secret or private-key pattern, and `.env*` files are ignored except for `.env.example`. That alone does **not** make every asset suitable for public distribution.

Before changing repository visibility, obtain or confirm permission for:

- ICONO logos and other brand assets;
- Ms. Revathy's portraits and biography;
- client/portfolio photographs, including consent from identifiable people;
- third-party product-brand logos;
- the scanned salon brochure in `design-reference/brochure/`;
- developer attribution and client-provided copy;
- AI-generated or licensed images under their applicable terms.

The repository currently has no open-source licence. Without one, public visitors can view and fork it through the hosting platform, but they are not automatically granted permission to reuse the code or assets. If the code is intentionally open-sourced, add a suitable code licence and keep proprietary photography, brochure scans, and brand assets under a separate explicit asset notice—or remove those source/reference assets from the public repository.

Inspect the complete Git history before publication. Deleting a file in a new commit does not remove it from earlier commits. Rotate any credential that was ever committed, even if it is no longer present in the working tree.

## Collaboration workflow

Before starting work:

```bash
git fetch --all --prune
git status
git branch -a -vv
git pull --ff-only
```

Use a short-lived feature branch, keep commits focused, and avoid committing generated directories such as `.next`, `.open-next`, `node_modules`, `.wrangler`, or TypeScript build metadata. Do not overwrite unrelated work in a dirty working tree. Pull and review collaborator changes before editing overlapping files.

Suggested handover checklist:

1. Confirm business details and service copy against current client material.
2. Test navigation, dropdowns, appointment controls, and logo-to-home behavior on mobile and desktop.
3. Test WhatsApp, phone, email, Instagram, and Google Maps links.
4. Run lint, type checking, production build, and dependency audit.
5. Preview the Cloudflare build and inspect browser console/network errors.
6. Verify HTTPS, security headers, canonical metadata, `robots.txt`, and `sitemap.xml` on the deployed domain.
7. Check key images at narrow mobile, tablet, and desktop widths.

## Known maintenance priorities

- Mobile performance is most sensitive to hero and service-image transfer size. Prefer responsive, pre-generated image variants.
- Keep `NEXT_PUBLIC_SITE_URL` synchronized with the canonical production domain.
- Recheck Content Security Policy whenever a new external service is introduced.
- Treat `design-reference/` as potentially private client source material rather than ordinary production assets.
