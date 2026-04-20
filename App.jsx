import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleGetStarted = () => {
    setCurrentPage('products');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductList />;
      case 'cart':
        return <CartItem onContinue={() => setCurrentPage('products')} />;
      case 'about':
        return <AboutUs />;
      default:
        return (
          <div className="landing-page">
            <div className="landing-overlay">
              <h1 className="landing-title">Paradise Nursery 🌿</h1>
              <p className="landing-subtitle">
                Bring Nature Home — Explore Our Beautiful Collection of Plants
              </p>
              <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {currentPage !== 'landing' && (
        <nav className="navbar">
          <span className="navbar-brand">🌿 Paradise Nursery</span>
          <div className="navbar-links">
            <button onClick={() => setCurrentPage('products')}>Products</button>
            <button onClick={() => setCurrentPage('about')}>About Us</button>
            <button onClick={() => setCurrentPage('cart')}>🛒 Cart</button>
          </div>
        </nav>
      )}
      {renderPage()}
    </div>
  );
}

export default App;
