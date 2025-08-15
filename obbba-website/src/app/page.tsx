import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyImpactCards from '@/components/KeyImpactCards';
import TimelineImpact from '@/components/TimelineImpact';
import PillToggleSection from '@/components/PillToggleSection';
import DistributionalImpact from '@/components/DistributionalImpact';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import dynamic from 'next/dynamic';

const IncomeImpactCalculator = dynamic(
  () => import('@/components/IncomeImpactCalculator'),
  {
    loading: () => (
      <div className="p-8 text-center" aria-label="Loading calculator">
        Loading...
      </div>
    ),
  },
);

export const dynamicParams = false;
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <StructuredData pageType="website" />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <KeyImpactCards />
        <TimelineImpact />
        <PillToggleSection />
        <IncomeImpactCalculator />
        <DistributionalImpact />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
