interface RustRoadmapSectionProps {
  title: string;
  description: string;
  videoUrl: string;
}

// Extract YouTube video ID from common URL shapes
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
      return match[1].split("?")[0].split("&")[0].split("#")[0];
    }
  }
  return null;
}

export default function RustRoadmapSection({
  title,
  description,
  videoUrl,
}: RustRoadmapSectionProps) {
  const videoId = getYouTubeVideoId(videoUrl);

  return (
    <section className="py-12 border-t border-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-light text-white mb-2">{title}</h2>
        <p className="text-gray-400 max-w-3xl">{description}</p>
      </div>

      {videoId && (
        <div className="relative aspect-video bg-gray-900 border border-gray-800">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}
    </section>
  );
}
