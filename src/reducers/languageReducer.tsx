import { CHANGE_LANGUAGE } from "../constants/actionTypes";
import { languageAction } from "../constants/actionObjects";
import { defaultState } from "../defaultState";

export const languageReducer: Function = (state = defaultState, action: languageAction) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                isEnglish: !state.isEnglish
            };
    }
};