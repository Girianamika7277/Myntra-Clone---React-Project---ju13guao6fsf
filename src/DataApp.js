import React, { createContext, useState } from 'react'

export const DataWishlistContext = createContext()

const DataApp = (props) => {
    const[wishlist,setWishlist]=useState([])
    const[cart,setCart]=useState(0)
    const[searchData,setsearchData]=useState([])
    const [data, setData] = useState([])
    const [sortBy, setSortBy] = useState("latest");
    const [selectedProduct,setSelectedProduct]=useState(null)
    const [loginStatus,setLoginStatus]=useState(false)
    const [user,setUser]=useState('')

    

    
  return (
    <div>
        <DataWishlistContext.Provider value={{user,setUser,loginStatus,setLoginStatus,selectedProduct,setSelectedProduct,sortBy, setSortBy,data,setData,wishlist,setWishlist,cart,setCart,searchData,setsearchData}}>
            <div>
                {props.children}
            </div>
        </DataWishlistContext.Provider>

    </div>
  )
}

export default DataApp