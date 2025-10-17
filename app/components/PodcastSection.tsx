interface PodcastLink {
  platform: string;
  url: string;
}

interface PodcastSectionProps {
  title: string;
  description: string;
  links: PodcastLink[];
}

export default function PodcastSection({
  title,
  description,
  links,
}: PodcastSectionProps) {
  return (
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-colors duration-200"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </section>
  );
}

