import React from 'react';
import {AppRoutes} from "../../routes/AppRoutes";
import s from './Main.content.module.css'

export const MainContent: React.FC<{ collapsed: boolean }> = ({collapsed}) => {
    return (
        // <div className={`${s.wrap} ${collapsed ? s.collapsed : s.unCollapsed}`}>
         <div className={s.wrap}>
            <AppRoutes/>
        </div>
    );
}
