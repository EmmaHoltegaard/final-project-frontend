/* eslint-disable no-underscore-dangle */
import { LoadingPage } from 'components/LoadingPage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products';
import { cart } from 'reducers/cart'

export const ProductList = () => {
  const dispatch = useDispatch()
  // selects products from global state
  const productsList = useSelector((state) => state.products.items)

  // calls on thunk to fetch products from api.
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const isLoading = useSelector((store) => store.loading.isLoading)

  if (isLoading) {
    return (<LoadingPage />)
  } else {
    return (
      <div>
        <h2>Products</h2>
        {productsList.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button type="button" onClick={() => dispatch(cart.actions.addItem(item))}>Add to basked</button>
          </div>
        ))}
      </div>
    )
  }
}