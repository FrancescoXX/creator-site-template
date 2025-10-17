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
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      <a
        href={contactUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border border-gray-700 text-white hover:border-gray-500 hover:bg-gray-900 transition-colors duration-200"
      >
        Get in Touch
      </a>
    </section>
  );
}

