import Header from "../../components/Header";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <main className="container-max py-10">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="butter-card">
          <p className="text-gray-600">Cart functionality is a demo — add client-side state to persist items.</p>
        </div>
      </main>
    </div>
  );
}
