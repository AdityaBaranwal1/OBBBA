import { incomeBrackets } from '@/components/incomeBrackets';

export type SlideType = 'intro' | 'impact' | 'why' | 'details' | 'topicSelection' | 'leadCapture' | 'share';

export interface StorySlide {
  id: string;
  type: SlideType;
  title: string;
  content: React.ReactNode | string;
  footer?: string;
  color?: string;
  emoji?: string;
  ctaButton?: {
    text: string;
    action: () => void;
  };
}

export interface BracketData {
  label: string;
  impactPreSunset: number;
  impactPostSunset: number;
  impactPercentPre: number;
  impactPercentPost: number;
  oneLineWhy: string;
  details: string[];
  sunsetDetails: string[];
  sources: { text: string; url: string }[];
  emoji: string;
  color: string;
}

const formatCurrency = (val: number) => {
  const absVal = Math.abs(val);
  return `$${absVal.toLocaleString()}`;
};

const getImpactColor = (val: number) => {
  if (val > 0) return 'bg-green-600';
  if (val < 0) return 'bg-red-600';
  return 'bg-gray-600';
};

export function generateCalculatorStory(income: number, bracket: BracketData): StorySlide[] {
  return [
    {
      id: 'intro',
      type: 'intro',
      title: 'Your 2025 Forecast',
      content: `Based on ${formatCurrency(income)} annual income`,
      color: 'bg-gradient-to-br from-blue-700 to-indigo-800',
    },
    {
      id: 'years-1-2',
      type: 'impact',
      title: 'Years 1-2',
      content: `${bracket.impactPreSunset > 0 ? '+' : ''}${formatCurrency(bracket.impactPreSunset)} per year`,
      footer: bracket.impactPreSunset > 0 ? 'Initial benefit period' : 'Immediate cuts begin',
      color: getImpactColor(bracket.impactPreSunset),
    },
    {
      id: 'year-3-plus',
      type: 'impact',
      title: 'Year 3 Onwards',
      content: `${bracket.impactPostSunset > 0 ? '+' : ''}${formatCurrency(bracket.impactPostSunset)} per year`,
      footer: bracket.impactPostSunset < bracket.impactPreSunset 
        ? `That's a drop of ${formatCurrency(bracket.impactPreSunset - bracket.impactPostSunset)}`
        : 'Long-term impact',
      color: getImpactColor(bracket.impactPostSunset),
    },
    {
      id: 'why',
      type: 'why',
      title: 'Why?',
      content: bracket.oneLineWhy,
      color: 'bg-gradient-to-br from-indigo-800 to-purple-900',
    },
    // Topic selection slide will be inserted here dynamically
  ];
}

export function generateGenericStory(): StorySlide[] {
  return [
    {
      id: 'generic-intro',
      type: 'intro',
      title: 'How Will OBBBA Affect You?',
      content: 'Discover the real impact of the One Big Beautiful Bill',
      color: 'bg-gradient-to-br from-slate-800 to-blue-900',
    },
    {
      id: 'generic-question',
      type: 'intro',
      title: 'Every Income Bracket Is Different',
      content: 'From tax cuts to benefit reductions—the impact varies dramatically',
      color: 'bg-gradient-to-br from-blue-800 to-indigo-900',
    },
    {
      id: 'generic-examples',
      type: 'intro',
      title: 'For Example...',
      content: '22.3M families could lose SNAP benefits\n16M could lose Medicaid\nTop 10% get 80% of tax cuts',
      color: 'bg-gradient-to-br from-purple-800 to-pink-900',
    },
    // Topic selection will be added here
  ];
}

export function generateTopicSlides(topics: string[], bracket: BracketData | null): StorySlide[] {
  const slides: StorySlide[] = [];
  
  topics.forEach((topic, index) => {
    switch (topic) {
      case 'snap':
        slides.push({
          id: `topic-snap-${index}`,
          type: 'details',
          title: 'SNAP Benefits',
          content: bracket?.details.find(d => d.includes('SNAP')) || 
                   '22.3M families face SNAP cuts; 5.3M lose ≥$25/month',
          color: 'bg-gradient-to-br from-orange-700 to-red-800',
        });
        break;
      
      case 'medicaid':
        slides.push({
          id: `topic-medicaid-${index}`,
          type: 'details',
          title: 'Healthcare Coverage',
          content: bracket?.details.find(d => d.includes('Medicaid')) || 
                   '16M could lose Medicaid coverage by 2034',
          color: 'bg-gradient-to-br from-blue-700 to-cyan-800',
        });
        break;
      
      case 'taxes':
        slides.push({
          id: `topic-taxes-${index}`,
          type: 'details',
          title: 'Tax Changes',
          content: bracket?.sunsetDetails.find(d => d.includes('deduction')) || 
                   'Standard deduction and tax brackets significantly modified',
          color: 'bg-gradient-to-br from-green-700 to-emerald-800',
        });
        break;
      
      case 'childcredits':
        slides.push({
          id: `topic-child-${index}`,
          type: 'details',
          title: 'Child & Family Benefits',
          content: bracket?.sunsetDetails.find(d => d.includes('Baby bonus') || d.includes('Child')) || 
                   'Baby bonus and Trump Account expire after initial period',
          color: 'bg-gradient-to-br from-pink-700 to-purple-800',
        });
        break;
      
      case 'salt':
        slides.push({
          id: `topic-salt-${index}`,
          type: 'details',
          title: 'SALT Deduction',
          content: bracket?.details.find(d => d.includes('SALT')) || 
                   'State and Local Tax deduction cap raised to $40k for incomes under $500k',
          color: 'bg-gradient-to-br from-indigo-700 to-blue-800',
        });
        break;
      
      case 'estate':
        slides.push({
          id: `topic-estate-${index}`,
          type: 'details',
          title: 'Estate & Wealth',
          content: bracket?.details.find(d => d.includes('Estate') || d.includes('estate')) || 
                   'Estate tax benefits and wealth provisions favor highest earners',
          color: 'bg-gradient-to-br from-yellow-700 to-amber-800',
        });
        break;
    }
  });
  
  return slides;
}

export function getExampleBracket(incomeLevel: 'low' | 'middle' | 'high'): BracketData {
  switch (incomeLevel) {
    case 'low':
      return incomeBrackets[0]; // < $40k
    case 'middle':
      return incomeBrackets[2]; // $160k-$360k
    case 'high':
      return incomeBrackets[4]; // $640k+
    default:
      return incomeBrackets[1];
  }
}
