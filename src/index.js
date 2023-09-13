import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Page404 from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
