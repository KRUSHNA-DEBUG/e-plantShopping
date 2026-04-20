import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  {
    name: 'Peace Lily',
    price: 12.99,
    description: 'A beautiful indoor plant that purifies the air.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
  },
  {
    name: 'Snake Plant',
    price: 14.99,
    description: 'Hardy plant, perfect for beginners.',
    image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400&q=80',
  },
  {
    name: 'Monstera',
    price: 24.99,
    description: 'Trendy tropical plant with iconic split leaves.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  },
  {
    name: 'Aloe Vera',
    price: 9.99,
    description: 'Medicinal succulent — great for skin care too!',
    image: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400&q=80',
  },
  {
    name: 'Pothos',
    price: 8.99,
    description: 'Fast-growing vine that thrives in low light.',
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&q=80',
  },
  {
    name: 'Fiddle Leaf Fig',
    price: 34.99,
    description: 'Dramatic statement plant with large glossy leaves.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    name: 'Spider Plant',
    price: 7.99,
    description: 'Easy-care plant great for hanging baskets.',
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=400&q=80',
  },
  {
    name: 'Lavender',
    price: 11.99,
    description: 'Fragrant herb with stunning purple blooms.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
  },
  {
    name: 'Succulent Mix',
    price: 6.99,
    description: 'A lovely assorted pack of cute succulents.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <h2 style={{ color: '#2e7d32', fontSize: '2rem' }}>🌱 Our Plants</h2>
      <p style={{ color: '#555', marginTop: '8px' }}>
        Discover our hand-picked collection of beautiful plants for your home.
      </p>
      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.name}>
            <img src={plant.image} alt={plant.name} />
            <div className="product-info">
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <div className="product-price">${plant.price.toFixed(2)}</div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(plant)}
                disabled={isInCart(plant.name)}
              >
                {isInCart(plant.name) ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
