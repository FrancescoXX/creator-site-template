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
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      <div className="space-y-4">
        {appearances.map((appearance) => (
          <a
            key={appearance.show}
            href={appearance.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-white group-hover:text-gray-300 transition-colors">
                {appearance.show}
              </h3>
              <span className="text-gray-500 text-sm">
                {new Date(appearance.date).toLocaleDateString()}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

