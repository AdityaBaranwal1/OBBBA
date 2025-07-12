'use client';

export default function Hero() {
  const scrollToDetails = () => {
    const element = document.getElementById('pill-toggle-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section py-32 flex flex-col items-center justify-center text-center">
      <div className="container text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="mb-4">
            One Big Beautiful Bill:
            <br />
            Understanding the Real Costs
          </h1>

          {/* Subheading */}
          <p className="text-lg max-w-2xl mx-auto mb-8">
            A comprehensive analysis of the proposed legislation and its far-reaching implications 
            for our economy, society, and future generations.
          </p>

          {/* Call to Action */}
          <div>
            <button
              onClick={scrollToDetails}
              className="btn"
            >
              Explore Key Impacts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 