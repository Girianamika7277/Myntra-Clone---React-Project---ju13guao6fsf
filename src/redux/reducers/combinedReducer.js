// import {createStore} from 'redux';

// const store = createStore(reducer);


// function reducer(initialState = {lastCount : 0, count : 0}, action){
//     switch(action.type){
//         case "increment" :
//             return {lastCount : initialState.count, count : initialState.count + 1}
//         case "decrement" :
//             return {lastCount : initialState.count, count : initialState.count - 1}
//         default :
//             return initialState;
//     }
// }

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// setInterval(()=>{
//     store.dispatch({type : 'decrement'})
// },[2000])


import { combineReducers } from "redux";
import { productsReducer } from "./productReducers";
import { searchReducer } from "./searchInputReducer";
import { cartItemsReducer } from "./cartItemsReducer";
import { toggleCartReducer } from "./toggleCartReducer";

const reducers = combineReducers({
    products : productsReducer,
    search : searchReducer,
    cart : cartItemsReducer,
    toggleCart : toggleCartReducer
})

export default reducers;