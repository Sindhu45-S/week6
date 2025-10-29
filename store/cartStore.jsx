import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],

  // Add product to cart
  addToCart: (product) => {
    const existingItem = get().cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      set({
        cartItems: get().cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        cartItems: [...get().cartItems, { ...product, quantity: 1 }],
      });
    }
  },

  // Remove product
  removeFromCart: (id) => {
    set({ cartItems: get().cartItems.filter((item) => item.id !== id) });
  },

  // Update quantity
  updateQuantity: (id, quantity) => {
    if (quantity < 1) return;
    set({
      cartItems: get().cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },

  // Clear cart
  clearCart: () => set({ cartItems: [] }),

  // Compute total
  totalPrice: () =>
    get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

export default useCartStore;
