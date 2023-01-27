import React, {ReactNode} from 'react';
import s from './Input2.module.scss'

type PropsType = {
    label?: string
    require?: boolean
    error?: string | boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
    height?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input2 = ({label, require, error, style, ...restProps}: PropsType) => {

    return (
        <div className={`${s.wrap} ${error ? s.error : ''}`} style={{...style}}>
            <label className={s.label}>
                {label}{require && <span>*</span>}
            </label>
            <input {...restProps}/>
            {error && <label className={s.errorText}>{error}</label>}
        </div>
    );
}