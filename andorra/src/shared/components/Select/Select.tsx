import React, {useEffect, useRef, useState} from 'react';
import {Input} from "@/shared/components/Input/Input";
import {TValue} from "@/shared/components/StateInput/types";
import {carOptions} from "@/shared/components/Select/Model/options";
import styles from './Select.module.scss'
import {TOption} from "@/shared/components/Select/Model/types";
import Chip from "@/shared/components/Chip/Chip";
import {DropDown} from "@/shared/components/Select/Ui/DropDown/DropDown";
import {PortalModal} from "@/shared/PortalModal/PortalModal";

interface ISelect {
    renderBody?: boolean;
}

const Select = ({renderBody = false}: ISelect) => {
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

    const renderDropdown = () => {
        return (
            <DropDown filteredoptions={filteredoptions} dropDownRef={dropDownRef} dropDownSearch={dropDownSearch}
                      handleSearchOption={handleSearchOption} handleSelectOption={handleSelectOption}
                      setDropDownSearch={setDropDownSearch}/>
        )
    }

    const handleKeyDown = ((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddCustomOption();
        }
    });

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
                    onKeyDown={handleKeyDown}
                />
            </div>

            {
                isOpen && (
                    renderBody ? (<PortalModal>
                        {renderDropdown()}
                    </PortalModal>) : <DropDown filteredoptions={filteredoptions} dropDownRef={dropDownRef} dropDownSearch={dropDownSearch}
                                                handleSearchOption={handleSearchOption} handleSelectOption={handleSelectOption}
                                                setDropDownSearch={setDropDownSearch}/>

                )
            }
        </div>
    );
}

export default Select;

