import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Home,
  ShieldCheck
} from 'lucide-react';
import { useProvider } from '../context/ProviderContext';
import PsynapseLogo from './brand/PsynapseLogo';

export default function SuiteHeader({ 
  currentModule, 
  setCurrentModule, 
  cdsActiveTab, 
  setCdsActiveTab, 
  cfsActivePhase, 
  setCfsActivePhase,
  updateAvailable = false,
  isChecking = false,
  checkResult = null,
  checkForUpdates = () => {},
  restartToUpdate = () => {},
  currentVersion = '1.1.0',
  onOpenSettings = () => {},
  onViewLanding = () => {},
  onSearchQuery
}) {
  const { profile } = useProvider();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert("To install PsynapseCDS on your desktop, click the Install icon in your browser's address bar!");
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  const getInitials = (name) => {
    if (!name) return 'PS';
    const parts = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, '').trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchVal.trim()) return;
    const query = searchVal.toLowerCase();

    // Smart contextual router for clinical queries
    if (query.includes('taper') || query.includes('cross') || query.includes('switch') || query.includes('washout')) {
      setCurrentModule('cds');
      setCdsActiveTab('crosstaper');
    } else if (query.includes('lab') || query.includes('cmp') || query.includes('thyroid') || query.includes('icd')) {
      setCurrentModule('cds');
      setCdsActiveTab('labs');
    } else if (query.includes('qtc') || query.includes('interact') || query.includes('cyp') || query.includes('serotonin')) {
      setCurrentModule('cds');
      setCdsActiveTab('interactions');
    } else if (query.includes('dsm') || query.includes('criteria') || query.includes('adhd') || query.includes('mdd') || query.includes('bipolar')) {
      setCurrentModule('cds');
      setCdsActiveTab('checklists');
    } else if (query.includes('hpi') || query.includes('note') || query.includes('audit')) {
      setCurrentModule('cds');
      setCdsActiveTab('hpi');
    } else if (query.includes('sim') || query.includes('osce') || query.includes('marcus') || query.includes('patient case')) {
      setCurrentModule('cfs');
    } else {
      setCurrentModule('cds');
      setCdsActiveTab('medications');
    }

    if (onSearchQuery) {
      onSearchQuery(searchVal);
    }
  };

  const topNavTabs = [
    {
      id: 'home',
      label: 'Home',
      isActive: currentModule === 'cds' && (cdsActiveTab === 'screeners' || cdsActiveTab === 'dashboard'),
      onClick: () => {
        setCurrentModule('cds');
        setCdsActiveTab('screeners');
      }
    },
    {
      id: 'evidence',
      label: 'Evidence & DSM-5',
      isActive: currentModule === 'cds' && (cdsActiveTab === 'checklists' || cdsActiveTab === 'pathways'),
      onClick: () => {
        setCurrentModule('cds');
        setCdsActiveTab('checklists');
      }
    },
    {
      id: 'drug-intel',
      label: 'Drug Intelligence',
      isActive: currentModule === 'cds' && (cdsActiveTab === 'medications' || cdsActiveTab === 'crosstaper' || cdsActiveTab === 'interactions'),
      onClick: () => {
        setCurrentModule('cds');
        setCdsActiveTab('medications');
      }
    },
    {
      id: 'patient-context',
      label: 'Patient Context',
      isActive: currentModule === 'cds' && (cdsActiveTab === 'hpi' || cdsActiveTab === 'labs'),
      onClick: () => {
        setCurrentModule('cds');
        setCdsActiveTab('hpi');
      }
    },
    {
      id: 'simulation',
      label: 'Flight Simulator',
      isActive: currentModule === 'cfs',
      badge: 'OSCE',
      onClick: () => {
        setCurrentModule('cfs');
      }
    }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs print:hidden select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Identity & Subtitle */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div 
            onClick={onViewLanding}
            className="cursor-pointer hover:opacity-95 transition-opacity"
            title="PsynapseCDS Overview"
          >
            <PsynapseLogo variant="compact" size="md" />
          </div>

          {/* Understated Top Navigation Links (Teal Underline) */}
          <nav className="hidden xl:flex items-center gap-6 h-16">
            {topNavTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={tab.onClick}
                className={`relative h-16 flex items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  tab.isActive
                    ? 'text-psynapse-navy font-bold'
                    : 'text-slate-600 hover:text-psynapse-navy'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded bg-indigo-100 text-indigo-700 uppercase">
                    {tab.badge}
                  </span>
                )}
                {tab.isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-psynapse-teal rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Center/Right: Omnibar Clinical Search + Utilities + Profile */}
        <div className="flex items-center gap-3 min-w-0 justify-end flex-1">
          
          {/* Global Search Omnibar */}
          <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-xs lg:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search drugs, conditions, or clinical questions..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-psynapse-teal focus:ring-2 focus:ring-psynapse-teal/20 focus:outline-none transition-all"
            />
          </form>

          {/* Landing / Commercial Overview Button */}
          <button
            onClick={onViewLanding}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer whitespace-nowrap"
            title="Return to Product Overview & Pricing"
          >
            <Home className="w-4 h-4 text-slate-400" />
            <span className="hidden md:inline">Overview</span>
          </button>

          {/* Install Native App (If available) */}
          {!isInstalled && isInstallable && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-50 text-psynapse-teal hover:bg-teal-100 text-xs font-bold border border-teal-200 transition-all cursor-pointer whitespace-nowrap"
              title="Install PsynapseCDS on desktop"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Install</span>
            </button>
          )}

          {/* Update Indicator */}
          {updateAvailable ? (
            <button
              onClick={restartToUpdate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-xs font-black shadow-xs animate-pulse cursor-pointer whitespace-nowrap"
              title="A clinical update is ready to activate"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Update Ready</span>
            </button>
          ) : (
            <button
              onClick={checkForUpdates}
              disabled={isChecking}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              title={`Software v${currentVersion} • Click to check for updates`}
            >
              <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin text-psynapse-teal' : ''}`} />
            </button>
          )}

          {/* Provider Profile Avatar Pill (Matches Concept Board) */}
          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

          <button
            onClick={onOpenSettings}
            className="flex items-center gap-2.5 p-1 sm:pr-2.5 rounded-full hover:bg-slate-100 transition-all cursor-pointer border border-transparent hover:border-slate-200"
            title="Configure Provider Credentials & Practice Profile"
          >
            {/* Circular Avatar */}
            <div className="w-8 h-8 rounded-full bg-psynapse-navy text-white text-xs font-bold flex items-center justify-center shadow-xs flex-shrink-0">
              {getInitials(profile.name)}
            </div>

            {/* Provider Info */}
            <div className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-xs font-bold text-psynapse-navy truncate max-w-[130px]">
                {profile.name || 'Prescriber Profile'}
              </span>
              <span className="text-[10px] text-slate-500 font-medium truncate max-w-[130px]">
                {profile.specialty || profile.practiceName || 'Psychiatry'}
              </span>
            </div>

            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block flex-shrink-0" />
          </button>

        </div>

      </div>
    </header>
  );
}
