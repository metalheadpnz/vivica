import React from 'react';
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";

type PropsTypes = {
    title: string,
    icon: any,
    selected?: boolean
}

export const NavBtn: React.FC<any> = ({data, collapsed}) => {
    const {title, route} = data
    return (
        <NavLink to={route}
                 className={({isActive}) =>
                     collapsed
                         ? isActive ? s.selectedSmall : s.unSelectedSmall
                         : isActive ? s.selected : s.unSelected
                 }
        >
            <div className={s.NavBtnWrap}>
                <div className={s.iconWrap}>
                    <data.icon className={s.icon}/>
                </div>
                <span>
                    {title}
                </span>
            </div>
        </NavLink>
    );
}