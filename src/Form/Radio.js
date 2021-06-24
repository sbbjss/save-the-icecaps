const Radio = (props) => {

    const {value, id, name, defaultChecked, children, className, onSelect} = props;

    return (
        <div className={className}>
            <input
                type="radio"
                value={value}
                id={id}
                name={name}
                onClick={() => onSelect(value)}
                defaultChecked={defaultChecked}
            />
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}

export default Radio;