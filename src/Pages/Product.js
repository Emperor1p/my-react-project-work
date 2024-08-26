import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProductList from "../Components/ProductList";
import { useCart } from "../Components/CartContext";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const { addToCart, saveItem } = useCart();

  const isCategorySelected = location.pathname.startsWith('/product/');

  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "row" }}>
      
      <div
        className="sidebar"
        style={{
          position: "sticky",
          
          top: 100,  
          left: 0,
          width: "20%",
          height: "60vh",
          padding: "10px",
          marginTop: '70px',
          background: "#ffffff",
          // borderRight: "2px solid #ddd",
          overflowY: "auto",
          overflowX: 'hidden',
          alignSelf: 'flex-start',
        }}
      >
        <h3>Categories</h3>
        <ul className="list-unstyled">
          <li style={{ marginBottom: "20px" }}>
            <Link to="/product/electronics" style={{ textDecoration: "none", color: "inherit", lineHeight: "2" }}>
              Electronics
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/product/jewerly" style={{ textDecoration: "none", color: "inherit", lineHeight: "2" }}>
              Jewelry
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/product/mens" style={{ textDecoration: "none", color: "inherit", lineHeight: "2" }}>
              Men's Clothing
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link to="/product/womens" style={{ textDecoration: "none", color: "inherit", lineHeight: "2" }}>
              Women's Clothing
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div
        className="content"
        style={{
          flex: "1",
          padding: "10px",
          minHeight: "100vh",
        }}
      >
        {isCategorySelected ? (
          <Outlet context={{ setSelectedProduct, addToCart, saveItem }} />
        ) : (
          <ProductList setSelectedProduct={setSelectedProduct} />
        )}
      </div>

      {/* Right Sidebar */}
      <div
        className="sidebar-right"
        style={{
          position: "sticky",
          top: 100,  // Adjust based on your header height
          right: 0,
          width: "21%",
          padding: "10px",
          marginTop: '70px',
          background: "#f8f9fa",
          // borderLeft: "2px solid #ddd",
          overflowY: "auto",
          overflowX: 'hidden',
          alignSelf: 'flex-start',
        }}
      >
        {selectedProduct ? (
          <div>
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
            <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: ''}} />
          </div>
        ) : (
          <p>Select a product to view details</p>
        )}
      </div>
    </div>
  );
};

export default Product;
