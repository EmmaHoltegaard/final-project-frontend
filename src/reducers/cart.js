// This slice will take care of adding takes care of
// updating the shopping cart.
// - Selected products are added to the list in the cart.
// - The total price is calculated.
// - Products can be deleted

import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0
  }

  // set up reducer-logic below:
})