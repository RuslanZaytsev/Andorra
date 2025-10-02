import React, {useEffect, useRef, useState} from 'react';
import {Input} from "@/shared/components/Input/Input";
import {TValue} from "@/shared/components/StateInput/types";
import {carOptions} from "@/shared/components/Select/options";
import styles from './Select.module.scss'
import {TOption} from "@/shared/components/Select/types";
import Chip from "@/shared/components/Chip/Chip";


const Select = () => {
    const initial = ''
    const [state, setState] = useState<TValue>(initial);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<TOption[]>([]);
    const [dropDownSearch, setDropDownSearch] = useState<string>('')

    const selectRef = useRef<HTMLInputElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);

    const filteredoptions = carOptions.filter((option) => option.label.includes(dropDownSearch))

    const handleChange = (value: TValue
    ) => {
        setState(value)
    };

    const handleAddCustomOption = () => {
        if (state !== undefined && state !== null && state.toString().trim() !== '') {
            const trimmedValue = state.toString().trim();
            const value = typeof state === 'number' ? state : trimmedValue;
            const newOption = {value, label: trimmedValue};
            setSelectedOption(prev => [...prev, newOption]);
            setState('');
        }
    };

    const handleClear = () => {
        setSelectedOption([])
    };

    const handleSelectOption = (option: TOption) => {
        setSelectedOption((prev: TOption[]) => {
            const isSelected = prev.some((o: TOption) => o.value === option.value)
            if (isSelected) {
                return [...prev]
            } else {
            }
            return [...prev, option];
        })
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node) && dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleOpenDropdown = () => {
        setIsOpen(true)
    };

    const handleDeleteOption = (option: TOption) => {
        setSelectedOption(prev => prev.filter(o => o.value !== option.value));
    };

    const handleSearchOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDropDownSearch(e.target.value)
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.selectWrapper} onClick={() => selectRef.current?.focus()}>
                <div className={styles.chipWrapper}>
                    {selectedOption && selectedOption.map(option => (
                        <Chip
                            key={option.value}
                            label={option.label}
                            onDelete={() => {
                                handleDeleteOption(option)
                            }}
                        />
                    ))}
                </div>
                <Input
                    ref={selectRef}
                    onChange={handleChange}
                    value={state}
                    type={'text'}
                    clear={handleClear}
                    onFocus={handleOpenDropdown}
                    openDropdown={handleOpenDropdown}
                    classname={styles.input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddCustomOption();
                        }
                    }}
                />
            </div>

            {
                isOpen && (
                    <div className={styles.dropDownWrapper} ref={dropDownRef}>
                        <input placeholder={'поиск по опциям'} className={styles.dropDownSearch} type={'text'} value={dropDownSearch}
                               onChange={handleSearchOption}/>
                        <ul className={styles.dropDownUl}>
                            {filteredoptions.map((option: TOption) => (
                                <li onClick={() => {
                                    handleSelectOption(option);
                                    setDropDownSearch('')
                                }} key={option.value}>{option.label}</li>))}
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default Select;

