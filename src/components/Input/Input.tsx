import React from 'react';
import s from './Input.module.css'

type PropsTypes = { placeholder: string } & React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<PropsTypes> = (
    {
        placeholder,
        ...restProps
    }) => {

    return (
        <div className={s.wrap}>
            <input className={s.formField}
                   placeholder={placeholder}
                   {...restProps}
            />
            <label className={s.formLabel}>
                {placeholder}
            </label>
        </div>
    );
};
