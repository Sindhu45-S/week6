export default function Sidebar({ setPage }) {
  return (
    <div className="bg-blue-600 text-white w-56 min-h-screen flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-8">🐾 Pet Shop</h1>

      <nav className="flex flex-col gap-4">
        <button
          onClick={() => setPage("home")}
          className="hover:bg-blue-700 p-2 rounded text-left"
        >
          🏠 Home
        </button>
        <button
          onClick={() => setPage("products")}
          className="hover:bg-blue-700 p-2 rounded text-left"
        >
          🛍️ Products
        </button>
        <button
          onClick={() => setPage("cart")}
          className="hover:bg-blue-700 p-2 rounded text-left"
        >
          🛒 Cart
        </button>
        <button
          onClick={() => setPage("checkout")}
          className="hover:bg-blue-700 p-2 rounded text-left"
        >
          💳 Checkout
        </button>
      </nav>

      <div className="mt-auto text-sm text-center opacity-80">
        © 2025 Pet Shop
      </div>
    </div>
  );
}
