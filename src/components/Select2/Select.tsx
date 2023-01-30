import React, {useState} from 'react';
import s from './Select.module.scss'
import {ReactComponent as Arrow} from '../../assets/images/arrow.svg';

type PropsTypes = {
    title: string
    options: Array<{
        name: string
    }>
    error?: string | boolean
    width?: string
    require?: boolean
    name?: string
    onBlur?: () => void
    defaultOption?: string
    placeholder?: string
    callBack?: any
    value: string
    onChange: (e: React.BaseSyntheticEvent) => void
}

export const Select2: React.FC<PropsTypes> = (
    {
        title,
        options,
        onChange,
        value,
        error,
        width,
        require,
        onBlur,
        placeholder,

    }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const clickHandler = (e: React.BaseSyntheticEvent) => {
        onChange && onChange(e)
        setIsOpen(false)
    }

    return (
        <>
            {isOpen && <div className={s.outside} onClick={() => {
                setIsOpen(false)
                onBlur && onBlur()
            }}>
            </div>}

            <div className={s.wrap} style={{width}}>

                <div className={s.title}>{title}{require && <span>*</span>}</div>
                <div className={error ? s.error : s.currentOption}
                     onClick={() => setIsOpen(!isOpen)}>{value || placeholder} <Arrow
                    className={`${s.arrow} ${isOpen ? s.reversed : ''}`}/></div>
                {isOpen && <div className={s.optionsContainer}>
                    {options.map(options => <div key={options.name}
                                                 className={s.option}
                                                 onClick={clickHandler}>
                        {options.name}
                    </div>)}
                </div>}
                {error && <label className={s.errorText}>{error}</label>}
            </div>

        </>
    );
}
