import { createContext, useState, ReactNode } from "react";

// Define types for the overlay state
interface OverlayContextType {
  activeForm: string | null;
  toggleOverlay: (formName: string | null) => void;
}

// Create the Context
export const OverlayContext = createContext<OverlayContextType>({
  activeForm: null,
  toggleOverlay: () => {},
});

// Provide Context to the Application
export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const toggleOverlay = (formName: string | null) => {
    setActiveForm(formName); // Set the active form, or close overlay with null
  };

  return (
    <OverlayContext.Provider value={{ activeForm, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
