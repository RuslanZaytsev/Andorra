
import {TValue} from "@/shared/components/StateInput/types";
import styles from './RootInput.module.scss'
import {DeleteSvg} from "@/shared/Icons/delete";

interface IInputProps {
    type?: "text" | "password" | "number";
    passDifficultylevel?: boolean;
    placeholder?: string;
    value?: TValue;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: TValue;
    keyDownHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    choiseValue: TValue;
    handleClear?: () => void;
}

export const RootInput = ({keyDownHandler, type, choiseValue, onChange, placeholder, handleClear}: IInputProps) => {
    return (
        <div className={styles.input_container}>
            <input
                onKeyDown={keyDownHandler}
                type={type}
                value={choiseValue}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
            />
            <span className={styles.icon}>
                <DeleteSvg handleClear={handleClear}/>
            </span>
        </div>

    )
}