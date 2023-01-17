import React from 'react';
import s from './TextInput.module.css'

type PropsTypes = { placeholder: string } & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<PropsTypes> = ({placeholder, ...restProps}) => {

    return (
        <div className={s.wrap}>
            <input className={s.formField}
                   {...restProps}
            />
            <label className={s.formLabel}>
                {placeholder}
            </label>
        </div>
    );
};
