'use client'

import {Input} from "@/shared/components/Input/Input";
import styles from "./page.module.css";
import {useState} from "react";
import {TValue} from "@/shared/components/StateInput/types";

export default function Home() {

    const [state, setState] = useState<TValue>();
    const defaultValue: TValue = '';

    const hadleStateInputChange = (value: TValue) => {
        setState(value)
    }

    return (
        <div className={styles.page}>
            <Input type={'text'} placeholder={'текстовый инпут'}/>
            <Input type={'number'} placeholder={'введите число'}/>
            <Input type={'password'} value={state} passDifficultylevel={true} onChange={hadleStateInputChange} defaultValue={defaultValue}/>
        </div>
    )
        ;
}
