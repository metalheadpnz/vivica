import React from 'react';
import s from "../Dashboard.module.scss";
import {Select2} from "../../../components/Select2/Select2";
import {Clock} from "./Clock";

const options = [{name: ' Last 30 days'}, {name: 'Last 60 days'}, {name: ' Last 90 days'}]

export const DashboardHeader = () => {
    return (
        <div className={s.header}>
            <div className={s.left}>
                <span><strong> Hello, </strong></span>
                <span>David Johnson</span>
            </div>
            <div className={s.right}>
                <Select2 title={'Date interval'}
                         width='400px'
                         options={options}
                    // callBack={(option) => console.log(option)}
                />
                <Clock/>
            </div>
        </div>
    );
}
