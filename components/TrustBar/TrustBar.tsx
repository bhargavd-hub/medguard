import styles from './TrustBar.module.css';

const brands = [
  { name: 'DrugStore',         color: '#2E7D32', symbol: '💊' },
  { name: 'Medical Solutions', color: '#1565C0', symbol: '🔬' },
  { name: 'Hospital',          color: '#00838F', symbol: '🏥' },
  { name: 'Healthcare',        color: '#1B3A7A', symbol: '❤️' },
  { name: 'GoodHealth',        color: '#2E7D32', symbol: '✅' },
  { name: 'Central Hospital',  color: '#E85D04', symbol: 'H' },
];

export default function TrustBar() {
  return (
    <section className={styles.trust} aria-label="Trusted enterprises">
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>Trusted by Leading Enterprises</p>
        <div className={styles.logos} role="list">
          {brands.map((brand) => (
            <div key={brand.name} className={styles.logoItem} role="listitem" aria-label={brand.name}>
              <span className={styles.logoSymbol} style={{ color: brand.color }} aria-hidden="true">
                {brand.symbol}
              </span>
              <span className={styles.logoName} style={{ color: brand.color }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
