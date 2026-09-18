import React, { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_PROFILE = {
  name: 'Clinical Prescriber',
  credentials: 'MD / DO / PMHNP / PA-C',
  practiceName: 'Psychiatric Practice',
  specialty: 'Adult & Adolescent Psychiatry',
  state: 'Washington',
  stateCode: 'WA',
  npi: '',
  dea: '',
  phone: '',
  email: '',
  customDisclaimers: ''
};

const STORAGE_KEY = 'psynapse_cds_provider_profile';

const ProviderContext = createContext({
  profile: DEFAULT_PROFILE,
  updateProfile: () => {},
  resetProfile: () => {},
  getSignature: () => '',
  getHeaderString: () => ''
});

export function ProviderProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_PROFILE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  const updateProfile = (updates) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
  };

  const getSignature = () => {
    const parts = [];
    if (profile.name) {
      parts.push(profile.credentials ? `${profile.name}, ${profile.credentials}` : profile.name);
    }
    if (profile.practiceName) {
      parts.push(profile.practiceName);
    }
    if (profile.state) {
      parts.push(`${profile.state} Licensed`);
    }
    return parts.join(' • ');
  };

  const getHeaderString = () => {
    return profile.practiceName || 'Psychiatric Clinical Decision Support';
  };

  return (
    <ProviderContext.Provider value={{
      profile,
      updateProfile,
      resetProfile,
      getSignature,
      getHeaderString
    }}>
      {children}
    </ProviderContext.Provider>
  );
}

export function useProvider() {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProvider must be used within a ProviderProvider');
  }
  return context;
}
