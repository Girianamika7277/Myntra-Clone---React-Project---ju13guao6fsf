import React, {useState, useEffect, useContext, useRef} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import Tile from './Tile';
import {data} from '../data';
// import {dataFromParent} from './App';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/actions/productActions';
import Footer from "./Foooter";

export default function Home() {
    // for changing the value of select input
    const dropdownRef = useRef(null);

    // to store the radio button value
    const [gender, setGender] = useState("M");

    // to store the checkbox value in the array form
    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.filteredProducts);
    const search = useSelector((state) => state.search.searchInput);
    

    /**
     * to filter the data on the basis of user selected radio and checkbox value
     */
    function filter() {
        let filtered = data.filter((item)=>{
            return item.gender === gender;
        })

        dropdownRef.current.value = "new";

        if(categories.length > 0){
            let temp = [];
            categories.forEach((category)=>{
                if(categories.length === 1){
                    if(category === "folded sleeves"){
                        temp = filtered.filter((item)=>{
                            return item.gender === gender && item.folded === "Y";
                        })
                    }
                    else if(category === "white"){
                        temp = filtered.filter((item)=>{
                            return item.gender === gender && item.white === "Y";
                        })
                    }
                }
                else{
                    temp = filtered.filter((item)=>{
                        return item.gender === gender && (item.folded === "Y" || item.white === "Y");
                    })
                }
            })
            dispatch(setProducts(temp));
        }
        else{
            dispatch(setProducts(filtered));
        }
    }
    
    /**
     * function to update the categories state variable with the user's input value
     * @param {object} e - event object
     */
    function checkboxHandler(e){
        if(e.target.id === "white"){
            if(e.target.checked){
                setCategories([...categories, e.target.value]);
            }
            else{
                setCategories(categories.filter(item => item !== "white"))
            }
        }
        else if(e.target.id === "folded-sleeves"){
            if(e.target.checked){
                setCategories([...categories, e.target.value]);
            }
            else{
                setCategories(categories.filter(item => item !== "folded sleeves"))
            }
        }
    }

    /**
     * function to handle the dropdown/select input and sorting on the basis of its selected value
     * @param {object} e - event object 
     */
    function dropdownHandler(e){
        if(e.target.value === "new"){
            filter();
        }
        else if(e.target.value === "low"){
            let temp = product.sort((a, b)=>{
                // price low to high
                return a.finalPrice - b.finalPrice;
            })
            dispatch(setProducts([...temp]));
        }
        else if(e.target.value === "discount"){
            let temp = product.sort((a, b)=>{
                // discount high to low
                return b.discount - a.discount;
            })
            dispatch(setProducts([...temp]));
        }
    }

    /**
     * function to handle the search input field of navbar component
     * filters the data which matches with the users seached query
     * updating product reducer variable with those filters data
     */
    function inputSearch(){
        let result = product.filter((obj)=>{
            return JSON.stringify(obj).includes(search);
        })
        dispatch(setProducts(result));
    }

    // invokes on each search, gender, categories state change
    useEffect(()=>{
        if(search !== ""){
            inputSearch();
        }
        else{
            filter();
        }
    },[search, gender, categories])

    return (
        <>
        <div id='home'>
            <div id="hero">
                <section id="filter-holder">
                    <div id='radio-wrapper'>
                        <h3 className='heading'>Gender</h3>
                        <div id='men-wrapper' className='padding'>
                            <input className='marginR-5px' type="radio" id='men' name='gender' value="M" defaultChecked onChange={(e)=>setGender(e.target.value)} />
                            <label htmlFor="men" className='label'>MEN</label>
                        </div>

                        <div id='women-wrapper' className='padding'>
                            <input className='marginR-5px' type="radio" id='women' name='gender' value="F" onChange={(e)=>setGender(e.target.value)} />
                            <label htmlFor="women" className='label'>WOMEN</label>
                        </div>
                    </div>

                    <div id='checkbox-wrapper'>
                        <h3 className='heading'>Categories</h3>
                        <div id='white-wrapper' className='padding'>
                            <input className='marginR-5px' type="checkbox" id='white' value="white" onChange={checkboxHandler} />
                            <label htmlFor="white" className='label'>WHITE</label>
                        </div>

                        <div id='folded-sleeves-wrapper' className='padding'>
                            <input className='marginR-5px' type="checkbox" id='folded-sleeves' value="folded sleeves" onChange={checkboxHandler} />
                            <label htmlFor="folded-sleeves" className='label'>FOLDED SLEEVES</label>
                        </div>
                    </div>
                </section>

                <div>
                    <select name="sort" id="dropdown" defaultValue="new" onChange={dropdownHandler} ref={dropdownRef} >
                        <option value="new">What's New</option>
                        <option value="low">Price low to high</option>
                        <option value="discount">Better Discount</option>
                    </select>
                </div>

                <section id="product-tile-holder">
                    {
                        // Conditional renderring - if product reducer variable has data
                        product
                        &&
                        // Iterating over product reducer variable items
                        product.map((item, idx)=>(
                            <Link to={'/'+idx} key={idx}><Tile data={item} /></Link>
                        ))
                    }
                </section>
            </div>
        </div>
        <Footer />
        </>
    )
}
