import { React, useContext } from 'react'
import { Image } from 'react-bootstrap'
import "./css/Product.css"
import { Link } from 'react-router-dom';
import { Context } from './Context';
import {Toaster,toast} from "react-hot-toast"




function Product({ product }) {
    const { cartItems, setCartItem,setCartCount,originalPrice,setOriginalPrice,Discount,setDiscount } = useContext(Context);
    


    const addTocart = (e) => {
        e.stopPropagation();
        const arr = cartItems;
        arr.push(product);
        setCartItem(arr);
        setCartCount(cartItems.length);
        setOriginalPrice(Math.floor(originalPrice+product.mrp));
        setDiscount(Math.floor(Discount+(product.mrp-product.price)));
        toast.success("Product added to cart");
    }

    return (
        <>     <Toaster/>
        
         <div id='ProductContainer'>
   
         <ProductInfo productX={product}/>
    <div id='add-to-cart' className=' text-center'  ><h5 className='Product' onClick={addTocart}>ADD TO BAG</h5></div>

        </div>
       </> 
    )
      
}

function ProductInfo({productX}){
    const discountPrice=(productX.mrp-productX.price)
    const discountPercentage=Math.floor((discountPrice/productX.mrp)*100);
    return(
    <Link to={`/product/${productX.id}`} state={productX} style={{textDecoration: "none"}} >
        <div >
            <Image id='ProductImage' src={productX.image} />
            <h3 className='Product' id='BrandName'>{productX.brand}</h3>
            <h5 className='Product' id='ProductName'>{productX.title}</h5>
            <div className='d-flex  justify-content-center align-items-center'>
                <h6 className='Product line3' id='Productprice'>Rs. {Math.floor(productX.price)}</h6>
                <h6 className='Product line3' style={{ textDecoration: "line-through",color:"black" }}>Rs. {productX.mrp}</h6>
                <h5 className='Product line3' id='Discount'>{discountPercentage}% OFF</h5></div>
        </div>
        </Link>
    );
}

export {Product,ProductInfo}