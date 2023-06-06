import { LoadingPage } from 'components/LoadingPage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products';

export const ProductList = () => {
  const dispatch = useDispatch()
  // selects products from global state
  const productsList = useSelector((state) => state.products.items)

  // calls on thunk to fetch products from api.
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const isLoading = useSelector((store) => store.loading.isLoading)
  // ! map over productListItem with the data instead.

  if (isLoading) {
    return (<LoadingPage />)
  } else {
    return (
      <div>
        {productsList.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    )
  }
}