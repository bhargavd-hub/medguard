import styles from './TopBrands.module.css';

const brands = [
  { name: 'NONIN',           color: '#E85D04', textStyle: 'diamond' },
  { name: 'Riester',         color: '#1B3A7A', textStyle: 'circle'  },
  { name: 'Nasco Healthcare',color: '#0077B6', textStyle: 'script'  },
  { name: 'ROMED',           color: '#C0392B', textStyle: 'bold'    },
  { name: 'OMRON',           color: '#003087', textStyle: 'bold'    },
  { name: 'Nasco Healthcare',color: '#0077B6', textStyle: 'script'  },
  { name: 'OMRON',           color: '#003087', textStyle: 'bold'    },
  { name: 'NONIN',           color: '#E85D04', textStyle: 'diamond' },
  { name: 'Riester',         color: '#1B3A7A', textStyle: 'circle'  },
  { name: 'ROMED',           color: '#C0392B', textStyle: 'bold'    },
];

export default function TopBrands() {
  return (
    <section className={styles.section} aria-labelledby="brands-heading">
      <div className="container">
        <h2 id="brands-heading" className={styles.title}>Top Brands</h2>
        <div className={styles.grid} role="list">
          {brands.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className={styles.brandCard} role="listitem">
              <span
                className={`${styles.brandName} ${styles[brand.textStyle]}`}
                style={{ color: brand.color }}
              >
                {brand.textStyle === 'diamond' && (
                  <span className={styles.diamond} style={{ background: brand.color }} aria-hidden="true" />
                )}
                {brand.textStyle === 'circle' && (
                  <span className={styles.circleIcon} style={{ borderColor: brand.color }} aria-hidden="true" />
                )}
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
