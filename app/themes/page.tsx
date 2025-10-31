"use client";

import { useEffect, useState } from "react";
import ThemeSelector from "../components/ThemeSelector";
import LivePreview from "../components/LivePreview";
import Link from "next/link";

interface ConfigData {
  header?: {
    name: string;
    tagline: string;
  };
}

export default function ThemesPage() {
  const [config, setConfig] = useState<ConfigData | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch("/api/config");
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error("Error loading config:", error);
      }
    };

    loadConfig();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--theme-background)",
        color: "var(--theme-text)"
      }}
    >
      {/* Header with back button */}
      <div
        className="border-b"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ color: "var(--theme-text)" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </Link>
        </div>
      </div>

      {/* Main content - Split layout */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Theme Selector */}
          <div className="lg:pr-8">
            <ThemeSelector />
          </div>

          {/* Right side - Live Preview */}
          <div className="hidden lg:block">
            <LivePreview
              userName={config?.header?.name || "Your Name"}
              userTagline={config?.header?.tagline || "Content Creator"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
