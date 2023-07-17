import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './Navbar.css'
import { DataWishlistContext } from '../../DataApp'
import Modal from './Modal'
const Portal = () => {
    let name = localStorage.getItem('loggedUser')
    let status = localStorage.getItem('loggedStatus')
    const navigate = useNavigate()
    const localContext = useContext(DataWishlistContext)
    const [open, setIsOpen] = useState(false)
    const { wishlist, loginStatus, setLoginStatus, user, setUser } = localContext
    console.log(localContext)
    console.log('status11...',status)
    const wishlistFn = () => {
        if (!loginStatus) {
            alert('🙏Please login...')
            navigate('/login')
        } else {
            if (wishlist.length > 0) {
                setIsOpen(open => !open)
            } else {
                alert("Please select any product")
            }
        }
    }
    // const LogoutFn = () => {
    //     if (status) {
    //         alert('logout successfully')
    //         localStorage.setItem("loggedUser", '')
    //         localStorage.setItem("loggedStatus", false)
    //         console.log('status222...', status)
    //         setUser('')
    //         setLoginStatus(false)
    //     } else {
    //         navigate('/login')
    //     }
    // }
    return (
        <div className='flex'>

            <div className='wishlist mx-2' onClick={wishlistFn} >Wishlist [{wishlist.length}] </div>
            {/* <div className='cart mx-2'>Cart</div> */}
            <Modal open={open} setIsOpen={setIsOpen} wishlist={wishlist} />

            <div className='profile mx-2 '>{user}</div>
            {/* <button onClick={LogoutFn} >{status ? 'Logout' : "Login"}</button> */}
        </div>
    )
}

export default Portal