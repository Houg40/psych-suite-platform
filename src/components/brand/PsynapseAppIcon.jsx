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

      {/* Ambient Multicolor Quantum Particulate Field (16 Diverse Motes) */}
      {animated && (
        <div className="absolute -inset-5 sm:-inset-7 pointer-events-none overflow-visible">
          {/* ── Top Perimeter Motes ── */}
          {/* Mote 1: Clinical Teal (Micro-pinpoint 2px) */}
          <div 
            className="absolute w-0.5 h-0.5 rounded-full bg-[#14B8A6] shadow-[0_0_3px_#14B8A6] animate-mote-1" 
            style={{ top: '6%', left: '16%' }} 
          />
          {/* Mote 2: Mint/Cyan (Soft Orb 6px) */}
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-[#5EEAD4] shadow-[0_0_6px_#5EEAD4] animate-mote-7" 
            style={{ top: '1%', left: '44%' }} 
          />
          {/* Mote 3: Vibrant Cyan (Medium 4px) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#2DD4BF] shadow-[0_0_5px_#2DD4BF] animate-mote-2" 
            style={{ top: '8%', right: '14%' }} 
          />
          {/* Mote 4: Platinum / Cool Slate (Sub-micro 2px) */}
          <div 
            className="absolute w-0.5 h-0.5 rounded-full bg-[#CBD5E1] shadow-[0_0_2px_#CBD5E1] animate-mote-10" 
            style={{ top: '12%', right: '28%' }} 
          />

          {/* ── Right Perimeter Motes ── */}
          {/* Mote 5: Slate Blue (Medium 4px) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#4E6B8A] shadow-[0_0_4px_#4E6B8A] animate-mote-9" 
            style={{ top: '32%', right: '4%' }} 
          />
          {/* Mote 6: Slate Blue (Prominent Soft Orb 8px with blur) */}
          <div 
            className="absolute w-2 h-2 rounded-full bg-[#4E6B8A]/80 shadow-[0_0_7px_#4E6B8A] blur-[0.5px] animate-mote-3" 
            style={{ top: '54%', right: '1%' }} 
          />
          {/* Mote 7: Deep Navy / Teal (Micro 2px) */}
          <div 
            className="absolute w-0.5 h-0.5 rounded-full bg-[#0D9488] shadow-[0_0_3px_#0D9488] animate-mote-8" 
            style={{ top: '72%', right: '6%' }} 
          />

          {/* ── Bottom Perimeter Motes ── */}
          {/* Mote 8: Deep Navy (Medium 4px) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#0B2D4A] shadow-[0_0_4px_#0D9488] animate-mote-4" 
            style={{ bottom: '8%', right: '16%' }} 
          />
          {/* Mote 9: Clinical Teal (Prominent Orb 6px) */}
          <div 
            className="absolute w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6] animate-mote-12" 
            style={{ bottom: '3%', right: '38%' }} 
          />
          {/* Mote 10: Cool Slate (Medium 4px) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#94A3B8] shadow-[0_0_4px_#CBD5E1] animate-mote-5" 
            style={{ bottom: '7%', left: '18%' }} 
          />
          {/* Mote 11: Electric Cyan (Micro 2px) */}
          <div 
            className="absolute w-0.5 h-0.5 rounded-full bg-[#2DD4BF] shadow-[0_0_3px_#2DD4BF] animate-mote-10" 
            style={{ bottom: '14%', left: '32%' }} 
          />

          {/* ── Left Perimeter Motes ── */}
          {/* Mote 12: Clinical Teal (Medium 4px) */}
          <div 
            className="absolute w-1 h-1 rounded-full bg-[#14B8A6] shadow-[0_0_5px_#14B8A6] animate-mote-6" 
            style={{ top: '64%', left: '4%' }} 
          />
          {/* Mote 13: Clinical Teal (Soft Bokeh Orb 8px) */}
          <div 
            className="absolute w-2 h-2 rounded-full bg-[#14B8A6]/75 shadow-[0_0_8px_#14B8A6] blur-[0.5px] animate-mote-11" 
            style={{ top: '42%', left: '1%' }} 
          />
          {/* Mote 14: Slate Blue (Micro 2px) */}
          <div 
            className="absolute w-0.5 h-0.5 rounded-full bg-[#4E6B8A] shadow-[0_0_3px_#4E6B8A] animate-mote-8" 
            style={{ top: '24%', left: '5%' }} 
          />

          {/* ── Peripheral Satellite Motes (Distant orbit) ── */}
          {/* Mote 15: Mint Spark (Distant Top-Left 3px) */}
          <div 
            className="absolute w-[3px] h-[3px] rounded-full bg-[#5EEAD4] shadow-[0_0_4px_#5EEAD4] animate-mote-9" 
            style={{ top: '0%', left: '6%' }} 
          />
          {/* Mote 16: Cyan Spark (Distant Bottom-Right 3px) */}
          <div 
            className="absolute w-[3px] h-[3px] rounded-full bg-[#2DD4BF] shadow-[0_0_5px_#2DD4BF] animate-mote-1" 
            style={{ bottom: '1%', right: '4%' }} 
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
