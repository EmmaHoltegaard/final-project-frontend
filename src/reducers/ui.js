// Slice that deals with loading + toggles
import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false,
    cartIsActive: false,
    menuIsActive: false,
    activeTopicId: null
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    toggleCart: (state) => {
      state.cartIsActive = !state.cartIsActive;
    },
    toggleMenu: (state) => {
      state.menuIsActive = !state.menuIsActive;
    },
    toggleInfo: (state, action) => {
      state.activeTopicId = action.payload
    }
  }
})