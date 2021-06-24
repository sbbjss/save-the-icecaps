import Radio from "./Radio";
import TextInput from "./TextInput";

const RadioAndInput = (props) => {

    const {ifCustom, customRadioData, customInputData,
        onSelectCustom, onChangeCustom} = props;


    const customCheckHandler = () => {
        onSelectCustom();
    }

    return (
        <div>
            <Radio
                key={customRadioData.id}
                value={customRadioData.value}
                id={customRadioData.id}
                name={customRadioData.name}
                children={customRadioData.display}
                onSelect={customCheckHandler}
            />
            {ifCustom &&
            <TextInput
                id={customInputData.id}
                type={customInputData.type}
                min={customInputData.min}
                name={customInputData.name}
                value={customInputData.value}
                onChange={onChangeCustom}
            />}
        </div>
    )
}

export default RadioAndInput;