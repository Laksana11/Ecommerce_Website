// routes/Routes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "../components/product/ProductList";
import Cart from "../components/cartComponents/Cart";
import CartSummary from "../components/cartComponents/CartSummary";
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";
import HomePage from "../components/HomePage";

const Routing = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default Routing;
