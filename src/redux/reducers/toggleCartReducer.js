import { ActionTypes } from "../constants/action-types";

const initialState = {
    showCart : false
}

export function toggleCartReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case ActionTypes.SET_TOGGLECART :
            return {...state, showCart : payload}
        default :
            return state;
    }
}