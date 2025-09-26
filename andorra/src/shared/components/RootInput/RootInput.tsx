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
    onFocus?: () => void;
    onBlur?: () => void;
}

export const RootInput = ({keyDownHandler, type, choiseValue, onChange, placeholder, handleClear, onFocus, onBlur, value}: IInputProps) => {
    const renderDelete = choiseValue;

    return (
        <div className={styles.input_container}>
            <input
                onKeyDown={keyDownHandler}
                type={type}
                value={choiseValue}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {renderDelete && (
                <span className={styles.icon}>
                <DeleteSvg handleClear={handleClear}/>
            </span>
            )}

        </div>

    )
}