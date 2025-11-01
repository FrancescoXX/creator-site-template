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
    <section className="py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <h2 className="text-2xl font-light mb-2" style={{ color: "var(--theme-text)" }}>{title}</h2>
      <p className="mb-8" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
      <div className="space-y-6">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border transition-colors duration-200 group hover:opacity-90"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-lg font-light flex-1" style={{ color: "var(--theme-text)" }}>
                {article.title}
              </h3>
              <span className="text-sm whitespace-nowrap" style={{ color: "var(--theme-text-secondary)" }}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{article.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

