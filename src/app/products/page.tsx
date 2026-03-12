import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products.json";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <main className="container-max py-10">
        <h1 className="text-2xl font-semibold mb-6">All Products</h1>
        <div className="products-grid">
          {products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
