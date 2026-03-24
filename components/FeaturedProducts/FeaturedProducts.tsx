'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedProducts.module.css';

const tabs = ['All', 'Consumables', 'Diagnostics', 'Physiotherapy'];

const products = [
  {
    id: 'disposable-hats',
    name: 'Disposable Hats (6 x 40)',
    brand: '',
    price: 153.55,
    href: '/products/disposable-hats',
    category: 'Consumables',
    image: 'https://placehold.co/200x160/EAF7F4/0C9E7A?text=Disposable+Hats&font=open-sans',
    imageAlt: 'Disposable Hats product image',
    bg: '#EAF7F4',
  },
  {
    id: 'baxter-thermometer',
    name: 'Baxter Digital Thermo Hygrometer Indoor Thermometer',
    brand: 'Baxter',
    price: 153.55,
    href: '/products/baxter-thermometer',
    category: 'Diagnostics',
    image: 'https://placehold.co/200x160/EBF5FB/1B7FCC?text=Thermometer&font=open-sans',
    imageAlt: 'Baxter Digital Thermometer product image',
    bg: '#EBF5FB',
  },
  {
    id: 'hemmins-resistance',
    name: 'Hemmins Resistance Band 25m',
    brand: 'Hemmins',
    price: 153.55,
    href: '/products/hemmins-resistance-band',
    category: 'Physiotherapy',
    image: 'https://placehold.co/200x160/FFF3EC/E85D04?text=Resistance+Band&font=open-sans',
    imageAlt: 'Hemmins Resistance Band product image',
    bg: '#FFF3EC',
  },
  {
    id: 'cpe-overshoes',
    name: '16" CPE Blue Overshoes',
    brand: '',
    price: 153.55,
    href: '/products/cpe-overshoes',
    category: 'Consumables',
    image: 'https://placehold.co/200x160/F0F9FF/0077B6?text=CPE+Overshoes&font=open-sans',
    imageAlt: 'CPE Blue Overshoes product image',
    bg: '#F0F9FF',
  },
  {
    id: 'welch-allyn',
    name: 'Welch Allyn 767 Wall Model Aneroid Sphygmomanometer with Reusab...',
    brand: 'Welch Allyn',
    price: 153.55,
    href: '/products/welch-allyn-767',
    category: 'Diagnostics',
    image: 'https://placehold.co/200x160/F0EEFF/5B3FCC?text=Sphygmomanometer&font=open-sans',
    imageAlt: 'Welch Allyn Sphygmomanometer product image',
    bg: '#F0EEFF',
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="featured-heading" className={styles.title}>Featured Products</h2>
          <div className={styles.tabGroup} role="tablist" aria-label="Product category filter">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <div className={styles.arrows}>
              <button className={styles.arrowBtn} aria-label="Previous products">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className={styles.arrowBtn} aria-label="Next products">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.grid} role="tabpanel">
          {filtered.map((product) => (
            <article key={product.id} className={styles.card}>
              <Link href={product.href} className={styles.imageLink} aria-label={product.name} tabIndex={-1}>
                <div className={styles.imageBox} style={{ background: product.bg }}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={200}
                    height={160}
                    className={styles.productImage}
                    unoptimized
                  />
                </div>
              </Link>
              <div className={styles.cardBody}>
                {product.brand && (
                  <span className={styles.brand}>{product.brand}</span>
                )}
                <h3 className={styles.name}>
                  <Link href={product.href}>{product.name}</Link>
                </h3>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>As low as</span>
                  <span className={styles.price}>€{product.price.toFixed(2)}</span>
                  <span className={styles.vatNote}>Ex. VAT</span>
                </div>
                <button className={styles.addBtn} aria-label={`Add ${product.name} to cart`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
