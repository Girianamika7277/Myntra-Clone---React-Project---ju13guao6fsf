import React, {useRef, useEffect, useContext} from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
import searchIco from '../svg/search-icon.svg';
import cartIcon from '../svg/cart-icon.svg';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import {setSearch} from '../redux/actions/searchActions';
import {setToggleCart} from '../redux/actions/toggleCartActions';
import logo from "../img/logo.png";

export default function Navbar() {

    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart.cartItems);
    const showCart = useSelector((state)=>state.toggleCart.showCart);


    // used to style the searchIcon
    const searchIconRef = useRef(null);

    /**
     * function to change iconRef style on every onFocus
     */
    function onFocussearchBox(){
        searchIconRef.current.style.background = "inherit";
    }

    /**
     * function to change iconRef style on every Blur
     */
    function onBlursearchBox(){
        searchIconRef.current.style.background = "#f5f5f6";
    }

    // styling the seachIcon when app loads initially
    useEffect(()=>{
        searchIconRef.current.style.background = "#f5f5f6";
    },[])

    useEffect(()=>{
        console.log(showCart)
    },[showCart])

    
    return (
        <div id="navbar-Wrapper">
            <div id="navbar">
                <section id="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </section>

                <section id="navlink-Wrapper">
                    <section id="men">
                        <Link to='/' className='fontSize1-4rem'>MEN</Link>
                    </section>

                    <section id="women">
                        <Link to='/' className='fontSize1-4rem'>WOMEN</Link>
                    </section>

                    <section id="kid">
                        <Link to='/' className='fontSize1-4rem'>KID</Link>
                    </section>
                </section>

                <section id="search">  
                    <section id="input">
                        <img className='navIcon' ref={searchIconRef} src={searchIco} alt="search-icon" />
                        <input type="text" placeholder='Search for products, brands and more' onChange={(e)=>dispatch(setSearch(e.target.value))} onFocus={onFocussearchBox} onBlur={onBlursearchBox}/>
                    </section>
                </section>

                <section id="cart">
                    <img className='navIcon' src={cartIcon} alt="cart-icon" onClick={()=>dispatch(setToggleCart(!showCart))}/>
                    {
                        // Conditional renderring - if cartItens state variable length is greater than 0
                        cartItems.length > 0
                        &&
                        <p id='cartCount'>{cartItems.length}</p>
                    }
                </section>

                {/* renderring Cart component */}
                <Cart />
            </div>
        </div>
    )
}
