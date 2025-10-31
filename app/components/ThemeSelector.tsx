"use client";

import React from "react";
import { themes } from "../lib/themes";
import { useTheme } from "../context/ThemeContext";
import ThemeCard from "./ThemeCard";

export default function ThemeSelector() {
  const { setTheme, setPreviewTheme } = useTheme();

  const handleThemeSelect = (theme: typeof themes[0]) => {
    setTheme(theme);
  };

  const handleThemeHover = (theme: typeof themes[0]) => {
    setPreviewTheme(theme);
  };

  const handleThemeLeave = () => {
    setPreviewTheme(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-light" style={{ color: "var(--theme-text)" }}>
          Theme
        </h1>
      </div>

      {/* Theme Grid */}
      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-6">
          {themes.map((theme) => (
            <div
              key={theme.id}
              onMouseEnter={() => handleThemeHover(theme)}
              onMouseLeave={handleThemeLeave}
            >
              <ThemeCard theme={theme} onSelect={handleThemeSelect} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
