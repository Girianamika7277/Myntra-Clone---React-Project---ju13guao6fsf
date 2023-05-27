import {ActionTypes} from '../constants/action-types';

export function setCartItems(item){
    return {
        type : ActionTypes.SET_CARTITEMS,
        payload : item
    }
}