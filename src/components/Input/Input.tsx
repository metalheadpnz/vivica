import React, {ReactNode, useState} from 'react';
import s from './Input.module.scss'

type PropsTypes = {
    placeholder: string
    IconStart?: ReactNode
    IconEnd?: ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<PropsTypes> = (
    {
        placeholder,
        IconStart,
        IconEnd,
        ...restProps
    }) => {

    const [focus, setFocus] = useState(false)

    return (
        <div className={s.outerWrap} style={restProps.style}>
            <div className={`${s.iconStart} ${focus?s.iconFocus: ''}`}>{IconStart && IconStart}</div>
            <div className={s.wrap}>

                <input className={s.formField}
                       placeholder={placeholder}
                       onFocus={() => setFocus(true)}
                       onBlur={() => setFocus(false)}
                       {...restProps}
                />

                <label className={`${s.formLabel} ${s.label}`}>
                    {placeholder}
                </label>
            </div>
            <div className={`${s.iconEnd} ${focus?s.iconFocus: ''}`}>{IconEnd && IconEnd}</div>
        </div>
    );
};
