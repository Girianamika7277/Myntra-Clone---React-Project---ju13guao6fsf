import { ActionTypes } from "../constants/action-types";

export function setSearch(input){
    return {
        type : ActionTypes.SET_SEARCH,
        payload : input
    }
}