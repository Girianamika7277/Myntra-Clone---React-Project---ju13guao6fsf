import { Image, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../myntra-logo.png"
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./css/Nav.css"
import { React, useContext} from 'react'
import { Context } from './Context';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';



function NavBar() {

  const { setShow,cartCount,query,setQuery} = useContext(Context);
  
  const navigate = useNavigate();
 

   console.log(query);


  const search=(data)=>{
    return data.filter((item)=> item.brand.toLowerCase().includes(query));
  };
  

  function handleShow() {
    setShow(true);
  }
  function navigateHome() {
    navigate("/");
  }



  return (
    <Navbar collapseOnSelect className='navbar shadow' bg="light" expand="lg" sticky='top' >
      <Container fluid className='d-flex  align-items-center'>
        <Navbar.Brand >
          <div className='icon-holder' onClick={navigateHome} >
            <Image id='logo' src={logo} />

          </div>
        </Navbar.Brand>
        <div className='d-flex justify-content-end align-items-center'>
          <div className='cart-sec cart-holder' id='cart-icon-small'  onClick={handleShow}>
            <HiOutlineShoppingBag size={"2.5rem"}  className="cart-icon" />
            <p className='cart-count cart-list-length'>{cartCount}</p>

          </div>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ textAlign: "end" }} />
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 py-3"

          >
            <Nav.Link ><h6>MEN</h6></Nav.Link>
            <Nav.Link ><h6>WOMEN</h6></Nav.Link>
            <Nav.Link ><h6>KIDS</h6></Nav.Link>


          </Nav>
          <div className='d-flex '>
            <InputGroup className='search-box'>
            <Form.Control aria-label="search-box" placeholder='Search' onChange={(e)=>{setQuery((e.target.value).toLowerCase())}}/>
            <Button className='search-button bg-light' style={{ border: "1px solid #ced4da" }}>
              <BiSearchAlt size={"1.5rem"} id='search-icon' /></Button>
          </InputGroup>
           <div className='cart-sec cart-holder' id='cart-icon-large' onClick={handleShow}>
            <HiOutlineShoppingBag size={"2.5rem"}  className="cart-icon" />
            <p className='cart-count'>{cartCount}</p>

          </div>
            </div>

        </Navbar.Collapse>
      </Container>
      <Cart />

    </Navbar>
  );
}

export default NavBar;