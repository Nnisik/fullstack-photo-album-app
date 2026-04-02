import { FC } from "react";
import styles from "../styles/styles.module.css";
import {DialogProps} from "../pages/DialogProps.ts";

const Modal: FC<DialogProps> = ({ open=false , children }) => {
    if (!open) return null;

    return (
        <dialog className={styles.modal} open={open}>
            {children}
        </dialog>
    );
};

export default Modal;