import { CustomInput } from "@/shared/components/CustomInput/CustomInput";
import { PasswordInput } from "@/shared/components/PasswordInput/PasswordInput";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PasswordInput type="password" passDifficultylevel={true} />
      </main>
      <section>
        <CustomInput type="text" />
      </section>
    </div>
  );
}
