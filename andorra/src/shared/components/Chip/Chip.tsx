import React from 'react';
import styles from './Chip.module.scss'
import Xcircle from "@/shared/Icons/XCircle";

interface IChip {
    label: string;
    onDelete: () => void;
}

const Chip = ({label, onDelete}: IChip) => {
    return (
        <div className={styles.root}>
            <div className={styles.label}>{label}</div>
            <span className={styles.icon}>
                <Xcircle handleClear={onDelete}/>
                </span>
        </div>
    );
}

export default Chip;
