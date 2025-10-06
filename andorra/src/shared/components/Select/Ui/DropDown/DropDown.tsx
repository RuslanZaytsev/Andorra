import React, {ChangeEvent} from "react";

import {TOption} from "@/shared/components/Select/Model/types";

import styles from "./DropDown.module.scss";

interface IDropDown {
    dropDownRef: React.Ref<HTMLDivElement>
    dropDownSearch: string;
    handleSearchOption: (e: ChangeEvent<HTMLInputElement>
    ) => void;
    filteredoptions: { value: string, label: string }[];
    handleSelectOption: (option: TOption) => void;
    setDropDownSearch: (value: React.SetStateAction<string>) => void;
}


export const DropDown = ({
                             dropDownRef,
                             dropDownSearch,
                             handleSearchOption,
                             filteredoptions,
                             handleSelectOption,
                             setDropDownSearch,
                         }: IDropDown) => {


    const handleClick = (option: TOption) => {
        handleSelectOption(option);
        setDropDownSearch('')
    };

    return (
        <div className={styles.dropDownWrapper} ref={dropDownRef}>
            <input placeholder={'поиск по опциям'} className={styles.dropDownSearch} type={'text'} value={dropDownSearch}
                   onChange={handleSearchOption}/>
            <ul className={styles.dropDownUl}>
                {filteredoptions.map((option: TOption) => (
                    <li onClick={() => handleClick(option)} key={option.value}>{option.label}</li>))}
            </ul>
        </div>
    )
}