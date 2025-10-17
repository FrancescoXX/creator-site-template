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
    <section className="py-12 border-t border-gray-800">
      <h2 className="text-2xl font-light mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((product) => (
          <a
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200 group"
          >
            <h3 className="text-white font-light text-lg mb-2 group-hover:text-gray-300 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm">{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

