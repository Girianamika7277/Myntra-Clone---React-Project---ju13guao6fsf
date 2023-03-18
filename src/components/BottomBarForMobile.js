import React, { useContext, useState } from 'react'
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaFilter } from "react-icons/fa";
import "./css/Home.css"
import {  Form, ListGroup, Offcanvas } from 'react-bootstrap';
import { Context } from './Context';



export default function BottomBarForMobile() {

  // options arrays
  const gender=["Male","Female"];
  const sort=["Popularity","Customer Rating","Price: High to Low","Price: Low to High"];
  const filters=["electronics","jewelery","men's clothing","women's clothing"];

  const [showOffCanvas, setOffCanvas] = useState(false);
    const [showOffCanvasFilter, setOffCanvasFilter] = useState(false);

  const [options,setOptions]=useState([]);
  const [optionName,setOptionName]=useState();

  const {sortProducts,setGender,handleCategoryChange}=useContext(Context);

  const handleClose = (selectedOption) => {
    if(optionName === "SORT"){      
      sortProducts(selectedOption)
    }
    else if(optionName ==="GENDER"){
        setGender(selectedOption);
    }

    setOffCanvas(false)
  };
    const handleFilterClose = () => {
    setOffCanvasFilter(false)
  }; 
  const handleFilterShow = () => {
    setOffCanvasFilter(true)
  };

   
  const handleShow = (listName) => {
    if(listName === "GENDER"){
      setOptions(gender)
    }
    if(listName === "SORT"){
      setOptions(sort);
    }
    setOptionName(listName);
    setOffCanvas(true);
  }
   
  return (
    //   bottom bar for mobile devices 
    <> 
    <div className='moblieBottomSec shadow-lg rounded'>
      <div className='bottomDiv' id='gender' onClick={()=>{handleShow("GENDER")}}>GENDER</div>
      <div className="vr"></div>
      <div className='bottomDiv'  id="sort" onClick={()=>{handleShow("SORT")}} ><HiArrowsUpDown className='me-2' />SORT</div>
      <div className="vr"></div>
      <div className='bottomDiv' id='filter' onClick={handleFilterShow}><FaFilter className='me-2'/>FILTER</div>
    </div>
    <Offcanvas show={showOffCanvas} onHide={handleClose} backdrop={true} scroll={false} placement='bottom'>
        <Offcanvas.Header className='offCanvas'>
          <Offcanvas.Title>{optionName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>  
    <ListGroup >
            {
              options.map((item,key)=>{
                return <ListGroup.Item variant='secondary' key={key} onClick={()=>{handleClose(item)}}>{item}</ListGroup.Item>
              })
            }
    </ListGroup>
   </Offcanvas.Body>
      </Offcanvas>
          <Offcanvas show={showOffCanvasFilter} onHide={handleFilterClose} backdrop={true} scroll={false} placement='bottom'>
        <Offcanvas.Header className='offCanvas'>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>  
    <ListGroup >
            {
              filters.map((item,key)=>{
                return <Form.Check
                                label={item}
                                name="group1"
                                type="checkbox"
                                value={item}
                                key={key}
                                onChange={handleCategoryChange}
                            />
              })
            }
    </ListGroup>
   </Offcanvas.Body>
      </Offcanvas>
    </>
   
  )
}
