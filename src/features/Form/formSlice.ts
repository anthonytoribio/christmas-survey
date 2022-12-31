import { createSlice } from "@reduxjs/toolkit";

type SliceState = {name: string, isEnglish: boolean, nextClicked: boolean};
const initialState: SliceState = {
    name: "",
    isEnglish: true,
    nextClicked: false
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
        }
    },
})

export const {nameEntered, languageChanged, nextClicked} = formSlice.actions;
export default formSlice.reducer;