import React from 'react';

/**
 * PsynapseAppIcon - The Squircle App Mark shown in the Brand Guidelines
 */
export default function PsynapseAppIcon({ 
  size = 44, 
  className = '', 
  animated = true,
  floating = false,
  onClick = undefined 
}) {
  return (
    <div 
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center select-none ${floating ? 'animate-synaptic-float' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Synaptic Breathing Aura */}
      {animated && (
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500/40 via-teal-400/30 to-teal-500/40 opacity-55 group-hover:opacity-100 blur-md transition-all duration-500 animate-synaptic-glow pointer-events-none"></div>
      )}

      {/* Emblem Frame with Hover Flare */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-md flex items-center justify-center p-1 border border-teal-500/30 group-hover:border-teal-400 group-hover:shadow-teal-500/30 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"
      >
        <img
          src="./psynapse-emblem.png"
          alt="PsynapseCDS"
          className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
