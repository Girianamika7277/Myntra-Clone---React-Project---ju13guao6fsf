import { createContext, useState, useEffect } from "react";
import React from 'react'
import allProductsData from "../res/data.json"



export const Context = createContext();


export default function AppContext({ children }) {
    const [cartItems, setCartItem] = useState([]);
    const [show, setShow] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [prods, setProds] = useState(allProductsData);
    const [currentProds, setCurrentProds] = useState(allProductsData);
    const [query, setQuery] = useState("");


    const [originalPrice, setOriginalPrice] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [gender, setGender] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);


    const sort = ["Popularity", "Customer Rating", "Price: High to Low", "Price: Low to High"];

    const search = (data) => {
        return data.filter((item) => item.brand.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        )
    };

    const sortProducts = (sortBy) => {
        if (sortBy === sort[3]) {
            const prodsCopy = [...currentProds]
            const sortedProds = prodsCopy.sort((a, b) => {
                if (a.price < b.price) {
                    return -1
                }
                return 1
            })
            setCurrentProds(sortedProds);
        } else if (sortBy === sort[2]) {
            const prodsCopy = [...currentProds]
            const sortedProds = prodsCopy.sort((a, b) => {
                if (a.price > b.price) {
                    return -1
                }
                return 1
            })
            setCurrentProds(sortedProds);
        } else if (sortBy === sort[0]) {
            const prodsCopy = [...currentProds]
            const sortedProds = prodsCopy.sort((a, b) => {
                if (a.rating.count > b.rating.count) {
                    return -1
                }
                return 1
            })
            setCurrentProds(sortedProds);
        }
        else if (sortBy === sort[1]) {
            const prodsCopy = [...currentProds]
            const sortedProds = prodsCopy.sort((a, b) => {
                if (a.rating.rate > b.rating.rate) {
                    return -1
                }
                return 1
            })
            setCurrentProds(sortedProds);
        }
    }

    const filterProds = (data) => {
        return data.filter((item) => item.gender.includes(gender));
    };

    function handleCategoryChange(event) {
        if (!selectedCategories.includes(event.target.value)) {
            const arrCopy = [...selectedCategories];
            arrCopy.push(event.target.value);
            setSelectedCategories(arrCopy);
        } else {
            const arrCopy = [...selectedCategories];
            const idx = arrCopy.indexOf(event.target.value);
            arrCopy.splice(idx, 1);
            setSelectedCategories(arrCopy);
        }
    }



    const filterCategories = (data) => {
        if (selectedCategories.length === 0) {
            return data;
        } else {
            return data.filter((item) => selectedCategories.includes(item.category));
        }
    };
    useEffect(() => {
        setCurrentProds(filterCategories(prods));
    // eslint-disable-next-line
    }, [selectedCategories]);



    useEffect(() => {
        if (gender) { setCurrentProds(filterProds(prods)) }
        // eslint-disable-next-line
    }, [gender]);


    return (
        <Context.Provider value={{
            cartItems, setCartItem,
            show, setShow,
            cartCount, setCartCount,
            prods, setProds,
            sortProducts,
            originalPrice, setOriginalPrice,
            Discount, setDiscount,
            currentProds, setCurrentProds,
            query, setQuery,
            gender, setGender,
            search, handleCategoryChange
        }}>
            {children}
        </Context.Provider>
    )
}
