'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Calendar, AlertTriangle, Minus } from 'lucide-react';
import { incomeBrackets } from './incomeBrackets';

// Helper for color interpolation (reverse: 1=red, 0=green)
function interpolateColor(val: number) {
  if (val > 0.5) {
    const r = 255;
    const g = Math.round(255 * (1 - (val - 0.5) / 0.5));
    return `rgb(${r},${g},0)`;
  } else {
    const g = 255;
    const r = Math.round(255 * (val / 0.5));
    return `rgb(${r},${g},0)`;
  }
}

// Add this helper function inside the component:
function incomeToSlider(income: number) {
  const min = 0;
  const max = 1000000;
  const norm = Math.sqrt((income - min) / (max - min));
  return Math.round(norm * 100);
}

// Nonlinear income mapping: slider 0-100 → income 0-1,000,000 (quadratic ramp)
function sliderToIncome(slider: number) {
  const min = 0;
  const max = 1000000;
  const norm = slider / 100;
  return Math.round(min + (max - min) * Math.pow(norm, 2));
}

type ThermometerProps = {
  value: number;
  maxGain: number;
  maxLoss: number;
  label: string;
};

type ExpanderProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  colorClass?: string;
};

function Thermometer({ value, maxGain, maxLoss, label }: ThermometerProps) {
  const isGain = value > 100;
  const isLoss = value < -100;
  const isSmall = !isGain && !isLoss;
  const barHeight = isGain
    ? `${Math.max(5, Math.abs(value) / maxGain * 50)}%`
    : isLoss
    ? `${Math.max(5, Math.abs(value) / maxLoss * 50)}%`
    : '4%';
  const barColor = isGain
    ? 'bg-green-200'
    : isLoss
    ? 'bg-red-200'
    : 'bg-gray-300';
  const barStyle = isGain
    ? { bottom: '50%', height: barHeight, transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1)' }
    : isLoss
    ? { top: '50%', height: barHeight, transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1)' }
    : { top: '48%', height: barHeight, transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1)' };
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm font-medium mb-2 {isGain ? 'text-green-700' : isLoss ? 'text-red-700' : 'text-gray-700'}">{label}</div>
      <div className="h-64 w-12 flex items-center relative">
        {/* Background track */}
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gray-100 rounded-full z-0" />
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300 z-10" />
        <div className={`absolute left-0 right-0 rounded-full z-20 ${barColor}`} style={barStyle} />
      </div>
      <div className={`mt-4 text-lg font-bold flex items-center justify-center`}>
        {isGain && <ChevronUp className="w-5 h-5 text-green-700 mr-1" />} 
        {isLoss && <ChevronDown className="w-5 h-5 text-red-700 mr-1" />} 
        {isSmall && <Minus className="w-5 h-5 text-gray-500 mr-1" />} 
        <span className={isGain ? 'text-green-700' : isLoss ? 'text-red-700' : 'text-gray-700'}>
          {isLoss ? 'Loss' : isGain ? 'Gain' : 'Small change'}
        </span>
      </div>
      <div className={`text-base font-semibold mt-1 ${isGain ? 'text-green-700' : isLoss ? 'text-red-700' : 'text-gray-700'}`}>${value < 0 ? '-' : ''}{Math.abs(value).toLocaleString()}/yr</div>
    </div>
  );
}

function Expander({ title, icon, children, colorClass }: ExpanderProps) {
  return (
    <div className="w-full mt-4">
      <details className="group">
        <summary className={`flex items-center text-sm font-medium cursor-pointer ${colorClass || ''}`}>
          {icon}
          {title}
        </summary>
        <div>{children}</div>
      </details>
    </div>
  );
}

