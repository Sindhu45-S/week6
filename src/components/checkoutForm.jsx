import React, { useState } from "react";
import { z } from "zod";
import useCartStore from "../store/cartStore";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  address: z.string().min(5, "Address must be at least 5 characters."),
});

export default function CheckoutForm() {
  const { cartItems, clearCart, totalPrice } = useCartStore();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = checkoutSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      setSuccess("");
      return;
    }
    setErrors({});
    setSuccess("✅ Order placed successfully!");
    clearCart();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout 💳</h2>
     <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "address"].map((field) => (
          <div key={field}>
            <label className="block font-semibold capitalize">{field}</label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field][0]}</p>
            )}
          </div>
        ))}

        <p className="font-bold text-lg">Total: ${totalPrice()}</p>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full font-semibold"
        >
          Place Order
        </button>

        {success && <p className="text-green-600 mt-4 text-center">{success}</p>}
      </form>
    </div>
  );
}