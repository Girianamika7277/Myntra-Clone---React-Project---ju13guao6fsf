import { ActionTypes } from "../constants/action-types";

export function setToggleCart(val){
    return {
        type : ActionTypes.SET_TOGGLECART,
        payload : val
    }
}