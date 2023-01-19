import React from 'react';
import s from "../Dashboard.module.scss";

export const DashboardCard = () => {
    return (
        <div className={s.card}>
            <span className={s.cardTitle}>Result</span>
            <div className={s.dataWrap}>
                <div className={s.cardData}>
                    <span className={s.number}>50</span>
                    <span className={s.text}>mana</span>
                </div>
                <div className={s.cardData}>
                    <span className={s.number}>50</span>
                    <span className={s.text}>mana</span>
                </div>
                <div className={s.cardData}>
                    <span className={s.number}>50</span>
                    <span className={s.text}>mana</span>
                </div>
            </div>
        </div>
    );
}
