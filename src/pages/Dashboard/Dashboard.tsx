import React from 'react';
import s from './Dashboard.module.scss'
import {DashboardHeader} from "./components/DashboardHeader";
import {DashboardCard} from "./components/DashboardCard";
import {useAppSelector} from "../../redux/hooks";

export const Dashboard = () => {
    const cards = useAppSelector(state => state.cards.dashboardsCards)
    return (
        <div className={s.wrap}>
            <DashboardHeader/>
            <div className={s.cardsWrap}>
                {cards.map((c, i) => <DashboardCard key={i} card={c}/>)}
            </div>
        </div>
    );
}
