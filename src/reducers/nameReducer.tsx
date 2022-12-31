import { ENTER_NAME } from "../constants/actionTypes";
import { nameAction } from "../constants/actionObjects";
import { defaultState } from "../defaultState";

export const nameReducer : any = (state = defaultState, action: nameAction) => {
    switch (action.type) {
        case ENTER_NAME:
            return {...state, 
            name: action.name};
        default:
            return state;
    }
};