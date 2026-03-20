import Link from 'next/link';
import styles from './TopBar.module.css';

const topLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About Us',   href: '/about' },
  { label: 'Careers',    href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

export default function TopBar() {
  return (
    <div className={styles.topbar} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Left: promo message */}
        <p className={styles.promo}>
          <span className={styles.promoIcon} aria-hidden="true">🚚</span>
          Order <strong>TODAY</strong>, Delivered <strong>TOMORROW</strong>
        </p>

        {/* Right: top nav links */}
        <nav className={styles.nav} aria-label="Top navigation">
          <ul className={styles.navList}>
            {topLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
