import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Compass, 
  ShieldCheck, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  Home,
  UserCheck
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

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 shadow-md print:hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Master Brand, Mode Switcher, & Install Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 md:h-16 gap-3 border-b border-slate-800/80">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div 
              onClick={onViewLanding}
              className="w-11 h-11 rounded-2xl bg-white p-1 shadow-md border border-teal-500/40 flex-shrink-0 flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity"
              title="PsynapseCDS Overview"
            >
              <img 
                src="./psynapse-emblem.png" 
                alt="PsynapseCDS Logo" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base tracking-tight">
                  Psynapse<span className="text-teal-400 font-black ml-0.5">CDS</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-950 text-teal-300 border border-teal-800">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  Zero-PHI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                {profile.practiceName ? `${profile.practiceName} • ` : ''}Precision Psychiatric Decision Support • {profile.name}{profile.credentials ? `, ${profile.credentials}` : ''}
              </p>
            </div>
          </div>

          {/* Master Suite Switcher & Action Pill */}
          <div className="flex items-center gap-2.5 flex-wrap">
            
            {/* Primary Mode Toggle Segmented Control */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center shadow-inner">
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
                <span>Flight Simulator (CFS)</span>
                <span className="px-1.5 py-0.2 bg-indigo-950 text-indigo-300 text-[9px] rounded font-extrabold border border-indigo-700 uppercase">
                  OSCE
                </span>
              </button>
            </div>

            {/* Desktop Native Install App Button */}
            {!isInstalled && isInstallable && (
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold transition-all cursor-pointer"
                title="Install PsynapseCDS as a standalone desktop app"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span className="hidden sm:inline">Install App</span>
              </button>
            )}

            {isInstalled && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                ✓ Desktop App
              </span>
            )}

            {/* Landing Page Overview Link */}
            <button
              onClick={onViewLanding}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
              title="Return to PsynapseCDS Overview & Pricing"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Overview</span>
            </button>

            {/* Provider Profile & Settings */}
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-teal-200 border border-slate-700 text-xs font-bold transition-all cursor-pointer"
              title="Configure Provider Credentials, Practice Name, and State"
            >
              <UserCheck className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">Provider Profile</span>
            </button>

            {/* Application Update Controls & Restart to Update Button */}
            {updateAvailable ? (
              <button
                onClick={restartToUpdate}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/30 animate-pulse transition-all transform active:scale-95 cursor-pointer"
                title="A new clinical update is ready! Click to restart and activate immediately."
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-950" />
                <span>Restart to Update</span>
              </button>
            ) : (
              <div className="relative flex items-center">
                <button
                  onClick={checkForUpdates}
                  disabled={isChecking}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-semibold transition-all cursor-pointer"
                  title="Check for PsynapseCDS updates"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-slate-400 ${isChecking ? 'animate-spin text-teal-400' : ''}`} />
                  <span className="hidden sm:inline">
                    {isChecking ? 'Checking...' : `Check for Updates (v${currentVersion})`}
                  </span>
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
