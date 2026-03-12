import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  currency?: string;
  image?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="butter-card">
      <Link href={`/products/${product.id}`} className="block">
        <div className="w-full h-44 bg-gray-100 rounded-lg overflow-hidden mb-3">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-orange-500 font-semibold mt-1">${product.price}</p>
      </Link>
    </article>
  );
}
