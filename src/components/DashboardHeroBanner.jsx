import React from 'react';
import { 
  ArrowRight, 
  Pill, 
  AlertTriangle, 
  UserCheck, 
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function DashboardHeroBanner({ onNewPatientCase, onExploreFeatures }) {
  const highlights = [
    {
      title: 'Medication recommendations',
      desc: 'Guideline-aligned, context-aware psychotropic dosing',
      icon: Pill
    },
    {
      title: 'Interaction & safety alerts',
      desc: 'Real-time QTc and pharmacodynamic risk detection',
      icon: AlertTriangle
    },
    {
      title: 'Patient-specific considerations',
      desc: 'Comorbidities, fasting metabolic labs, and renal factors',
      icon: UserCheck
    },
    {
      title: 'Evidence summaries',
      desc: 'Concise, actionable DSM-5 diagnostic criteria',
      icon: FileText
    }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-psynapse-teal text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-PHI Client-Side Architecture • HIPAA Liability-Free</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-psynapse-navy font-bold tracking-tight leading-tight">
            Evidence-informed support for complex clinical decisions.
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl">
            Psynapse CDS delivers real-time, evidence-based insights designed for the realities of psychiatric practice. Titrate safely, eliminate charting burnout, and verify diagnostic criteria in minutes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onNewPatientCase}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-psynapse-navy hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <span>New Patient Case</span>
              <ArrowRight className="w-3.5 h-3.5 text-psynapse-teal" />
            </button>

            <button
              onClick={onExploreFeatures}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 text-xs font-semibold transition-all cursor-pointer"
            >
              Explore Clinical Engines
            </button>
          </div>
        </div>

        {/* Right Column: CDS Overview Card */}
        <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Clinical Decision Support
            </span>
            <span className="text-[10px] font-bold text-psynapse-teal">
              Active v1.1.0
            </span>
          </div>

          <div className="space-y-3">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-teal-100/70 text-teal-800 flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <h4 className="text-xs font-bold text-psynapse-navy">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200/80">
            <p className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400">
              More context. Greater confidence. <span className="text-psynapse-slate">For the people behind the prescriptions.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
