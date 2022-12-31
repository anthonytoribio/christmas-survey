import { NEXT } from "../constants/actionTypes";
import { nextAction } from "../constants/actionObjects";
import { defaultState } from "../defaultState";

export const nextReducer : any = (state = defaultState, action: nextAction) => {
    switch (action.type) {
        case NEXT:
            return {
                ...state,
                nextClicked: true
            };
        default:
            return state;
    }
};