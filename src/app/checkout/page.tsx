import Header from "../../components/Header";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <main className="container-max py-10">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <div className="butter-card">
          <p className="text-gray-600">This is a mock checkout. Integrate payments as needed.</p>
        </div>
      </main>
    </div>
  );
}
