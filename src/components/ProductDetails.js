import React, { useContext } from 'react'
import { Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import "./css/ProductDetails.css"
import { AiFillStar } from "react-icons/ai";
import { Context } from './Context';
import { IoBagOutline,IoHeartOutline } from "react-icons/io5";

export default function ProductDetails() {
  
    const location = useLocation();
    const product = location.state;
    const { cartItems, setCartItem,setCartCount,originalPrice,setOriginalPrice,Discount,setDiscount } = useContext(Context);


  
    const addTocart = (e) => {
        e.stopPropagation();
        const arr = cartItems;
        arr.push(product);
        setCartItem(arr);
        setCartCount(cartItems.length);
        setOriginalPrice(Math.floor(originalPrice+product.mrp));
        setDiscount(Math.floor(Discount+(product.mrp-product.price)));
    }

    const discountPrice=(product.mrp-product.price)
    const discountPercentage=Math.floor((discountPrice/product.mrp)*100);
  return (
    
    <div className='containerWhole'>
      <div className='containerLeft'>
        <div className='imageBox'>
          <Image className='prodImage' src={product.image} />
        </div>
      </div>
      <div className='containerRight'>
        <div className='detialsDiv'>
          <h1 id='prodBrand'>{product.brand}</h1>
          <h1 id='prodTitle'>{product.title}</h1>
          <div className='ratingsContainer'>
            <h6 id='rantings'>{product.rating.rate}</h6><AiFillStar fill='green'/>
            <div id='vr'>|</div>
            <p id="ratingCount">{product.rating.count}K Ratings</p>
          </div>
          <hr className='horizontalDivider'/>
           <div className='price-line d-flex  justify-content-between align-items-center'>
                <h6 className='ProductInfo line' id='Productprice'>₹{product.price}</h6>
                <h6 className='ProductInfo line' style={{ textDecoration: "line-through" }}>MRP Rs. {product.mrp}</h6>
                <h5 className='ProductInfo line' id='ProdDiscount'>({discountPercentage}% OFF)</h5>
                </div>
                <h6 className='text-success'>inclusive of all taxes</h6>
                <div className='selectSize'>
                  <h6 >SELECT SIZE</h6>
                  <h6 id='size_chart'>SIZE CHART&gt;</h6>
                </div>
                <div className='sizes'>
                  {["32","34","36","42","43"].map((item,i)=>{
                    return <h6 className='size' key={i}>{item}</h6>
                  })}

                </div>
                <div className='buttons-sec'>
                <div id='add-to-bag' className='button-div text-center' onClick={addTocart} >
                  <IoBagOutline size="1.3rem" className='me-2'/><h4 className='buttons'>ADD TO BAG</h4>
                  </div>
                  <div id='wishlist' className=' text-center'  >
                  <h4 className='buttons'><IoHeartOutline size="1.3rem" className='me-2'/> WISHLIST</h4>
                  </div>
                </div>
               
        </div>
        
      </div>
       <div className='buttons-sec-mobile'>
                <div id='add-to-bag-mobile' className='button-div text-center' onClick={addTocart} >
                  <IoBagOutline size="1.4rem" className='me-1'/><h4 className='buttons'>ADD TO BAG</h4>
                  </div>
                  <div id='wishlist-mobile' className=' text-center'  >
                  <h4 className='buttons'><IoHeartOutline size="1.3rem" className='me-2'/>WISHLIST</h4>
                  </div>
                </div>
    </div>
  )
}
