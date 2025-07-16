'use client'

import {Input} from "@/shared/components/Input/Input";
import styles from "./page.module.css";
import {StateInput} from "@/shared/components/StateInput/StateInput";
import {useState} from "react";
import {TValue} from "@/shared/components/StateInput/types";

export default function Home() {

    const [state, setState] = useState<TValue>();

    const hadleStateInputChange = (value: TValue) => {
        setState(value)
    }

    return (
        <div className={styles.page}>
            <Input type={'text'} placeholder={'текстовый инпут'}/>
            <Input type={'number'} placeholder={'введите число'}/>
            <Input type={'password'} passDifficultylevel={true}/>
            <StateInput value={state!} label={"input"} placeholder={'плейсхолдер'} type={'text'} error={'error'} disabled={false}
                        onChange={hadleStateInputChange}/>
        </div>
    )
        ;
}
