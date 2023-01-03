import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
    name: string, 
    isEnglish: boolean, 
    nextClicked: boolean, 
    firstChoice: string,
    secondChoice: string,
    thirdChoice: string
};

const initialState: SliceState = {
    name: "",
    isEnglish: true,
    nextClicked: false,
    firstChoice: "",
    secondChoice: "",
    thirdChoice: ""
};

// With the createSlice method we can use a state as if we were mutating it 
// in the method implementation it doesn't lead to mutations.
// In addition, it will create action

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        nameEntered(state, action) {
            state.name = action.payload
        },
        languageChanged(state) {
            state.isEnglish = !state.isEnglish
        },
        nextClicked(state) {
            state.nextClicked = !state.nextClicked
        },
        firstChoiceClicked(state, action) {
            state.firstChoice = action.payload
        },
        secondChoiceClicked(state, action) {
            state.secondChoice = action.payload
        },
        thirdChoiceClicked(state, action) {
            state.thirdChoice = action.payload
        }
    },
})

export const {nameEntered, languageChanged, nextClicked, firstChoiceClicked, secondChoiceClicked, thirdChoiceClicked} = formSlice.actions;
export default formSlice.reducer;