import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import local images
import dogFood from "../assets/images/dog-food.webp";
import dogLeash from "../assets/images/dog-leash.webp";
import dogChew from "../assets/images/dog-chew.webp";
import catToy from "../assets/images/cat-toy.webp";
import catBed from "../assets/images/cat-bed.webp";
import catScratcher from "../assets/images/cat-scratcher.webp";
import birdCage from "../assets/images/bird-cage.jpg";
import birdFeeder from "../assets/images/bird-feeder.jpg";
import fishTank from "../assets/images/fish-tank.jpg";
import aquariumPump from "../assets/images/aquarium-pump.jpg";
import rabbitHutch from "../assets/images/rabbit-hutch.jpg";
import rabbitToys from "../assets/images/rabbit-toys.webp";
import petShampoo from "../assets/images/pet-shampoo.webp";

const allProducts = [
  { id: 1, name: "Dog Food - Premium", category: "Dog", price: 45, image: dogFood },
  { id: 2, name: "Dog Leash & Collar Set", category: "Dog", price: 30, image: dogLeash },
  { id: 3, name: "Dog Chew Toy", category: "Dog", price: 12, image: dogChew },
  { id: 4, name: "Cat Toy - Feather Wand", category: "Cat", price: 15, image: catToy },
  { id: 5, name: "Cat Bed Cozy", category: "Cat", price: 35, image: catBed },
  { id: 6, name: "Cat Scratching Post", category: "Cat", price: 50, image: catScratcher },
  { id: 7, name: "Bird Cage Medium", category: "Bird", price: 120, image: birdCage },
  { id: 8, name: "Bird Feeder", category: "Bird", price: 25, image: birdFeeder },
  { id: 9, name: "Fish Tank 20L", category: "Fish", price: 80, image: fishTank },
  { id: 10, name: "Aquarium Pump", category: "Fish", price: 40, image: aquariumPump },
  { id: 11, name: "Rabbit Hutch Small", category: "Rabbit", price: 90, image: rabbitHutch },
  { id: 12, name: "Rabbit Toys Set", category: "Rabbit", price: 15, image: rabbitToys },
  { id: 13, name: "Pet Shampoo - 500ml", category: "Dog", price: 20, image: petShampoo },
];

export default function ProductList() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All" ? allProducts : allProducts.filter((p) => p.category === filter);

  const categories = ["All", "Dog", "Cat", "Bird", "Fish", "Rabbit"];

  return (
    <div className="max-w-6xl mx-auto p-6"><br></br>
      <h1 className="text-3xl font-bold mb-6 text-center">Shop Now 🐾</h1>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded ${
              filter === cat ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className=" bg-white p-4 rounded shadow flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{product.name}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto"
            >
              View Product 🐾
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}