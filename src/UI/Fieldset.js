import Radio from "../Form/Radio";
import RadioAndInput from "../Form/RadioAndInput";

const Fieldset = (props) => {

    const {
        className, children, radioData, onSelect,
        customRadio, customRadioData, customInputData,
        onSelectCustom, onChangeCustom, ifCustom
    } = props;

    return (
        <fieldset className={className}>
            <legend>
                {children}
            </legend>
            {radioData.map(radio => (
                <Radio
                    key={radio.id}
                    value={radio.value}
                    id={radio.id}
                    name={radio.name}
                    children={radio.display}
                    onSelect={onSelect}
                />
            ))}
            {customRadio &&
            <RadioAndInput
                customRadioData={customRadioData}
                customInputData={customInputData}
                onSelectCustom={onSelectCustom}
                onChangeCustom={onChangeCustom}
                ifCustom={ifCustom}
            />
            }
        </fieldset>
    );
};

export default Fieldset;