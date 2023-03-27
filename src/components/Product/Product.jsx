import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = props => {
  const { name, img, price, ratings, seller, category, quantity } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className='product'>
      <img src={img} alt={name} />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <div className="product-extra-info">
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Starts</p>
        </div>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};
import './Product.css'

export default Product;