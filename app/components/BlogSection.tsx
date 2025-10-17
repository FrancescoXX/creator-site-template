interface Article {
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

interface BlogSectionProps {
  title: string;
  description: string;
  articles: Article[];
}

export default function BlogSection({
  title,
  description,
  articles,
}: BlogSectionProps) {
  return (
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      <div className="space-y-6">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group"
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-white group-hover:text-gray-300 transition-colors text-lg font-light flex-1">
                {article.title}
              </h3>
              <span className="text-gray-500 text-sm whitespace-nowrap">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{article.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

