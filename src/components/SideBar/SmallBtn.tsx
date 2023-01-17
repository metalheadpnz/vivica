import React from 'react';
import s from "./SideBar.module.css";

export const SmallBtn = (props: any) => {
    return (
        <div className={s.smallBtn}>
            <props.icon className={s.whiteIcon}/>
        </div>
    );
}