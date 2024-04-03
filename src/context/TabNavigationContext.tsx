import React, { useState, createContext, FC, Dispatch, SetStateAction } from "react";

type TabNavigationContextType = {
  currentStep: string;
  setCurrentStep: Dispatch<SetStateAction<string>>;
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
  defaultActive: boolean;
  setDefaultActive: Dispatch<SetStateAction<boolean>>;
};

type TabNavigationProviderProps = {
  children: React.ReactNode;
};

export const TabNavigationContext = createContext<TabNavigationContextType | undefined>(undefined);

export const TabNavigationProvider: FC<TabNavigationProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<string>("1");
  const [steps, setSteps] = useState<number>(0);
  const [defaultActive, setDefaultActive] = useState<boolean>(true);
  const value = { currentStep, setCurrentStep, steps, setSteps, defaultActive, setDefaultActive };

  return (
    <TabNavigationContext.Provider value={value}>
      {children}
    </TabNavigationContext.Provider>
  );
};
