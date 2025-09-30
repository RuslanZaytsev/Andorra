import React, {useEffect, useRef, useState} from 'react';
import {Input} from "@/shared/components/Input/Input";
import {TValue} from "@/shared/components/StateInput/types";
import {mercedesOptions} from "@/shared/components/Select/options";
import styles from './Select.module.scss'
import {TOption} from "@/shared/components/Select/types";
import Chip from "@/shared/components/Chip/Chip";


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
        setSelectedOption(value)
    };

    const handleClear = () => {
        setSelectedOption([])
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

    // const selectedOptionLabelString = selectedOption.map(option => option.label).join(', ')

    const handleOpenDropdown = () => {
        setIsOpen(true)
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // сделать компонент чипс для выбранного элепента и опции отдавать как чипсы
    // посмотретт что такое джейсон вебтокен, и разобратся что такое токен вебтокен и тд

    //мультиселект с чипами это единый блок с чипами и инрпутом в котьром рисуемся оба компонента сразу
    // компонент инпут как бы оборачивает чипы и создается видимссть что они внутри него
    // объединить и получить чипсы внутри инпута, добавить в чипс удаление чипса

    return (
        <div className={styles.root}>
            <div className={styles.selectWrapper}>
                <div className={styles.chipWrapper}>
                    {selectedOption && selectedOption.map(option => (
                        <Chip
                            key={option.value}
                            label={option.label}
                            onClick={() => handleSelectOption(option)}
                        />
                    ))}
                </div>
                <Input
                    ref={selectRef}
                    onChange={handleChange}
                    value={''}
                    type={'text'}
                    clear={handleClear}
                    placeholder={'выберите значение'}
                    onFocus={handleOpenDropdown}
                    openDropdown={handleOpenDropdown}
                    classname={styles.coreInputGrow}
                />
            </div>

            {isOpen && (
                <div className={styles.dropDownWrapper} ref={dropDownRef}>
                    <ul className={styles.dropDownUl}>
                        {mercedesOptions.map((option: TOption) => (
                            <Chip onClick={() => handleSelectOption(option)} key={option.value} label={option.label}/>
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

