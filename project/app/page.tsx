import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Accounts from '@/components/Accounts';
import Loans from '@/components/Loans';
import GovernmentSchemes from '@/components/GovernmentSchemes';
import WhyChooseUs from '@/components/WhyChooseUs';
import BranchLocator from '@/components/BranchLocator';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Accounts />
      <Loans />
      <GovernmentSchemes />
      <WhyChooseUs />
      <BranchLocator />
      <Testimonials />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
