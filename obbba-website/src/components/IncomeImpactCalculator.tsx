'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ChevronDown, ChevronUp, Calendar, Minus } from 'lucide-react';
import { incomeBrackets } from './incomeBrackets';
import StoryMode from './StoryMode';

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
    ? `${Math.max(5, (Math.abs(value) / maxGain) * 50)}%`
    : isLoss
      ? `${Math.max(5, (Math.abs(value) / maxLoss) * 50)}%`
      : '4%';
  const barColor = isGain ? '#32d74b' : isLoss ? '#ff3b30' : '#8e8e93';
  const barStyle = isGain
    ? {
      bottom: '50%',
      height: barHeight,
      transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1)',
    }
    : isLoss
      ? {
        top: '50%',
        height: barHeight,
        transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1)',
      }
      : {
        top: '48%',
        height: barHeight,
        transition: 'height 0.6s cubic-bezier(0.4,0,0.2,1)',
      };

  return (
    <div className="thermometer-wrapper">
      <div className="thermometer-label">{label}</div>
      <div className="thermometer-container">
        {/* Background track */}
        <div className="thermometer-track" />
        <div className="thermometer-centerline" />
        <div
          className="thermometer-bar"
          style={{
            ...barStyle,
            background: `linear-gradient(180deg, ${barColor}, ${barColor}dd)`,
            boxShadow: `0 2px 8px ${barColor}40`,
          }}
        />
      </div>
      <div className="thermometer-status">
        {isGain && <ChevronUp className="status-icon gain-icon" />}
        {isLoss && <ChevronDown className="status-icon loss-icon" />}
        {isSmall && <Minus className="status-icon neutral-icon" />}
        <span
          className={`status-text ${isGain ? 'gain-text' : isLoss ? 'loss-text' : 'neutral-text'}`}
        >
          {isLoss ? 'Loss' : isGain ? 'Gain' : 'Small change'}
        </span>
      </div>
      <div
        className={`thermometer-value ${isGain ? 'gain-text' : isLoss ? 'loss-text' : 'neutral-text'}`}
      >
        ${value < 0 ? '-' : ''}
        {Math.abs(value).toLocaleString()}/yr
      </div>
    </div>
  );
}

