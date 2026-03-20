import Link from 'next/link';
import styles from './Categories.module.css';

const categories = [
  {
    id: 'personal-protection',
    label: 'Personal Protection',
    count: 20,
    href: '/consumables/personal-protection',
    bg: '#EBF5FB',
    color: '#1B7FCC',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <circle cx="20" cy="20" r="18" stroke="#1B7FCC" strokeWidth="1.5" fill="none"/>
        <path d="M20 10l8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11v-6l8-4z" fill="#1B7FCC" opacity="0.15" stroke="#1B7FCC" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M17 20l2 2 4-4" stroke="#1B7FCC" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'infusion-materials',
    label: 'Infusion Materials',
    count: 20,
    href: '/consumables/infusion-materials',
    bg: '#EAF7F4',
    color: '#0C9E7A',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <rect x="17" y="6" width="6" height="14" rx="3" stroke="#0C9E7A" strokeWidth="1.5"/>
        <path d="M20 20v10" stroke="#0C9E7A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="32" r="3" stroke="#0C9E7A" strokeWidth="1.5"/>
        <path d="M14 10h-3a2 2 0 0 0-2 2v2" stroke="#0C9E7A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'paper-disposables',
    label: 'Paper Disposables',
    count: 20,
    href: '/hygiene/paper-disposables',
    bg: '#FFF8E7',
    color: '#C8860A',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <rect x="8" y="14" width="24" height="16" rx="3" stroke="#C8860A" strokeWidth="1.5"/>
        <circle cx="20" cy="22" r="5" stroke="#C8860A" strokeWidth="1.5"/>
        <path d="M16 10h8" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'ent-diagnostics',
    label: 'ENT Diagnostics',
    count: 20,
    href: '/diagnostics/ent',
    bg: '#F0EEFF',
    color: '#5B3FCC',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <circle cx="20" cy="14" r="7" stroke="#5B3FCC" strokeWidth="1.5"/>
        <path d="M14 20c-1 3-1 8 3 8h6c2.5 0 3-3 1-5" stroke="#5B3FCC" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 21v7" stroke="#5B3FCC" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'skin-hygiene',
    label: 'Skin Hygiene',
    count: 20,
    href: '/hygiene/skin',
    bg: '#FFF0F3',
    color: '#D63B6E',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M20 8c0 0-10 8-10 16a10 10 0 0 0 20 0C30 16 20 8 20 8z" stroke="#D63B6E" strokeWidth="1.5" fill="#D63B6E" fillOpacity="0.1"/>
        <path d="M20 18v8M16 22h8" stroke="#D63B6E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'syringes-needles',
    label: 'Syringes & Needles',
    count: 20,
    href: '/consumables/syringes',
    bg: '#F0F9FF',
    color: '#0077B6',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M28 10l2 2-16 16-2-2 16-16z" stroke="#0077B6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 30l3-3" stroke="#0077B6" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="22" y="12" width="4" height="12" rx="1" transform="rotate(-45 22 12)" stroke="#0077B6" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'surface-hygiene',
    label: 'Surface Hygiene',
    count: 20,
    href: '/hygiene/surface',
    bg: '#FFF3EC',
    color: '#E85D04',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M10 20h20v10H10z" stroke="#E85D04" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 20v-4a6 6 0 0 1 12 0v4" stroke="#E85D04" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 24h12" stroke="#E85D04" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="categories-heading" className={styles.title}>Top Categories</h2>
          <div className={styles.arrows} aria-label="Scroll categories">
            <button className={styles.arrowBtn} aria-label="Previous categories">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className={styles.arrowBtn} aria-label="Next categories">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.grid} role="list">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={styles.card}
              role="listitem"
              aria-label={`${cat.label} - ${cat.count} products`}
            >
              <div
                className={styles.iconCircle}
                style={{ background: cat.bg }}
                aria-hidden="true"
              >
                {cat.icon}
              </div>
              <span className={styles.cardLabel}>{cat.label}</span>
              <span className={styles.cardCount}>{cat.count} Products</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
