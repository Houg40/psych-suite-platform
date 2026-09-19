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
            {/* Origin Node (Top-Left): Initiates Impulse */}
            <div 
              className="absolute w-3 h-3 rounded-full border border-teal-400/80 bg-teal-400/20 animate-node-ping-origin shadow-[0_0_4px_#14B8A6]"
              style={{ left: '32%', top: '41%' }}
            />
            <div 
              className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#14B8A6,0_0_2px_#ffffff] animate-node-flash-origin"
              style={{ left: '32%', top: '41%' }}
            />

            {/* Traveling Electrical Spark: Top-Left -> DOWN to Bottom Node */}
            <div 
              className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#2dd4bf,0_0_10px_#38bdf8] animate-spark-down"
            />

            {/* Traveling Electrical Spark: Top-Left -> RIGHT to Right Node */}
            <div 
              className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#2dd4bf,0_0_10px_#38bdf8] animate-spark-right"
            />

            {/* Terminal Node 1 (Lower-Left): Receives Downward Spark */}
            <div 
              className="absolute w-3 h-3 rounded-full border border-teal-400/80 bg-teal-400/20 animate-node-ping-bottom shadow-[0_0_4px_#14B8A6]"
              style={{ left: '32%', top: '64.5%' }}
            />
            <div 
              className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#14B8A6,0_0_2px_#ffffff] animate-node-flash-bottom"
              style={{ left: '32%', top: '64.5%' }}
            />

            {/* Terminal Node 2 (Right): Receives Rightward Spark */}
            <div 
              className="absolute w-3 h-3 rounded-full border border-cyan-300/80 bg-teal-400/20 animate-node-ping-right shadow-[0_0_4px_#38bdf8]"
              style={{ left: '57.1%', top: '42.5%' }}
            />
            <div 
              className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_7px_#38bdf8,0_0_2px_#ffffff] animate-node-flash-right"
              style={{ left: '57.1%', top: '42.5%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
