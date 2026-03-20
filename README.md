# Medguard — Next.js Homepage

Professional Medical & Healthcare Supplies homepage built with Next.js 14, TypeScript, and CSS Modules — optimized for **PageSpeed 95+** on both mobile and desktop.

## Project Structure

```
medguard/
├── app/
│   ├── globals.css          # Global CSS variables, resets, utilities
│   ├── layout.tsx           # Root layout: fonts, meta, viewport
│   └── page.tsx             # Homepage (assembles all sections)
├── components/
│   ├── TopBar/              # Promo bar + top navigation links
│   │   ├── TopBar.tsx
│   │   └── TopBar.module.css
│   ├── Header/              # Logo, search, phone, account, cart
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Navigation/          # Category navigation + clearance CTA
│   │   ├── Navigation.tsx
│   │   └── Navigation.module.css
│   ├── Hero/                # Full-bleed hero with CTAs
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── TrustBar/            # Trusted enterprise logos
│   │   ├── TrustBar.tsx
│   │   └── TrustBar.module.css
│   ├── Categories/          # Top Categories circular grid
│   │   ├── Categories.tsx
│   │   └── Categories.module.css
│   ├── FeaturedBanners/     # 3 product spotlight banners
│   │   ├── FeaturedBanners.tsx
│   │   └── FeaturedBanners.module.css
│   ├── FeaturedProducts/    # Filterable product grid (client component)
│   │   ├── FeaturedProducts.tsx
│   │   └── FeaturedProducts.module.css
│   ├── TopBrands/           # Brand logo grid
│   │   ├── TopBrands.tsx
│   │   └── TopBrands.module.css
│   ├── Testimonial/         # Testimonial slider (client component)
│   │   ├── Testimonial.tsx
│   │   └── Testimonial.module.css
│   ├── TrustFeatures/       # Free Delivery, Secure Payment, etc.
│   │   ├── TrustFeatures.tsx
│   │   └── TrustFeatures.module.css
│   └── Footer/              # Full footer with links, contact, payments
│       ├── Footer.tsx
│       └── Footer.module.css
├── public/
│   ├── images/
│   │   └── hero-bg.jpg      # ← ADD YOUR HERO IMAGE HERE
│   ├── robots.txt
│   └── manifest.json
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Add a hero image at:
# public/images/hero-bg.jpg
# (Recommended: 1920×1080px, JPEG, ~200KB)

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## PageSpeed 95+ Optimizations

### Fonts
- **`next/font/google`** — loads fonts at build time, zero layout shift, `display: swap`
- Only required weights/subsets loaded (no unused characters)

### Images
- **`next/image`** — automatic WebP/AVIF conversion, lazy loading by default
- Hero uses `priority` + `placeholder="blur"` to eliminate LCP delay
- `sizes` attribute set per breakpoint for optimal file sizes

### CSS
- **CSS Modules** — scoped styles, zero runtime cost, tree-shakeable
- **CSS Custom Properties** — single source of truth, no JS-in-CSS overhead
- `clamp()` for fluid typography — no media query breakpoints for font sizes
- Critical CSS inlined automatically by Next.js

### JavaScript
- Heavy components (`Testimonial`) code-split with `next/dynamic`
- Only 2 client components (`FeaturedProducts`, `Testimonial`) — everything else is pure Server Components (zero JS bundle cost)
- No third-party JS dependencies

### Rendering
- All static content rendered as **React Server Components**
- No unnecessary hydration on static sections

### Caching
- Font assets: `immutable` cache headers (1 year)
- Images: 30-day minimum TTL via `next/image`

### Accessibility (affects Lighthouse score)
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`
- All interactive elements have accessible labels
- Skip navigation link for keyboard users
- `aria-label` on all icon-only buttons
- `aria-live` on dynamic content (testimonial counter)
- Color contrast meets WCAG AA throughout

## Adding Real Product Images

Replace emoji placeholders with `next/image` components:

```tsx
import Image from 'next/image';

// In product cards:
<Image
  src="/images/products/product-name.webp"
  alt="Descriptive product name"
  width={200}
  height={200}
  loading="lazy"
/>
```

## Recommended Image Specs

| Image       | Size       | Format | Target size |
|-------------|------------|--------|-------------|
| Hero bg     | 1920×1080  | JPG    | <200KB      |
| Products    | 400×400    | WebP   | <30KB each  |
| Brand logos | 200×80     | SVG    | <5KB each   |
| OG image    | 1200×630   | JPG    | <150KB      |
