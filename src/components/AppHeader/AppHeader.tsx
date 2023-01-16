import React from 'react';
import s from "./AppHeader.module.css"
import {ReactComponent as Logo} from "../../assets/images/vivica.svg"

export const AppHeader = () => {
    return (
        <div className={s.wrap}>
            <Logo/>
        </div>
    );
};