import React from 'react';

/**
 * PsynapseAppIcon - The Squircle App Mark shown in the Brand Guidelines
 */
export default function PsynapseAppIcon({ size = 44, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-psynapse-navy flex items-center justify-center shadow-md flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={Math.round(size * 0.65)}
        height={Math.round(size * 0.65)}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* White 'P' Loop */}
        <path
          d="M18 10 H30 C37.7 10 44 16.3 44 24 C44 31.7 37.7 38 30 38 H22 C19.8 38 18 36.2 18 34 V10 Z"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Teal Synapse Branches */}
        <path
          d="M10 38 L16 28 L24 22"
          stroke="#14B8A6"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Teal Synapse Nodes */}
        <circle cx="9" cy="39" r="5" fill="#14B8A6" />
        <circle cx="16" cy="27" r="4.5" fill="#14B8A6" />
        <circle cx="25" cy="21" r="5.5" fill="#14B8A6" />
        <circle cx="25" cy="21" r="2.2" fill="#0B2D4A" />
      </svg>
    </div>
  );
}
