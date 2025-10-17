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
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTopics.map((topic) => (
          <Link
            key={topic.id}
            href={`/topics/${topic.id}`}
            className="p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group cursor-pointer"
          >
            <h3 className="text-white text-xl font-light mb-2 group-hover:text-gray-300 transition-colors">
              {topic.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{topic.description}</p>
            <div className="text-gray-500 text-sm">
              {topic.content.length} article{topic.content.length !== 1 ? "s" : ""}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

