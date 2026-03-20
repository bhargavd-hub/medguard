import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks1 = [
  { label: 'Consumables',           href: '/consumables' },
  { label: 'Diagnostics',           href: '/diagnostics' },
  { label: 'Equipment & Furniture', href: '/equipment' },
  { label: 'First Aid',             href: '/first-aid' },
  { label: 'Hygiene',               href: '/hygiene' },
  { label: 'Minor Surgery',         href: '/minor-surgery' },
  { label: 'Physiotherapy',         href: '/physiotherapy' },
  { label: 'Simulation',            href: '/simulation' },
];

const quickLinks2 = [
  { label: 'Terms & Conditions',  href: '/terms' },
  { label: 'Privacy Policy',      href: '/privacy' },
  { label: 'Disclaimer',          href: '/disclaimer' },
  { label: 'Returns & Refunds',   href: '/returns' },
  { label: 'Delivery Information',href: '/delivery' },
  { label: 'WEEE Recycling',       href: '/weee' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const certifications = [
  { label: 'Veteran Owned',  emoji: '🎖️' },
  { label: 'Quality Assured',emoji: '✅' },
  { label: 'Safe to Buy',    emoji: '🔒' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            {/* Logo */}
            <Link href="/" className={styles.logo} aria-label="Medguard - Home">
              <div className={styles.logoMark} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="6" fill="#E85D04"/>
                  <path d="M14 5v18M5 14h18" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className={styles.logoBrand}>MEDGUARD</span>
                <span className={styles.logoSub}>Professional Healthcare Supplies</span>
              </div>
            </Link>

            <p className={styles.brandDesc}>
              Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service our store style, and innovation.
            </p>

            {/* Socials */}
            <div className={styles.socials}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialBtn}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Company info */}
            <div className={styles.companyInfo}>
              <p>Company Reg. No.: 466258</p>
              <p>VAT Reg. Number: IE9659988V</p>
              <p>ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018</p>
              <p>WEEE Reg. No.: 7425499</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks1.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks2.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <address className={styles.address}>
              <p className={styles.addressItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Unit 6/7 Block 4, Ashbourne Business Park, Ashbourne, Co. Meath, Ireland, A84 PD74
              </p>
              <p className={styles.addressItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 8 8l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 17l-.08-.08z"/>
                </svg>
                <a href="tel:018352491" className={styles.contactLink}>01 835 2491</a>
                {' or '}
                <a href="tel:018352318" className={styles.contactLink}>01 835 2318</a>
              </p>
              <p className={styles.addressItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.2a16 16 0 0 0 8 8l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 23 17l-.08-.08z"/>
                </svg>
                <a href="tel:018695009" className={styles.contactLink}>01 869 5009</a>
              </p>
              <p className={styles.addressItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:orders@medguard.ie" className={styles.contactLink}>orders@medguard.ie</a>
              </p>
              <p className={styles.addressItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Mon – Thu: 8am – 5:30pm<br />
                Fri: 8am – 3:30pm<br />
                Sat–Sun: Closed
              </p>
            </address>

            {/* Certifications */}
            <div className={styles.certs}>
              {certifications.map((c) => (
                <div key={c.label} className={styles.cert}>
                  <span aria-hidden="true">{c.emoji}</span>
                  <span className={styles.certLabel}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © Medguard Healthcare. All Rights Reserved.
          </p>
          <div className={styles.paymentIcons} aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'Laser', 'PayPal'].map((pm) => (
              <span key={pm} className={styles.paymentBadge}>{pm}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
