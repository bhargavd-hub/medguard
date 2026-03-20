'use client';

import { useState } from 'react';
import styles from './Testimonial.module.css';

const testimonials = [
  {
    id: 1,
    quote:
      'Our experience with Medguard has always been excellent — both the service and products Medguard has annotated to The School of Nursing have been very reliable and efficient. Communication has been consistently prompt and professional, and orders are always processed and delivered in a timely manner.\n\nWe would especially like to thank Linda Kreegan and David Delaney, who have been incredibly helpful and supportive on numerous occasions. They are always our go-to contacts whenever we require urgent deliveries, and their responsiveness and commitment are truly appreciated.\n\nThe range of products has been particularly suited to our teaching and learning needs here at the UCD School of Nursing. We especially appreciate the quality of your equipment, which has greatly supported our students\' learning experience.\n\nThank you for your continued support and partnership — it\'s always a pleasure working with Medguard.',
    author: 'Jestin Jose',
    title: 'Clinical Skills Manager',
    org: 'UCD Dublin',
    logo: '🏛️',
  },
  {
    id: 2,
    quote:
      'Medguard has been our primary supplier for over five years. The product quality and delivery reliability are consistently excellent. Their team goes above and beyond to ensure we have the right equipment when we need it most.',
    author: 'Dr. Sarah O\'Brien',
    title: 'Head of Procurement',
    org: 'St. Vincent\'s Hospital',
    logo: '🏥',
  },
  {
    id: 3,
    quote:
      'We rely on Medguard for all our consumables and diagnostics equipment. The range is comprehensive and the pricing is competitive. Their customer service team is knowledgeable and always ready to help.',
    author: 'Mark Connolly',
    title: 'Practice Manager',
    org: 'Dublin Medical Centre',
    logo: '⚕️',
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className={styles.section} aria-labelledby="testimonial-heading">
      <div className={styles.inner}>
        {/* Left: org logo */}
        <div className={styles.logoSide} aria-hidden="true">
          <div className={styles.orgLogo}>
            <span className={styles.orgEmoji}>{t.logo}</span>
            <span className={styles.orgName}>{t.org}</span>
          </div>
          <div className={styles.quoteMark} aria-hidden="true">"</div>
        </div>

        {/* Right: quote content */}
        <div className={styles.quoteContent}>
          <h2 id="testimonial-heading" className="sr-only">Customer Testimonials</h2>

          <blockquote className={styles.quote}>
            {t.quote.split('\n\n').map((para, i) => (
              <p key={i} className={styles.quotePara}>{para}</p>
            ))}
          </blockquote>

          <footer className={styles.author}>
            <p className={styles.authorName}>{t.author}</p>
            <p className={styles.authorTitle}>{t.title}</p>
          </footer>

          {/* Navigation */}
          <nav className={styles.nav} aria-label="Testimonial navigation">
            <button
              className={styles.navBtn}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              className={styles.navBtn}
              onClick={next}
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
            <span className={styles.counter} aria-live="polite">
              {current + 1} / {testimonials.length}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
