import {ActionTypes} from '../constants/action-types';

const initialState = {
    cartItems : []
}

export function cartItemsReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case ActionTypes.SET_CARTITEMS :
            return {...state, cartItems : payload}
        default :
            return state;
    }
}