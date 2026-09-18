import React from 'react';

/**
 * PsynapseLogo - Official Brand Asset from design board
 * 
 * @param {string} theme - 'light' | 'dark'
 * @param {string} className - Optional wrapper styling
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl'
 */
export default function PsynapseLogo({
  theme = 'light',
  className = '',
  size = 'md',
  alt = 'PsynapseCDS'
}) {
  const heightClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16'
  };

  const hClass = heightClasses[size] || heightClasses.md;
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center flex-shrink-0 select-none ${className}`}>
      <img
        src="./psynapse-logo.png"
        alt={alt}
        className={`${hClass} w-auto object-contain ${
          isDark ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
}
