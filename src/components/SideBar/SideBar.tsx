import React, {useState} from 'react';
import s from './SideBar.module.css'
import {NavBtn} from "./NavBtn";
import {ReactComponent as Dashboard} from "../../assets/images/Dashboard.svg"
import {ReactComponent as Patients} from "../../assets/images/Patients.svg"
import {ReactComponent as Results} from "../../assets/images/Results.svg"
import {ReactComponent as Arrows} from "../../assets/images/Arrows2ways.svg"
import {SmallBtn} from "./SmallBtn";

const sideMenu = [
    {title: 'Dashboard', icon: Dashboard, route: 'dashboard'},
    {title: 'Patients', icon: Patients, route: 'patients'},
    {title: 'Results', icon: Results, route: 'results'},
]

type PropsType = {
    collapsed: boolean
    setCollapsed: (arg: boolean) => void
}

export const SideBar: React.FC<PropsType> = ({collapsed, setCollapsed}) => {
    const collapsedMenu = (state: boolean) => {
        setCollapsed(state)
        localStorage.setItem('collapsedMenu', JSON.stringify(state))
    }
    return (
        <div className={`${s.sidebarWrap} ${collapsed ? s.collapsed : s.unCollapsed}`}>
            {sideMenu.map(el => <NavBtn data={el} key={el.title} collapsed={collapsed}/>)}
            <div className={s.arrows} onClick={() => collapsedMenu(!collapsed)}>
                {!collapsed && <span>Hide panel</span>}
                <Arrows/>
            </div>
        </div>
    )
}
