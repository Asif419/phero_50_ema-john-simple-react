import React from 'react';
import './Product.css'

const Product = props => {
  const { name, img, price, ratings, seller, category, quantity } = props.product;
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
      <button className='btn-cart'>Add to Cart</button>
    </div>
  );
};
import './Product.css'

export default Product;