import {TValue} from "@/shared/components/StateInput/types";
import styles from './RootInput.module.scss'
import Xcircle from "@/shared/Icons/XCircle";
import ArrowDown from "@/shared/Icons/ArrowDown";

interface IRootInputProps {
    type?: "text" | "password" | "number";
    passDifficultylevel?: boolean;
    placeholder?: string;
    value?: TValue;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: TValue;
    keyDownHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    choiseValue: TValue | [];
    handleClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    ref: React.Ref<HTMLInputElement>
    handleOpenDropdown?: () => void;
}

export const RootInput = ({
                              keyDownHandler,
                              type,
                              choiseValue,
                              onChange,
                              placeholder,
                              handleClear,
                              onFocus,
                              onBlur,
                              ref,
                              handleOpenDropdown,
                          }: IRootInputProps) => {

    return (
        <div className={styles.input_container}>
            <input
                ref={ref}
                onKeyDown={keyDownHandler}
                type={type}
                value={choiseValue}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {!choiseValue && (
                <span className={styles.icon}>
                <ArrowDown openDropDown={handleOpenDropdown}/>
                </span>)}

            {choiseValue && (
                <span className={styles.icon}>
            <Xcircle handleClear={handleClear}/>
        </span>
            )}

        </div>

    )
}