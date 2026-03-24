import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedBanners.module.css';

const banners = [
  {
    id: '3m-coban',
    brand: '3M',
    name: '3M Coban Elastic\nWrap 5cm x 4.5m (36)',
    href: '/products/3m-coban-elastic-wrap',
    bg: '#D6EAF8',
    accentColor: '#1B3A7A',
    image: 'https://placehold.co/220x160/1B3A7A/FFFFFF?text=3M+Coban+Wrap&font=open-sans',
    imageAlt: '3M Coban Elastic Wrap product image',
  },
  {
    id: 'omron-bf511',
    brand: 'OMRON',
    name: 'Omron BF511 Body\nComposition Monitor',
    href: '/products/omron-bf511',
    bg: '#FAE5D3',
    accentColor: '#A04000',
    image: 'https://placehold.co/220x160/A04000/FFFFFF?text=OMRON+BF511&font=open-sans',
    imageAlt: 'Omron BF511 Body Composition Monitor product image',
  },
  {
    id: 'medguard-sheets',
    brand: 'MEDGUARD',
    name: 'Medguard Incontinence\nSheets',
    href: '/products/medguard-incontinence-sheets',
    bg: '#D5F5E3',
    accentColor: '#1D6A42',
    image: 'https://placehold.co/220x160/1D6A42/FFFFFF?text=Incontinence+Sheets&font=open-sans',
    imageAlt: 'Medguard Incontinence Sheets product image',
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
              {/* Product image */}
              <div className={styles.imageArea}>
                <Image
                  src={banner.image}
                  alt={banner.imageAlt}
                  width={220}
                  height={160}
                  className={styles.productImage}
                  unoptimized
                />
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
