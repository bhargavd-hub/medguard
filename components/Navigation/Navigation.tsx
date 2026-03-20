import Link from 'next/link';
import styles from './Navigation.module.css';

const navItems = [
  { label: 'Consumables',          href: '/consumables' },
  { label: 'Diagnostics',          href: '/diagnostics' },
  { label: 'Equipment & Furniture',href: '/equipment' },
  { label: 'First Aid',            href: '/first-aid' },
  { label: 'Hygiene',              href: '/hygiene' },
  { label: 'Minor Surgery',        href: '/minor-surgery' },
  { label: 'Physiotherapy',        href: '/physiotherapy' },
  { label: 'Simulation',           href: '/simulation' },
];

export default function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Main categories">
      <div className={`container ${styles.inner}`}>
        <ul className={styles.navList} role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Clearance CTA */}
        <Link href="/clearance" className={styles.clearanceBtn} aria-label="Clearance - Get amazing offers">
          <span className={styles.clearanceIcon} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17h-2v-6h2zm0-8h-2V7h2z"/>
            </svg>
          </span>
          <div className={styles.clearanceText}>
            <span className={styles.clearanceTitle}>Clearance</span>
            <span className={styles.clearanceSub}>Get amazing offers</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
