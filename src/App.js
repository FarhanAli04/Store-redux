import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, increaseQuantity, decreaseQuantity } from './productSlice';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const handleAddProduct = () => {
    dispatch(addProduct({
      id: Date.now().toString(),
      name: 'New Product',
      price: 9.99
    }));
  };

  return (
    <div className="App">
      <h1>E-commerce App</h1>
      <button onClick={handleAddProduct}>Add New Product</button>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Quantity: {product.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
              <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

