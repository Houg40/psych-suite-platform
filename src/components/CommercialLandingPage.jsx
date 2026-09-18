import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ArrowLeftRight, 
  FileEdit, 
  FlaskConical, 
  Bot, 
  GraduationCap, 
  Check, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Lock, 
  HeartPulse, 
  Stethoscope,
  Activity,
  Layers
} from 'lucide-react';
import PsynapseLogo from './brand/PsynapseLogo';

export default function CommercialLandingPage({ onLaunchSuite }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B2D4A] selection:bg-[#14B8A6] selection:text-white font-sans">
      
      {/* Top Navigation */}
      <header className="border-b border-[#CBD5E1]/80 bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            onClick={onLaunchSuite}
            className="cursor-pointer hover:opacity-90 transition-opacity"
            title="PsynapseCDS"
          >
            <PsynapseLogo variant="compact" size="md" />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLaunchSuite}
              className="px-4 py-2 text-xs font-bold text-[#4E6B8A] hover:text-[#0B2D4A] transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={onLaunchSuite}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#0B2D4A] hover:bg-[#071F33] text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-[#0B2D4A]/15 cursor-pointer"
            >
              <span>Launch Live Suite</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#14B8A6]" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#CBD5E1]/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.12),rgba(248,250,252,0))]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6FFFA] border border-[#14B8A6]/30 text-[#0f766e] text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
            <span>Zero-PHI Client-Side Architecture • HIPAA Liability-Free</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0B2D4A] tracking-tight leading-[1.18]">
            Evidence-Informed Support for <span className="text-[#14B8A6]">Complex Clinical Decisions</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#4E6B8A] max-w-3xl mx-auto font-normal leading-relaxed">
            Eliminate charting burnout, error-proof complex cross-tapers, and generate defensible DSM-5 notes in under 2 minutes. Designed as a frictionless sidecar companion for any EHR.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={onLaunchSuite}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0B2D4A] hover:bg-[#071F33] text-white font-bold text-sm rounded-2xl shadow-xl shadow-[#0B2D4A]/15 hover:shadow-2xl transition-all cursor-pointer"
            >
              <span>Launch Live Interactive Demo</span>
              <ArrowRight className="w-4 h-4 text-[#14B8A6]" />
            </button>
            <button
              onClick={onLaunchSuite}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0B2D4A] border border-[#CBD5E1] font-bold text-sm rounded-2xl shadow-xs transition-all cursor-pointer hover:border-[#4E6B8A]"
            >
              Explore Clinical Engines
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#4E6B8A] font-semibold">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#14B8A6]" /> Works Alongside Tebra, Epic &amp; Athena
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#14B8A6]" /> No BAA Required (Zero PHI Stored)
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#14B8A6]" /> 1-Click Clipboard EHR Pasting
            </span>
          </div>
        </div>
      </section>

      {/* Core Feature Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black text-[#14B8A6] uppercase tracking-widest">
            Specialist Decision Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2D4A] tracking-tight">
            5 Essential Engines Built for High-Risk Prescribing
          </h2>
          <p className="text-xs sm:text-sm text-[#4E6B8A]">
            Standard EHRs only store data. PsynapseCDS does the clinical calculations, criteria verification, and safety checks for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Cross-Tapering */}
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3.5 hover:border-[#14B8A6] shadow-xs hover:shadow-md transition-all">
            <div className="p-3 bg-[#E6FFFA] text-[#0f766e] rounded-2xl w-fit border border-[#14B8A6]/30">
              <ArrowLeftRight className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-lg font-black text-[#0B2D4A]">Cross-Tapering Calculator</h3>
            <p className="text-xs text-[#4E6B8A] leading-relaxed">
              Step-by-step cross-taper schedules for SSRIs, SNRIs, and <strong>Atypical Antipsychotics (SGAs)</strong>. Features D2 vs. 5-HT2A receptor affinities, cholinergic rebound prevention, and exact washout days.
            </p>
          </div>

          {/* Card 2: DSM-5 HPI Builder */}
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3.5 hover:border-[#14B8A6] shadow-xs hover:shadow-md transition-all">
            <div className="p-3 bg-sky-50 text-sky-700 rounded-2xl w-fit border border-sky-200">
              <FileEdit className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-black text-[#0B2D4A]">DSM-5 Narrative HPI Builder</h3>
            <p className="text-xs text-[#4E6B8A] leading-relaxed">
              Full 77 criteria across 8 diagnostic domains with live diagnostic threshold badges (e.g. <em>MDD Met 5/9</em>, <em>ADHD Met</em>). Synthesizes coherent, audit-proof narrative prose in seconds.
            </p>
          </div>

          {/* Card 3: Standard Psychiatric Labs */}
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3.5 hover:border-[#14B8A6] shadow-xs hover:shadow-md transition-all">
            <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl w-fit border border-teal-200">
              <FlaskConical className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-lg font-black text-[#0B2D4A]">Standard Lab Requisitions</h3>
            <p className="text-xs text-[#4E6B8A] leading-relaxed">
              3-tiered diagnostic lab draw sets (Metabolic, Neuro-Nutrient, Reproductive Hormones) with exact <strong>ICD-10 medical necessity codes</strong> to protect patients from insurance billing denials.
            </p>
          </div>

          {/* Card 4: AI Evaluation Auditor */}
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3.5 hover:border-[#14B8A6] shadow-xs hover:shadow-md transition-all">
            <div className="p-3 bg-indigo-50 text-indigo-700 rounded-2xl w-fit border border-indigo-200">
              <Bot className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-black text-[#0B2D4A]">AI Documentation Auditor</h3>
            <p className="text-xs text-[#4E6B8A] leading-relaxed">
              Instant 5-pillar clinical review scanning drafted notes for overlooked suicide guardrails, missing organic rule-outs (A1c, thyroid, ferritin, OSA), food absorption rules (Latuda 350 kcal), and state telehealth compliance.
            </p>
          </div>

          {/* Card 5: Clinical Flight Simulator */}
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3.5 hover:border-[#14B8A6] shadow-xs hover:shadow-md transition-all">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl w-fit border border-emerald-200">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-black text-[#0B2D4A]">Clinical Flight Simulator (CFS)</h3>
            <p className="text-xs text-[#4E6B8A] leading-relaxed">
              Interactive psychiatric simulation labs for nursing and medical schools. Practice diagnostic interviewing, uncover hidden clinical clues, and formulate medication management without patient risk.
            </p>
          </div>

          {/* Card 6: Zero-PHI Security */}
          <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-3.5 hover:border-[#14B8A6] shadow-xs hover:shadow-md transition-all">
            <div className="p-3 bg-slate-100 text-slate-700 rounded-2xl w-fit border border-slate-200">
              <Lock className="w-6 h-6 text-[#4E6B8A]" />
            </div>
            <h3 className="text-lg font-black text-[#0B2D4A]">100% In-Memory Privacy</h3>
            <p className="text-xs text-[#4E6B8A] leading-relaxed">
              Never worry about HIPAA cloud leaks. All evaluation drafting, drug calculations, and clinical notes run exclusively in the local browser's encrypted memory space.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-[#CBD5E1]/60 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#14B8A6] uppercase tracking-widest">
              Simple, Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2D4A] tracking-tight">
              Invest in 2 Extra Hours of Free Time Every Day
            </h2>
            <p className="text-xs sm:text-sm text-[#4E6B8A]">
              Try free for 14 days. No credit card required. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Solo Tier */}
            <div className="bg-[#F8FAFC] border-2 border-[#14B8A6] rounded-3xl p-6 space-y-5 relative shadow-lg shadow-[#14B8A6]/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#14B8A6] text-white font-black text-[10px] uppercase tracking-wider shadow-xs">
                Most Popular
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-base text-[#0B2D4A]">Solo Prescriber</h3>
                <p className="text-xs text-[#4E6B8A]">For solo PMHNPs, Psychiatrists &amp; PAs</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#0B2D4A]">$39</span>
                <span className="text-xs text-[#4E6B8A]">/ month</span>
              </div>
              <ul className="text-xs text-[#4E6B8A] space-y-2.5">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Full CDS &amp; HPI Builder
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Cross-Tapering Calculator
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Standard Lab Panels &amp; ICD-10
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> AI Clinical Documentation Auditor
                </li>
              </ul>
              <button
                onClick={onLaunchSuite}
                className="w-full py-2.5 bg-[#0B2D4A] hover:bg-[#071F33] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Group Tier */}
            <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-5 shadow-xs">
              <div className="space-y-1">
                <h3 className="font-black text-base text-[#0B2D4A]">Group Practice</h3>
                <p className="text-xs text-[#4E6B8A]">2 to 10 Clinicians &amp; Clinics</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#0B2D4A]">$149</span>
                <span className="text-xs text-[#4E6B8A]">/ month</span>
              </div>
              <ul className="text-xs text-[#4E6B8A] space-y-2.5">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Everything in Solo Prescriber
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Up to 10 Provider Seats
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Shared Practice Templates
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Priority Onboarding Support
                </li>
              </ul>
              <button
                onClick={onLaunchSuite}
                className="w-full py-2.5 bg-white hover:bg-slate-50 text-[#0B2D4A] border border-[#CBD5E1] font-bold text-xs rounded-xl transition-all cursor-pointer hover:border-[#4E6B8A]"
              >
                Contact Sales
              </button>
            </div>

            {/* Academic Tier */}
            <div className="bg-white border border-[#CBD5E1] rounded-3xl p-6 space-y-5 shadow-xs">
              <div className="space-y-1">
                <h3 className="font-black text-base text-[#0B2D4A]">Academic &amp; Residency</h3>
                <p className="text-xs text-[#4E6B8A]">Universities &amp; Training Clinics</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#0B2D4A]">$15</span>
                <span className="text-xs text-[#4E6B8A]">/ student / semester</span>
              </div>
              <ul className="text-xs text-[#4E6B8A] space-y-2.5">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Clinical Flight Simulator Labs
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Diagnostic Clue Formulation
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> DSM-5 Diagnostic Checklists
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#14B8A6]" /> Faculty Dashboard &amp; Analytics
                </li>
              </ul>
              <button
                onClick={onLaunchSuite}
                className="w-full py-2.5 bg-white hover:bg-slate-50 text-[#0B2D4A] border border-[#CBD5E1] font-bold text-xs rounded-xl transition-all cursor-pointer hover:border-[#4E6B8A]"
              >
                Request Curriculum Demo
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#CBD5E1]/60 py-8 text-center text-xs text-[#4E6B8A] bg-[#F8FAFC]">
        <p className="font-bold text-[#0B2D4A]">
          PsynapseCDS Platform • Precision Psychiatric Clinical Decision Support &amp; Simulation
        </p>
        <p className="text-[11px] text-[#4E6B8A] mt-1">
          Complies with Section 3060(a) 21st Century Cures Act Non-Device CDS Guidelines.
        </p>
      </footer>

    </div>
  );
}
