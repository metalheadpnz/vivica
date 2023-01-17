import React, {ChangeEvent} from 'react';
import s from './TextInput.module.css'

type PropsTypes = {
    placeholder?: string
    inputValue: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeText: (text: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<PropsTypes> = (
    {
        placeholder,
        inputValue,
        onChange,
        onChangeText
    }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    return (
        <div className={s.wrap}>
            <input type="text"
                   className={s.formField}
                   placeholder={placeholder}
                   value={inputValue}
                   onChange={onChangeHandler}/>
            <label className={s.formLabel}>
                {placeholder}
            </label>
        </div>
    );
};
