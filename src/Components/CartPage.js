import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, handleQuantityChange, handleRemove, setCartItems } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate total number of products in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    // Save the order to local storage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = { id: Date.now(), items: cartItems, total: subtotal };
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));

    // Clear the cart
    setCartItems([]);

    // Reload the page to clear the cart and navigate to orders page
    window.location.href = '/account/orders';
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Cart Items */}
        <div className="col-md-8">
          <h2>Cart ({totalQuantity} items)</h2>  {/* Update this line */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      alt={item.title}
                      className="img-thumbnail"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <strong>Price:</strong> ${item.price.toFixed(2)}
                      <br />
                      {item.originalPrice && (
                        <span className="text-muted">
                          <del>${item.originalPrice.toFixed(2)}</del>{" "}
                          {item.discount} off
                        </span>
                      )}
                    </p>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrashAlt /> Remove
                    </button>
                    <div className="mt-2">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Cart Summary Sidebar */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Cart Summary</h5>
            <p>
              <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
            </p>
            <p className="text-muted">Delivery fees not included yet.</p>
            <button className="btn btn-warning w-100" onClick={handleCheckout}>
              Checkout (${subtotal.toFixed(2)})
            </button>
            <p className="mt-2 text-success">Returns are easy</p>
            <p className="text-muted">
              Free return within 7 days for ALL eligible items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
