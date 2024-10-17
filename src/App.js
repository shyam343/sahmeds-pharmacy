import React from "react";
import { CartProvider } from "./components/cart/CartProvider";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import MainBanner from "./components/mainbanner/MainBanner";
import Products from './components/products/Products';
import Product1 from './components/product1/Product1';
import LabTests from "./components/labtest/LabTests";
import Companies from './components/companies/Companies';
import Footer from "./components/footer/Footer";
import CartModal from "./components/cart/CartModal";
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Navbar />
        <MainBanner />
        <Products />
        <Product1 />
        <LabTests />
        <Companies />
        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
