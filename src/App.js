import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AboutPage } from 'components/AboutPage';
import { ContactPage } from 'components/contact/ContactPage';
import { ShopPage } from 'components/shop/ShopPage';
import { StartPage } from './components/StartPage';
import { NotFound } from './components/NotFound';
import { Header } from './components/header/Header';
import { SingleProduct } from './components/shop/SingleProduct'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/item:/id" element={<SingleProduct />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
