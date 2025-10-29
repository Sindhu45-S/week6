import React from "react";
import useCartStore from "../store/cartStore";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  // Ensure cartItems is always an array
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCartStore();
  const navigate = useNavigate();
  

  if (cartItems.length === 0)
    return <p className="text-center mt-10 text-xl"><br></br>Your cart is empty 🛒</p>;
    
  return (
    <div className="max-w-5xl mx-auto p-6"><br></br>
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart 🛍️</h1>

      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-700">${item.price}</p>
              </div>
            </div>


           <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-semibold"
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <p className="text-2xl font-bold">Total: ${totalPrice()}</p>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Proceed to Checkout 💳
        </button>
      </div>
    </div>
  );
}