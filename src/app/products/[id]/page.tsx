import Header from "../../../components/Header";
import products from "../../../data/products.json";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetail({ params }: Props) {
  const product = products.find((p: any) => p.id === params.id);
  if (!product) {
    return (
      <div>
        <Header />
        <main className="container-max py-10">Product not found</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <main className="container-max py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="butter-card">
              <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
            </div>
          </div>

          <aside className="butter-card">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p className="text-orange-500 font-bold mt-2">${product.price}</p>
            <p className="text-gray-600 mt-4">A lovely buttery product to brighten your home.</p>
            <div className="mt-6">
              <button className="butter-btn w-full">Add to cart</button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
