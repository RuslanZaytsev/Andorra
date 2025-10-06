import {ReactNode} from "react";
import {createPortal} from 'react-dom';

import styles from './PortalModal.module.scss'

interface IPortalModal {
    children: ReactNode;
    classname?: React.CSSProperties;
}

export function PortalModal({children, classname}: IPortalModal
) {

    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        return null;
    }

    return createPortal(
        <div className={styles.modal} style={classname}>{children}</div>,
        modalRoot
    );
}