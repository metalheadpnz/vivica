import {createSlice} from "@reduxjs/toolkit";

type ResultsStateType = {
    value: number
    data: Array<{ title: string, id: number }>
}

const initialState: ResultsStateType = {
    value: 0,
    data: []
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
        },
        setData: (state, action) => {
             state.data = action.payload
        }
    }
})

export const {increment, decrement, reset, setData} = resultsSlice.actions

export default resultsSlice.reducer