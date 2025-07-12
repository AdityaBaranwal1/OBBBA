import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OBBBA Analysis</h3>
            <p className="text-neutral-gray text-sm leading-relaxed">
              A comprehensive analysis of the One Big Beautiful Bill and its implications 
              for the American economy and society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#pill-toggle-section" 
                  className="text-neutral-gray hover:text-white transition-colors duration-200"
                >
                  Key Impacts
                </a>
              </li>
              <li>
                <a 
                  href="#income-impact" 
                  className="text-neutral-gray hover:text-white transition-colors duration-200"
                >
                  Impact Calculator
                </a>
              </li>
              <li>
                <a 
                  href="#code" 
                  className="text-neutral-gray hover:text-white transition-colors duration-200"
                >
                  Code Analysis
                </a>
              </li>
              <li>
                <a 
                  href="#embed" 
                  className="text-neutral-gray hover:text-white transition-colors duration-200"
                >
                  Visualizations
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.cbo.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-white transition-colors duration-200 flex items-center"
                >
                  Congressional Budget Office
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.congress.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-white transition-colors duration-200 flex items-center"
                >
                  Congress.gov
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gao.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-white transition-colors duration-200 flex items-center"
                >
                  Government Accountability Office
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-neutral-gray">
              <span>© 2024 OBBBA Analysis. All rights reserved.</span>
              <span>•</span>
              <span>Data sourced from official government reports</span>
            </div>
            
            <div>
              <a
                href="https://github.com/AdityaBaranwal1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-neutral-gray hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
