export default function DistributionalImpact() {
  return (
    <section className="py-20 bg-white" id="distributional-impact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center" style={{color:'#1a2233'}}>
          Distributional Impact of the 2025 Reconciliation Bill by Income Level
        </h2>
        <div className="space-y-8 text-gray-900">
          <div>
            <h3 className="text-xl font-bold mb-2" style={{color:'#2d3748'}}>Low-Income Households</h3>
            <p>
              Low-income households (bottom 10%, incomes below ~$30,000) are projected to lose resources on average. According to the{' '}
              <a href="https://www.cbo.gov/publication/61387" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Congressional Budget Office (CBO)</a>,
              these households would see their annual after-tax income (including transfer benefits) drop by about <span className="font-bold">$1,600 per year</span>—nearly a <span className="font-bold">4% reduction</span> relative to current law. This decline is largely due to cuts to government benefits like Medicaid and SNAP, meaning the poorest families would have substantially less support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2" style={{color:'#2d3748'}}>Middle-Income Households</h3>
            <p>
              Middle-income households (around the 5th–6th income deciles, near the national median of ~$60,000–$70,000/year) would see only modest gains. CBO finds their after-tax income would rise by about <span className="font-bold">$500 to $1,000 per year</span> (a <span className="font-bold">0.5%–0.8% increase</span>). These modest benefits come from tax rate reductions and credits, partly offset by reduced government program value. <br/>
              Source: <a href="https://www.cbo.gov/publication/61387" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">CBO Distributional Analysis</a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2" style={{color:'#2d3748'}}>Upper-Middle-Income Households</h3>
            <p>
              Upper-middle-income households (roughly the 80th–90th percentile, ~$150,000/year) are slated to receive larger average tax cuts.{' '}
              <a href="https://www.jct.gov/publications/2025/jcx-33-25/" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Joint Committee on Taxation (JCT)</a> data shows a <span className="font-bold">10% reduction in federal tax liability</span> in 2027, translating to an increase of <span className="font-bold">$3,000–$4,000 per year</span> in after-tax income (a <span className="font-bold">1–2% gain</span>).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2" style={{color:'#2d3748'}}>High-Income Households</h3>
            <p>
              High-income households (top 10%, incomes above ~$200,000) benefit the most in absolute dollars. CBO estimates these households would gain around <span className="font-bold">$12,000 per year</span> in after-tax income—a <span className="font-bold">+2.3% increase</span>. The largest gains are driven by major tax cuts, especially extensions of expiring tax breaks, which overwhelmingly favor upper-income brackets. <br/>
              Source: <a href="https://www.cbo.gov/publication/61387" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">CBO Distributional Analysis</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 