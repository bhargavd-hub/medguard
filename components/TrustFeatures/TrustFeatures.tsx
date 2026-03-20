import styles from './TrustFeatures.module.css';

const features = [
  {
    id: 'free-delivery',
    title: 'Free Delivery',
    desc: "On orders over €75.00 or 40\"",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    id: 'secure-payment',
    title: 'Secure Payment',
    desc: '100% secure payment',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
        <line x1="7" y1="15" x2="7.01" y2="15" strokeWidth="2.5"/>
        <line x1="11" y1="15" x2="13" y2="15" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'support',
    title: 'Support',
    desc: '24/7 amazing service',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    id: 'easy-returns',
    title: 'Easy Returns',
    desc: 'Orders €50 or more',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-3"/>
      </svg>
    ),
  },
];

export default function TrustFeatures() {
  return (
    <section className={styles.section} aria-label="Shopping guarantees">
      <div className="container">
        <ul className={styles.grid} role="list">
          {features.map((f) => (
            <li key={f.id} className={styles.item}>
              <div className={styles.iconWrap} aria-hidden="true">
                {f.icon}
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
