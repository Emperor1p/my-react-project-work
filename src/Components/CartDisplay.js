import React from 'react';
import { useCart } from './CartContext';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const CartDisplay = () => {
  const { cart } = useCart();

  return (
    <NavLink className="nav-link me-3 text-white" to="/cart">
      <FaCartPlus className="me-2" />
      Cart ({cart.length})
    </NavLink>
  );
};

export default CartDisplay;