/* eslint-disable no-underscore-dangle */
// This slice will take care of adding takes care of
// updating the shopping cart.
// - Selected products are added to the list in the cart.
// - The total price is calculated.
// - Products can be deleted

import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },

  reducers: {
    addItem: (state, action) => {
      console.log(action)
      const existingProduct = state.items.find((item) => item._id === action.payload._id)
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item._id === action.payload._id)
      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== action.payload._id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})