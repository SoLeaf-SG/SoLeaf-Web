# SoLeaf — Corporate Website

The official corporate website of **SoLeaf LLP** (UEN T26LL1129K) is [tyllage.com](https://tyllage.com).
SoLeaf is a Singapore-registered AgriTech software company established in October 2026.
Its mission is to make the commercial side of farming easier to manage with practical software.

> **Proprietary software. © 2026 SoLeaf LLP. All rights reserved.**
> This repository is not open source. Being able to see it on GitHub does not give you permission to
> copy, use, run, modify, deploy or redistribute any part of it, including its code, content, design
> and brand assets. Outside contributions are not accepted. See [LICENSE](LICENSE).

The site introduces SoLeaf, its team, its technology approach and its flagship product,
**Evercrop by SoLeaf**. Evercrop’s product tagline is “Beyond the first harvest.”

- **Stack:** React 18, TypeScript, Vite, React Router, Lucide React and custom CSS.
- **Rendering:** Page HTML and metadata are prerendered at build time and hydrated in the browser.
- **Hosting architecture:** Amazon S3 + CloudFront, with build and deployment through GitHub Actions.
- **Enquiries:** Email drafts by default, with optional direct submissions to a separately configured API.

## Contents

- [Project status](#project-status)
- [Quick start](#quick-start)
- [Pages and features](#pages-and-features)
- [Editing content](#editing-content)
- [Domain](#domain)
- [Contact form and enquiry backend](#contact-form-and-enquiry-backend)
- [Project structure](#project-structure)
- [Styling conventions](#styling-conventions)
- [SEO, accessibility and responsiveness](#seo-accessibility-and-responsiveness)
- [Deployment: AWS S3 + CloudFront](#deployment-aws-s3--cloudfront)
- [Architecture note](#architecture-note)
- [License and ownership](#license-and-ownership)

---

## Project status

**Evercrop** is SoLeaf's proprietary farm sales software in development. Its proposed MVP
would receive WhatsApp enquiries through a planned WhatsApp Business API integration, use AI to
interpret requests, verify stock and buyer-specific prices, capture structured orders and route
exceptions to farm staff. A dashboard would surface orders for fulfilment. Customer records and
repeat-buyer engagement are longer-term directions.

An earlier proof of concept explored harvest pre-orders and learning-journey enquiries using demo
data in the MEOD Farm context. ComCrop was an earlier exploratory concept. The full Evercrop MVP,
the messaging integration and commercial deployments remain unconfirmed.


---

## Quick start

Requires **Node.js 20 or newer** (CI uses Node 22).

```bash
npm ci
npm run dev          # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload (client-side rendering only). |
| `npm run lint` | ESLint, including React Hooks and `jsx-a11y` accessibility rules. |
| `npm run typecheck` | TypeScript project check. |
| `npm run build` | Typecheck → client build → SSR build → prerender all pages into `dist/`. |
| `npm run preview` | Serve `dist/` locally with the same clean-URL rules as CloudFront. |
| `npm run og-image` | Re-render `public/images/og-image.png` from `src/assets/og-image.svg` and the official logo. |
| `npm run brand-assets` | Regenerate the web-sized logo and favicon files from `public/logo/2.png`. |

Before pushing, run `npm run lint` and `npm run build`. CI runs the same checks on every pull request
and every push to `main`.

---

## Pages and features

| Route | Page |
| --- | --- |
| `/` | Corporate homepage, company mission and introduction to Evercrop |
| `/about` | Company story, founders, leadership and mission |
| `/platform` | Evercrop product page, proposed order workflow and development status |
| `/projects` | Evercrop development and the earlier MEOD-context prototype |
| `/technology` | SoLeaf’s engineering and AI approach, illustrated through Evercrop’s proposed architecture |
| `/contact` | Enquiries, email, social profiles and registered business details |
| `/privacy`, `/terms` | Privacy Policy and Terms of Use |
| Any other URL | 404 page (`noindex`) |

Site-wide: responsive navigation with a mobile menu, a back-to-top button that appears after scrolling,
scroll-reveal animations, page transitions and hover effects, all of which respect reduced-motion
settings.

---

## Editing content

All company facts live in data files, so most updates don't need component changes.

| File | Contains |
| --- | --- |
| `src/data/company.ts` | Company and product brand, UEN, contact details, mission, founders, team and production domain. |
| `src/data/platform.ts` | Evercrop workflow and development-stage labels. |
| `src/data/projects.ts` | Historical projects and whether each appears publicly. |
| `src/data/media.ts` | Image slots: which illustrated scene or approved photo each section shows. |
| `src/data/seo.ts` | Page metadata and structured data linking SoLeaf LLP to Evercrop. |
| `src/data/navigation.ts` | Main navigation items. |

### Before publishing

- **UEN:** `T26LL1129K` is shown in the footer, Contact page and structured data. Check it against the
  latest ACRA Business Profile before each publication. Invoices and official correspondence also need
  the LLP's legally required details; this website doesn't handle those.
- **Development stages:** Confirm scope and status before revising Evercrop or prototype claims.
- **Founders' story:** the story on the About page is the founders' editable draft. Edit it in
  `src/pages/About.tsx`. Don't add personal details, schools or achievements that haven't been confirmed.
- **Founder profiles:** each founder has `bio`, `linkedin` and `photo` fields in `company.ts`. Until a
  photo is added, the card shows initials. Use real, approved photos only, never
  AI-generated or stock portraits.

### Team members

The About page's **Our team** section is a horizontally scrollable gallery
(`src/components/TeamGallery.tsx`). It shows the founders first, marked "Founder", then everyone in the
`team` list in `src/data/company.ts`, in that order. When the cards don't all fit, previous/next buttons
appear, the row snaps card by card, and the edge with more cards beyond it fades. Visitors can also
swipe or use the arrow keys.

Each member needs a `name`. `role` (leave it out until confirmed), `focus` (one line on what they work
on), `linkedin` and `photo` are optional:

Add people only with their agreement, using the name and role they want shown. Members without a photo
show their initials. Put photos in `public/images/team/`; they are cropped to a square.

### Hidden workstreams

ComCrop is kept in `src/data/projects.ts` with `public: false`. Pages, the footer and metadata only use
`publicProjects`, so it doesn't appear anywhere on the site. Set `public: true` to show it again.

### Content principles

The site intentionally contains **no** customer counts, metrics, awards, testimonials, partnership
claims, endorsements, follower counts or embedded social feeds. Every product is labelled with its real
stage, and farm challenges are presented as hypotheses still being validated. Please keep it that way:
credibility with farms, partners and innovation audiences depends on it.

### Logo

The current logo asset is `public/logo/2.png` and still carries the previous wordmark. The site uses
small derivatives for speed (`tyllage-logo-96.webp`, favicons, `apple-touch-icon.png`)
and keeps `/logo/2.png` as the fallback. It is shown at 44 px directly on the background, on light and
dark sections alike. After replacing the logo, run `npm run brand-assets` and `npm run og-image`.

### Photography and illustrations

Until approved photographs are available, every image slot shows an **illustrated scene**
(greenhouse, hydroponic rows, leafy greens, harvest crates or seedling trays), drawn in
`src/components/Scene.tsx`. They are clearly artwork, so they never misrepresent a real farm. In
production builds each scene is written to `dist/images/scenes/<name>.svg` and loaded as a cached
image, which keeps the page HTML small.

To use a photo, add an optimised file (WebP or AVIF, about 1600 px wide, under about 300 KB) to
`public/images/` and set the slot in `src/data/media.ts`:

```ts
hero: {
  scene: 'greenhouse',
  photo: { src: '/images/hero-greenhouse.webp', alt: 'Rows of leafy greens in a hydroponic greenhouse', credit: 'Photo: …' },
},
```

Slots without a photo keep their illustration, so photos can be added one at a time. Use only photos
SoLeaf owns or has licensed, and record the credit. Never present generic stock photos as MEOD Farm or
another real facility. Use MEOD photographs and branding only with permission.

---

## Domain

The official website and production canonical domain are **https://tyllage.com**. The build uses it
for canonical URLs, Open Graph metadata, structured data, `robots.txt` and `sitemap.xml`.
`VITE_SITE_URL` can override the URL for local or temporary builds. CI pins the official canonical
domain. The CloudFront Function contains a redirect for the intended `www.tyllage.com` alias.
Verify DNS, certificate coverage and the deployed redirect separately.

---

## Contact form and enquiry backend

`src/components/ContactForm.tsx` validates every field in the browser (required fields, email format,
length limits, consent) and shows an accessible error summary.

- **No valid endpoint configured (default):** the form works as an **email-draft flow**. It is labelled
  "This form prepares an email". A valid submission opens the visitor's email app with the enquiry
  pre-filled and addressed to soleaf.co@gmail.com, and the page says plainly that **nothing has been
  sent** until they press Send. It never shows a fake success message.
- **Valid endpoint configured:** the form discloses direct submission and sends JSON to `VITE_CONTACT_ENDPOINT`.
  The payload includes the enquiry, consent, timestamp and source page. The form reports success
  on a 2xx response. A timeout or network error leaves the enquiry in the form for retry.

`VITE_CONTACT_ENDPOINT` accepts a public HTTPS URL or a same-origin absolute path (such as `/api/enquiry`). Local loopback HTTP is accepted by the development server.

To connect a backend (for example AWS API Gateway → Lambda → SES or DynamoDB):

1. Deploy an HTTPS endpoint that accepts the `EnquiryPayload` shape defined in `src/services/enquiry.ts`.
2. In the backend, re-validate every field server-side, reject requests where the honeypot field
   `website` is filled in, add rate limiting (API Gateway throttling or AWS WAF), and allow CORS from
   the production domain only.
3. Set the URL at build time. Copy `.env.example` to `.env.local` for local work, and add
   `VITE_CONTACT_ENDPOINT` as a GitHub **repository variable** for CI.

> `VITE_` variables are embedded in the public JavaScript bundle. Use them only for public URLs.
> Never put API keys, AWS credentials or other secrets in frontend environment variables.

Before enabling direct submissions in production, founders should confirm the live submission mode,
service providers, storage and retention, access practices, any cross-border handling, and the contact
for privacy requests. Align the Privacy Policy with those decisions.

---

## Project structure

```
├── .github/workflows/deploy.yml   CI (lint + build) and deploy (main → S3 + CloudFront)
├── infra/cloudfront-url-rewrite.js CloudFront Function: clean URLs + www → apex redirect
├── public/                         Copied as-is: logo/ (official logo + favicons), images/
├── scripts/
│   ├── prerender.mjs               Prerenders pages; writes scene images, sitemap.xml, robots.txt
│   ├── generate-brand-assets.mjs   Logo → web-sized logo and favicon files
│   └── generate-og-image.mjs       SVG + logo → PNG Open Graph image
├── src/
│   ├── assets/                     Source artwork (og-image.svg)
│   ├── components/                 Navbar, Footer, Hero, Logo, Media, Scene, TeamGallery, ScrollToTop, …
│   ├── data/                       Company, platform, projects, media, SEO and navigation content
│   ├── hooks/                      usePageMeta (head tags), useReveal (scroll animations)
│   ├── pages/                      Home, About, Platform, Projects, Technology, Contact, Legal, NotFound
│   ├── services/enquiry.ts         Enquiry submission client
│   ├── App.tsx                     Routes
│   ├── entry-server.tsx            Build-time renderer and head-tag generation
│   ├── main.tsx                    Client entry (hydrates prerendered HTML)
│   └── index.css                   All custom CSS
├── index.html                      HTML template
└── vite.config.ts
```

---

## Styling conventions

All custom CSS lives in `src/index.css`. No CSS framework is used.

- **Design tokens** (colours, fonts, radii, shadows, spacing) are CSS variables in `:root` at the top
  of the file. The palette is Forest Green `#173D32`, Deep Green `#102D24`, Botanical Green `#2D6A4F`,
  Sage `#A9C4AE`, Soft Ivory `#F7F8F3`, Warm Beige `#EDEBDD`, White and Charcoal `#171C19`.
- **Typography:** Manrope for headings, Inter for body text, and Fraunces italic for editorial accents
  (`.serif-accent`).
- **Class names** follow a block–element pattern, for example `.project-card__title`.
- **Base resets** use `:where()`, so they carry no specificity and component classes always override them.
- **Layout:** shared containers, section styles and grid layouts are defined in `src/index.css`.

---

## SEO, accessibility and responsiveness

- Each page has its own `<title>`, meta description, canonical URL, Open Graph and Twitter tags. These
  are **written into the static HTML** at build time, so crawlers and link previews see them without
  running JavaScript. `usePageMeta` keeps them in sync during client-side navigation.
- An `Organization` JSON-LD block is included on every page and identifies Evercrop as a SoLeaf LLP product. `sameAs` lists only the social profiles
  that are configured (LinkedIn and Instagram), and the UEN is included as an identifier.
- `robots.txt` and `sitemap.xml` are generated at build time for the configured domain. The 404 page is
  marked `noindex`.
- Semantic landmarks, a skip link, visible keyboard focus, keyboard-operable navigation (Escape closes
  the mobile menu), labelled form controls with `aria-invalid` and `aria-describedby`, and screen-reader
  notes on links that open in a new tab.
- `prefers-reduced-motion` disables scroll reveals, page transitions, hero motion and hover zoom, and
  makes the back-to-top button jump instead of scrolling smoothly. Content is fully visible without
  JavaScript.
- Check responsive layouts, keyboard navigation and the contact form in a local preview before publishing.

---

## Deployment: AWS S3 + CloudFront

The build output in `dist/` is a set of static files:

```
dist/index.html            → https://tyllage.com/
dist/about/index.html      → https://tyllage.com/about
dist/404.html              → served for unknown URLs
dist/assets/*              → fingerprinted JS/CSS (safe to cache for a year)
dist/images/scenes/*.svg   → illustrated scenes
```

### AWS setup reference

Verify the live distribution, certificate, DNS and alias before changing a deployment.

1. **S3 bucket** (e.g. `tyllage-website`): Block Public Access **on**, static website hosting **off**.
   CloudFront reads from it privately.
2. **ACM certificate** in **us-east-1** for `tyllage.com` and `www.tyllage.com` (DNS validation).
3. **CloudFront Function:** create one from `infra/cloudfront-url-rewrite.js` (runtime
   `cloudfront-js-2.0`) and publish it. It rewrites `/about` → `/about/index.html` and redirects
   `www` to the apex domain.
4. **CloudFront distribution:**
   - Origin: the S3 bucket's REST endpoint, with **Origin Access Control (OAC)**. Apply the bucket
     policy CloudFront generates.
   - Viewer protocol policy: *Redirect HTTP to HTTPS*. Allowed methods: GET, HEAD.
   - Cache policy: *CachingOptimized*. Compression: on.
   - Function association: the function from step 3 on **Viewer request**.
   - Default root object: `index.html`.
   - Alternate domain names: `tyllage.com`, `www.tyllage.com`, with the ACM certificate.
   - Custom error responses: **403 → `/404.html` (response code 404)** and **404 → `/404.html`
     (response code 404)**. Without `s3:ListBucket`, S3 returns 403 for missing objects.
   - Recommended: attach the managed *SecurityHeadersPolicy* response headers policy (HSTS,
     `X-Content-Type-Options`, frame options, referrer policy).
5. **DNS:** point `tyllage.com` and `www.tyllage.com` at the distribution (Route 53 alias A/AAAA
   records, or CNAME/ALIAS at your DNS provider).

### GitHub Actions (OIDC, no stored AWS keys)

> **Organisation policy:** the GitHub organisation hosting this repository allows only actions created
> by GitHub or owned by that organisation, and every action must be pinned to a full-length commit SHA. A workflow that
> breaks either rule ends in **Startup failure** before any job runs. When updating
> `.github/workflows/deploy.yml`, keep each `uses:` pinned (for example
> `actions/checkout@<40-character SHA> # v4.4.0`) and don't add third-party actions. AWS sign-in
> uses the AWS CLI that's preinstalled on GitHub's runners instead of `aws-actions/configure-aws-credentials`.

1. In IAM, add GitHub's OIDC identity provider (`token.actions.githubusercontent.com`) with the
   audience `sts.amazonaws.com`.
2. Create a role that trusts it, restricted to this repository's `main` branch:
   `"token.actions.githubusercontent.com:sub": "repo:Tyllage/Tyllage-Web:ref:refs/heads/main"`
   (or `repo:Tyllage/Tyllage-Web:environment:production`).
3. Give the role least-privilege permissions: `s3:ListBucket` on the bucket,
   `s3:PutObject` and `s3:DeleteObject` on `bucket/*`, and `cloudfront:CreateInvalidation` on the
   distribution.
4. In the GitHub repository settings, add:
   - **Secret:** `AWS_DEPLOY_ROLE_ARN`
   - **Variables:** `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`, and optionally
     `VITE_CONTACT_ENDPOINT`
   - An environment called `production` (optionally with required reviewers).

`.github/workflows/deploy.yml` then:

- On **pull requests:** installs, lints, typechecks and builds.
- On **push to `main`:** does the same, uploads `assets/` with `Cache-Control: immutable` (1 year)
  and everything else with `max-age=0, must-revalidate`, then invalidates CloudFront.
- **Until the `S3_BUCKET` variable is set,** the deploy job is skipped, so pushes show a passing build
  instead of a failed deployment.

### Manual deploy (if needed)

```bash
npm run build
aws s3 sync dist/assets s3://<bucket>/assets --delete --cache-control "public, max-age=31536000, immutable"
aws s3 sync dist s3://<bucket> --delete --exclude "assets/*" --cache-control "public, max-age=0, must-revalidate"
aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
```

---

## Architecture note

The corporate website ships as static files. Its optional enquiry API is hosted separately. Evercrop is a
separate product under development. Its proposed stack includes React, TypeScript, Node.js/Express,
PostgreSQL and AI APIs, with AWS under evaluation and WhatsApp Business API integration planned.

---

## License and ownership

© 2026 SoLeaf LLP. All rights reserved.

The SoLeaf website, including its code, content, designs, illustrations and brand assets, is
proprietary to SoLeaf LLP and is shared under the [existing proprietary license](LICENSE). No licence
is granted to use, copy, modify, deploy or redistribute it without SoLeaf's prior written permission.
The SoLeaf name, logo, founders' story and other brand assets may not be reused. GitHub's Terms of
Service let you view and fork public repositories on GitHub; that does not give any further right to
use this code.

Third-party open-source packages and web fonts used by the site remain under their own licences.

| Document | Purpose |
| --- | --- |
| [LICENSE](LICENSE) | Existing proprietary license (all rights reserved) |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Outside contributions are not accepted; workflow for SoLeaf team members |
| [SECURITY.md](SECURITY.md) | How to report a vulnerability privately |

For licensing, partnership or permission enquiries, email
[soleaf.co@gmail.com](mailto:soleaf.co@gmail.com) or contact the team through the
[GitHub organisation hosting this repository](https://github.com/Tyllage), or connect with
[SoLeaf on LinkedIn](https://www.linkedin.com/company/soleaf).
