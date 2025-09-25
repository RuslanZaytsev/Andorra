import React, {useState} from 'react';
import {Input} from "@/shared/components/Input/Input";

const Select = () => {

    const mercedesOptions = [
        {value: "mercedes-a-class", label: "Mercedes A-Class"},
        {value: "mercedes-c-class", label: "Mercedes C-Class"},
        {value: "mercedes-e-class", label: "Mercedes E-Class"},
        {value: "mercedes-s-class", label: "Mercedes S-Class"},
        {value: "mercedes-glc", label: "Mercedes GLC"},
        {value: "mercedes-gle", label: "Mercedes GLE"},
        {value: "mercedes-gls", label: "Mercedes GLS"},
        {value: "mercedes-g-class", label: "Mercedes G-Class"},
    ];
    const [state, setState] = useState<string>(mercedesOptions[0].value);
    // const [isOpen, setIsOpen] = useState<boolean>(false);


    const handleChange = (event: any
    ) => {
        setState(event.target.value)
    };

    const handleClear = () => {
        setState('')
    };

    return (
        <div>
            <Input
                onChange={handleChange}
                value={state}
                type={'text'}
                clear={handleClear}
                placeholder={'выберите значение'}
            />
        </div>
    );
}

export default Select;


/* при отчистке инпута и попытке ввода нового значения компонент падает с ошибкой, что то с валуе */

