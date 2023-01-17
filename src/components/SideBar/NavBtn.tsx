import React from 'react';
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";

type PropsTypes = {
    title: string,
    icon: any,
    selected?: boolean
}

export const NavBtn: React.FC<any> = ({data, onClick, selected, index}) => {
    const {title, route} = data
    return (
        <NavLink to={route}
                 className={({ isActive }) =>
                     isActive ? s.selected : undefined
                 }
                 >
            {/*<div onClick={() => onClick(index)} className={`${s.NavBtnWrap} ${selected ? s.selected : ''}`}>*/}
            <div onClick={() => onClick(index)} className={`${s.NavBtnWrap}`}>
                <div className={s.NavBtn}>
                    <data.icon className={`${s.icon}`}/>
                    <span>{title}</span>
                </div>
            </div>
        </NavLink>
    );
}