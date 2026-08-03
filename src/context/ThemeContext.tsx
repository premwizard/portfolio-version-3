'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type AccentTheme = 'purple' | 'cyan' | 'emerald' | 'amber';

interface ThemeContextType {
  theme: AccentTheme;
  setTheme: (theme: AccentTheme) => void;
  accentColor: string;
}

const ACCENT_COLORS: Record<AccentTheme, string> = {
  purple: '#A288A6',
  cyan: '#06B6D4',
  emerald: '#10B981',
  amber: '#F59E0B',
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'purple',
  setTheme: () => {},
  accentColor: '#A288A6',
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<AccentTheme>('purple');

  useEffect(() => {
    const saved = localStorage.getItem('prem_portfolio_theme') as AccentTheme;
    if (saved && ACCENT_COLORS[saved]) {
      setThemeState(saved);
    }
  }, []);

  const setTheme = (newTheme: AccentTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('prem_portfolio_theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, accentColor: ACCENT_COLORS[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
