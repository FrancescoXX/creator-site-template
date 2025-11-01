interface Product {
  name: string;
  description: string;
  url: string;
}

interface ProductsSectionProps {
  title: string;
  description: string;
  items: Product[];
}

export default function ProductsSection({
  title,
  description,
  items,
}: ProductsSectionProps) {
  return (
    <section className="py-12 border-t" style={{ borderColor: "var(--theme-border)" }}>
      <h2 className="text-2xl font-light mb-2" style={{ color: "var(--theme-text)" }}>{title}</h2>
      <p className="mb-8" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((product) => (
          <a
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border transition-colors duration-200 group hover:opacity-90"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <h3 className="font-light text-lg mb-2" style={{ color: "var(--theme-text)" }}>
              {product.name}
            </h3>
            <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

