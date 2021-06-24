import styles from './Button.module.css';

const Button = (props) => {

    const {type, className, children, onClick} = props;

    return (
        <button
            type={type}
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;