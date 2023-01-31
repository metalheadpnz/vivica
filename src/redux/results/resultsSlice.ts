import {createSlice} from "@reduxjs/toolkit";

type ResultsStateType = {
    value: number
}

const initialState: ResultsStateType = {
    value: 0
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = resultsSlice.actions

export default resultsSlice.reducer