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

export default function AsAGuestSection({
  title,
  description,
  appearances,
}: AsAGuestSectionProps) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <h2 className="text-2xl font-light mb-2" style={{ color: "var(--theme-text)" }}>{title}</h2>
      <p className="mb-8" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
      <div className="space-y-4">
        {appearances.map((appearance) => (
          <a
            key={appearance.show}
            href={appearance.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border transition-colors duration-200 group hover:opacity-90"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div className="flex justify-between items-start">
              <h3 style={{ color: "var(--theme-text)" }}>
                {appearance.show}
              </h3>
              <span className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>
                {new Date(appearance.date).toLocaleDateString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

