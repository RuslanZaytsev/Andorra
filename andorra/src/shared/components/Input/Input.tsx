'use client'

import styles from "./Input.module.scss";
import {EyeOpen} from "@/shared/Icons/EyeOpen";
import {useState} from "react";
import {EyeClose} from "@/shared/Icons/EyeClose";
import {TValue} from "@/shared/components/StateInput/types";


interface IInputProps {
    type: "text" | "password" | "number";
    passDifficultylevel?: boolean;
    placeholder?: string;
    value?: TValue;
    onChange?: (value: TValue) => void;
    defaultValue?: TValue;
}

export const Input = ({type, passDifficultylevel, placeholder, value, onChange, defaultValue = '' as TValue}: IInputProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [inputType, setInputType] = useState<'text' | 'password'>()
    const [internalValue, setInternalValue] = useState<TValue>(defaultValue)

    const isControlled = value !== undefined;
    const choiseValue = isControlled ? value : internalValue;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setInputType(showPassword ? "password" : "text");
    };

    const handleCLear = (): void => {
        const emptyValue = '' as TValue;
        if (isControlled) {
            onChange?.(emptyValue);
        } else
            setInternalValue(defaultValue)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value
        if (!isControlled) {
            setInternalValue(newValue)
        }
        onChange?.(newValue)
    }

    const coreInput = (
        <input type={inputType} value={choiseValue} onChange={handleChange} placeholder={placeholder} className={styles.input}/>)
    // root input


    const renderInput = () => {
        if (type === 'text' || type === 'number') {
            return coreInput
        }
        if (type === 'password') {
            return (
                <div className={styles.wrapper}>
                    <div className={styles.input_wrapper}>
                        {showPassword ? (
                            <EyeClose
                                className={styles.icon}
                                onClick={togglePasswordVisibility}
                            />
                        ) : (
                            <EyeOpen
                                className={styles.icon}
                                onClick={togglePasswordVisibility}
                            />
                        )}
                        {coreInput}
                    </div>
                    <div className={styles.button}>
                        <button type="button">cгенерировать пароль</button>
                        <button type="button" onClick={handleCLear}>очистить инпут</button>
                        {passDifficultylevel && <p>{"сложность пароля"}</p>}
                    </div>
                </div>
            )
        }
    }

    return renderInput();
}

