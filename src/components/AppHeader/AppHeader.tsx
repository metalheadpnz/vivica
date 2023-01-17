import React from 'react';
import s from "./AppHeader.module.css"
import {ReactComponent as Logo} from "../../assets/images/vivica.svg"
import {ReactComponent as UserPic} from "../../assets/images/userPic.svg"
import {Bell} from "../Bell/Bell";
import {ReactComponent as BellIcon} from "../../assets/images/bell.svg";

export const AppHeader = () => {
    return (
        <div className={s.wrap}>
            <Logo className={s.logo}/>

            <div className={s.info}>
                <span className={s.headerName}>Organization Name</span>
                <span className={s.address}>3892 Feathers Hooves Drive</span>
                <UserPic className={s.userPic}/>
                <BellIcon/>
                {/*<Bell/>*/}
            </div>
        </div>
    );
};
