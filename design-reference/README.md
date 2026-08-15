# ICONO Stitch UI References

This directory preserves the original Stitch-generated UI exports supplied for the ICONO website. They are visual and layout references only; the production Next.js application lives at the repository root.

## Exports

| File | Reference screen |
| --- | --- |
| `stitch-exports/home-editorial.html` | Primary editorial homepage concept |
| `stitch-exports/about-founder-story.html` | About and founder-story concept |
| `stitch-exports/services-overview.html` | Services overview concept |
| `stitch-exports/gallery-selected-work.html` | Gallery and selected-work concept |
| `stitch-exports/home-design-system-variant.html` | Consolidated homepage/design-system variant |
| `stitch-exports/service-hair-detail.html` | Hair service-detail concept |
| `stitch-exports/service-hair-final-approved.html` | Final approved Hair service-page reference |
| `stitch-exports/about-founder-variant.html` | Alternate founder/About export |

## Important

- These files intentionally retain the original generated HTML, Tailwind CDN configuration, temporary image URLs, and duplicate design explorations.
- Generated business claims, credentials, prices, addresses, opening hours, reviews, and links are not verified client facts.
- Do not copy placeholder content into production without client approval.
- Temporary editorial imagery must not be described as authentic ICONO work or photographs of the actual studio.
- Shared production components and verified/placeholder-safe content are maintained separately in the Next.js application.

## Viewing the references

No dependency installation or build step is required for these standalone exports. Open any file in `stitch-exports/` directly in a browser. An internet connection is needed because the original exports use Tailwind CDN, Google Fonts, and temporary remote images.

The repository-level `requirements.txt` documents the runtime prerequisites for the production Next.js application. Node dependencies are installed with npm, not pip.

## Brand assets

| File | Purpose |
| --- | --- |
| `brand-assets/icono-logo-original-white-on-black.svg` | Unmodified official SVG supplied by the client; used on dark surfaces |
| `brand-assets/icono-logo-navbar-dark-on-floral.svg` | Navbar derivative using the original vector paths in Smoky Black on Floral White |

The navbar derivative removes the solid background path, changes the light artwork fill to `#11120D`, and uses the navbar's Floral White `#FFFBF4` for the original counter/knockout paths inside the lettering. It does not recreate or alter the logo letterforms.

## Brochure source

The photographed brochure pages supplied by the client are preserved in `brochure/`, ordered and named by content. They are source references for the service catalogue, not production website imagery.

Some printed benefit language makes medical or guaranteed claims. The website uses conservative cosmetic descriptions instead of reproducing claims about curing acne, treating melasma, preventing wrinkles, or guaranteeing outcomes. Opening hours, additional phone numbers, and credential wording printed in the brochure remain unpublished until separately confirmed as current.
