import React from 'react';
import styles from './Chip.module.scss'

interface IChip {
    label: string;
    onClick: () => void;
}

const Chip = ({label, onClick}: IChip) => {
    return (
        <div className={styles.root} onClick={onClick}>
            <div>{label}</div>
        </div>
    );
}

export default Chip;
