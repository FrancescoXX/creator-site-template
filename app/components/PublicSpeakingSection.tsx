interface PublicSpeakingSectionProps {
  title: string;
  description: string;
  contactUrl: string;
}

export default function PublicSpeakingSection({
  title,
  description,
  contactUrl,
}: PublicSpeakingSectionProps) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <h2 className="text-2xl font-light mb-2" style={{ color: "var(--theme-text)" }}>{title}</h2>
      <p className="mb-8" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
      <a
        href={contactUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border transition-colors duration-200 hover:opacity-90"
        style={{
          borderColor: "var(--theme-border)",
          color: "var(--theme-text)"
        }}
      >
        Get in Touch
      </a>
    </section>
  );
}