export default function IncomeImpactCalculator() {
  const [slider, setSlider] = useState(0);
  const [exactIncome, setExactIncome] = useState(0); // For exact manually entered values
  const [inputIncome, setInputIncome] = useState(0);
  const [isEditingInput, setIsEditingInput] = useState(false);
  const [lastUpdateSource, setLastUpdateSource] = useState<'slider' | 'manual'>(
    'slider',
  );

  // Memoize maxGain and maxLoss
  const maxGain = useMemo(
    () =>
      Math.max(
        ...incomeBrackets.map((b) =>
          Math.max(b.impactPreSunset, b.impactPostSunset, 0),
        ),
      ),
    [],
  );
  const maxLoss = useMemo(
    () =>
      Math.abs(
        Math.min(
          ...incomeBrackets.map((b) =>
            Math.min(b.impactPreSunset, b.impactPostSunset, 0),
          ),
        ),
      ),
    [],
  );

  // Use exact income when manually entered, otherwise use slider-derived income
  const income = useMemo(() => {
    return isEditingInput ? inputIncome : exactIncome;
  }, [isEditingInput, inputIncome, exactIncome]);

  const bracket = useMemo(
    () =>
      incomeBrackets.find((b) => income >= b.min && income <= b.max) ||
      incomeBrackets[0],
    [income],
  );

  // Keep exactIncome in sync with slider changes only if not editing manually and last update was from slider
  React.useEffect(() => {
    if (!isEditingInput && lastUpdateSource === 'slider') {
      const sliderIncome = sliderToIncome(slider);
      setExactIncome(sliderIncome);
      setInputIncome(sliderIncome);
    }
  }, [slider, isEditingInput, lastUpdateSource]);

  const handleSliderChange = useCallback(
    (sliderValue: number) => {
      setSlider(sliderValue);
      setLastUpdateSource('slider');
      if (!isEditingInput) {
        const newIncome = sliderToIncome(sliderValue);
        setExactIncome(newIncome);
        setInputIncome(newIncome);
      }
    },
    [isEditingInput],
  );

  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <section
      className="section bg-neutral-light section-transition"
      id="income-impact"
    >
      <StoryMode
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        mode="calculator"
        income={income}
        bracket={bracket}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3"
            style={{ letterSpacing: '-0.01em' }}
          >
            Personal Impact Calculator
          </h2>
          <p className="text-neutral-dark text-lg max-w-2xl mx-auto">
            Select your annual income to see how the OBBBA Act may affect your
            finances over time.
          </p>
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Educational purposes only • Data is fact-checked
            </div>
          </div>
        </div>

        {/* Main Calculator Container */}
        <div className="calculator-glass-container">
          {/* Income Input Section */}
          <div className="income-input-section">
            <div className="income-display">
              <span className="income-label">Annual Income</span>
              <span className="income-value">${income.toLocaleString()}</span>
            </div>

            <div className="slider-container">
              <input
                id="income-slider"
                type="range"
                min={0}
                max={100}
                value={slider}
                onChange={(e) => handleSliderChange(Number(e.target.value))}
                className="income-slider"
                aria-label="Annual income slider"
              />
              <div className="slider-labels">
                {[
                  { label: '$0', value: 0 },
                  { label: '$40k', value: 40000 },
                  { label: '$160k', value: 160000 },
                  { label: '$360k', value: 360000 },
                  { label: '$640k', value: 640000 },
                  { label: '$1M', value: 1000000 },
                ].map(({ label, value }) => {
                  const percent = incomeToSlider(value);
                  return (
                    <span key={label} style={{ left: `${percent}%` }}>
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="manual-input">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                min={0}
                max={1000000}
                step={1000}
                value={isEditingInput ? inputIncome : income}
                onChange={(e) => {
                  setIsEditingInput(true);
                  let val = Number(e.target.value.replace(/[^\d]/g, ''));
                  if (isNaN(val)) val = 0;
                  setInputIncome(val);
                }}
                onBlur={() => {
                  // Clamp value to range and keep exact number
                  const val = Math.max(0, Math.min(1000000, inputIncome));
                  setInputIncome(val);
                  setExactIncome(val); // Set the exact income to preserve manual entry
                  setLastUpdateSource('manual'); // Mark this as a manual update
                  // Update slider position to match the manual input visually
                  setSlider(incomeToSlider(val));
                  setIsEditingInput(false);
                }}
                className="income-manual-input"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="results-grid">
            {/* Impact Summary Card */}
            <div className="impact-summary-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="bracket-title mb-0">
                  {bracket.label.replace(/\s*\([^)]*\)/, '')}
                </h3>
                <button
                  onClick={() => setIsStoryOpen(true)}
                  className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-1 animate-pulse"
                >
                  See Your Story
                </button>
              </div>

              <div className="impact-timeline">
                <div className="impact-period">
                  <span className="period-label">Years 1-2</span>
                  <span
                    className={`impact-amount ${bracket.impactPreSunset < 0 ? 'negative' : 'positive'}`}
                  >
                    {bracket.impactPreSunset < 0 ? '-' : '+'}$
                    {Math.abs(bracket.impactPreSunset).toLocaleString()}/yr
                  </span>
                </div>
                <div className="impact-period">
                  <span className="period-label">Year 3+</span>
                  <span
                    className={`impact-amount ${bracket.impactPostSunset < 0 ? 'negative' : 'positive'}`}
                  >
                    {bracket.impactPostSunset < 0 ? '-' : '+'}$
                    {Math.abs(bracket.impactPostSunset).toLocaleString()}/yr
                  </span>
                </div>
              </div>

              <div className="cliff-indicator">
                {bracket.impactPreSunset > bracket.impactPostSunset ? (
                  <span className="cliff-warning">
                    Cliff: -$
                    {Math.abs(
                      bracket.impactPreSunset - bracket.impactPostSunset,
                    ).toLocaleString()}
                    /yr drop
                  </span>
                ) : bracket.impactPreSunset < bracket.impactPostSunset ? (
                  <span className="cliff-improvement">
                    Improvement: +$
                    {Math.abs(
                      bracket.impactPostSunset - bracket.impactPreSunset,
                    ).toLocaleString()}
                    /yr gain
                  </span>
                ) : (
                  <span className="cliff-neutral">No change</span>
                )}
              </div>

              <p className="impact-explanation">{bracket.oneLineWhy}</p>

              <div className="year-effects">
                <h4 className="effects-title">
                  <Calendar className="w-4 h-4" /> Year 3+ Effects
                </h4>
                <ul className="effects-list">
                  {bracket.sunsetDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Details and Visualizations */}
            <div className="details-section">
              <div className="general-details">
                <h4 className="details-title">General Details</h4>
                <ul className="details-list">
                  {bracket.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>

                <div className="sources-section">
                  <p className="sources-label">Sources:</p>
                  <div className="sources-links">
                    {bracket.sources.map((source, index) => (
                      <a
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link"
                      >
                        {source.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="thermometers-container">
                <Thermometer
                  value={bracket.impactPreSunset}
                  maxGain={maxGain}
                  maxLoss={maxLoss}
                  label="Years 1-2"
                />
                <Thermometer
                  value={bracket.impactPostSunset}
                  maxGain={maxGain}
                  maxLoss={maxLoss}
                  label="Year 3+"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

