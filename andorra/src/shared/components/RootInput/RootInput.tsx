import {TValue} from "@/shared/components/StateInput/types";
import classNames from "classnames";
import styles from './RootInput.module.scss'

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
    classname?: string;
    onKeyDownCapture?: any;
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
                              classname,
                              onKeyDownCapture,
                          }: IRootInputProps) => {

    const style = classNames(styles.input, classname)

    return (
        <div className={styles.input_container}>
            <input
                ref={ref}
                onKeyDown={keyDownHandler}
                type={type}
                value={choiseValue}
                onChange={onChange}
                placeholder={placeholder}
                className={style}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDownCapture={onKeyDownCapture}
            />
            {/*    {!choiseValue && (*/}
            {/*        <span className={styles.icon}>*/}
            {/*        <ArrowDown openDropDown={handleOpenDropdown}/>*/}
            {/*        </span>)}*/}

            {/*    {choiseValue && (*/}
            {/*        <span className={styles.icon}>*/}
            {/*    <Xcircle handleClear={handleClear}/>*/}
            {/*</span>*/}
            {/*    )}*/}

        </div>

    )
}