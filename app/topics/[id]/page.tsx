"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface TopicContent {
  title: string;
  description: string;
  url: string;
}

interface Topic {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  content: TopicContent[];
}

interface Config {
  modules: {
    bestOfTopics: {
      topics: Topic[];
    };
  };
}

export default function TopicPage() {
  const params = useParams();
  const topicId = params.id as string;
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopic = async () => {
      try {
        const response = await fetch("/api/config");
        const config: Config = await response.json();
        const foundTopic = config.modules.bestOfTopics.topics.find(
          (t) => t.id === topicId
        );
        setTopic(foundTopic || null);
      } catch (error) {
        console.error("Error loading topic:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTopic();
  }, [topicId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <p className="text-gray-400">Topic not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-light mb-4">
            {topic.name}
          </h1>
          <p className="text-gray-400 text-lg font-light">
            {topic.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section>
          <h2 className="text-2xl font-light mb-8 text-white">
            Best Content
          </h2>
          <div className="space-y-6">
            {topic.content.length > 0 ? (
              topic.content.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group"
                >
                  <h3 className="text-white text-lg font-light mb-2 group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </a>
              ))
            ) : (
              <p className="text-gray-400">
                No content available for this topic yet.
              </p>
            )}
          </div>
        </section>

        {/* Placeholder for additional content */}
        <section className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-2xl font-light mb-8 text-white">
            More Coming Soon
          </h2>
          <p className="text-gray-400">
            Additional resources and content for {topic.name} will be added here.
          </p>
        </section>
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

