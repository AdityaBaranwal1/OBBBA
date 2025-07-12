'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Calendar, AlertTriangle, Minus } from 'lucide-react';
import { incomeBrackets } from './incomeBrackets';
import TimelineImpact from './TimelineImpact';

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

function incomeToSlider(income: number) {
  const min = 0;
  const max = 1000000;
  const norm = Math.sqrt((income - min) / (max - min));
  return Math.round(norm * 100);
}

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
      <div className="glass max-w-5xl mx-auto p-8 grid gap-10" style={{gridTemplateColumns:'1fr 1fr', boxShadow:'0 8px 32px rgba(0,0,0,0.35)', borderRadius:'24px', background:'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(37,99,235,0.08) 100%)'}}>
        <div className="col-span-2 flex flex-col items-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-2" style={{letterSpacing:'-0.01em'}}>Personal Impact Calculator</h2>
          <p className="text-neutral-dark text-lg text-center max-w-2xl">Use the slider or input to select your annual income and see how the OBBBA may affect your finances over time.</p>
        </div>
        {/* Slider/Input Section - now at the top, spanning both columns */}
        <div className="col-span-2 flex flex-col gap-6 items-center justify-center mb-4">
          <div className="glass w-full p-8 flex flex-col gap-6 items-center shadow-lg" style={{borderRadius:'20px', minWidth:'320px', background:'rgba(255,255,255,0.10)', boxShadow:'0 8px 32px rgba(37,99,235,0.10)'}}>
            <label htmlFor="income-slider" className="mb-2 font-medium text-neutral-dark text-lg">
              Annual Income: <span className="text-brand-blue font-bold text-2xl">${income.toLocaleString()}</span>
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
              <div className="absolute left-0 right-0" style={{top: '2.8rem', pointerEvents: 'none'}}>
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
                        left: `calc(${percent}% - 18px)`,
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
            <div className="flex items-center gap-2 w-full justify-center mt-2">
              <span className="text-gray-400 text-lg">$</span>
              <input
                type="number"
                min={0}
                max={1000000}
                step={1000}
                value={isEditingInput ? inputIncome : income}
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
                className="pr-2 py-2 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-lg w-full bg-white shadow-sm"
                aria-label="Annual income input"
              />
            </div>
          </div>
        </div>
        {/* Left: Impact Card */}
        <div className="flex flex-col gap-8 items-center justify-start">
          <div className="glass w-full p-8 flex flex-col gap-6 items-center shadow-lg" style={{borderRadius:'20px', minWidth:'320px', background:'rgba(255,255,255,0.10)', boxShadow:'0 8px 32px rgba(37,99,235,0.10)'}}>
            <h3 className="mb-2 font-semibold text-xl text-brand-blue" style={{letterSpacing:'-0.01em'}}>{bracket.label}</h3>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="text-center">
                <div className="text-sm font-medium">Years 1-2</div>
                <div className="text-2xl font-bold" style={{color: bracket.impactPreSunset < 0 ? 'var(--loss)' : 'var(--gain)', textShadow:'0 2px 8px rgba(0,0,0,0.10)'}}>
                  {bracket.impactPreSunset < 0 ? '-' : '+'}${Math.abs(bracket.impactPreSunset).toLocaleString()}/yr
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Year 3+</div>
                <div className="text-2xl font-bold" style={{color: bracket.impactPostSunset < 0 ? 'var(--loss)' : 'var(--gain)', textShadow:'0 2px 8px rgba(0,0,0,0.10)'}}>
                  {bracket.impactPostSunset < 0 ? '-' : '+'}${Math.abs(bracket.impactPostSunset).toLocaleString()}/yr
                </div>
              </div>
            </div>
            <div className="text-center mb-2 font-semibold" style={{color: bracket.impactPreSunset > bracket.impactPostSunset ? 'var(--loss)' : bracket.impactPreSunset < bracket.impactPostSunset ? 'var(--gain)' : 'var(--text-primary)'}}>
              {bracket.impactPreSunset > bracket.impactPostSunset ? 
                `Cliff: -$${Math.abs(bracket.impactPreSunset - bracket.impactPostSunset).toLocaleString()}/yr drop` :
                bracket.impactPreSunset < bracket.impactPostSunset ?
                `Improvement: +$${Math.abs(bracket.impactPostSunset - bracket.impactPreSunset).toLocaleString()}/yr gain` :
                'No change'
              }
            </div>
            <p className="text-sm text-neutral-dark mb-2">{bracket.oneLineWhy}</p>
            {/* Always show 3-year effect details (no dropdown) */}
            <div className="w-full mt-4 p-4 rounded-xl" style={{background:'rgba(37,99,235,0.07)', boxShadow:'0 2px 8px rgba(37,99,235,0.06)'}}>
              <h4 className="text-lg font-semibold mb-2 text-brand-blue flex items-center gap-2"><Calendar className="w-5 h-5" /> Year 3+ Effects</h4>
              <ul className="space-y-2 text-sm">
                {bracket.sunsetDetails.map((detail, index) => (
                  <li key={index} className="flex items-start text-neutral-dark"><span className="mr-2">•</span>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Right: General details above, Thermometers below */}
        <div className="flex flex-col gap-8 items-center justify-start">
          <div className="glass w-full p-6" style={{borderRadius:'18px', background:'rgba(255,255,255,0.10)'}}>
            <h4 className="mb-2 text-brand-blue font-semibold text-lg">General details</h4>
            <ul className="space-y-2 text-sm mb-4">
              {bracket.details.map((detail, index) => (
                <li key={index} className="flex items-start text-neutral-dark"><span className="mr-2">•</span>{detail}</li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-300">
              <p className="text-xs mb-2 text-neutral-dark">Sources:</p>
              <div className="flex flex-wrap gap-2">
                {bracket.sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline text-brand-blue hover:opacity-80"
                  >
                    {source.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Thermometers below general details */}
          <div className="flex flex-row gap-8 mt-4">
            <Thermometer value={bracket.impactPreSunset} maxGain={maxGain} maxLoss={maxLoss} label="Years 1-2" />
            <Thermometer value={bracket.impactPostSunset} maxGain={maxGain} maxLoss={maxLoss} label="Year 3+" />
          </div>
        </div>
      </div>
    </section>
  );
} 