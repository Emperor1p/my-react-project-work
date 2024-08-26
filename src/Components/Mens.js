
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext"; // Adjust the path to your CartContext file

const Mens = ({ setSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, saveItem } = useCart(); // Destructure addToCart and saveItem from the context

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((allProducts) => {
        // Randomly shuffle and select a subset of products
        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 18)); // Adjust the number of products as needed
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "70vh", flexDirection: "row" }}>
      <div className="container mt-2 flex-grow-1" style={{ width: "65%" }}>
        <h2>Product List</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="row elect">
            {products.map((product) => (
              <div key={product.id} className="col-md-6 mb-4">
                <div className="card" style={{ height: '100%' }}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      <strong>Price: </strong>${product.price}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-success btn-sm me-2"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => saveItem(product)}
                        className="btn btn-warning btn-sm me-2"
                      >
                        Save Item
                      </button>
                   
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mens;
