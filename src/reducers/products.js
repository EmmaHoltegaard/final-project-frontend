// This slice will take care of fetching the products from
// the API, and storing them into the global state.

import { createSlice } from '@reduxjs/toolkit'
import { API_KEY_ALL, BASE_URL } from 'utils/urls'
import { loading } from 'reducers/loading'

export const products = createSlice({
  name: 'products',
  initialState: {
    items: []
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  }
})

// thunk that fetches list of products to setProducts
// REMEMBER: Add loading screen
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(loading.actions.setIsLoading(true));
    fetch(`${BASE_URL}${API_KEY_ALL}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(products.actions.setItems(data.body));
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(loading.actions.setIsLoading(false));
        }, 500);
      });
  };
};