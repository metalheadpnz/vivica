import React, {useState} from 'react';
import s from './SideBar.module.css'
import {NavBtn} from "./NavBtn";
import {ReactComponent as Dashboard} from "../../assets/images/Dashboard.svg"
import {ReactComponent as Patients} from "../../assets/images/Patients.svg"
import {ReactComponent as Results} from "../../assets/images/Results.svg"
import {ReactComponent as Arrows} from "../../assets/images/Arrows2ways.svg"
import {ReactComponent as SampleReception} from "../../assets/images/sampleReception.svg"
import {ReactComponent as Archive} from "../../assets/images/Archive.svg"
import {SmallBtn} from "./SmallBtn";

const sideMenu = [
    {title: 'Dashboard', icon: Dashboard, route: 'dashboard'},
    {title: 'Patients', icon: Patients, route: 'patients'},
    {title: 'Results', icon: Results, route: 'results'},
]


export const SideBar: React.FC<any> = ({collapsed, setCollapsed}) => {
    return (
        <>
            <div className={`${s.wrap} ${collapsed ? s.collapsed : s.unCollapsed}`}>

                {sideMenu.map(el => <NavBtn data={el} key={el.title}/>)}
                <div className={s.arrows} onClick={() => setCollapsed(true)}>Hide panel<Arrows/></div>
            </div>
            <div className={`${s.smallWrap} ${collapsed ? s.unCollapsed : s.collapsed}`}>
                {sideMenu.map(el => <SmallBtn data={el} key={el.title}/>)}
                <div className={s.smallPanelArrows} onClick={() => setCollapsed(false)}><Arrows/></div>
            </div>

        </>
    )
}
