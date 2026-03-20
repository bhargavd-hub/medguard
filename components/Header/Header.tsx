import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Medguard - Home">
          <div className={styles.logoMark} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#1B3A7A"/>
              <path d="M14 5v18M5 14h18" stroke="#E85D04" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="14" cy="14" r="4" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoBrand}>MEDGUARD</span>
            <span className={styles.logoSub}>Professional Healthcare Supplies</span>
          </div>
        </Link>

        {/* Search */}
        <form className={styles.searchForm} role="search" action="/search" method="get">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <input
            id="site-search"
            type="search"
            name="q"
            placeholder="Search Product..."
            className={styles.searchInput}
            autoComplete="off"
          />
          <button type="submit" className={styles.searchBtn} aria-label="Submit search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </form>

        {/* Right actions */}
        <div className={styles.actions}>
          {/* Need Help */}
          <div className={styles.helpBlock}>
            <span className={styles.helpLabel}>Need help?</span>
            <a href="tel:018352111" className={styles.helpPhone}>01 835 2111</a>
          </div>

          {/* Account */}
          <Link href="/account" className={styles.actionBtn} aria-label="My Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className={styles.actionLabel}>Account</span>
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist" className={styles.actionBtn} aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>

          {/* Cart */}
          <Link href="/cart" className={styles.cartBtn} aria-label="Shopping cart, €13.00">
            <div className={styles.cartIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className={styles.cartBadge} aria-label="3 items">3</span>
            </div>
            <span className={styles.cartTotal}>€13.00</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
