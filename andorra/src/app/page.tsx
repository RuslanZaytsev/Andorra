'use client'

import Select from "@/shared/components/Select/Select";

import styles from "./page.module.css";
import Switch from '../shared/components/Switch/Switch';


export default function Home() {

    return (
        <div className={styles.page}>
            <Select renderBody/>
            <Switch/>
        </div>
    )
        ;
}
