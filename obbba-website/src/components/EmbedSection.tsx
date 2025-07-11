export default function EmbedSection() {
  return (
    <section id="embed" className="section">
      <div className="container">
        <h2 className="mb-8">Visual Analysis</h2>
        <p className="mb-8">
          Explore interactive charts and data visualizations that break down the costs, 
          timeline, and impact of the proposed legislation.
        </p>

        {/* Embed Container */}
        <div className="card mb-8">
          <h3 className="mb-4">Cost Breakdown & Timeline Analysis</h3>
          <p className="text-sm mb-4">
            Interactive visualization showing the distribution of costs across different sectors and years
          </p>

          {/* Iframe Container */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="OBBBA Cost Analysis Visualization"
              className="absolute top-0 left-0 w-full h-full border"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-4 pt-4 border-t">
            <p className="text-sm">
              <strong>Data Source:</strong> Congressional Budget Office (CBO) Analysis
            </p>
          </div>
        </div>

        {/* Alternative Embed Options */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3>Replace with Your Chart</h3>
            <p className="text-sm mb-4">
              You can replace the YouTube video above with:
            </p>
            <ul className="text-sm space-y-2">
              <li>• Google Charts or Data Studio embed</li>
              <li>• Tableau or Power BI visualization</li>
              <li>• Custom D3.js or Chart.js implementation</li>
              <li>• Google Docs or Sheets embed</li>
            </ul>
          </div>

          <div className="card">
            <h3>Embed Instructions</h3>
            <p className="text-sm mb-4">
              To add your own visualization:
            </p>
            <ol className="text-sm space-y-2 list-decimal list-inside">
              <li>Create your chart in your preferred tool</li>
              <li>Get the embed code (iframe)</li>
              <li>Replace the YouTube URL in the iframe src</li>
              <li>Adjust the padding-bottom percentage for proper aspect ratio</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
} 