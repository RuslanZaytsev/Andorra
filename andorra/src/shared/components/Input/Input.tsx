'use client'

import styles from "./Input.module.scss";
import {EyeOpen} from "@/shared/Icons/EyeOpen";
import {useState} from "react";
import {EyeClose} from "@/shared/Icons/EyeClose";

interface IInputProps {
    type: "text" | "password" | "number";
    passDifficultylevel?: boolean;
    placeholder?: string;
}

export const Input = ({type, passDifficultylevel, placeholder}: IInputProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [inputType, setInputType] = useState<'text' | 'password'>()
    const [inputValue, setInputValue] = useState('')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setInputType(showPassword ? "password" : "text");
    };

    const handleCLear = () => {
        setInputValue('')
    }

    const coreInput = () => {
        return <input type={type} placeholder={placeholder} className={styles.input}/>
    }

    const renderInput = () => {
        if (type === 'text' || type === 'number') {
            return coreInput()
        }
        if (type === 'password') {
            return (
                <div>
                    <div className={styles.wrapper}>
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
                        <input type={inputType} value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                               placeholder={'введите пароль'}
                               className={styles.input}/>
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


// базовый инпут который возвращает импут по всем проброшенным в него просами
/* инпут должен быть один  а врендер фугнкции мы решаем что должго добвиться в него из функционала */

/* ядро должно содеражать в себе стили инпута */

/* должен быть основнрй импут который содержить в себе все возможные стили под варианты ипута, а вы фкнции ренедер мы вызыываем кор
* инпут в который отдаем пропы для отрисовки нужного нам варианта инпута, и если у него есть пропы например для пассворда то применяться
* стили пвсворда*/