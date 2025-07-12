import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyImpactCards from '@/components/KeyImpactCards';
import TimelineImpact from '@/components/TimelineImpact';
import PillToggleSection from '@/components/PillToggleSection';
import IncomeImpactCalculator from '@/components/IncomeImpactCalculator';
import DistributionalImpact from '@/components/DistributionalImpact';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
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
  );
}
