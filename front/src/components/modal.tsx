import { FC, ReactNode } from "react";
import styles from "../styles.module.css";

interface NewPostDialogProps {
    open?: boolean;
    children?: ReactNode;
}

const Modal: FC<NewPostDialogProps> = ({ open=false , children }) => {
    if (!open) return null;

    return (
        <dialog className={styles.modal} open={open}>
            {children}
        </dialog>
    );
};

export default Modal;