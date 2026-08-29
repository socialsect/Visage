# Visage Polyclinic LLC — Website

Medical and aesthetic clinic website for Visage Polyclinic, Business Bay, Dubai.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Switzer** (primary font)
- **Tempting** (display font)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | Clinic story and philosophy |
| `/treatments` | All treatments overview |
| `/botox` | Botox treatments |
| `/fillers` | Dermal fillers |
| `/treatments/skin-rejuvenation` | Skin rejuvenation |
| `/treatments/prp` | PRP treatment |
| `/treatments/prf` | PRF treatment |
| `/treatments/threads` | Thread lift |
| `/treatments/fat-melting` | Fat melting |
| `/treatments/skin-boosters` | Skin boosters |
| `/treatments/minor-aesthetic-procedures` | Minor aesthetic procedures |
| `/laboratory` | Laboratory & diagnostic services |
| `/doctor` | Dr. Musa profile |
| `/publications` | Health blog |
| `/publications/[slug]` | Individual blog posts |
| `/contact` | Contact & appointment booking |

## Structure

```
src/
├── app/              # Pages and routes
│   ├── api/og/       # Dynamic OG image generator
│   └── publications/[slug]/  # Blog post dynamic routes
├── components/       # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   ├── FAQAccordion.tsx
│   ├── MapPlaceholder.tsx
│   └── WhatsAppButton.tsx
├── lib/
└── app/globals.css   # Theme and font declarations

metadata/
└── site.json         # Centralized page metadata (titles, descriptions, schema, OG)

public/
├── fonts/            # Switzer and Tempting web fonts
├── logo.jpeg         # Clinic logo
├── hero-image.jpg    # Hero image
├── dr-musa.jpg       # Doctor photo
└── favicon.ico       # Favicons
```

## Key Features

- **SEO**: JSON-LD schema markup, Open Graph, Twitter Cards, sitemap.xml, robots.txt
- **Social Sharing**: Dynamic OG image API at `/api/og` with page-specific branding
- **Favicons**: Full set for all platforms (ico, apple-touch, android-chrome)
- **Centralized Metadata**: `metadata/site.json` contains all page metadata in one file
- **Responsive**: Mobile-first design with hamburger nav and WhatsApp quick access
- **Lab Services**: 250+ tests across 8 departments from clinic's diagnostics partner
- **Blog**: 3 SEO-optimized health articles with individual pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deployment

Deployed on Vercel. Push to `main` branch triggers automatic deployment.

## Contact

- **Phone**: 04 575 8729
- **WhatsApp**: 058 186 7309
- **Email**: visagepolyclinicllc@gmail.com
- **Address**: Office 711, Regal Tower, Business Bay, Dubai, UAE
