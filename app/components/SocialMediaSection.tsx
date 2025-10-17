interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

interface SocialMediaSectionProps {
  title: string;
  links: SocialLink[];
}

export default function SocialMediaSection({
  title,
  links,
}: SocialMediaSectionProps) {
  return (
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-8 text-white">{title}</h2>
      <div className="flex flex-wrap gap-6">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            {link.icon && <span className="text-lg">{link.icon}</span>}
            <span>{link.platform}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

