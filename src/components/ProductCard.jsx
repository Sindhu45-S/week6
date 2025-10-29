import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Product
      </Link>
    </div>
  );
}
