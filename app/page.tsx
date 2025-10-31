"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SocialMediaSection from "./components/SocialMediaSection";
import PodcastSection from "./components/PodcastSection";
import AsAGuestSection from "./components/AsAGuestSection";
import ProductsSection from "./components/ProductsSection";
import PublicSpeakingSection from "./components/PublicSpeakingSection";
import BlogSection from "./components/BlogSection";
import BestOfTopicsSection from "./components/BestOfTopicsSection";

interface ModuleConfig {
  github?: {
    enabled: boolean;
    url: string;
  };
  header?: {
    name: string;
    tagline: string;
  };
  modules: {
    [key: string]: {
      enabled: boolean;
      [key: string]: any;
    };
  };
}

export default function Home() {
  const [config, setConfig] = useState<ModuleConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch("/api/config");
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error("Error loading config:", error);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p style={{ color: "var(--theme-text-secondary)" }}>Loading...</p>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p style={{ color: "var(--theme-text-secondary)" }}>Error loading configuration</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        {/* Theme Button */}
        <Link
          href="/themes"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 hover:opacity-70"
          style={{
            borderColor: "var(--theme-border)",
            color: "var(--theme-text)",
            background: "var(--theme-background-secondary)"
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          <span className="text-sm font-medium">Theme</span>
        </Link>

        {/* GitHub Link */}
        {config.github?.enabled && (
          <a
            href={config.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-200"
            style={{
              borderColor: "var(--theme-border)",
              color: "var(--theme-text-secondary)"
            }}
            title="View on GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>

      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--theme-border)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-light mb-4" style={{ color: "var(--theme-text)" }}>
            {config.header?.name || "Your Name"}
          </h1>
          <p className="text-lg font-light" style={{ color: "var(--theme-text-secondary)" }}>
            {config.header?.tagline || "Content Creator & Entrepreneur"}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Social Media Section */}
        {config.modules.socialMedia?.enabled && (
          <SocialMediaSection
            title={config.modules.socialMedia.title}
            links={config.modules.socialMedia.links}
          />
        )}

        {/* Podcast Section */}
        {config.modules.podcast?.enabled && (
          <PodcastSection
            title={config.modules.podcast.title}
            description={config.modules.podcast.description}
            links={config.modules.podcast.links}
          />
        )}

        {/* As a Guest Section */}
        {config.modules.asAGuest?.enabled && (
          <AsAGuestSection
            title={config.modules.asAGuest.title}
            description={config.modules.asAGuest.description}
            appearances={config.modules.asAGuest.appearances}
          />
        )}

        {/* Products Section */}
        {config.modules.products?.enabled && (
          <ProductsSection
            title={config.modules.products.title}
            description={config.modules.products.description}
            items={config.modules.products.items}
          />
        )}

        {/* Public Speaking Section */}
        {config.modules.publicSpeaking?.enabled && (
          <PublicSpeakingSection
            title={config.modules.publicSpeaking.title}
            description={config.modules.publicSpeaking.description}
            contactUrl={config.modules.publicSpeaking.contactUrl}
          />
        )}

        {/* Blog Section */}
        {config.modules.blog?.enabled && (
          <BlogSection
            title={config.modules.blog.title}
            description={config.modules.blog.description}
            articles={config.modules.blog.articles}
          />
        )}

        {/* Best Of Topics Section */}
        {config.modules.bestOfTopics?.enabled && (
          <BestOfTopicsSection
            title={config.modules.bestOfTopics.title}
            description={config.modules.bestOfTopics.description}
            topics={config.modules.bestOfTopics.topics}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16" style={{ borderColor: "var(--theme-border)" }}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>
            © 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
