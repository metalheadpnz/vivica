import React from 'react';
import s from './Dashboard.module.scss'
import {DashBoardsCard} from "./components/DashBoardCard/DashBoardsCard";

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
            <div className={s.header}>
                <div>
                    <span>Hello, </span>
                    <span>David Johnson</span>
                </div>
                <div>
                    <select name="date" id="">date</select>
                    <span>09:30</span>
                    <span>Monday</span>
                </div>
            </div>
            <div className={s.row}>
                <div className={s.card}></div>
                <div className={s.card}></div>
            </div>
            <div className={s.row}>
                <div className={s.card}></div>
                <div className={s.card}></div>
            </div>
        </div>
    );
}
