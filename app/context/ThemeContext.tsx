"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Theme, defaultTheme, getThemeById } from "../lib/themes";

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  previewTheme: Theme | null;
  setPreviewTheme: (theme: Theme | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
  const [previewTheme, setPreviewTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedThemeId = localStorage.getItem("selectedTheme");
      if (savedThemeId) {
        const theme = getThemeById(savedThemeId);
        if (theme) {
          setCurrentTheme(theme);
        }
      }
    } catch (error) {
      console.error("Failed to load theme from localStorage:", error);
      // Fall back to defaultTheme (already set in state)
    }
  }, []);

  // Apply theme CSS variables
  useEffect(() => {
    if (!mounted) return;

    const activeTheme = previewTheme || currentTheme;
    const root = document.documentElement;

    root.style.setProperty("--theme-background", activeTheme.colors.background);
    root.style.setProperty(
      "--theme-background-secondary",
      activeTheme.colors.backgroundSecondary || activeTheme.colors.background
    );
    root.style.setProperty("--theme-primary", activeTheme.colors.primary);
    root.style.setProperty("--theme-secondary", activeTheme.colors.secondary);
    root.style.setProperty("--theme-accent", activeTheme.colors.accent);
    root.style.setProperty("--theme-border", activeTheme.colors.border);
    root.style.setProperty("--theme-text", activeTheme.colors.text);
    root.style.setProperty("--theme-text-secondary", activeTheme.colors.textSecondary);
  }, [currentTheme, previewTheme, mounted]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    try {
      localStorage.setItem("selectedTheme", theme.id);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
      // Continue without throwing - app remains usable even if persistence fails
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, previewTheme, setPreviewTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
