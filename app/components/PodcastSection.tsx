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
    <section className="py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <h2 className="text-2xl font-light mb-2" style={{ color: "var(--theme-text)" }}>{title}</h2>
      <p className="mb-8" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border transition-colors duration-200 hover:opacity-70"
            style={{
              borderColor: "var(--theme-border)",
              color: "var(--theme-text-secondary)"
            }}
          >
            {link.platform}
          </a>
        ))}
      </div>
    </section>
  );
}

