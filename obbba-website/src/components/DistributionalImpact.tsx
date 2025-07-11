export default function DistributionalImpact() {
  return (
    <section id="distributional-impact" className="section">
      <div className="container">
        <h2 className="mb-8">Distributional Impact by Income Level</h2>
        
        <div className="space-y-8">
          <div className="card">
            <h3>Low-Income Households</h3>
            <p>
              Low-income households (bottom 10%, incomes below ~$30,000) are projected to lose resources on average. According to the{' '}
              <a href="https://www.cbo.gov/publication/61387" target="_blank" rel="noopener noreferrer">Congressional Budget Office (CBO)</a>,
              these households would see their annual after-tax income (including transfer benefits) drop by about <strong>$1,600 per year</strong>—nearly a <strong>4% reduction</strong> relative to current law. This decline is largely due to cuts to government benefits like Medicaid and SNAP, meaning the poorest families would have substantially less support.
            </p>
          </div>

          <div className="card">
            <h3>Middle-Income Households</h3>
            <p>
              Middle-income households (around the 5th–6th income deciles, near the national median of ~$60,000–$70,000/year) would see only modest gains. CBO finds their after-tax income would rise by about <strong>$500 to $1,000 per year</strong> (a <strong>0.5%–0.8% increase</strong>). These modest benefits come from tax rate reductions and credits, partly offset by reduced government program value.
            </p>
          </div>

          <div className="card">
            <h3>Upper-Middle-Income Households</h3>
            <p>
              Upper-middle-income households (roughly the 80th–90th percentile, ~$150,000/year) are slated to receive larger average tax cuts.{' '}
              <a href="https://www.jct.gov/publications/2025/jcx-33-25/" target="_blank" rel="noopener noreferrer">Joint Committee on Taxation (JCT)</a> data shows a <strong>10% reduction in federal tax liability</strong> in 2027, translating to an increase of <strong>$3,000–$4,000 per year</strong> in after-tax income (a <strong>1–2% gain</strong>).
            </p>
          </div>

          <div className="card">
            <h3>High-Income Households</h3>
            <p>
              High-income households (top 10%, incomes above ~$200,000) benefit the most in absolute dollars. CBO estimates these households would gain around <strong>$12,000 per year</strong> in after-tax income—a <strong>+2.3% increase</strong>. The largest gains are driven by major tax cuts, especially extensions of expiring tax breaks, which overwhelmingly favor upper-income brackets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 