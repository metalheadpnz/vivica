import React, {useState} from 'react';
import s from './Select.module.scss'
import {ReactComponent as Arrow} from '../../assets/images/arrow.svg';

type PropsTypes = {
    title: string
    options: Array<{
        name: string
    }>
    onChange?: (option: string) => void
    error?: string | boolean
    width?: string
    require?: boolean
    name?: string
    onBlur?: () => void
}

export const Select: React.FC<PropsTypes> = (
    {
        title,
        options,
        onChange,
        error,
        width,
        require,
        onBlur
    }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const clickHandler = (e: React.BaseSyntheticEvent) => {
        const option = e.target.innerText
        setValue(option)
        onChange && onChange(option)
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
                <div className={error ? s.error : s.currentOption} onClick={() => setIsOpen(!isOpen)}>{value} <Arrow
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
