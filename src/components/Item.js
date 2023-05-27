import React, {useContext} from "react";
import "../styles/Item.css";
import {dataFromParent} from './App';
import {useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../redux/actions/cartItemsActions";


export default function Item() {
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.products.filteredProducts);
  const cartItems = useSelector((state)=>state.cart.cartItems);


  // getting the param value from browsers searchBar
  let id = window.location.href.split('/')
  id = Number(id[id.length-1])

  /**
   * function to handle the items that've to be add in the cart
   * @param {String} id - takes the param value
   */
  function addToCartHandler(id){
    // used for maintain the not-repeating keys
    const map = new Map();

    if(cartItems.length > 0){
      // Iterating over cartItems state variable
      cartItems.forEach((item)=>{
        // used to extract the key, value pair from each cartItems element
        Object.entries(item).forEach((elem)=>{
          // updating values in map
          map.set(elem[0], elem[1])
        })
      })
    }

    // if map already has the key which is equals to id(param) then updating its value with value + 1
    if(map.has(id)){
      map.set(id, Number(map.get(id))+1);
    }
    else{
      // if it doesnt have any key equall to id(param) then updating its value with 1
      map.set(id, 1);
    }

    let temp = [];

    // Iterating over map's key, value pair
    for(let [key, val] of map){
      // pushing them into temp array
      temp.push({[key] : val})
    }

    // updating cartItems reducer variable with temp array 
    dispatch(setCartItems(temp));
  }

  return (
    <div id="item">
      <section id="img-wrapper">
        {
          // Conditional rendering - if product has data
          product
          &&
          // Itering over product particular elements otherImages property
          product[id].otherImages.map((item, idx)=>(
            <div key={idx}>
              <img src={item} alt={"img"+idx} />
            </div>
          ))
        }
      </section>

      <section id="desc-wrapper">
        <h1 id="title">{product[id].name}</h1>

        <h1 id="description">{product[id].description}</h1>

        <div>
          <p id="price">₹{product[id].finalPrice}</p>
          <p id="strikePrice">MRP <span className="strike">{product[id].strickPrice}.</span></p>
          <p id="discount">({product[id].discount}% OFF)</p>
        </div>

        <p id="inclusive">inclusive of all taxes</p>

        <h4 id="selectSize">SELECT SIZE</h4>

        <div>
          {
            // Extracting the size values from product's particular element's property productSize by spliting them by ","
            product[id].productSize.split(",").map((item, idx)=>(
              <p className="size" key={idx}>{item}</p>
            ))
          }
        </div>

        <button id="addToCart" onClick={()=>addToCartHandler(String(product[id].id))}>ADD TO CART</button>
      </section>
    </div>
  );
}
