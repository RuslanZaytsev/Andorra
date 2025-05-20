import styles from "./CustomInput.module.scss";

interface ICustomInputProps {
  type: "text" | "password" | "number";
}

export const CustomInput = ({ type }: ICustomInputProps) => {
  return (
    <div className={styles.wrapper}>
      <input type={type} className={styles.input} />
    </div>
  );
};
