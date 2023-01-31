import React, {useState} from 'react';
import s from "../Dashboard.module.scss";
import {Clock} from "./Clock";
import {Select} from "../../../components/Select/Select";

const options = [{name: 'Last 30 days'}, {name: 'Last 60 days'}, {name: ' Last 90 days'}]

export const DashboardHeader = () => {
    const [dateInterval, setDateInterval] = useState<string>('Last 30 days')
    return (
        <div className={s.header}>
            <div className={s.left}>
                <span><strong> Hello, </strong></span>
                <span>David Johnson</span>
            </div>
            <div className={s.right}>

                <Select
                    title={'Date interval'}
                    options={options}
                    value={dateInterval}
                    onChange={e=> setDateInterval(e.currentTarget.innerText)}
                    style={{width: '400px'}}/>

                <Clock/>
            </div>
        </div>
    );
}
