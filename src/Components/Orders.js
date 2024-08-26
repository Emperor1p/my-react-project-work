import React, { useEffect, useState } from 'react';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [canceledOrders, setCanceledOrders] = useState([]);

  useEffect(() => {
    
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const savedCanceledOrders = JSON.parse(localStorage.getItem('canceledOrders')) || [];
    setOrders(savedOrders);
    setCanceledOrders(savedCanceledOrders);
  }, []);

  const cancelOrder = (orderId) => {
    
    const orderToCancel = orders.find(order => order.id === orderId);

    
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);

    
    const updatedCanceledOrders = [...canceledOrders, orderToCancel];
    setCanceledOrders(updatedCanceledOrders);

    
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    localStorage.setItem('canceledOrders', JSON.stringify(updatedCanceledOrders));
  };

  const clearAllOrders = () => {
    
    localStorage.removeItem('orders');
    
    localStorage.removeItem('canceledOrders');
    
    setOrders([]);
    setCanceledOrders([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Check if the date is invalid
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Return a user-friendly message
    }
  
    return date.toLocaleDateString(); // Return the formatted date
  };
  

  return (
    <div className="container my-4">
      <h2>Your Orders</h2>
      <button 
        className="btn btn-danger mb-3" 
        onClick={clearAllOrders}
      >
        Clear All Orders
      </button>
      
      <h3>Active Orders</h3>
      {orders.length === 0 ? (
        <p>No active orders.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="card mb-3 w-55">
            <div className="card-body">
              <h5>Order #{order.id}</h5>
              <p><strong>Total:</strong> ${order.total ? order.total.toFixed(2) : '0.00'}</p>
              <p><strong>Date:</strong> {formatDate(order.date)}</p>
              <ul className="list-unstyled">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <li key={item.id} className="d-flex align-items-center mb-2">
                    
                      <img
                        src={item.image || 'https://via.placeholder.com/50'}
                        alt={item.title}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                      />
                      <div>
                        {item.title} - ${item.price ? item.price.toFixed(2) : '0.00'} x {item.quantity || 0}
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No items in this order.</p>
                )}
              </ul>
              <button 
                className="btn btn-warning mt-2" 
                onClick={() => cancelOrder(order.id)}
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))
      )}
      
      <h3>Canceled Orders</h3>
      {canceledOrders.length === 0 ? (
        <p>No canceled orders.</p>
      ) : (
        canceledOrders.map((order) => (
          <div key={order.id} className="card mb-3 w-55">
            <div className="card-body">
              <h5>Order #{order.id}</h5>
              <p><strong>Total:</strong> ${order.total ? order.total.toFixed(2) : '0.00'}</p>
              <p><strong>Date:</strong> {formatDate(order.date)}</p>
              <ul className="list-unstyled">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <li key={item.id} className="d-flex align-items-center mb-2">
                      {/* Display product image */}
                      <img
                        src={item.image || 'https://via.placeholder.com/50'}
                        alt={item.title}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                      />
                      <div>
                        {item.title} - ${item.price ? item.price.toFixed(2) : '0.00'} x {item.quantity || 0}
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No items in this order.</p>
                )}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
