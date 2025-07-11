import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PillToggleSection from '@/components/PillToggleSection';
import IncomeImpactCalculator from '@/components/IncomeImpactCalculator';
import DistributionalImpact from '@/components/DistributionalImpact';
import CodeSection from '@/components/CodeSection';
import EmbedSection from '@/components/EmbedSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PillToggleSection />
      <IncomeImpactCalculator />
      <DistributionalImpact />
      <CodeSection />
      <EmbedSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
