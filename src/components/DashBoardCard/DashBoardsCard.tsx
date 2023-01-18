import React from 'react';
import s from './DashBoardCard.module.css'

export type DashBoardsCard = {
    title: string
    data: {
        counter: number
        description: string
    }[]
}

type PropsType = {
    card: DashBoardsCard
}

export const DashBoardsCard: React.FC<PropsType> = ({card}) => {
    return (
        <div className={s.wrap}>
            <div className={s.title}>{card.title}</div>
            <div className={s.mark}>
                {card.data.map((el, i) =>
                    <div className={s.markWrap} key={i}>
                        <div className={s.counter}>{el.counter}</div>
                        <div className={s.description}>{el.description}</div>
                    </div>)}
            </div>
        </div>
    );
}