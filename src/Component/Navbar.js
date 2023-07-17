import React, { useContext } from 'react'
import './Navbar.css'
import myntra from '../image/myntra.png'
import { DataWishlistContext } from '../DataApp'
import Portal from './portal/Portal'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const localContext = useContext(DataWishlistContext)
    const{data,setData}=localContext
    const UpdateFn=(e)=>{
        console.log('searchinput - ',e.target.value)
        const res = data.filter((item)=>{
            return item.name.toLowerCase().includes(e.target.value)
        })
        setData(res)
    }
    return (
        <div className='container1'>

            <nav className='flex space-between nav'>
                <div className='left flex items-center'><Link to='collection' ><img src={myntra} alt="logo" /></Link>
                    <ul className='flex items-center justify-center uppercase semibold'>
                        {/* <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home </li> */}
                        

                    </ul>
                </div>
                <div className='right flex items-center semibold'>
                <input className='search' type='text' onChange={UpdateFn} placeholder='Search...' />
                    <Portal/>
                    {/* <input className='search' type='text' placeholder='Search...' />
                    <div className='profile mx-2 '>Profile</div>

                    <div className='wishlist mx-2'>Wishlist [{wishlist}] </div>
                    <div className='cart mx-2'>Cart ({cart}) </div> */}
                </div>

            </nav>

        </div>
    )
}

export default Navbar