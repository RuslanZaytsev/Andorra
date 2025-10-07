import React, {useState} from 'react';

import {stylesUtils} from "@/shared/components/Switch/utils";

import styles from './Switch.module.scss'

/**
 * @component
 * @example
 * // Basic usage without props
 * <Switch />
 */


const Switch = () => {

    const [isOn, setIsOn] = useState<boolean>(false);

    const handleChange = () => {
        setIsOn(!isOn);
    };

    const trackStyles = stylesUtils(isOn, styles.track, styles.activeTrack)
    const buttonStyles = stylesUtils(isOn, styles.button, styles.activeButton)

    return (
        <div onClick={handleChange} className={styles.switchWrapper}>
            <div className={trackStyles}>
                <div className={buttonStyles}></div>
            </div>
        </div>
    );
}

Switch.displayName = 'Switch';

export default Switch;