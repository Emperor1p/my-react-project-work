
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from './CartContext'; 

const CheckoutPage = () => {
  const { checkout, orderDetails, orderDate, cancelOrder } = useCart();
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    checkout(); 
    navigate('/account'); 
  };

  const handleCancelOrder = (id) => {
    cancelOrder(id); 
  };

  return (
    <div className="container my-4">
      <h2>Checkout</h2>
      <button className="btn btn-primary" onClick={handleCheckout}>
        Complete Purchase
      </button>
      {orderDate && (
        <div className="order-details">
          <h3>Order Details</h3>
          <p><strong>Order Date:</strong> {orderDate}</p>
          <ul>
            {orderDetails.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
                <button className="btn btn-danger ml-2" onClick={() => handleCancelOrder(item.id)}>
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
