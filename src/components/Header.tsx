import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center font-bold text-lg">B</div>
          <Link href="/" className="text-lg font-semibold">
            ButterShop
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/products" className="text-sm text-gray-700 hover:underline">Products</Link>
          <Link href="/cart" className="text-sm text-gray-700 hover:underline">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
