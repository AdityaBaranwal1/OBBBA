'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Minus } from 'lucide-react';
import { incomeBrackets } from './incomeBrackets';
import TimelineImpact from './TimelineImpact';

// Helper for color interpolation (reverse: 1=red, 0=green)

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


export default function IncomeImpactCalculator() {
  const [slider, setSlider] = useState(0);
  const [inputIncome, setInputIncome] = useState(0);
  const [isEditingInput, setIsEditingInput] = useState(false);
  const [showSunsetDetails, setShowSunsetDetails] = useState(false);
  
  // Memoize maxGain and maxLoss
  const maxGain = useMemo(() => Math.max(
    ...incomeBrackets.map(b => Math.max(b.impactPreSunset, b.impactPostSunset, 0))
  ), [incomeBrackets]);
  const maxLoss = useMemo(() => Math.abs(Math.min(
    ...incomeBrackets.map(b => Math.min(b.impactPreSunset, b.impactPostSunset, 0))
  )), [incomeBrackets]);
  // Memoize income and bracket
  const income = useMemo(() => sliderToIncome(slider), [slider]);
  const bracket = useMemo(
    () => incomeBrackets.find(b => income >= b.min && income <= b.max) || incomeBrackets[0],
    [income]
  );
  
  // Calculate colors and heights for both thermometers

  // In a useEffect, keep inputIncome in sync with slider changes only if not editing
  React.useEffect(() => {
    if (!isEditingInput) {
      setInputIncome(income);
    }
  }, [income, isEditingInput]);

  return (
    <section className="py-20 bg-neutral-light" id="income-impact">
      <div className="glass-3d max-w-5xl mx-auto p-8 md:p-12 grid gap-8 md:grid-cols-[260px_1fr] items-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue text-center md:col-span-2">Personal Impact Calculator</h2>
        <p className="text-neutral-dark text-center md:col-span-2">Use the slider to select your annual income and see how the OBBBA may affect your finances over time.</p>

        {/* Left column: timeline + thermometers */}
        <div className="space-y-8">
          <TimelineImpact />
          <div className="flex flex-col items-center gap-8">
            <Thermometer value={bracket.impactPreSunset} maxGain={maxGain} maxLoss={maxLoss} label="Years 1-2" />
            <Thermometer value={bracket.impactPostSunset} maxGain={maxGain} maxLoss={maxLoss} label="Year 3+" />
          </div>
        </div>

        {/* Right column: slider + impact card */}
        <div className="flex flex-col items-center md:items-start gap-6" style={{minWidth:'280px'}}>
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
                className="pl-6 pr-2 py-1 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-base w-full bg-white"
                aria-label="Annual income input"
              />
            </div>
            {/* Impact Card */}
            <div className="glass-3d w-full p-6">
              <h3 className="mb-4 font-semibold">{bracket.label}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm font-medium">Years 1-2</div>
                  <div className="text-lg font-bold" style={{color: bracket.impactPreSunset < 0 ? 'var(--loss)' : 'var(--gain)'}}>
                    {bracket.impactPreSunset < 0 ? '-' : '+'}${Math.abs(bracket.impactPreSunset).toLocaleString()}/yr
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Year 3+</div>
                  <div className="text-lg font-bold" style={{color: bracket.impactPostSunset < 0 ? 'var(--loss)' : 'var(--gain)'}}>
                    {bracket.impactPostSunset < 0 ? '-' : '+'}${Math.abs(bracket.impactPostSunset).toLocaleString()}/yr
                  </div>
                </div>
              </div>
              <div className="text-center mb-4 font-semibold" style={{color: bracket.impactPreSunset > bracket.impactPostSunset ? 'var(--loss)' : bracket.impactPreSunset < bracket.impactPostSunset ? 'var(--gain)' : 'var(--text-primary)'}}>
                {bracket.impactPreSunset > bracket.impactPostSunset ? 
                  `Cliff: -$${Math.abs(bracket.impactPreSunset - bracket.impactPostSunset).toLocaleString()}/yr drop` :
                  bracket.impactPreSunset < bracket.impactPostSunset ?
                  `Improvement: +$${Math.abs(bracket.impactPostSunset - bracket.impactPreSunset).toLocaleString()}/yr gain` :
                  'No change'
                }
              </div>
              <p className="text-sm" style={{color:'var(--text-secondary)'}}>{bracket.oneLineWhy}</p>
            </div>
          </div>

          {/* Collapsible Sunset Details Section */}
          <div className="glass-3d mb-8 p-6" style={{borderColor:'var(--loss)'}}>
            <button
              onClick={() => setShowSunsetDetails(!showSunsetDetails)}
              className="w-full text-left flex items-center justify-between"
            >
              <h3 className="mb-0">Year 3 sunset effects</h3>
              {showSunsetDetails ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {showSunsetDetails && (
              <div className="mt-4 pt-4 border-t space-y-2 text-sm">
                {bracket.sunsetDetails.map((detail, index) => (
                  <div key={index} className="flex items-start" style={{color:'var(--text-secondary)'}}>
                    <span className="mr-2">•</span>
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* General details */}
          <div className="glass-3d p-6 mb-8">
            <h3 className="mb-4">General details</h3>
            <div className="space-y-2 text-sm mb-4">
              {bracket.details.map((detail, index) => (
                <div key={index} className="flex items-start" style={{color:'var(--text-secondary)'}}>
                  <span className="mr-2">•</span>
                  {detail}
                </div>
              ))}
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs mb-2">Sources:</p>
              <div className="flex flex-wrap gap-2">
                {bracket.sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline"
                  >
                    {source.text}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
