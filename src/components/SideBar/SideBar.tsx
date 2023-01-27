import React from 'react';
import s from './SideBar.module.css'
import {NavBtn} from "./NavBtn";
import {ReactComponent as Dashboard} from "../../assets/images/Dashboard.svg"
import {ReactComponent as Patients} from "../../assets/images/Patients.svg"
import {ReactComponent as Results} from "../../assets/images/Results.svg"
import {ReactComponent as Arrows} from "../../assets/images/Arrows2ways.svg"
import {ReactComponent as Orders} from "../../assets/images/Orders.svg"
import useLocalStorage from "../../hooks/useLocalStorage";

const sideMenu = [
    {title: 'Dashboard', icon: Dashboard, route: 'dashboard'},
    {title: 'Patients', icon: Patients, route: 'patients'},
    {title: 'Results', icon: Results, route: 'results'},
    {title: 'Orders', icon: Orders, route: 'orders'},
]


export const SideBar = () => {
    const [collapsed, setCollapsed] = useLocalStorage<boolean>('collapsedMenu', false)

    return (
        <div className={`${s.sidebarWrap} ${collapsed ? s.collapsed : s.unCollapsed}`}>
            {sideMenu.map(el => <NavBtn data={el} key={el.title} collapsed={collapsed}/>)}
            <div className={s.arrows} onClick={() => setCollapsed(!collapsed)}>
                {!collapsed && <span>Hide panel</span>}
                <Arrows/>
            </div>
        </div>
    )
}
