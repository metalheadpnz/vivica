import React, {useState} from 'react';
import s from './Select.module.scss'
import {ReactComponent as Arrow} from '../../assets/images/arrow.svg';

type PropsTypes = {
    title: string
    options: Array<{
        name: string
    }>
    callBack?: (option: string) => void
}

export const Select: React.FC<PropsTypes> = ({title, options, callBack}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>(options[0].name)

    const clickHandler = (e: React.BaseSyntheticEvent) => {
        const option = e.target.innerText
        setValue(option)
        callBack && callBack(option)
        setIsOpen(false)
    }

    return (
        <div className={s.wrap}>
            <div className={s.title}>{title}</div>
            <div className={s.currentOption} onClick={() => setIsOpen(!isOpen)}>{value} <Arrow
                className={`${s.arrow} ${isOpen ? s.reversed : ''}`}/></div>
            {isOpen && <div className={s.optionsContainer}>
                {options.map(options => <div key={options.name}
                                             className={s.option}
                                             onClick={clickHandler}>
                    {options.name}
                </div>)}
            </div>}

        </div>
    );
}
