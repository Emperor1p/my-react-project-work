import React from 'react';
import { useCart } from '../component/CartContext'; // Adjust the path to your CartContext file

const UserProfile = () => {
  const { savedItems } = useCart(); // Access savedItems from context

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <h4>Saved Items</h4>
      {savedItems.length === 0 ? (
        <p>No saved items</p>
      ) : (
        <div className="row">
          {savedItems.map(item => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card" style={{ height: '100%' }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <strong>Price: </strong>${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
