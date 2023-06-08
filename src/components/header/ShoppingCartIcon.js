import React from 'react';

export const ShoppingCartIcon = ({ onCartClick }) => {
  return (
    <button type="button" onClick={onCartClick}>Cart-icon</button>
  )
}

// clicking the cart icon should toggle down the cart-section
// (currently stored in header-folder) similar to hamburger menu.