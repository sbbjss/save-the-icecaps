import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css';

const Modal = props => {

    const {onEventHandle, title, message} = props;

    return (
        <div>
            <div className={styles.backdrop} onClick={onEventHandle}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onEventHandle}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default Modal;