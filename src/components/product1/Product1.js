import React, { useState } from 'react';
import './Product1.css';
import { useCart } from '../cart/CartProvider';

const Product1 = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Cortilone 10',
      price: 3.60,
      originalPrice: 4.00,
      discount: '10% OFF',
      image: './steroids/cortilone10.jpeg',
    },
    {
      id: 2,
      name: 'Prelon-10',
      price: 4.05,
      originalPrice: 4.50,
      discount: '10% OFF',
      image: './steroids/prelon10.jpeg',
    },
    {
      id: 3,
      name: 'Cortilone 40',
      price: 12.60,
      originalPrice: 14.00,
      discount: '10% OFF',
      image: './steroids/Cortilone 40.jpeg',
    },
    {
      id: 4,
      name: 'Cortilone 5',
      price: 1.80,
      originalPrice: 2.00,
      discount: '10% OFF',
      image: './steroids/Cortilone5.jpeg',
    },
    {
      id: 5,
      name: 'Cortilone 20',
      price: 6.75,
      originalPrice: 7.50,
      discount: '10% OFF',
      image: './steroids/Cortilone20.jpeg',
    },
    {
      id: 6,
      name: 'Additional Product',
      price: 9.99,
      originalPrice: 11.00,
      discount: '10% OFF',
      image: './steroids/Cortilone20.jpeg',
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
                transform: `translateX(${-currentIndex * 20}%)`, // 20% to accommodate 5 products
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

export default Product1;
