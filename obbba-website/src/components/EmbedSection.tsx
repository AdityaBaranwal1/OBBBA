export default function EmbedSection() {
  return (
    <section id="embed" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visual Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore interactive charts and data visualizations that break down the costs, 
            timeline, and impact of the proposed legislation.
          </p>
        </div>

        {/* Embed Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Embed Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-semibold text-white">
              Cost Breakdown & Timeline Analysis
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              Interactive visualization showing the distribution of costs across different sectors and years
            </p>
          </div>

          {/* Iframe Container */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="OBBBA Cost Analysis Visualization"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Embed Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-gray-600">
                <p className="font-medium">Data Source:</p>
                <p>Congressional Budget Office (CBO) Analysis</p>
              </div>
              <div className="flex space-x-4">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Download Data
                </button>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Full Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Embed Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Replace with Your Chart
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              You can replace the YouTube video above with:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Google Charts or Data Studio embed
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Tableau or Power BI visualization
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Custom D3.js or Chart.js implementation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Google Docs or Sheets embed
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Embed Instructions
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              To add your own visualization:
            </p>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
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