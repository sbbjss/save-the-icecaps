import styles from './Input.module.css';

const Input = (props) => {

    const {id, type, value, onChange, children, className} = props;

    return (
        <div className={`${styles.input} ${className}`}>
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    )
}

export default Input;