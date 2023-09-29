import "./NavBar.css";
import MyContext from "../../context/MyContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Myntra_Logo_nobg.png";
import NavSide from "./NavSide";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import { signOut } from "../../FireBaseConfig";

import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineMenu,
} from "react-icons/hi";

const NavBar = () => {
  // search bar start
  let inputDataMen = require("../../assets/inputData/mens_data.json");
  let inputDataWomen = require("../../assets/inputData/womens_data.json");
  let inputDataChildren = require("../../assets/inputData/children_data.json");
  let combinedData = [...inputDataMen, ...inputDataWomen, ...inputDataChildren];

  const products = combinedData;

  // console.log(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.title?.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredProducts(filteredProducts);
  };

  // search bar end

  const myContextData = useContext(MyContext);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(myContextData.cartState.length);
  }, [myContextData]);

  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const profileBoxVisibilityHandler = () => {
    setIsProfileVisible(!isProfileVisible);
  };


  const { isLoggedin, updateLoginStatus } = useContext(MyContext);
  // console.log(isLoggedin);
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
    // updateLoginStatus(!isLoggedin);
  };
  const logoutHandler = () => {
    signOut();
    updateLoginStatus(false);
    // console.log(isLoggedin);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
const menuOpenHandler = () => {
  setIsMenuOpen(true);
}

  return (
    <>
      <div className="navBar-backSpace"></div>
      <div className="navBar-container">
      {isMenuOpen && <NavSide  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        <div className="navBar-leftSection">
          <div className="navBar-menu">
          <HiOutlineMenu onClick={menuOpenHandler}/>
          </div>
          <div className="navBar-logoHolder">
            <Link to={"/"}>
              <img className="navBar-logo" src={logo} alt="myntra logo" />
            </Link>
          </div>
          <div className="navBar-categorySection">
            <Link to={"/Catalog/men"} className="navBar-cat">
              MEN
            </Link>
            <Link to={"/Catalog/women"} className="navBar-cat">
              WOMEN
            </Link>
            <Link to={"/Catalog/kids"} className="navBar-cat">
              KIDS
            </Link>
            <span className="navBar-cat my-tooltip">HOME & LIVING</span>
            <span className="navBar-cat my-tooltip">BEAUTY</span>
            <span className="navBar-cat navBar-catStudio my-tooltip">
              STUDIO <div className="navBar-catNew">NEW</div>
            </span>
          </div>
        </div>
        <div className="navBar-rightSection">
          <div className="NavBar-searchBar">
            <HiOutlineSearch className="navBar-searchIcon" />
            {/* <input
              className="navBar-search"
              type="text"
              placeholder="Search for products, brands and more"
            /> */}
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch}/>
            {searchTerm && <ProductList products={filteredProducts} />}
          </div>
          <div
            className="navBar-profileSectionWrapper"
            onClick={profileBoxVisibilityHandler}
          >
            <div className="navBar-iconContainer">
              <HiOutlineUser className="navBar-icon" />
              <div className="navBar-iconHead">Profile</div>
              {isProfileVisible && (
                <div className="navBar-profileSectionContainer">
                  <div>
                    Welcome
                    {!isLoggedin && (
                      <div>To access account and manage orders</div>
                    )}
                    {isLoggedin && <div>Happy to have you back!</div>}
                  </div>
                  {!isLoggedin && (
                    <button onClick={loginHandler}>LOGIN / SIGNUP</button>
                  )}
                  {isLoggedin && <button onClick={logoutHandler}>LOGOUT</button>}
                </div>
              )}
            </div>
          </div>
          <Link to="/cart" className="navBar-iconContainer">
            <HiOutlineHeart className="navBar-icon" />
            <div className="navBar-iconHead">Wishlist</div>
          </Link>
          <Link to="/cart" className="navBar-iconContainer navBar-cartIcon">
            <HiOutlineShoppingBag className="navBar-icon" />
            <span className="navBar-cart-list-length">{cartCount}</span>
            <div className="navBar-iconHead">Bag</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
