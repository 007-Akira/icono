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
