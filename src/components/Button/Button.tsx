import React from 'react';
import s from './Button.module.scss'


type PropsType = {
    title?: any
    style?: any
    frontImg?: any
    rearImg?: any
    color?: 'primary' | 'secondary'
    variant?: 'solid' | 'outlined'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, style, frontImg, rearImg, color, variant, ...restProps}: PropsType) => {
    return (
        <button className={`${s.button} ${color && s[color]} ${variant && s[variant]} ${title ? '' : s.small}`}
                style={{...style}}
                {...restProps}>

            {frontImg}
            {title}
            {rearImg}

        </button>
    );
}