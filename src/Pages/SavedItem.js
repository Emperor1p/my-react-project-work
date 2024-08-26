import React, { useEffect, useState } from "react";

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    // Retrieve saved items from localStorage
    const items = JSON.parse(localStorage.getItem("savedItems")) || [];
    setSavedItems(items);
  }, []);

  const removeSavedItem = (itemId) => {
    // Retrieve saved items from localStorage
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    
    // Remove the item with the given ID
    const updatedItems = savedItems.filter(item => item.id !== itemId);
    
    // Save updated list to localStorage
    localStorage.setItem("savedItems", JSON.stringify(updatedItems));
    
    // Update state
    setSavedItems(updatedItems);
  };

  return (
    <div className="container my-4">
      <h2>Saved Items</h2>
      {savedItems.length === 0 ? (
        <p>No saved items.</p>
      ) : (
        savedItems.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              <h5>{item.title}</h5>
              <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
              <img
                src={item.image || 'https://via.placeholder.com/100'}
                alt={item.title}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <button
                className="btn btn-danger mt-2"
                onClick={() => removeSavedItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedItems;
