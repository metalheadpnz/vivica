import React from 'react';
import s from './Dashboard.module.scss'
import {DashboardHeader} from "./components/DashboardHeader";
import {DashboardCard} from "./components/DashboardCard";

export type DashBoardsCard = {
    title: string
    data: {
        counter: number
        description: string
    }[]
}

const cards: DashBoardsCard[] = [
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
        title: "Orders",
        data: [
            {counter: 25, description: 'Draft'},
            {counter: 8, description: 'In Work'},
            {counter: 108, description: 'Completed'},
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
]

export const Dashboard = () => {
    return (
        <div className={s.wrap}>
            <DashboardHeader/>
            <div className={s.cardsWrap}>
                    <DashboardCard/>
                    <DashboardCard/>
                    <DashboardCard/>
                    <DashboardCard/>
            </div>
        </div>
    );
}
