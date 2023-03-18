import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import "./css/Home.css"
import {Product} from './Product'
import BottomBarForMobile from './BottomBarForMobile';
import { Context } from './Context';





export default function Home() {
    
      const sort=["Popularity","Customer Rating","Price: High to Low","Price: Low to High"];
      const categories=["electronics","jewelery","men's clothing","women's clothing"];

    const {sortProducts,currentProds,handleCategoryChange,setGender,search} =useContext(Context);


     
            

    function handleSortByChange(event){
            const sortBy = event.target.value;
            sortProducts(sortBy);
    }

    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center m-0 p-0' >
                <div className='filter-holder container1'>
                    <div className='d-flex justify-content-around align-items-center'><h5>Filters</h5><h6 id='clear-all'>Clear All</h6></div>
                    <hr id='hr' />
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                        <Form.Group id='gender-group' className='d-flex flex-column justify-content-start align-items-start'
                            
                        >
                            <h6>Gender:</h6>

                            <Form.Check
                                type="radio"
                                id="male"
                                label="Male"
                                name="Gender"
                                value="Male"
                                onChange={(e)=>{setGender(e.target.value)}}
                            />
                            <Form.Check
                                type="radio"
                                id="female"
                                label="Female"
                                name="Gender"
                                value="Female"
                                onChange={(e)=>{setGender(e.target.value)}}
                            />
                        </Form.Group>
                    </div>
                    <hr />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                        <h6>Categories</h6>
                        {categories.map((item, i) => {
                            return <Form.Check
                                label={item}
                                name="group1"
                                type="checkbox"
                                value={item}
                                key={i}
                                onChange={handleCategoryChange}
                            />
                        })}
                    </div>
                </div>
       
                <hr className='hr' />
                <div className='container2'>
                    <div className='d-flex justify-content-between'>
                        {/* Sortby for large screens */}
                        <div id='sort-by-container' className='w-100 d-flex justify-content-end align-items-center'>
                            <Form.Select className='shadow-sm' id='sort-by' aria-label="Default select example" onChange={handleSortByChange}>
                                <option >Sort By</option>
                              {sort.map((item,key)=>{
                                return <option value={item} key={key} >{item}</option>
                              })}

                            </Form.Select>

                        </div>
                    </div>
                    <hr />
                    {/* Products */}
                    <div className='Products'>{search(currentProds).map((item, i) => {
                        return <Product product={item} key={i} />
                    })}</div>
                </div>
            </div>
            <BottomBarForMobile />
        </>

    )
}
