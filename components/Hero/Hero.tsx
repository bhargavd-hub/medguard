import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero banner">
      {/* Background image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Doctor giving a high five to a young patient in a medical facility"
          fill
          priority
          quality={85}
          sizes="100vw"
          className={styles.image}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQQBBQEBAAAAAAAAAAAAAQIDBAURITFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aq2y3C2vsJiEXFmRyqEQ6AkPHGBj6HNVyxBt8Tc5jN0lGQ5sDX2EQDmSiVJ9gKKA//9k="
        />
        {/* Dark overlay gradient */}
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.contentInner}>
          <h1 className={styles.headline}>
            Reliable Medical &amp; Healthcare<br />
            Supplies — Ireland Wide
          </h1>
          <p className={styles.subtext}>
            Over 15+ years serving hospitals, clinics and care homes
          </p>
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Talk to a Specialist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/shop" className={styles.ctaSecondary}>
              Shop by Category
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
