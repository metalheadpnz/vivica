import React from 'react';
import s from "./SideBar.module.css";
import {NavLink} from "react-router-dom";

export const SmallBtn: React.FC<any> = ({data}) => {
    return (
        <NavLink to={data.route}
                 className={({isActive}) =>
                     isActive ? s.smallSelected : undefined
                 }
        >
            <div className={s.smallBtn}>
                <data.icon className={s.whiteIcon}/>
            </div>
        </NavLink>
    );
}
