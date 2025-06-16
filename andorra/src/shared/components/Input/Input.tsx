import {EyeOpen} from "@/shared/Icons/EyeOpen";
import styles from "./Input.module.scss";

interface IInputProps {
    type: "text" | "password" | "number";
    passDifficultylevel: boolean;
}

export const Input = ({type, passDifficultylevel}: IInputProps) => {

    const passwordInput = () => {
        return (
            <div className={styles.mainWrapper}>
                <div className={styles.inputWithIconFlexContainer}>
                    <section className={styles.input}>
                        <EyeOpen className={styles.icon}/>
                        <input type="password" className={styles.field}/>
                    </section>
                </div>
                <section className={styles.button}>
                    <button type="button">Сгенерировать пароль</button>
                    {passDifficultylevel && <p>{"СП"}</p>}
                </section>
            </div>
        );
    };

    const baseInput = (type: 'text' | 'number') => {
        return <input type={type} className={styles.inputText}/>;
    };

    const renderInput = () => {
        if (type === 'password') {
            return passwordInput();
        }
        if (type === 'text' || type === 'number') {
            return baseInput(type);
        }
    };

    return (
        <div className={styles.wrapper}>
            {renderInput()}
        </div>
    );
};
