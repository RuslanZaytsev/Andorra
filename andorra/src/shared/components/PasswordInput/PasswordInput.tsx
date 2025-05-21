import { EyeOpen } from "@/shared/Icons/EyeOpen";
import styles from "./PasswordInput.module.scss";

interface IPasswordInputProps {
  type: "text" | "password" | "number";
  passDifficultylevel: boolean;
}

export const PasswordInput = ({
  type,
  passDifficultylevel,
}: IPasswordInputProps) => {
  const isTypePassword = type === "password";

  return (
    <div className={styles.mainWrapper}>
      {!isTypePassword && (
        <input type={type} className={styles.withoutTypePassword} />
      )}

      {isTypePassword && (
        <>
          <div className={styles.inputWithIconFlexContainer}>
            <section className={styles.input}>
              <EyeOpen className={styles.icon} />
              <input type={type} className={styles.field} />
            </section>
          </div>
          <section className={styles.button}>
            <button type="button">сгенерировать пароль</button>
            {passDifficultylevel && <p>{"СП"}</p>}
          </section>
        </>
      )}
    </div>
  );
};

// для брата вадика - думал создать отдельный компонент инпут пассворд и отдать туда все что с 20
// строки но не стал, подумал что не время разносить и рефачить, надо базу усваивать и дальше
// уже все эти жонглирвания
