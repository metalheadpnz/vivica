import React from 'react';
import s from "../../Dashboard.module.scss";
import {Select} from "../../../../components/Select/Select";

export const DashboardHeader = () => {
    return (
        <div className={s.header}>
            <div className={s.left}>
                <span><strong> Hello, </strong></span>
                <span>David Johnson</span>
            </div>
            <div className={s.right}>
                <Select title={'Date interval'}
                        options={[{name: ' Last 30 days'}, {name: 'Last 60 days'}, {name: ' Last 90 days'}]}/>
                <div className={s.clock}>
                    <span>09:30</span>
                    <span>Monday</span>
                </div>
            </div>
        </div>
    );
}
