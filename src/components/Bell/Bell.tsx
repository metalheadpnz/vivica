import React from 'react';
import {ReactComponent as BellIcon} from "../../assets/images/bell.svg";
import s from './Bell.module.css'

type PropsTypes = {
    count?: number
}

export const Bell: React.FC<PropsTypes> = ({count}) => {
    return (
        <span className={s.wrap}>
            <BellIcon/>
            {count ?
                <div className={s.circle}>
                    <div className={s.counter}>
                        {count}
                    </div>
                </div>
                : <></>
            }
           </span>
    );
};