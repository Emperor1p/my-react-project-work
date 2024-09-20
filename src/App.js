// src/App.js
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layer from "./Pages/Layer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Electronics from "./Components/Electronics";
import Jewerly from "./Components/Jewerly";
import Womens from "./Components/Womens";
import Mens from "./Components/Mens";
import ProductList from "./Components/ProductList";
import Account from "./Pages/Accounts";
import Contact from "./Pages/Contact";
import { CartProvider } from "./Components/CartContext";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckOut";
import OrderPage from "./Components/Orders";
import AddressBook from "./Pages/AddressBook";
import Login from "./Pages/Login";
import SavedItems from "./Pages/SavedItem";
import Help from "./Pages/Help";

// Utility function to check authentication status
const useAuth = () => {
  return localStorage.getItem("isAuthenticated");
};

// Protected route component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  useEffect(() => {
    // Dynamically inject Klaviyo script
    const klaviyoScript = document.createElement("script");
    klaviyoScript.src =
    'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UKb3Au';
    klaviyoScript.async = true;
    document.head.appendChild(klaviyoScript);

    // Optional: Initialize the Klaviyo object if needed
    window.klaviyo ||
      (window.klaviyo = function () {
        (window.klaviyo.q = window.klaviyo.q || []).push(arguments);
      });

    return () => {
      // Clean up the script if the component is unmounted
      document.head.removeChild(klaviyoScript);
    };
  }, []); // Empty array means the effect runs once when the component mounts

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layer />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* Product Routes with nested routes */}
            <Route path="/product" element={<Product />}>
              <Route index element={<ProductList />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="jewerly" element={<Jewerly />} />
              <Route path="mens" element={<Mens />} />
              <Route path="womens" element={<Womens />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/help" element={<Help />} />

            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Account Routes with Protection */}
            <Route
              path="/account"
              element={<ProtectedRoute element={<Account />} />}
            >
              <Route
                path="orders"
                element={<ProtectedRoute element={<OrderPage />} />}
              />
              <Route
                path="contact"
                element={<ProtectedRoute element={<Contact />} />}
              />
              <Route
                path="address-book"
                element={<ProtectedRoute element={<AddressBook />} />}
              />
              <Route
                path="save-Item"
                element={<ProtectedRoute element={<SavedItems />} />}
              />
            </Route>

            {/* Redirect to Home if no match */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
