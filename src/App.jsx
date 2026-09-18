import React, { useState } from 'react';
import SuiteHeader from './components/SuiteHeader';
import CdsSubNav from './components/CdsSubNav';
import CfsSubNav from './components/CfsSubNav';
import CdsApp from './modules/cds/CdsApp';
import CfsApp from './modules/cfs/CfsApp';
import UpdateNotification from './components/UpdateNotification';
import CommercialLandingPage from './components/CommercialLandingPage';
import ProviderSettingsModal from './components/ProviderSettingsModal';
import { ProviderProvider, useProvider } from './context/ProviderContext';
import { useAppUpdate } from './hooks/useAppUpdate';

function SuiteContent() {
  const [appMode, setAppMode] = useState('suite'); // defaults to active suite identical to Monica's workflow
  const [currentModule, setCurrentModule] = useState('cds');
  const [cdsActiveTab, setCdsActiveTab] = useState('screeners');
  const [cfsActivePhase, setCfsActivePhase] = useState('interview');
  const [cluesCount, setCluesCount] = useState({ revealed: 0, total: 4 });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const { profile } = useProvider();

  // PWA live update and "Restart to Update" state
  const {
    updateAvailable,
    isChecking,
    isUpdating,
    checkResult,
    isDismissed,
    checkForUpdates,
    restartToUpdate,
    dismissNotification,
    currentVersion
  } = useAppUpdate();

  const handleCluesUpdated = (revealed, total) => {
    setCluesCount({ revealed, total });
  };

  // If viewing marketing overview page
  if (appMode === 'landing') {
    return (
      <CommercialLandingPage 
        onLaunchSuite={() => setAppMode('suite')} 
      />
    );
  }

  // Active Clinical Suite View — identical layout to Monica's suite
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950">
      <div>
        {/* Master Suite Navigation Bar */}
        <SuiteHeader
          currentModule={currentModule}
          setCurrentModule={setCurrentModule}
          cdsActiveTab={cdsActiveTab}
          setCdsActiveTab={setCdsActiveTab}
          cfsActivePhase={cfsActivePhase}
          setCfsActivePhase={setCfsActivePhase}
          updateAvailable={updateAvailable}
          isChecking={isChecking}
          checkResult={checkResult}
          checkForUpdates={checkForUpdates}
          restartToUpdate={restartToUpdate}
          currentVersion={currentVersion}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onViewLanding={() => setAppMode('landing')}
        />

        {/* Dynamic Contextual Sub-Nav */}
        {currentModule === 'cds' ? (
          <CdsSubNav activeTab={cdsActiveTab} setActiveTab={setCdsActiveTab} />
        ) : (
          <CfsSubNav
            activePhase={cfsActivePhase}
            setActivePhase={setCfsActivePhase}
            onResetCase={() => setCfsActivePhase('interview')}
            revealedCluesCount={cluesCount.revealed}
            totalCluesCount={cluesCount.total}
          />
        )}

        {/* Active Application Canvas */}
        {currentModule === 'cds' ? (
          <CdsApp activeTab={cdsActiveTab} setActiveTab={setCdsActiveTab} />
        ) : (
          <CfsApp
            activePhase={cfsActivePhase}
            setActivePhase={setCfsActivePhase}
            onCluesUpdated={handleCluesUpdated}
          />
        )}
      </div>

      {/* Global Unified Suite Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-400 print:hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-1.5">
          <p className="font-bold text-slate-300">
            {profile.practiceName ? `${profile.practiceName} • ` : ''}PsynapseCDS Platform • Precision Psychiatric Decision Support &amp; Simulation Labs
          </p>
          <p className="text-slate-500 text-[11px]">
            Zero-PHI Client-Side Architecture • Configured for {profile.name}{profile.credentials ? `, ${profile.credentials}` : ''} • Section 3060(a) 21st Century Cures Act Non-Device CDS
          </p>
        </div>
      </footer>

      {/* Floating PWA Update Notification Banner */}
      <UpdateNotification
        updateAvailable={updateAvailable}
        isUpdating={isUpdating}
        isDismissed={isDismissed}
        onRestart={restartToUpdate}
        onDismiss={dismissNotification}
      />

      {/* Provider Profile Settings Modal */}
      <ProviderSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ProviderProvider>
      <SuiteContent />
    </ProviderProvider>
  );
}
