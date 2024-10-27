import { createContext, useContext, useState, ReactNode } from "react";

import { SETTINGS_MENU } from "src/utils/constants";
import { TSETTINGS_OPTIONS } from "src/utils/types";

interface SettingsContextType {
  currentStep: TSETTINGS_OPTIONS;
  setStep: (step: TSETTINGS_OPTIONS) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [currentStep, setCurrentStep] = useState<TSETTINGS_OPTIONS>(
    SETTINGS_MENU?.[0]?.options?.[0]
  );

  const setStep = (step: TSETTINGS_OPTIONS) => {
    setCurrentStep(step);
  };

  return (
    <SettingsContext.Provider value={{ currentStep, setStep }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettingsProvider = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(
      "useSettingsProvider must be used within a SettingsProvider"
    );
  }
  return context;
};
