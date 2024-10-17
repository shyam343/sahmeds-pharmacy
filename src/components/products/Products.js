import React, { useState } from 'react';
import './Products.css';
import { useCart } from '../cart/CartProvider';

const Products = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Dettol Handplast',
      price: 4.75,
      originalPrice: 5.00,
      discount: '5% OFF',
      image: "./Antisep/dtl.png",
    },
    {
      id: 2,
      name: 'Dettol Antiseptic Liquid 60 ml',
      price: 64.38,
      originalPrice: 70.00,
      discount: '5% OFF',
      image: "./Antisep/Dettol60 ml.jpeg",
    },
    {
      id: 3,
      name: 'Hand Sanitizer 100 ml',
      price: 130.50,  // Removed "Rs." and converted to number
      originalPrice: 145.00,
      discount: '10% OFF',
      image: "./Antisep/sanitizer.jpg", // Direct reference
    },
    {
      id: 4,
      name: 'Candid Powder 50gm',
      price: 108.00,  // Removed "Rs." and converted to number
      originalPrice: 120.00,
      discount: '10% OFF',
      image: "./Antisep/powder.jpeg", // Direct reference
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="product-carousel">
      <h2>Steroids</h2>
      <div className="carousel-wrapper">
        <button className="prev-arrow" onClick={prevSlide}>&#10094;</button>
        <div className="carousel-container">
          {products.map((product, index) => (
            <div
              className={`product-card ${index === currentIndex ? 'active' : ''}`}
              key={product.id}
              style={{
                transform: `translateX(${-currentIndex * 100}%)`,
              }}
            >
              {product.discount && <div className="discount-badge">{product.discount}</div>}
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
              <p className="product-price">Rs. {product.price.toFixed(2)}</p>
              <p className="product-original-price">Rs. {product.originalPrice.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
          ))}
        </div>
        <button className="next-arrow" onClick={nextSlide}>&#10095;</button>
      </div>
      <a href="/view-more" className="view-more">View more</a>
    </div>
  );
};

export default Products;
