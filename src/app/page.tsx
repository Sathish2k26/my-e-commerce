import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white font-sans">
      <Header />

      <main className="container-max py-10">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold">Welcome to ButterShop</h1>
          <p className="text-gray-600 mt-2">A small responsive e‑commerce demo with a buttery UI.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Featured products</h2>
          <div className="products-grid">
            {products.map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
