import React from 'react';
import s from "../../Dashboard.module.scss";

export const DashboardHeader = () => {
    return (
        <div className={s.header}>
            <div className={s.left}>
                <span>Hello, </span>
                <span>David Johnson</span>
            </div>
            <div className={s.right}>
                <select name="date" id="">date</select>
                <span>09:30</span>
                <span>Monday</span>
            </div>
        </div>
    );
}
