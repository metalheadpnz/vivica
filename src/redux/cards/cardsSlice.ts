import {createSlice} from "@reduxjs/toolkit";
import {RootStateType} from "../store";

export type DashBoardsCardType = {
    title: string
    data: {
        counter: number
        description: string
    }[]
}

export type CardsStateType = {
    dashboardsCards: DashBoardsCardType[]
}

const initialState: CardsStateType = {
    dashboardsCards: [
        {
            title: "Results",
            data: [
                {counter: 15, description: 'Critical'},
                {counter: 5, description: 'Unread'},
                {counter: 45, description: 'Read'},
            ]
        },
        {
            title: "Orders",
            data: [
                {counter: 25, description: 'Draft'},
                {counter: 8, description: 'In Work'},
                {counter: 108, description: 'Completed'},
            ]
        },
        {
            title: "Orders+",
            data: [
                {counter: 34, description: 'Draft'},
                {counter: 42, description: 'In Work'},
                {counter: 14, description: 'Completed'},
            ]
        },
        {
            title: "Orders++",
            data: [
                {counter: 1, description: 'Draft'},
                {counter: 2, description: 'In Work'},
                {counter: 3, description: 'Completed'},
            ]
        },
    ]
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {}
})

export const {} = cardsSlice.actions

export const cards = (state: RootStateType) => state.cards.dashboardsCards

export default cardsSlice.reducer