export default function IncomeImpactCalculator() {
  const [slider, setSlider] = useState(0);
  const [inputIncome, setInputIncome] = useState(0);
  const [isEditingInput, setIsEditingInput] = useState(false);
  const [expandedBracket, setExpandedBracket] = useState<number | null>(null);
  const [showSunsetDetails, setShowSunsetDetails] = useState(false);
  
  // Memoize maxGain and maxLoss
  const maxGain = useMemo(() => Math.max(
    ...incomeBrackets.map(b => Math.max(b.impactPreSunset, b.impactPostSunset, 0))
  ), [incomeBrackets]);
  const maxLoss = useMemo(() => Math.abs(Math.min(
    ...incomeBrackets.map(b => Math.min(b.impactPreSunset, b.impactPostSunset, 0))
  )), [incomeBrackets]);
  // Memoize interpolateColor
  const interpolateColor = useMemo(() => (val: number) => {
    if (val > 0.5) {
      const r = 255;
      const g = Math.round(255 * (1 - (val - 0.5) / 0.5));
      return `rgb(${r},${g},0)`;
    } else {
      const g = 255;
      const r = Math.round(255 * (val / 0.5));
      return `rgb(${r},${g},0)`;
    }
  }, []);
  // Memoize income, bracket, bracketIndex
  const income = useMemo(() => sliderToIncome(slider), [slider]);
  const bracket = useMemo(() => incomeBrackets.find(b => income >= b.min && income <= b.max) || incomeBrackets[0], [income, incomeBrackets]);
  const bracketIndex = useMemo(() => incomeBrackets.findIndex(b => b === bracket), [bracket, incomeBrackets]);
  
  // Calculate colors and heights for both thermometers
  const preSunsetDangerNorm = bracket.impactPreSunset < 0 ? 0.8 : 0.2;
  const postSunsetDangerNorm = bracket.impactPostSunset < 0 ? 0.9 : 0.1;
  const preSunsetColor = interpolateColor(preSunsetDangerNorm);
  const postSunsetColor = interpolateColor(postSunsetDangerNorm);
  const preSunsetHeight = `${Math.max(5, Math.abs(bracket.impactPreSunset) / 20000 * 100)}%`;
  const postSunsetHeight = `${Math.max(5, Math.abs(bracket.impactPostSunset) / 20000 * 100)}%`;

  // In a useEffect, keep inputIncome in sync with slider changes only if not editing
  React.useEffect(() => {
    if (!isEditingInput) {
      setInputIncome(income);
    }
  }, [income, isEditingInput]);

  return (
    <section className="py-20 bg-neutral-light" id="income-impact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-6 text-center">Personal Impact Calculator</h2>
        <p className="text-neutral-dark mb-8 text-center">Use the slider to select your annual income and see how the OBBBA may affect your finances over time.</p>
        
        {/* Timeline Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl border border-brand-blue">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-5 h-5 mr-2 text-brand-blue" />
            <h3 className="text-lg font-semibold text-brand-blue">Timeline Impact</h3>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <div className="font-bold text-green-700">2025–2026</div>
              <div className="text-xs text-gray-600">Temporary Benefits</div>
            </div>
            <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                Year 3 Cliff
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-red-700">2027+</div>
              <div className="text-xs text-gray-600">Sunset Effects</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          {/* Pre-Sunset Thermometer */}
          <Thermometer value={bracket.impactPreSunset} maxGain={maxGain} maxLoss={maxLoss} label="Years 1-2" />

          {/* Post-Sunset Thermometer */}
          <Thermometer value={bracket.impactPostSunset} maxGain={maxGain} maxLoss={maxLoss} label="Year 3+" />

          {/* Slider and main info */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <label htmlFor="income-slider" className="mb-2 font-medium text-neutral-dark">
              Annual Income: <span className="text-brand-blue font-bold">${income.toLocaleString()}</span>
            </label>
            <div className="flex items-center gap-2 w-full relative" style={{height: '48px'}}>
              <input
                id="income-slider"
                type="range"
                min={0}
                max={100}
                value={slider}
                onChange={e => {
                  setSlider(Number(e.target.value));
                  if (!isEditingInput) setInputIncome(sliderToIncome(Number(e.target.value)));
                }}
                className="w-full accent-brand-blue"
                aria-label="Annual income slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={slider}
                aria-valuetext={`Annual income: $${income.toLocaleString()}`}
              />
              {/* Slider tick labels aligned to correct slider values */}
              <div className="absolute left-0 right-0 top-8 w-full" style={{pointerEvents: 'none'}}>
                {[
                  { label: '$0', value: 0 },
                  { label: '$40k', value: 40000 },
                  { label: '$160k', value: 160000 },
                  { label: '$360k', value: 360000 },
                  { label: '$640k', value: 640000 },
                  { label: '$1M', value: 1000000 }
                ].map(({ label, value }) => {
                  const percent = incomeToSlider(value);
                  return (
                    <span
                      key={label}
                      style={{
                        position: 'absolute',
                        left: `calc(${percent}% - 18px)`, // 18px is half the label width for centering
                        minWidth: '36px',
                        textAlign: 'center',
                        fontSize: '14px',
                        color: '#6B7280',
                        fontWeight: 500
                      }}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="relative w-28">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">$</span>
              <input
                type="number"
                min={0}
                max={1000000}
                step={1000}
                value={inputIncome}
                onChange={e => {
                  setIsEditingInput(true);
                  let val = Number(e.target.value.replace(/[^\d]/g, ''));
                  if (isNaN(val)) val = 0;
                  setInputIncome(val);
                }}
                onBlur={() => {
                  let val = Math.round(inputIncome / 1000) * 1000;
                  val = Math.max(0, Math.min(1000000, val));
                  setInputIncome(val);
                  setSlider(incomeToSlider(val));
                  setIsEditingInput(false);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    let val = Math.round(inputIncome / 1000) * 1000;
                    val = Math.max(0, Math.min(1000000, val));
                    setInputIncome(val);
                    setSlider(incomeToSlider(val));
                    setIsEditingInput(false);
                  }
                }}
                className="w-full pl-6 pr-2 py-1 border border-gray-300 rounded text-right font-mono"
                aria-label="Enter annual income in dollars"
              />
            </div>

            {/* Main impact box */}
            <div className="w-full mt-6 p-6 rounded-xl bg-blue-100 border border-brand-blue text-blue-900">
              <h3 className="text-lg font-semibold mb-2">{bracket.label}</h3>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-sm text-green-700 font-medium">Years 1-2</div>
                  <div className="text-lg font-bold">
                    {bracket.impactPreSunset < 0 ? '-' : '+'}${Math.abs(bracket.impactPreSunset).toLocaleString()}/yr
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-red-700 font-medium">Year 3+</div>
                  <div className="text-lg font-bold">
                    {bracket.impactPostSunset < 0 ? '-' : '+'}${Math.abs(bracket.impactPostSunset).toLocaleString()}/yr
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-red-600">
                  {bracket.impactPreSunset > bracket.impactPostSunset ? 
                    `Cliff: -$${Math.abs(bracket.impactPreSunset - bracket.impactPostSunset).toLocaleString()}/yr drop` :
                    bracket.impactPreSunset < bracket.impactPostSunset ?
                    `Improvement: +$${Math.abs(bracket.impactPostSunset - bracket.impactPreSunset).toLocaleString()}/yr gain` :
                    'No change'
                  }
                </div>
              </div>
              <p className="text-sm mt-2">{bracket.oneLineWhy}</p>
            </div>

            {/* Sunset Details Section */}
            <Expander title="Year 3 sunset effects" icon={<AlertTriangle className="w-4 h-4 mr-1" />} colorClass="text-red-700 hover:text-red-800">
              <div className="mt-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-3">What happens in Year 3:</h4>
                <ul className="space-y-2 text-sm text-red-700">
                  {bracket.sunsetDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Expander>

            {/* General details */}
            <Expander title="General details" icon={null} colorClass="text-blue-700 hover:text-blue-800">
              <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <ul className="space-y-2 text-sm text-gray-700">
                  {bracket.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Sources:</p>
                  <div className="flex flex-wrap gap-2">
                    {bracket.sources.map((source, index) => (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        {source.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Expander>
          </div>
        </div>
      </div>
    </section>
  );
} 