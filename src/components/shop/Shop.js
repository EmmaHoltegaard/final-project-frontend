import React from 'react';
// import { useSelector } from 'react-redux'
import { ProductList } from './ProductList'
import { ShoppingCart } from './ShoppingCart';

export const Shop = () => {
  return (
    <div>
      <ShoppingCart />
      <ProductList />
    </div>
  )
}

// If loading = true: shows loading screen
// else, shows list of products
// or: single product...