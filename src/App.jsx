import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "../pages/LandingPage";
import ShopNow from "../pages/ShopNow";
import Product from "../pages/Product";
import Cart from "./components/Cart";
import CheckoutForm from "./components/checkoutForm";

export default function App() {
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 bg-gray-100 p-6 overflow-auto">
          
           <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/shop" element={<ShopNow />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<CheckoutForm />} />
</Routes>
          
        </div>
        <Footer />
      </div>
    </Router>
  );
}