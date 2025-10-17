"use client";

import { useEffect, useState } from "react";
import SocialMediaSection from "./components/SocialMediaSection";
import PodcastSection from "./components/PodcastSection";
import AsAGuestSection from "./components/AsAGuestSection";
import ProductsSection from "./components/ProductsSection";
import PublicSpeakingSection from "./components/PublicSpeakingSection";

interface ModuleConfig {
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Error loading configuration</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-light mb-4">
            Your Name
          </h1>
          <p className="text-gray-400 text-lg font-light">
            Content Creator & Entrepreneur
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
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-sm">
            © 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
