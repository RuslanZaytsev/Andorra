import {Input} from "@/shared/components/Input/Input";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Input type={'text'} placeholder={'текстовый инпут'}/>
            <Input type={'number'} placeholder={'введите число'}/>
            <Input type={'password'} passDifficultylevel={true}/>
        </div>
    )
        ;
}
//