import { React, useContext } from 'react';
import { Modal, Image } from 'react-bootstrap';
import { Context } from './Context';
import {ProductInfo} from './Product';
import emptyCart from '../res/empty_cart.jpg'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import "./css/Cart.css"


const Cart = () => {
    const { cartItems, show, setShow,originalPrice,Discount } = useContext(Context);
    const navigate=useNavigate();
    function CartDisp() {
        if (cartItems.length === 0) {
            return <div className='d-flex flex-column justify-content-center align-items-center'>
                <Image src={emptyCart} className="h-50" />
                <h1>Oops! Your cart is empty.</h1>
                <div id='shop-now' className=' text-center' onClick={shopNow}><h5 className='Product'>Shop Now</h5></div>
            </div>
        } else {
            return <div className="cartContainer">
                    <div className='itemsContainer'>{cartItems.map((item, i) => {
                        return <div id='ProductContainer'key={i}  onClick={()=>{setShow(false)}}>
                        <ProductInfo productX={item} />
                         </div>
            })}</div>
            <div className='cartDetailsContainer'>
                    <div className='detailsItem d-flex align-items-center justify-content-between'><h5>Total Items</h5><h6>{cartItems.length}</h6></div>
                    <div className='detailsItem d-flex align-items-center justify-content-between'><h5>Total Original Price</h5><h6>₹{originalPrice}</h6></div>
                    <div className='detailsItem d-flex align-items-center justify-content-between'><h5>Total Discount</h5><h6>₹{Discount}</h6></div>
                    <hr id='hDivider'/>
                     <div className='detailsItem d-flex align-items-center justify-content-between'><h5>Final Price</h5><h6>₹{originalPrice-Discount}</h6></div>
                <button className='buy-btn' onClick={()=>{toast.success("Thank you for shopping with us")}}><h5>BUY</h5></button>
            </div>
            </div>
        }
    }
    function shopNow(e) {
        e.stopPropagation();
        setShow(false);
        navigate("/");

    }

    
    return (
        <>
                    <Toaster/>
        <Modal show={show} fullscreen onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center'>
                
                <CartDisp />
            </Modal.Body>

        </Modal>        </>

    );
};

export default Cart;