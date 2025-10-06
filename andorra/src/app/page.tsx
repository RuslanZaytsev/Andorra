'use client'

import Select from "@/shared/components/Select/Select";

import styles from "./page.module.css";

export default function Home() {

    return (
        <div className={styles.page}>
            <Select renderBody/>
        </div>
    )
        ;
}
