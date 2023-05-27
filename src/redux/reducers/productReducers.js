import { ActionTypes } from "../constants/action-types";

const initialState = {
    filteredProducts : []
}

export const productsReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case ActionTypes.SET_PRODUCTS :
            return {...state, filteredProducts : payload};
        default :
            return state;
    }
}