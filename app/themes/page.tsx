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
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch("/api/config");

        if (!response.ok) {
          throw new Error(
            `Failed to fetch config: ${response.status} ${response.statusText}`
          );
        }

        let data;
        try {
          data = await response.json();
        } catch (parseError) {
          throw new Error("Failed to parse config JSON");
        }

        setConfig(data);
        setConfigError(null);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error loading config";
        console.error("Error loading config:", error);
        setConfigError(errorMessage);
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
        {configError && (
          <div
            className="mb-4 p-4 rounded border"
            style={{
              borderColor: "var(--theme-border)",
              background: "var(--theme-background-secondary)",
              color: "var(--theme-text-secondary)"
            }}
          >
            <p className="text-sm">⚠️ {configError}</p>
          </div>
        )}
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
