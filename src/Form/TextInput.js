import styles from './TextInput.module.css';

const TextInput = (props) => {

    const {id, type, min, value, onChange, children, className} = props;

    return (
        <div className={`${styles.input} ${className}`}>
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                type={type}
                min={min}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    );
};

export default TextInput;