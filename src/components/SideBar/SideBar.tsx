import React, {useEffect, useLayoutEffect, useState} from 'react';
import s from './SideBar.module.css'
import {NavBtn} from "./NavBtn";
import {ReactComponent as Dashboard} from "../../assets/images/Dashboard.svg"
import {ReactComponent as Patients} from "../../assets/images/Patients.svg"
import {ReactComponent as Results} from "../../assets/images/Results.svg"
import {useLocation} from "react-router-dom";

const sideMenu = [
    {title: 'Dashboard', icon: Dashboard, route: 'dashboard'},
    {title: 'Patients', icon: Patients, route: 'patients'},
    {title: 'Results', icon: Results, route: 'results'},
]

const getIndex = (pathname: string) => sideMenu.findIndex(el => pathname.includes(el.route))

export const SideBar = () => {
    console.log('render')
    let {pathname} = useLocation();

    const [selectedIndex, setSelectedIndex] = useState<number>(getIndex(pathname))

    // useEffect(() => {
    //     console.log('effect')
    //     setSelectedIndex(getIndex(pathname))
    // }, [pathname])

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