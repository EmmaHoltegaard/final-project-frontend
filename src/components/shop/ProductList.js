import React from 'react';
import { ProductListItem } from './ProductListItem';

export const ProductList = () => {
  return (
    <div>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </div>
  )
}

// Here, map over the list of products and mount ProductListItem
// component for each.