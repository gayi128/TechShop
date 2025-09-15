import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import HeadPhones from "../pages/HeadPhones";
import EarBuds from "../pages/earbuds";
import EarPhones from "../pages/earPhones";
import NeckBands from "../pages/NeckBands";

export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/earbuds" element={<EarBuds />} />
        <Route path="/earphones" element={<EarPhones />} />
        <Route path="/neckbands" element={<NeckBands />} />
      </Routes>
    </div>
  )
}
