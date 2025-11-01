"use client";

import React from "react";
import { Theme } from "../lib/themes";
import { useTheme } from "../context/ThemeContext";

interface ThemeCardProps {
  theme: Theme;
  onSelect: (theme: Theme) => void;
}

export default function ThemeCard({ theme, onSelect }: ThemeCardProps) {
  const { currentTheme } = useTheme();
  const isSelected = currentTheme.id === theme.id;

  const handleClick = () => {
    onSelect(theme);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-200 hover:scale-105 ${
        isSelected ? "ring-4 ring-white" : ""
      }`}
      style={{
        background: theme.colors.background,
      }}
    >
      {/* Theme preview content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.text }}>
          Aa
        </div>
      </div>

      {/* Theme name label */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex items-center justify-between">
          <span
            className="text-sm font-medium"
            style={{ color: theme.colors.text }}
          >
            {theme.name}
          </span>
          {isSelected && (
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <svg
                className="w-3 h-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
