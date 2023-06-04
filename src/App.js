import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { MinTilgang } from 'components/MinTilgang';
import { Kontakt } from 'components/contact/Kontakt';
import { Shop } from 'components/shop/Shop';
import { PraktiskInfo } from 'components/PraktiskInfo';
import { Forside } from './components/Forside';
import { NotFound } from './components/NotFound';
import { Header } from './components/header/Header';
import { SingleProduct } from './components/shop/SingleProduct'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/minTilgang" element={<MinTilgang />} />
          <Route path="/praktiskInfo" element={<PraktiskInfo />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/item:/id" element={<SingleProduct />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
