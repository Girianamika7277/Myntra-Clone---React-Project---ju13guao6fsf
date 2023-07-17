import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Collection.css'
import Sidebar from './Sidebar'
import { DataWishlistContext } from '../DataApp'



const Collection = () => {
    const localContext = useContext(DataWishlistContext)
    const { selectedProduct, setSelectedProduct, wishlist, setWishlist, searchData, data, setData, sortBy, setSortBy } = localContext

    // const [data, setData] = useState([])

    // setData(searchData)
    const updateWishlistFn = (item) => {
        setWishlist(wishlist => [...wishlist, item])
    }
    const sortFn = (e) => {
        let res
        if (e.target.value === 'price') {
            res = data.sort((a, b) => a.finalPrice - b.finalPrice)
        }
        if (e.target.value === 'discount') {
            res = data.sort((a, b) => {
                return b.discount - a.discount
            })
        }
        setData(res ? [...res] : [])
    }

    // useEffect(() => {

    //     // sortFn()
    // }, [sortBy])

    return (
        <div>
            <div>
                <div className='divider_div row'>
                    <div className='col-9'>
                        <h3>Filter Holder</h3>
                    </div>
                    <div className=' flex col-3 sort-right' >
                        {/* <label for='select'></label> */}
                        <div > Sort by :</div>
                        <div className='sort-holder'>

                        <select className='select' id='select' onChange={sortFn} defaultValue="latest" >
                            <option value='latest'>What's New</option>
                            <option value='price'>Price low to high</option>
                            <option value='discount'>Better Discount</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <div className='sidebar'>

                        <Sidebar />

                    </div>
                    <div className='content'>
                        {
                            data ? data.map((item) => {
                                return <div className='flex list'>
                                    <div >
                                        <div>
                                            <Link to={`/product`}> <img src={item.otherImages[0]} alt='danish' onClick={(e) => setSelectedProduct(item)} className='images' /></Link>
                                        </div>
                                        <div className='pname flex justify-center'>{item.name} </div>
                                        <div >{item.description} </div>

                                        <div className=' flex  '>
                                            <div>
                                                < span className='price'>RS. {item.finalPrice}&nbsp;</span></div>
                                            <span className='price strickprice'>{item.strickPrice}&nbsp;</span>
                                            <span className='price discount'> {item.discount}% &nbsp;OFF</span>
                                        </div>
                                        {/* <button className='button' onClick={()=>updateWishlistFn(item)} > Add to wishlist</button> */}
                                    </div>
                                </div>
                            }) : searchData && searchData.map((item) => {
                                return <div className='flex list'>
                                    <div >
                                        <div>
                                            <Link to={`/product/${item.id}`}> <img src={item.link} alt='danish' className='images' /></Link>
                                        </div>
                                        <div className='pname'>{item.name} </div>
                                        <div className='price'>{item.product} </div>

                                        <div className=' flex'><span>{item.title}</span>
                                            < span className='price'>{item.price}/-</span></div>
                                        <button className='button' onClick={updateWishlistFn} > Add to wishlist</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Collection