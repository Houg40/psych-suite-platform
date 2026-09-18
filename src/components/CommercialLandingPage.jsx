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

export default function CommercialLandingPage({ onLaunchSuite }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white">
      
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-xl shadow-xs">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-base text-white tracking-tight">PsychSuite</span>
              <span className="text-teal-400 font-bold ml-1 text-xs">Platform</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLaunchSuite}
              className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={onLaunchSuite}
              className="flex items-center gap-1.5 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black rounded-xl transition-all shadow-md hover:shadow-teal-500/20 cursor-pointer"
            >
              <span>Launch Live Suite</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.15),rgba(255,255,255,0))]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-bold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Zero-PHI Client-Side Architecture • HIPAA Liability-Free</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            The Clinical Decision Support &amp; Simulation Suite for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400">Psychiatric Prescribers</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Eliminate charting burnout, error-proof complex cross-tapers, and generate defensible DSM-5 notes in under 2 minutes. Designed as a frictionless sidecar companion for any EHR.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={onLaunchSuite}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-teal-500/20 transition-all cursor-pointer"
            >
              <span>Launch Live Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onLaunchSuite}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm rounded-2xl transition-all cursor-pointer"
            >
              Explore Clinical Engines
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-400" /> Works Alongside Tebra, Epic &amp; Athena
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-400" /> No BAA Required (Zero PHI Stored)
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-400" /> 1-Click Clipboard EHR Pasting
            </span>
          </div>
        </div>
      </section>

      {/* Core Feature Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
            Specialist Decision Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            5 Essential Engines Built for High-Risk Prescribing
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Standard EHRs only store data. PsychSuite does the clinical calculations, criteria verification, and safety checks for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Cross-Tapering */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3.5 hover:border-teal-500/40 transition-all">
            <div className="p-3 bg-teal-950 text-teal-400 rounded-2xl w-fit border border-teal-500/20">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Cross-Tapering Calculator</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Step-by-step cross-taper schedules for SSRIs, SNRIs, and <strong>Atypical Antipsychotics (SGAs)</strong>. Features D2 vs. 5-HT2A receptor affinities, cholinergic rebound prevention, and exact washout days.
            </p>
          </div>

          {/* Card 2: DSM-5 HPI Builder */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3.5 hover:border-teal-500/40 transition-all">
            <div className="p-3 bg-cyan-950 text-cyan-400 rounded-2xl w-fit border border-cyan-500/20">
              <FileEdit className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">DSM-5 Narrative HPI Builder</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full 77 criteria across 8 diagnostic domains with live diagnostic threshold badges (e.g. <em>MDD Met 5/9</em>, <em>ADHD Met</em>). Synthesizes coherent, audit-proof narrative prose in seconds.
            </p>
          </div>

          {/* Card 3: Standard Psychiatric Labs */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3.5 hover:border-teal-500/40 transition-all">
            <div className="p-3 bg-purple-950 text-purple-400 rounded-2xl w-fit border border-purple-500/20">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Standard Lab Requisitions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              3-tiered diagnostic lab draw sets (Metabolic, Neuro-Nutrient, Reproductive Hormones) with exact <strong>ICD-10 medical necessity codes</strong> to protect patients from insurance billing denials.
            </p>
          </div>

          {/* Card 4: AI Evaluation Auditor */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3.5 hover:border-teal-500/40 transition-all">
            <div className="p-3 bg-indigo-950 text-indigo-400 rounded-2xl w-fit border border-indigo-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">AI Documentation Auditor</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant 5-pillar clinical review scanning drafted notes for overlooked suicide guardrails, missing organic rule-outs (A1c, thyroid, ferritin, OSA), food absorption rules (Latuda 350 kcal), and state telehealth compliance.
            </p>
          </div>

          {/* Card 5: Clinical Flight Simulator */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3.5 hover:border-teal-500/40 transition-all">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-2xl w-fit border border-emerald-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Clinical Flight Simulator (CFS)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interactive psychiatric simulation labs for nursing and medical schools. Practice diagnostic interviewing, uncover hidden clinical clues, and formulate medication management without patient risk.
            </p>
          </div>

          {/* Card 6: Zero-PHI Security */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-3.5 hover:border-teal-500/40 transition-all">
            <div className="p-3 bg-amber-950 text-amber-400 rounded-2xl w-fit border border-amber-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">100% In-Memory Privacy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Never worry about HIPAA cloud leaks. All evaluation drafting, drug calculations, and clinical notes run exclusively in the local browser's encrypted memory space.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Simple, Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Invest in 2 Extra Hours of Free Time Every Day
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Try free for 14 days. No credit card required. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Solo Tier */}
            <div className="bg-slate-900 border border-teal-500/60 rounded-3xl p-6 space-y-5 relative shadow-xl shadow-teal-950/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-500 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                Most Popular
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-base text-white">Solo Prescriber</h3>
                <p className="text-xs text-slate-400">For solo PMHNPs, Psychiatrists &amp; PAs</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">$39</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Full CDS &amp; HPI Builder
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Cross-Tapering Calculator
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Standard Lab Panels &amp; ICD-10
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> AI Clinical Documentation Auditor
                </li>
              </ul>
              <button
                onClick={onLaunchSuite}
                className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs rounded-xl transition-all cursor-pointer"
              >
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Group Tier */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-5">
              <div className="space-y-1">
                <h3 className="font-black text-base text-white">Group Practice</h3>
                <p className="text-xs text-slate-400">2 to 10 Clinicians &amp; Clinics</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">$149</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Everything in Solo Prescriber
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Up to 10 Provider Seats
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Shared Practice Templates
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Priority Onboarding Support
                </li>
              </ul>
              <button
                onClick={onLaunchSuite}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Contact Sales
              </button>
            </div>

            {/* Academic Tier */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-5">
              <div className="space-y-1">
                <h3 className="font-black text-base text-white">Academic &amp; Residency</h3>
                <p className="text-xs text-slate-400">Universities &amp; Training Clinics</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">$15</span>
                <span className="text-xs text-slate-400">/ student / semester</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Clinical Flight Simulator Labs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Diagnostic Clue Formulation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> DSM-5 Diagnostic Checklists
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" /> Faculty Dashboard &amp; Analytics
                </li>
              </ul>
              <button
                onClick={onLaunchSuite}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Request Curriculum Demo
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p className="font-bold text-slate-400">
          PsychSuite Platform • Built for High-Volume Psychiatric Decision Support
        </p>
        <p className="text-[11px] text-slate-600 mt-1">
          Complies with Section 3060(a) 21st Century Cures Act Non-Device CDS Guidelines.
        </p>
      </footer>

    </div>
  );
}
