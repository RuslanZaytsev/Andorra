import {createPortal} from 'react-dom';
import {ReactNode} from "react";
import styles from './PortalModal.module.scss'

interface IPortalModal {
    children: ReactNode;
}

export function PortalModal({children}: IPortalModal
) {

    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        return null;
    }

    return createPortal(
        <div className={styles.modal}>{children}</div>,
        modalRoot
    );
}