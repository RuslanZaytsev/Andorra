import React, {useEffect, useRef, useState} from 'react';
import {Input} from "@/shared/components/Input/Input";
import {TValue} from "@/shared/components/StateInput/types";
import {mercedesOptions} from "@/shared/components/Select/options";
import styles from './Select.module.scss'
import {TOption} from "@/shared/components/Select/types";


const Select = () => {
    const initial = ''
    const [state, setState] = useState<TValue>(initial);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<TOption[]>([]);

    const selectRef = useRef<HTMLInputElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);


    const handleChange = (value: TValue
    ) => {
        setState(value)
    };

    const handleClear = () => {
        setState(initial)
    };

    const handleSelectOption = (option: TOption) => {
        setSelectedOption((prev: any) => {
            const isSelected = prev.some((o: TOption) => o.value === option.value)
            if (isSelected) {
                return prev.filter((o: TOption) => o.value !== option.value)
            } else {
                return [...prev, option];
            }
        })
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node) && dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const selectedOptionLabelString = selectedOption.map(option => option.label).join(', ')

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.root}>
            <Input
                ref={selectRef}
                onChange={handleChange}
                value={selectedOptionLabelString}
                type={'text'}
                clear={handleClear}
                placeholder={'выберите значение'}
                onFocus={() => setIsOpen(true)}
            />
            {isOpen && (
                <div className={styles.dropDownWrapper} ref={dropDownRef}>
                    <ul className={styles.dropDownUl}>
                        {mercedesOptions.map((option: TOption) => (
                            <li onClick={() => handleSelectOption(option)} key={option.value}>{option.label}</li>
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

