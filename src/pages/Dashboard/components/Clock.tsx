import React from 'react';
import s from './Clock.module.css';

export const Clock = () => {
    return (
        <div className={s.clock}>
            <span className={s.time}>09:30</span>
            <div className={s.date}>
                <div>Monday</div>
                <div>07/12/2022</div>
            </div>
        </div>
    );
}