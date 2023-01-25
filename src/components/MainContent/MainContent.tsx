import React from 'react';
import {AppRoutes} from "../../routes/AppRoutes";
import s from './Main.content.module.css'

export const MainContent = () => {
    return (
         <div className={s.wrap}>
            <AppRoutes/>
        </div>
    );
}
