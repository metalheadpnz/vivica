import React, {useState} from 'react';
import s from './SideBar.module.css'
import {NavBtn} from "./NavBtn";
import {ReactComponent as Dashboard} from "../../assets/images/Dashboard.svg"
import {ReactComponent as Patients} from "../../assets/images/Patients.svg"
import {ReactComponent as Results} from "../../assets/images/Results.svg"

const sideMenu = [
    {title: 'Dashboard', icon: Dashboard, route: 'dashboard'},
    {title: 'Patients', icon: Patients, route: 'patients'},
    {title: 'Results', icon: Results, route: 'results'},
]

export const SideBar = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const onBtnClickHandler = (index: number) => {
        setSelectedIndex(index)
    }
    return (
        <div className={s.wrap}>
            {sideMenu.map((el, index) =>
                <NavBtn data={el}
                        selected={index === selectedIndex}
                        index={index}
                        onClick={onBtnClickHandler}
                        key={el.title}/>)
            }
        </div>
    );
};