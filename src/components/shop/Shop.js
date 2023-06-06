import React from 'react';
// import { useSelector } from 'react-redux'
import { ProductList } from './ProductList'

export const Shop = () => {
  return (
    <ProductList />
  )
}

// If loading = true: shows loading screen
// else, shows list of products
// or: single product...