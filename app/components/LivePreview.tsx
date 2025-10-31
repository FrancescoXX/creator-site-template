"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

interface LivePreviewProps {
  userName?: string;
  userTagline?: string;
}

export default function LivePreview({ userName = "Your Name", userTagline = "Content Creator" }: LivePreviewProps) {
  const { currentTheme, previewTheme } = useTheme();
  const activeTheme = previewTheme || currentTheme;

  return (
    <div className="sticky top-6 h-[calc(100vh-3rem)] flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {/* Phone frame */}
        <div
          className="rounded-[3rem] shadow-2xl overflow-hidden border-8"
          style={{ borderColor: "#000" }}
        >
          {/* Preview card with theme applied */}
          <div
            className="aspect-[9/16] overflow-y-auto"
            style={{
              background: activeTheme.colors.background,
              color: activeTheme.colors.text,
            }}
          >
            {/* Header */}
            <div
              className="border-b px-4 py-8"
              style={{ borderColor: activeTheme.colors.border }}
            >
              <h1
                className="text-xl font-light mb-1"
                style={{ color: activeTheme.colors.text }}
              >
                {userName}
              </h1>
              <p
                className="text-xs font-light"
                style={{ color: activeTheme.colors.textSecondary }}
              >
                {userTagline}
              </p>
            </div>

            {/* Main Content */}
            <div className="px-4">
              {/* Social Media Section */}
              <div
                className="py-6 border-t"
                style={{ borderColor: activeTheme.colors.border }}
              >
                <h2
                  className="text-sm font-light mb-3"
                  style={{ color: activeTheme.colors.text }}
                >
                  Social Media
                </h2>
                <div className="flex flex-wrap gap-3">
                  {["𝕏 Twitter", "in LinkedIn", "📷 Instagram"].map((link) => (
                    <span
                      key={link}
                      className="text-xs"
                      style={{ color: activeTheme.colors.textSecondary }}
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>

              {/* Podcast Section */}
              <div
                className="py-6 border-t"
                style={{ borderColor: activeTheme.colors.border }}
              >
                <h2
                  className="text-sm font-light mb-1"
                  style={{ color: activeTheme.colors.text }}
                >
                  Podcast
                </h2>
                <p
                  className="text-xs mb-3"
                  style={{ color: activeTheme.colors.textSecondary }}
                >
                  Weekly tech discussions
                </p>
                <div className="space-y-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="p-2 border"
                      style={{
                        borderColor: activeTheme.colors.border,
                        background: activeTheme.colors.backgroundSecondary || 'transparent'
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{ color: activeTheme.colors.text }}
                      >
                        Episode {i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Section */}
              <div
                className="py-6 border-t"
                style={{ borderColor: activeTheme.colors.border }}
              >
                <h2
                  className="text-sm font-light mb-1"
                  style={{ color: activeTheme.colors.text }}
                >
                  Blog
                </h2>
                <p
                  className="text-xs mb-3"
                  style={{ color: activeTheme.colors.textSecondary }}
                >
                  Latest articles and tutorials
                </p>
                <div className="space-y-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="p-2 border"
                      style={{ borderColor: activeTheme.colors.border }}
                    >
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3
                          className="text-xs font-light flex-1"
                          style={{ color: activeTheme.colors.text }}
                        >
                          Article Title {i}
                        </h3>
                        <span
                          className="text-[10px] whitespace-nowrap"
                          style={{ color: activeTheme.colors.textSecondary }}
                        >
                          Jan 15
                        </span>
                      </div>
                      <p
                        className="text-[10px]"
                        style={{ color: activeTheme.colors.textSecondary }}
                      >
                        Brief article excerpt goes here...
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="border-t mt-4 px-4 py-4"
              style={{ borderColor: activeTheme.colors.border }}
            >
              <p
                className="text-[10px]"
                style={{ color: activeTheme.colors.textSecondary }}
              >
                © 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Theme name indicator */}
        <div className="mt-4 text-center">
          <p className="text-sm font-medium" style={{ color: "var(--theme-text)" }}>
            {activeTheme.name}
          </p>
        </div>
      </div>
    </div>
  );
}
