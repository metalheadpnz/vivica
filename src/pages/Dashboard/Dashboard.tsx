import React from 'react';
import s from './Dashboard.module.css'
import {DashBoardsCard} from "../../components/DashBoardCard/DashBoardsCard";

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
            <div className={s.header}>header</div>
            <div className={s.content}>
                {cards.map((card, index) => <DashBoardsCard card={card} key={index}/>)}
            </div>
        </div>
    );
};
