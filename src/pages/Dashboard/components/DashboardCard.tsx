import React from 'react';
import s from "../Dashboard.module.scss";

export const DashboardCard = () => {
    return (
        <div className={s.card}>
            <span className={s.cardTitle}>Result</span>
            <div className={s.dataWrap}>
                <div className={s.cardData}>
                    <span className={s.number}>34</span>
                    <span className={s.text}>Critical</span>
                </div>
                <div className={s.cardData}>
                    <span className={s.number}>5</span>
                    <span className={s.text}>Unread</span>
                </div>
                <div className={s.cardData}>
                    <span className={s.number}>99</span>
                    <span className={s.text}>Read</span>
                </div>
            </div>
        </div>
    );
}
