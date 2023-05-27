import React, {useContext, useState, useEffect} from 'react';
import '../styles/Cart.css';
import {data} from '../data';
import {dataFromParent} from './App';
import Tile from './Tile';
import {Link} from 'react-router-dom';
import { Box, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {setCartItems} from '../redux/actions/cartItemsActions';
import { setToggleCart } from '../redux/actions/toggleCartActions';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const showCart = useSelector((state)=>state.toggleCart.showCart);
  


  // the subtotal of items which has added to cart
  const [subTotal, setSubTotal] = useState(0);

  // for toggling the modal div
  const [showModal, setShowModal] = useState(false);

  // for doing the sum of cart items price
  let tempTotal = 0;

  /**
   * Function to update cartItem, showModal state variable to their default values
   * it'll call the function which is recieved by props
   */
  function closeModal(){
    dispatch(setCartItems([]));
    setShowModal(false);
    dispatch(setToggleCart(false));
  }

  // updating the subTotal state variable whenever the cartItems state variable gets updated
  useEffect(()=>{
    setSubTotal(tempTotal)
  },[cartItems])

  return (
    <div id="cart-window" style={{display : showCart ? "block" : "none"}}>
      {
        // Conditional renderring - if cartItems state variable's length is greater than 0
        cartItems.length > 0
        ?
        <>
          <div id="cart-wrapper">
            {
              // Iterating over cartItems state variable
              cartItems.map((elem, idx)=>(
                //used to extract the key, value pair
                Object.entries(elem).map((obj)=>(
                  // Iterating over data.js
                  data.map((item)=>(
                    // if data.id matches with cartItems state variable's element's key
                    item.id === Number(obj[0])
                    &&
                    <section className="cart-item" key={idx}>
                      <div>
                        <Link to={'/'+obj[0]}><Tile data={item}/></Link>
                      </div>

                      {/* used for doing the sum while renderring of item's price which has added to cart */}
                      <div style={{display : "none"}}>
                        {
                          tempTotal += item.finalPrice*obj[1]
                        }
                      </div>

                      <div>
                        <h3>Quantity : {obj[1]}</h3>
                        <h3>Total Original Price : {item.strickPrice}</h3>
                        <h3>Total Discount : {item.strickPrice - item.finalPrice}</h3>
                        <h3>Final Price : {item.finalPrice}</h3>
                        
                      </div>
                    </section>
                  ))
                ))
              ))
            }
          </div>

          <div id='sub-total'>
            <h3>Subtotal({cartItems.length} Item) : {subTotal}</h3>
            <button onClick={()=>setShowModal(true)}>Checkout</button>

            {/* Modal to show the final MessageBox */}
            <Modal open={showModal} onClose={closeModal}>
              <Box >
                <Typography>
                  <div className='modal'>
                    <h1>Your Order has been Placed</h1>
                    <h3>Thank You For Shopping With Us</h3>
                    <p>Click anywhere outside to close</p>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
        </>
        
        // Else
        :

        <h1 id='empty'>Your Cart is Empty</h1>
      }
    </div>
  )
}
