import React, {ReactNode} from 'react';
import s from './Input2.module.scss'

type PropsType = {
    label?: string
    isError?: boolean
    errorMessage?: string
    isRequire?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input2 = ({label, required, isError,errorMessage, ...restProps}: PropsType) => {
    const width = restProps.style?.width || '464px'
    return (
        <div className={`${s.wrap} ${isError ? s.error : ''}`} style={{width}}>
            <label className={s.label}>
                {label}{required && <span>*</span>}
            </label>
            <input {...restProps}/>
            {isError && <label className={s.errorText}>{errorMessage}</label>}
        </div>
    );
}