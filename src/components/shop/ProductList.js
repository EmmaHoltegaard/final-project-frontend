import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products';

export const ProductList = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.items)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

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

// import { fetchProducts } from 'reducers/products'
// import { ProductListItem } from './ProductListItem';
// import { API_KEY_ALL, BASE_URL } from 'utils/urls'

/* export const ProductList = () => {
  const [productList, setProductList] = useState([])
  // const [loading, setLoading] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}${API_KEY_ALL}`)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.body)
      })
  })

  return (
    <div>
      {productList.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
} */

// Here, map over the list of products and mount ProductListItem
// component for each.