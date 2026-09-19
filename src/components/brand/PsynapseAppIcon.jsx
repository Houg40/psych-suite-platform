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

      {/* Ambient Multicolor Quantum Particulate Field (Floating Around Perimeter) */}
      {animated && (
        <div className="absolute -inset-4 sm:-inset-5 pointer-events-none overflow-visible">
          {/* Mote 1: Clinical Teal (Top-Left) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#14B8A6] shadow-[0_0_4px_#14B8A6] animate-mote-1" 
            style={{ top: '8%', left: '10%' }} 
          />
          {/* Mote 2: Vibrant Cyan (Top-Right) */}
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-[#2DD4BF] shadow-[0_0_5px_#2DD4BF] animate-mote-2" 
            style={{ top: '12%', right: '8%' }} 
          />
          {/* Mote 3: Slate Blue (Right Perimeter) */}
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-[#4E6B8A] shadow-[0_0_4px_#4E6B8A] animate-mote-3" 
            style={{ top: '56%', right: '4%' }} 
          />
          {/* Mote 4: Deep Navy/Teal (Bottom-Right) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#0D9488] shadow-[0_0_4px_#0B2D4A] animate-mote-4" 
            style={{ bottom: '10%', right: '14%' }} 
          />
          {/* Mote 5: Cool Gray / Soft Slate (Bottom-Left) */}
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-[#94A3B8] shadow-[0_0_3px_#CBD5E1] animate-mote-5" 
            style={{ bottom: '8%', left: '12%' }} 
          />
          {/* Mote 6: Clinical Teal Micro-Mote (Left Perimeter) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#14B8A6] shadow-[0_0_4px_#14B8A6] animate-mote-6" 
            style={{ top: '58%', left: '6%' }} 
          />
          {/* Mote 7: Mint/Cyan Spark Mote (Upper Center) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#5EEAD4] shadow-[0_0_4px_#5EEAD4] animate-mote-7" 
            style={{ top: '2%', left: '46%' }} 
          />
        </div>
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

        {/* Quantum Particle Synaptic Circuit (Popping In & Out of Existence) */}
        {animated && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            {/* Origin Quantum Ping Wave */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border border-teal-400/80 bg-teal-400/10 animate-node-ping-origin"
              style={{ left: '32%', top: '41%' }}
            />
            {/* Q1: Origin Hub Quantum Particle (Teal #14B8A6) */}
            <div 
              className="absolute w-[3px] h-[3px] rounded-full bg-[#14B8A6] shadow-[0_0_4px_#14B8A6] animate-q-origin"
              style={{ left: '32%', top: '41%' }}
            />

            {/* Q2: Downward Axon Bridge Particle (Cyan #2DD4BF) */}
            <div 
              className="absolute w-[3px] h-[3px] rounded-full bg-[#2DD4BF] shadow-[0_0_4px_#2DD4BF] animate-q-mid-down"
              style={{ left: '32%', top: '52%' }}
            />

            {/* Q3: Bottom Terminal Quantum Particle (Deep Teal #0D9488) */}
            <div 
              className="absolute w-[3.5px] h-[3.5px] rounded-full bg-[#0D9488] shadow-[0_0_4px_#0B2D4A] animate-q-bottom"
              style={{ left: '32%', top: '64.5%' }}
            />
            {/* Bottom Terminal Quantum Ping Wave */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border border-teal-500/80 bg-teal-500/10 animate-node-ping-bottom"
              style={{ left: '32%', top: '64.5%' }}
            />

            {/* Q4: Rightward Axon Bridge Particle 1 (Cyan #2DD4BF) */}
            <div 
              className="absolute w-[3px] h-[3px] rounded-full bg-[#2DD4BF] shadow-[0_0_4px_#2DD4BF] animate-q-mid-right-1"
              style={{ left: '42%', top: '41.5%' }}
            />

            {/* Q5: Rightward Axon Bridge Particle 2 (Slate-Teal #4E6B8A) */}
            <div 
              className="absolute w-[3px] h-[3px] rounded-full bg-[#4E6B8A] shadow-[0_0_4px_#4E6B8A] animate-q-mid-right-2"
              style={{ left: '50%', top: '42%' }}
            />

            {/* Q6: Right Terminal Quantum Particle (Slate Blue #4E6B8A) */}
            <div 
              className="absolute w-[3.5px] h-[3.5px] rounded-full bg-[#4E6B8A] shadow-[0_0_5px_#4E6B8A] animate-q-right"
              style={{ left: '57.1%', top: '42.5%' }}
            />
            {/* Right Terminal Quantum Ping Wave */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border border-slate-400/80 bg-[#4E6B8A]/10 animate-node-ping-right"
              style={{ left: '57.1%', top: '42.5%' }}
            />

            {/* Q7: Spontaneous Vacuum Fluctuation Particle (Random pop during rest period) */}
            <div 
              className="absolute w-[2.5px] h-[2.5px] rounded-full bg-[#14B8A6] shadow-[0_0_3px_#14B8A6] animate-q-spontaneous"
              style={{ left: '38%', top: '41.5%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
