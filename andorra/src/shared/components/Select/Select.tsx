import React, {useState} from 'react';
import {Input} from "@/shared/components/Input/Input";
import {TValue} from "@/shared/components/StateInput/types";
import {mercedesOptions} from "@/shared/components/Select/options";
import styles from './Select.module.scss'

type TOption = {
    value: string;
    label: string
}

const Select = () => {
    const initial = ''
    const [state, setState] = useState<TValue>(initial);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleChange = (value: TValue
    ) => {
        setState(value)
    };

    const handleClear = () => {
        setState(initial)
    };

    //убрать иконку если данные пустые

    return (
        <div className={styles.root}>
            <Input
                onChange={handleChange}
                value={state}
                type={'text'}
                clear={handleClear}
                placeholder={'выберите значение'}
                onFocus={() => setIsOpen(true)}
                // onBlur={() => setIsOpen(false)}
            />
            {isOpen && (
                <div className={styles.dropDownWrapper}>
                    <ul className={styles.dropDownUl}>
                        {mercedesOptions.map((option: TOption) => (
                            <li key={option.value}>{option.label}</li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    )
        ;
}


export default Select;

