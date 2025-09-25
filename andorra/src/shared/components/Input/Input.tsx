'use client'

import styles from "./Input.module.scss";
import {EyeOpen} from "@/shared/Icons/EyeOpen";
import {useState} from "react";
import {EyeClose} from "@/shared/Icons/EyeClose";
import {TValue} from "@/shared/components/StateInput/types";
import {RootInput} from "@/shared/components/RootInput/RootInput";
import {formatNumberValue} from "@/shared/utils/utils";

interface IInputProps {
    type: "text" | "password" | "number";
    passDifficultylevel?: boolean;
    placeholder?: string;
    value?: TValue;
    onChange?: (value: TValue) => void;
    defaultValue?: TValue;
}

export const Input = ({type, passDifficultylevel, value, onChange, defaultValue = '' as TValue}: IInputProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [internalValue, setInternalValue] = useState<TValue>(defaultValue)
    const [inputType, setInputType] = useState<'text' | 'password' | "number">()
    const isControlled = value !== undefined;
    const choiseValue = isControlled ? value : internalValue;

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
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

    const handleKeyDownNumber = (event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        const allowedKeys = [
            "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab",
            "Enter", "Home", "End", "Minus", "NumpadSubtract", "Period", "NumpadDecimal"
        ];
        if (
            !((event.key >= "0" && event.key <= "9") || allowedKeys.includes(event.key) || '.' || ',')
        ) {
            event.preventDefault();
        }
        if (event.key.toLowerCase() === 'e') {
            event.preventDefault();
        }
        if (event.key === "Tab") {
            const value = event.currentTarget.value;

            if (!value) {
                return
            }
            const formattedValue = formatNumberValue(value);

            if (!isControlled) {
                setInternalValue(formattedValue as TValue);
            }
            onChange?.(value as TValue);
        }
    }

    const renderInput = () => {

        if (type === 'number') {
            return <
                RootInput type={type} choiseValue={choiseValue} onChange={handleChange}
                          keyDownHandler={handleKeyDownNumber}
                          handleClear={handleCLear}
            />;
        }

        if (type === 'text') {
            return <RootInput type={type} choiseValue={choiseValue} onChange={handleChange}/>;
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
                        <RootInput type={inputType} choiseValue={choiseValue} onChange={handleChange}/>
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

