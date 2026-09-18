import React from 'react';
import { 
  Home, 
  Users, 
  Pill, 
  ArrowLeftRight, 
  ShieldAlert, 
  FlaskConical, 
  ClipboardCheck, 
  Bot, 
  GraduationCap, 
  Settings, 
  FileEdit,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function ClinicalSidebar({
  currentModule,
  setCurrentModule,
  cdsActiveTab,
  setCdsActiveTab,
  onOpenSettings,
  isCollapsed = false,
  onToggleCollapse
}) {
  const isCds = currentModule === 'cds';

  const menuGroups = [
    {
      group: 'Core Practice',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: Home,
          module: 'cds',
          tab: 'screeners',
          badge: null
        },
        {
          id: 'patient-cases',
          label: 'Patient Cases & HPI',
          icon: Users,
          module: 'cds',
          tab: 'hpi',
          badge: 'DSM-5'
        },
        {
          id: 'screeners',
          label: 'Clinical Screeners',
          icon: FileEdit,
          module: 'cds',
          tab: 'screeners',
          badge: null
        }
      ]
    },
    {
      group: 'Prescribing & Safety',
      items: [
        {
          id: 'medications',
          label: 'Medication Dosing',
          icon: Pill,
          module: 'cds',
          tab: 'medications',
          badge: null
        },
        {
          id: 'crosstaper',
          label: 'Cross-Taper Engine',
          icon: ArrowLeftRight,
          module: 'cds',
          tab: 'crosstaper',
          badge: 'SGAs'
        },
        {
          id: 'interactions',
          label: 'Interactions & Safety',
          icon: ShieldAlert,
          module: 'cds',
          tab: 'interactions',
          badge: 'QTc'
        },
        {
          id: 'labs',
          label: 'Standard Lab Panels',
          icon: FlaskConical,
          module: 'cds',
          tab: 'labs',
          badge: 'ICD-10'
        },
        {
          id: 'checklists',
          label: 'DSM-5 Checklists',
          icon: ClipboardCheck,
          module: 'cds',
          tab: 'checklists',
          badge: null
        }
      ]
    },
    {
      group: 'Intelligence & Simulation',
      items: [
        {
          id: 'advisor',
          label: 'AI Preceptor & Audit',
          icon: Bot,
          module: 'cds',
          tab: 'advisor',
          badge: 'Audit'
        },
        {
          id: 'cfs',
          label: 'Flight Simulator',
          icon: GraduationCap,
          module: 'cfs',
          tab: 'interview',
          badge: 'OSCE',
          highlight: true
        }
      ]
    }
  ];

  const handleItemClick = (item) => {
    if (item.module !== currentModule) {
      setCurrentModule(item.module);
    }
    if (item.module === 'cds') {
      setCdsActiveTab(item.tab);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between flex-shrink-0 min-h-[calc(100vh-4rem)] select-none">
      {/* Navigation List */}
      <div className="p-4 space-y-6 overflow-y-auto">
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-1">
            <h4 className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-400">
              {group.group}
            </h4>
            <div className="space-y-0.5 pt-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = 
                  item.module === 'cfs' 
                    ? currentModule === 'cfs' 
                    : currentModule === 'cds' && cdsActiveTab === item.tab;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-100 text-psynapse-navy font-bold shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 transition-colors ${
                          isActive
                            ? 'text-psynapse-teal'
                            : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-tight flex-shrink-0 ${
                          item.highlight
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                            : isActive
                            ? 'bg-teal-100 text-teal-800'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Profile / Settings Trigger */}
      <div className="p-3 border-t border-slate-200 bg-slate-50/50">
        <button
          onClick={onOpenSettings}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-slate-400" />
            <span>Settings &amp; Prescriber</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </aside>
  );
}
