import React from 'react';
import s from "./AppHeader.module.css"
import {ReactComponent as Logo} from "../../assets/images/vivica.svg"
import {ReactComponent as UserPic} from "../../assets/images/userPic.svg"
import {Bell} from "../Bell/Bell";

export const AppHeader = () => {
    return (
        <div className={s.wrap}>
            <Logo/>
            <span className={s.headerName}>Organization Name</span>
            <span className={s.address}>3892 Feathers Hooves Drive</span>
            <UserPic/>
            <Bell count={10}/>
        </div>
    );
};