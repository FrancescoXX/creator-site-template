interface Appearance {
  show: string;
  date: string;
  url: string;
}

interface AsAGuestSectionProps {
  title: string;
  description: string;
  appearances: Appearance[];
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

export default function AsAGuestSection({
  title,
  description,
  appearances,
}: AsAGuestSectionProps) {
  // Sort by date and get the 2 most recent
  const recentAppearances = [...appearances]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <section className="py-12 border-t border-gray-800">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-light text-white">{title}</h2>
        <a
          href="/guest-appearances"
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          View All →
        </a>
      </div>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-gray-500 text-sm mb-8">Showing the 2 most recent episodes</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentAppearances.map((appearance, index) => {
          const videoId = getYouTubeVideoId(appearance.url);
          
          return (
            <div
              key={`${appearance.show}-${index}`}
              className="border border-gray-800 hover:border-gray-600 transition-all duration-300 group overflow-hidden"
            >
              {/* YouTube Embed */}
              {videoId && (
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={appearance.show}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}
              
              {/* Video Info */}
              <div className="p-4 bg-black">
                <h3 className="text-white font-light mb-2 group-hover:text-gray-300 transition-colors line-clamp-2">
                  {appearance.show}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {new Date(appearance.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <a
                    href={appearance.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

