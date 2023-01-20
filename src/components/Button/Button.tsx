import React from 'react';
import s from './Button.module.scss'


type PropsType = {
    title?: any
    callback?: () => void
    style?: any
    frontImg?: any
    rearImg?: any
}

export const Button = ({title, callback, style, frontImg, rearImg}: PropsType) => {
    return (
        <button className={s.button}
                onClick={callback}
                style={{...style}}>
            <span>{frontImg}</span>
            <span>{title}</span>
            <span>{rearImg}</span>
        </button>
    );
}