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

import ClinicalSidebar from './components/ClinicalSidebar';

function SuiteContent() {
  const [appMode, setAppMode] = useState('landing'); // 'landing' | 'suite'
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

  // If viewing marketing landing page
  if (appMode === 'landing') {
    return (
      <CommercialLandingPage 
        onLaunchSuite={() => setAppMode('suite')} 
      />
    );
  }

  // Active Clinical Suite View
  return (
    <div className="min-h-screen flex flex-col justify-between bg-psynapse-canvas text-slate-900 font-sans">
      <div className="flex flex-col flex-1">
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

        {/* Clinical Workspace: Left Sidebar + Main Canvas */}
        <div className="flex flex-1 min-h-[calc(100vh-4rem)]">
          {/* Left Clinical Navigation Sidebar */}
          <ClinicalSidebar
            currentModule={currentModule}
            setCurrentModule={setCurrentModule}
            cdsActiveTab={cdsActiveTab}
            setCdsActiveTab={setCdsActiveTab}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />

          {/* Main Content Workspace Canvas */}
          <main className="flex-1 min-w-0 bg-psynapse-canvas">
            {/* If CFS flight simulator, show CFS sub-header */}
            {currentModule === 'cfs' && (
              <CfsSubNav
                activePhase={cfsActivePhase}
                setActivePhase={setCfsActivePhase}
                onResetCase={() => setCfsActivePhase('interview')}
                revealedCluesCount={cluesCount.revealed}
                totalCluesCount={cluesCount.total}
              />
            )}

            {currentModule === 'cds' ? (
              <CdsApp activeTab={cdsActiveTab} setActiveTab={setCdsActiveTab} />
            ) : (
              <CfsApp
                activePhase={cfsActivePhase}
                setActivePhase={setCfsActivePhase}
                onCluesUpdated={handleCluesUpdated}
              />
            )}
          </main>
        </div>
      </div>

      {/* Dynamic Unified Suite Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-bold text-psynapse-navy">
            {profile.practiceName ? `${profile.practiceName} • ` : ''}PsynapseCDS Platform • Clinical Decision Support for Psychiatric Prescribers
          </p>
          <p className="text-slate-400 text-[11px]">
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

      {/* Provider Profile & Practice Customization Modal */}
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
