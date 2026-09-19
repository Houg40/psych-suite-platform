import React from 'react';

/**
 * PsynapseAppIcon - The Squircle App Mark shown in the Brand Guidelines
 */
export default function PsynapseAppIcon({ size = 44, className = '' }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-white shadow-md flex-shrink-0 flex items-center justify-center p-1 border border-teal-500/30 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="./psynapse-emblem.png"
        alt="PsynapseCDS"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
}
