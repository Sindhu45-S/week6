import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-blue-500 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🐾 Paws & Claws
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 text-lg font-semibold`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-200"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-200"
          >
            Cart🛒
          </Link>
        </nav>
      </div>
    </header>
  );
}
