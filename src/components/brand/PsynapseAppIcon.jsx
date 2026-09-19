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

      {/* Ambient Fire Ember & Ash Particulate Field (Drafting Upwards with 3D Tumble) */}
      {animated && (
        <div className="absolute -inset-6 sm:-inset-8 pointer-events-none overflow-visible">
          {/* ── Flake 1: Elongated Teal Fire Spark (Top-Left) ── */}
          <div 
            className="absolute w-[2px] h-[5px] rounded-[1px_3px_1px_3px] bg-gradient-to-t from-[#0D9488] to-[#14B8A6] shadow-[0_0_4px_#14B8A6] animate-ember-1" 
            style={{ top: '22%', left: '12%' }} 
          />
          {/* ── Flake 2: Asymmetrical Cyan Ember Shard (Top Center) ── */}
          <div 
            className="absolute w-[4px] h-[3px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#5EEAD4] shadow-[0_0_6px_#5EEAD4] animate-ember-7" 
            style={{ top: '14%', left: '42%' }} 
          />
          {/* ── Flake 3: Diamond Cyan Spark (Top-Right) ── */}
          <div 
            className="absolute w-[3px] h-[3px] rotate-45 rounded-[1px] bg-[#2DD4BF] shadow-[0_0_5px_#2DD4BF] animate-ember-2" 
            style={{ top: '18%', right: '16%' }} 
          />
          {/* ── Flake 4: Micro Ash Fleck (Top Peripheral) ── */}
          <div 
            className="absolute w-[1.5px] h-[2.5px] rounded-[1px_2px_1px_2px] bg-[#CBD5E1] shadow-[0_0_2px_#CBD5E1] animate-ember-10" 
            style={{ top: '8%', right: '28%' }} 
          />

          {/* ── Flake 5: Tilted Slate Blue Cinder (Right Edge) ── */}
          <div 
            className="absolute w-[4px] h-[2.5px] rounded-[2px_5px_1px_4px] bg-[#4E6B8A] shadow-[0_0_4px_#4E6B8A] animate-ember-9" 
            style={{ top: '42%', right: '6%' }} 
          />
          {/* ── Flake 6: Large Organic Ember Flake (Right Perimeter) ── */}
          <div 
            className="absolute w-[5px] h-[4px] rounded-[60%_40%_50%_50%/40%_60%_50%_50%] bg-gradient-to-br from-[#4E6B8A] to-[#64748B] shadow-[0_0_6px_#4E6B8A] animate-ember-3" 
            style={{ top: '62%', right: '2%' }} 
          />
          {/* ── Flake 7: Upward Needle Spark (Lower Right) ── */}
          <div 
            className="absolute w-[1.5px] h-[4.5px] rounded-full bg-[#0D9488] shadow-[0_0_3px_#0D9488] animate-ember-8" 
            style={{ top: '78%', right: '10%' }} 
          />

          {/* ── Flake 8: Rough Deep Navy Cinder (Bottom-Right) ── */}
          <div 
            className="absolute w-[3.5px] h-[3px] rounded-[1px_4px_2px_5px] bg-[#0B2D4A] shadow-[0_0_3px_#0D9488] animate-ember-4" 
            style={{ bottom: '16%', right: '20%' }} 
          />
          {/* ── Flake 9: Glowing Teal Fire Flake (Bottom Center) ── */}
          <div 
            className="absolute w-[5px] h-[3.5px] rounded-[30%_70%_60%_40%/50%_40%_60%_50%] bg-[#14B8A6] shadow-[0_0_7px_#14B8A6] animate-ember-12" 
            style={{ bottom: '10%', right: '40%' }} 
          />
          {/* ── Flake 10: Cool Slate Ash Fleck (Bottom-Left) ── */}
          <div 
            className="absolute w-[3px] h-[2px] rounded-[2px_1px_3px_1px] bg-[#94A3B8] shadow-[0_0_3px_#CBD5E1] animate-ember-5" 
            style={{ bottom: '14%', left: '20%' }} 
          />
          {/* ── Flake 11: Electric Cyan Needle Spark (Bottom-Left) ── */}
          <div 
            className="absolute w-[1.5px] h-[4px] rounded-full bg-[#2DD4BF] shadow-[0_0_4px_#2DD4BF] animate-ember-11" 
            style={{ bottom: '22%', left: '32%' }} 
          />

          {/* ── Flake 12: Diamond Teal Spark (Left Perimeter) ── */}
          <div 
            className="absolute w-[3.5px] h-[3.5px] rotate-45 rounded-[1px] bg-[#14B8A6] shadow-[0_0_5px_#14B8A6] animate-ember-6" 
            style={{ top: '70%', left: '8%' }} 
          />
          {/* ── Flake 13: Large Tumbling Fire Cinder (Left Flank) ── */}
          <div 
            className="absolute w-[5px] h-[4px] rounded-[40%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-t from-[#0D9488] to-[#14B8A6] shadow-[0_0_7px_#14B8A6] animate-ember-13" 
            style={{ top: '48%', left: '2%' }} 
          />
          {/* ── Flake 14: Slate Blue Fleck (Upper Left) ── */}
          <div 
            className="absolute w-[2.5px] h-[2.5px] rounded-[1px_3px_2px_1px] bg-[#4E6B8A] shadow-[0_0_3px_#4E6B8A] animate-ember-14" 
            style={{ top: '30%', left: '8%' }} 
          />

          {/* ── Peripheral Sparks (High thermal draft) ── */}
          {/* Flake 15: Mint Needle Spark (Distant Updraft) */}
          <div 
            className="absolute w-[2px] h-[6px] rounded-full bg-[#5EEAD4] shadow-[0_0_5px_#5EEAD4] animate-ember-15" 
            style={{ top: '4%', left: '10%' }} 
          />
          {/* Flake 16: Cyan Diamond Ash (Distant Updraft) */}
          <div 
            className="absolute w-[3px] h-[3px] rotate-45 rounded-[1px] bg-[#2DD4BF] shadow-[0_0_5px_#2DD4BF] animate-ember-16" 
            style={{ bottom: '4%', right: '8%' }} 
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
