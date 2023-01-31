import React from 'react';
import s from "../Dashboard.module.scss";
import {DashBoardsCardType} from "../../../redux/cards/cardsSlice";

type PropsType = {
    card: DashBoardsCardType
}

export const DashboardCard: React.FC<PropsType> = ({card}) => {
    return (
        <div className={s.card}>
            <span className={s.cardTitle}>{card.title}</span>
            <div className={s.dataWrap}>

                {card.data.map((data, index) =>
                    <div className={s.cardData} key={index}>
                        <span className={s.number}>{data.counter}</span>
                        <span className={s.text}>{data.description}</span>
                    </div>
                )}

            </div>
        </div>
    );
}
