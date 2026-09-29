import { createContext, useContext, useState, ReactNode } from 'react';
import { SEASONAL_DATA, SeasonalInfo } from '../lib/seasonalData';

export interface AppFilters {
  maxPrice?: number;
  dislikedColors: string[];
  modesty: 'any' | 'modest';
  occasion: 'casual' | 'fancy' | 'semi-formal' | 'any';
  fit: 'any' | 'tight' | 'oversized' | 'revealing';
  excludeRevealing: boolean;
}

export interface AppState {
  seasonData: SeasonalInfo;
  selectedStyles: string[];
  blendedStyle: string | null;
  outfitData: any | null;
  previousOutfitData: any | null;
  filters: AppFilters;
}

interface AppContextType {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
  updateFilters: (filters: Partial<AppFilters>) => void;
  reset: () => void;
}

const defaultSeason = SEASONAL_DATA["True Autumn"] || Object.values(SEASONAL_DATA)[0];

const initialState: AppState = {
  seasonData: defaultSeason,
  selectedStyles: ['Minimalist Luxe'],
  blendedStyle: 'Minimalist Luxe',
  outfitData: null,
  previousOutfitData: null,
  filters: {
    dislikedColors: [],
    modesty: 'any',
    occasion: 'any',
    fit: 'any',
    excludeRevealing: false
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  const updateState = (updates: Partial<AppState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const updateFilters = (newFilters: Partial<AppFilters>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters }
    }));
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <AppContext.Provider value={{ state, updateState, updateFilters, reset }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
