import Link from "next/link";

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

interface BestOfTopicsSectionProps {
  title: string;
  description: string;
  topics: Topic[];
}

export default function BestOfTopicsSection({
  title,
  description,
  topics,
}: BestOfTopicsSectionProps) {
  const featuredTopics = topics.filter((topic) => topic.featured);

  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <h2 className="text-2xl font-light mb-2" style={{ color: "var(--theme-text)" }}>{title}</h2>
      <p className="mb-8" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTopics.map((topic) => (
          <Link
            key={topic.id}
            href={`/topics/${topic.id}`}
            className="p-6 border transition-colors duration-200 group cursor-pointer hover:opacity-90"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <h3 className="text-xl font-light mb-2" style={{ color: "var(--theme-text)" }}>
              {topic.name}
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--theme-text-secondary)" }}>{topic.description}</p>
            <div className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>
              {topic.content.length} article{topic.content.length !== 1 ? "s" : ""}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

