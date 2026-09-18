import React from 'react';

/**
 * PsynapseLogo - Vector Brand Asset based on the Psynapse CDS Design System
 * 
 * @param {string} variant - 'full' | 'compact' | 'mark'
 * @param {string} theme - 'light' | 'dark'
 * @param {string} className - Optional wrapper styling
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl'
 */
export default function PsynapseLogo({
  variant = 'compact',
  theme = 'light',
  className = '',
  size = 'md',
  showSubtitle = true
}) {
  const isDark = theme === 'dark';
  const navyColor = isDark ? '#FFFFFF' : '#0B2D4A';
  const slateColor = isDark ? '#94A3B8' : '#4E6B8A';
  const tealColor = '#14B8A6';

  // Dimension scaling
  const iconSizes = {
    sm: { w: 26, h: 26 },
    md: { w: 34, h: 34 },
    lg: { w: 44, h: 44 },
    xl: { w: 56, h: 56 }
  };

  const textSizes = {
    sm: { main: 'text-sm', cds: 'text-xs', sub: 'text-[9px]' },
    md: { main: 'text-lg', cds: 'text-sm', sub: 'text-[10px]' },
    lg: { main: 'text-2xl', cds: 'text-lg', sub: 'text-xs' },
    xl: { main: 'text-3xl', cds: 'text-2xl', sub: 'text-sm' }
  };

  const currentIconSize = iconSizes[size] || iconSizes.md;
  const currentTextSize = textSizes[size] || textSizes.md;

  // The P-Synapse SVG Vector Mark
  const PLogoMark = (
    <svg
      width={currentIconSize.w}
      height={currentIconSize.h}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Outer Navy 'P' Loop */}
      <path
        d="M18 10 H30 C37.7 10 44 16.3 44 24 C44 31.7 37.7 38 30 38 H22 C19.8 38 18 36.2 18 34 V10 Z"
        stroke={navyColor}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Internal Synapse Connection Branches (Teal) */}
      <path
        d="M10 38 L16 28 L24 22"
        stroke={tealColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Synapse Terminal Vesicles / Nodes (Teal) */}
      {/* Node 1: Bottom Left */}
      <circle cx="9" cy="39" r="5" fill={tealColor} />
      
      {/* Node 2: Middle Junction */}
      <circle cx="16" cy="27" r="4.5" fill={tealColor} />
      
      {/* Node 3: Center Core Vesicle */}
      <circle cx="25" cy="21" r="5.5" fill={tealColor} />
      <circle cx="25" cy="21" r="2.2" fill={isDark ? '#0B2D4A' : '#FFFFFF'} />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{PLogoMark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {PLogoMark}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight ${currentTextSize.main}`}
            style={{ color: navyColor }}
          >
            Psynapse
          </span>
          <span
            className={`font-bold tracking-normal ${currentTextSize.cds}`}
            style={{ color: slateColor }}
          >
            CDS
          </span>
        </div>

        {showSubtitle && variant === 'full' && (
          <span
            className={`font-medium tracking-tight mt-0.5 leading-tight ${currentTextSize.sub}`}
            style={{ color: slateColor }}
          >
            Clinical Decision Support for Psychiatric Prescribers
          </span>
        )}
      </div>
    </div>
  );
}
