'use client'

import {Input} from "@/shared/components/Input/Input";
import styles from "./page.module.css";
import {useState} from "react";
import {TValue} from "@/shared/components/StateInput/types";
import Select from "@/shared/components/Select/Select";

export default function Home() {

    // const [state, setState] = useState<TValue>();
    // const defaultValue: TValue = '';
    //
    // const hadleStateInputChange = (value: TValue) => {
    //     setState(value)
    // }


    return (
        <div className={styles.page}>
            {/*<Input type={'text'} placeholder={'логин'}/>*/}
            {/*<Input type={'number'} placeholder={'логин'}/>*/}

            {/*<Input type={'password'} placeholder={'пароль'} value={state} passDifficultylevel={true} onChange={hadleStateInputChange}*/}
            {/*       defaultValue={defaultValue}/>*/}

            <Select/>
        </div>
    )
        ;
}
