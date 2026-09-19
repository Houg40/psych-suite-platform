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
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-teal-500/50 via-teal-400/40 to-teal-500/50 opacity-70 group-hover:opacity-100 blur-lg transition-all duration-500 animate-synaptic-glow pointer-events-none"></div>
      )}

      {/* Emblem Frame with Hover Flare */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg flex items-center justify-center p-1 border-2 border-teal-500/40 group-hover:border-teal-400 group-hover:shadow-teal-500/40 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
      >
        <img
          src="./psynapse-emblem.png"
          alt="PsynapseCDS"
          className="w-full h-full object-contain rounded-xl transition-transform duration-300"
        />

        {/* Active Neural Synaptic Firing Circuit (Top-Left Origin -> Outward) */}
        {animated && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            {/* Origin Node (Top-Left): Initiates Impulse in Teal */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border border-teal-400/80 bg-teal-400/20 animate-node-ping-origin"
              style={{ left: '32%', top: '41%' }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full animate-node-flash-origin"
              style={{ left: '32%', top: '41%' }}
            />

            {/* Traveling Electrical Spark: Top-Left (Teal) -> DOWN to Bottom Node (Navy) */}
            <div 
              className="absolute w-1 h-1 rounded-full animate-spark-down"
            />

            {/* Traveling Electrical Spark: Top-Left (Teal) -> RIGHT to Right Node (Slate Blue) */}
            <div 
              className="absolute w-1 h-1 rounded-full animate-spark-right"
            />

            {/* Terminal Node 1 (Lower-Left): Receives Downward Spark in Deep Teal/Navy */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border border-teal-500/80 bg-teal-500/20 animate-node-ping-bottom"
              style={{ left: '32%', top: '64.5%' }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full animate-node-flash-bottom"
              style={{ left: '32%', top: '64.5%' }}
            />

            {/* Terminal Node 2 (Right): Receives Rightward Spark in Slate Blue */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border border-slate-400/80 bg-[#4E6B8A]/20 animate-node-ping-right"
              style={{ left: '57.1%', top: '42.5%' }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full animate-node-flash-right"
              style={{ left: '57.1%', top: '42.5%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
