import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderDate, setOrderDate] = useState(null);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const saveItem = (product) => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    if (!savedItems.some((item) => item.id === product.id)) {
      savedItems.push(product);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
    }
  };

  const getSavedItems = () => {
    return JSON.parse(localStorage.getItem("savedItems")) || [];
  };

  const removeSavedItem = (id) => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    const updatedItems = savedItems.filter((item) => item.id !== id);
    localStorage.setItem("savedItems", JSON.stringify(updatedItems));
  };

  const checkout = () => {
    console.log("Checkout triggered"); 
    console.log("Current cart items:", cartItems); 
  
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to your cart before checking out.");
      return;
    }
  
    // Proceed with checkout if cart is not empty
    setOrderDate(new Date().toLocaleString());
    setOrderDetails(cartItems);
    setCartItems([]);
  };
  

  const cancelOrder = (id) => {
    setOrderDetails((prevOrders) =>
      prevOrders.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        handleQuantityChange,
        handleRemove,
        saveItem,
        getSavedItems,
        removeSavedItem,
        checkout,
        setCartItems,
        orderDetails,
        orderDate,
        cancelOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
