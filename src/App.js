import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
// components & reducers
import { MinTilgang } from 'components/MinTilgang';
import { Kontakt } from 'components/contact/Kontakt';
import { Shop } from 'components/shop/Shop';
import { PraktiskInfo } from './components/praktiskInfo/PraktiskInfo'
import { products } from './reducers/products'
import { cart } from './reducers/cart'
import { ui } from './reducers/ui'
import { Forside } from './components/forside/Forside';
import { NotFound } from './components/NotFound';
import { Header } from './components/header/Header';
import { SingleProduct } from './components/shop/SingleProduct'

// Combining reducer slices into a single reducer
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  ui: ui.reducer
})

// Use the reducer to create the global store
const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Forside />} />
            <Route path="/minTilgang" element={<MinTilgang />} />
            <Route path="/praktiskInfo" element={<PraktiskInfo />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/item/:id" element={<SingleProduct />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
