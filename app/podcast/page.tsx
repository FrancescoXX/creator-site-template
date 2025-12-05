"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Episode {
  title: string;
  date: string;
  url: string;
}

interface Config {
  header?: {
    name: string;
  };
  modules: {
    podcastEpisodes?: {
      enabled: boolean;
      title: string;
      description: string;
      episodes: Episode[];
    };
  };
}

// Extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtu\.be\/)([^&\s?]+)/,
    /(?:youtube\.com\/embed\/)([^&\s?]+)/,
    /(?:youtube\.com\/shorts\/)([^&\s?]+)/,
    /(?:youtube\.com\/live\/)([^&\s?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      // Remove any query parameters or fragments
      return match[1].split('?')[0].split('&')[0].split('#')[0];
    }
  }
  return null;
}

export default function PodcastPage() {
  const [config, setConfig] = useState<Config | null>(null);
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

  if (!config || !config.modules.podcastEpisodes?.enabled) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Podcast episodes not available</p>
      </div>
    );
  }

  const { title, description, episodes } = config.modules.podcastEpisodes;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="w-full px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-light mb-4">{title}</h1>
          <p className="text-gray-400 text-lg font-light">{description}</p>
          <p className="text-gray-500 mt-2">
            {episodes.length} episode{episodes.length !== 1 ? "s" : ""}
          </p>
        </div>
      </header>

      {/* Episodes Grid */}
      <main className="w-full px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {episodes
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((episode, index) => {
              const videoId = getYouTubeVideoId(episode.url);

              return (
                <a
                  key={`${episode.title}-${index}`}
                  href={episode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 hover:border-gray-600 transition-all duration-300 group overflow-hidden block"
                >
                  {/* YouTube Thumbnail */}
                  {videoId && (
                    <div className="relative aspect-video bg-gray-900 overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Small Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-4 h-4 text-white ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Episode Info */}
                  <div className="p-3 bg-black">
                    <h3 className="text-sm text-white font-light mb-2 group-hover:text-gray-300 transition-colors line-clamp-2 min-h-[2.5rem]">
                      {episode.title}
                    </h3>
                    <span className="text-gray-500 text-xs">
                      {new Date(episode.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </a>
              );
            })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="w-full px-6 py-8">
          <p className="text-gray-500 text-sm">© 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
