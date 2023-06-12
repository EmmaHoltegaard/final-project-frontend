// This slice will take care of fetching the products from
// the API, and storing them into the global state.

import { createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from 'utils/urls'
import { ui } from 'reducers/ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
    singleItem: {}
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setSingleItem: (state, action) => {
      state.singleItem = action.payload
    }
  }
})

// Thunk that fetches list of products to setProducts
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(ui.actions.setIsLoading(true));
    fetch(`${BASE_URL}products`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(products.actions.setItems(data.body));
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(ui.actions.setIsLoading(false));
        }, 2000);
      });
  };
};

// Thunk that fetches a single product.
export const fetchSingleProduct = (_id) => {
  return (dispatch) => {
    dispatch(ui.actions.setIsLoading(true));
    fetch(`${BASE_URL}products/id/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(products.actions.setSingleItem(data.body));
        console.log(data.body)
      })
      .finally(() => {
        dispatch(ui.actions.setIsLoading(false));
      })
  }
}