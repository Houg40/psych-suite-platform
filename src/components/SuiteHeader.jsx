import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Compass, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  BookOpen,
  SlidersHorizontal,
  GraduationCap,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  UserCheck,
  Settings,
  Home
} from 'lucide-react';
import { useProvider } from '../context/ProviderContext';

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
  onViewLanding = () => {}
}) {
  const { profile } = useProvider();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode
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
      alert("To install PsynapseCDS on your desktop, click the Install icon (computer screen with down arrow) in your browser's address bar!");
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

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 shadow-md print:hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Clean 3-Zone Flex Layout */}
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand Identity & Precision Subtitle */}
          <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 p-2 shadow-md border border-teal-400/40 flex items-center justify-center text-white flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
                <path d="M12 3v6" />
                <path d="M12 15v6" />
                <path d="M3 12h6" />
                <path d="M15 12h6" />
                <circle cx="12" cy="3" r="1.5" fill="currentColor" />
                <circle cx="12" cy="21" r="1.5" fill="currentColor" />
                <circle cx="3" cy="12" r="1.5" fill="currentColor" />
                <circle cx="21" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base tracking-tight whitespace-nowrap">
                  Psynapse<span className="text-teal-400 font-black ml-0.5">CDS</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-950 text-teal-300 border border-teal-800 flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  Zero-PHI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium truncate max-w-[280px] sm:max-w-md lg:max-w-xl">
                {profile.practiceName ? `${profile.practiceName} • ` : ''}Precision Psychiatric Decision Support &amp; Simulation
              </p>
            </div>
          </div>

          {/* Zone 2: Central Segmented Mode Switcher */}
          <div className="hidden md:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner flex-shrink-0">
            <button
              onClick={() => setCurrentModule('cds')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentModule === 'cds'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Prescribing &amp; CDS</span>
            </button>

            <button
              onClick={() => setCurrentModule('cfs')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentModule === 'cfs'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-indigo-300" />
              <span>Flight Simulator</span>
              <span className="px-1.5 py-0.2 bg-indigo-950 text-indigo-300 text-[9px] rounded font-extrabold border border-indigo-700 uppercase">
                OSCE
              </span>
            </button>
          </div>

          {/* Zone 3: Toolbar Actions (Always Single Line) */}
          <div className="flex items-center gap-2 flex-nowrap flex-shrink-0">
            
            {/* Mobile Mode Switcher */}
            <div className="md:hidden flex items-center bg-slate-950 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setCurrentModule('cds')}
                className={`p-1.5 rounded text-xs ${currentModule === 'cds' ? 'bg-teal-600 text-white' : 'text-slate-400'}`}
                title="Prescribing & CDS"
              >
                <Stethoscope className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentModule('cfs')}
                className={`p-1.5 rounded text-xs ${currentModule === 'cfs' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                title="Flight Simulator"
              >
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Provider Profile & Settings */}
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-teal-200 border border-slate-700 text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs"
              title="Configure Provider Credentials, Practice Name, and State"
            >
              <UserCheck className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">{profile.name || 'Provider Profile'}</span>
            </button>

            {/* Landing Page Overview Link */}
            <button
              onClick={onViewLanding}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
              title="Return to PsynapseCDS Overview & Pricing"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden lg:inline">Overview</span>
            </button>

            {/* Desktop Native Install App Button */}
            {!isInstalled && isInstallable && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
                title="Install PsynapseCDS as a standalone desktop app"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span className="hidden xl:inline">Install</span>
              </button>
            )}

            {/* Application Update Controls */}
            {updateAvailable ? (
              <button
                onClick={restartToUpdate}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs shadow-md shadow-teal-500/30 animate-pulse transition-all cursor-pointer whitespace-nowrap"
                title="A new clinical update is ready! Click to restart."
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-950" />
                <span>Update Ready</span>
              </button>
            ) : (
              <div className="relative flex items-center">
                <button
                  onClick={checkForUpdates}
                  disabled={isChecking}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700/70 text-xs transition-all cursor-pointer"
                  title={`Check for Updates (v${currentVersion})`}
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin text-teal-400' : ''}`} />
                </button>
                
                {checkResult && (
                  <div className={`absolute top-full right-0 mt-2 px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl border z-50 whitespace-nowrap animate-in fade-in slide-in-from-top-1 ${
                    checkResult.type === 'success' 
                      ? 'bg-emerald-950 text-emerald-200 border-emerald-700' 
                      : checkResult.type === 'error'
                      ? 'bg-rose-950 text-rose-200 border-rose-700'
                      : 'bg-slate-800 text-slate-200 border-slate-700'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      {checkResult.type === 'success' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : checkResult.type === 'error' ? (
                        <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      )}
                      <span>{checkResult.message}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </header>
  );
}
