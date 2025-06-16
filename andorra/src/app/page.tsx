import {Input} from "@/shared/components/Input/Input";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Input type={"password"} passDifficultylevel={true}/>
                <Input type={"password"} passDifficultylevel={false}/>
                <Input type={"text"} passDifficultylevel={true}/>
                <Input type={"number"} passDifficultylevel={true}/>
            </main>
        </div>
    );
}
//