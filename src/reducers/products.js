// This slice will take care of fetching the products from
// the API, and storing them into the global state.

import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
  name: 'products',
  initialState: {
    items: []
  }
})