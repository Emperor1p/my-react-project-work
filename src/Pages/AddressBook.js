import React, { useState, useEffect } from "react";
import { useCart } from "../Components/CartContext";

const AddressBook = () => {
  const { recentlyViewed, removeFromRecentlyViewed } = useCart();
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    // Fetch existing addresses from local storage or an API
    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(savedAddresses);
  }, []);

  const handleAddAddress = () => {
    if (!newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zip) {
      alert("All fields are required.");
      return;
    }

    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setNewAddress({ street: "", city: "", state: "", zip: "" });
  };

  const handleEditAddress = (index) => {
    setEditingAddress(index);
    setNewAddress(addresses[index]);
  };

  const handleUpdateAddress = () => {
    const updatedAddresses = addresses.map((address, index) =>
      index === editingAddress ? newAddress : address
    );
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setEditingAddress(null);
    setNewAddress({ street: "", city: "", state: "", zip: "" });
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  return (
    <div className="container my-4">
      <h2>Address Book</h2>

      {/* Display Address Form */}
      <div className="mb-4">
        <h3>{editingAddress !== null ? "Edit Address" : "Add Address"}</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              value={newAddress.street}
              onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={newAddress.city}
              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              value={newAddress.state}
              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">ZIP Code</label>
            <input
              type="text"
              className="form-control"
              value={newAddress.zip}
              onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
            />
          </div>
          {editingAddress !== null ? (
            <button type="button" className="btn btn-primary" onClick={handleUpdateAddress}>
              Update Address
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={handleAddAddress}>
              Add Address
            </button>
          )}
        </form>
      </div>

      {/* Display List of Addresses */}
      <h3>Saved Addresses</h3>
      <ul className="list-group">
        {addresses.length === 0 ? (
          <p>No addresses saved.</p>
        ) : (
          addresses.map((address, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
              </div>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditAddress(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteAddress(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AddressBook;
