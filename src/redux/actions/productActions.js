import { ActionTypes } from "../constants/action-types";

export function setProducts(products){
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}