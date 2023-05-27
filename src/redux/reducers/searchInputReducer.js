import { ActionTypes } from "../constants/action-types";

const initialState = {
    searchInput : ""
}

export const searchReducer = (state = initialState, action)=>{
    const {type, payload} = action;

    switch(type){
        case ActionTypes.SET_SEARCH:
            return {...state, searchInput : payload};
        default :
            return state;
    }
}