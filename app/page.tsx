import dynamic from 'next/dynamic';
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import TrustBar from '@/components/TrustBar/TrustBar';
import Categories from '@/components/Categories/Categories';
import FeaturedBanners from '@/components/FeaturedBanners/FeaturedBanners';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import TopBrands from '@/components/TopBrands/TopBrands';
import TrustFeatures from '@/components/TrustFeatures/TrustFeatures';
import Footer from '@/components/Footer/Footer';

/* Lazy-load below-fold heavy component */
const Testimonial = dynamic(() => import('@/components/Testimonial/Testimonial'), {
  loading: () => <div style={{ minHeight: '400px' }} aria-hidden="true" />,
});

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <TopBar />
      <Header />
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedBanners />
        <FeaturedProducts />
        <TopBrands />
        <Testimonial />
      </main>
      <TrustFeatures />
      <Footer />
    </>
  );
}
