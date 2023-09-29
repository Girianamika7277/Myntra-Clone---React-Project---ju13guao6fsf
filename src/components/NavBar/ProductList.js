import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  // console.log(products);
  return (
    <div className='navBar-searchListBox'>
      {products.map((product) => (
        <Link to={`/product/${product.id}`}  className='navBar-searchList' key={product.id}>
          <img src={product.images[0]} alt='image'/>
          <div><h2>{product.brand}</h2>
          <p>{product.title}</p>
          </div>
          <p className='navBar-searchListPrice'>Rs.{product.discounted_price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;