import Link from 'next/link';
import styles from './FeaturedBanners.module.css';

const banners = [
  {
    id: '3m-coban',
    brand: '3M',
    name: '3M Coban Elastic\nWrap 5cm x 4.5m (36)',
    href: '/products/3m-coban-elastic-wrap',
    bg: '#D6EAF8',
    accentColor: '#1B3A7A',
    emoji: '🩹',
  },
  {
    id: 'omron-bf511',
    brand: 'OMRON',
    name: 'Omron BF511 Body\nComposition Monitor',
    href: '/products/omron-bf511',
    bg: '#FAE5D3',
    accentColor: '#A04000',
    emoji: '⚖️',
  },
  {
    id: 'medguard-sheets',
    brand: 'MEDGUARD',
    name: 'Medguard Incontinence\nSheets',
    href: '/products/medguard-incontinence-sheets',
    bg: '#D5F5E3',
    accentColor: '#1D6A42',
    emoji: '🛏️',
  },
];

export default function FeaturedBanners() {
  return (
    <section className={styles.section} aria-label="Featured product highlights">
      <div className="container">
        <div className={styles.grid}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={styles.card}
              style={{ background: banner.bg }}
            >
              {/* Illustration placeholder */}
              <div className={styles.imageArea} aria-hidden="true">
                <span className={styles.emoji}>{banner.emoji}</span>
              </div>

              {/* Text */}
              <div className={styles.info}>
                <span className={styles.brand}>{banner.brand}</span>
                <h3 className={styles.name}>
                  {banner.name.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </h3>
                <Link
                  href={banner.href}
                  className={styles.cta}
                  style={{ background: banner.accentColor }}
                  aria-label={`Explore more: ${banner.name}`}
                >
                  Explore More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
