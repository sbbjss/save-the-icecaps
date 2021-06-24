import {useState} from "react";

import Fieldset from "../UI/Fieldset";
import TextInput from "./TextInput";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from './Form.module.css';

const Form = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredGender, setEnteredGender] = useState('male');
    const [enteredDate, setEnteredDate] = useState('1995-01-01');
    const [enteredDonationValue, setEnteredDonationValue] = useState();
    const [customDonationValue, setCustomDonationValue] = useState(false);
    const [cruelCheck, setCruelCheck] = useState(false);
    const [agreementChecked, setAgreementChecked] = useState(true);

    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const firstDonationValue = 10;
    const secondDonationValue = 25;
    const thirdDonationValue = 50;

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const genderChangeHandler = (value) => {
        setEnteredGender(value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value.toString());
    };

    const donationChangeHandler = (value) => {
        setCustomDonationValue(false);
        setEnteredDonationValue(value);
    };

    const customDonationHandler = () => {
        setCustomDonationValue(true);
    };

    const customDonationChangeHandler = (event) => {
        return (customDonationValue ? setEnteredDonationValue(event.target.value) : null);
    };

    const genderData = [
        {
            value: 'male',
            id: 'male',
            name: 'gender',
            display: 'Male',
            checked: {genderChangeHandler}
        },
        {
            value: 'female',
            id: 'female',
            name: 'gender',
            display: 'Female',
            checked: {genderChangeHandler},
        },
        {
            value: 'other',
            id: 'other',
            name: 'gender',
            display: 'Prefer not to disclose',
            checked: {genderChangeHandler},
        }
    ];

    const donationData = [
        {
            value: firstDonationValue,
            id: 'firstDonationOption',
            name: 'donation',
            display: firstDonationValue + '€',
            checked: {donationChangeHandler}
        },
        {
            value: secondDonationValue,
            id: 'secondDonationOption',
            name: 'donation',
            display: secondDonationValue + '€',
            checked: {donationChangeHandler}
        },
        {
            value: thirdDonationValue,
            id: 'thirdDonationOption',
            name: 'donation',
            display: thirdDonationValue + '€',
            checked: {donationChangeHandler}
        },
    ];

    const customDonationData = {
        value: customDonationValue,
        id: 'customDonationOption',
        name: 'donation',
        display: 'Custom value (EUR)',
        checked: {customDonationHandler}
    };

    const customInputDonationData = {
        id: 'customDonationOption',
        type: 'number',
        min: '1',
        name: 'donation'
    };

    const errorHandler = () => {
        setError();
    };

    const reloadHandler = () => {
        window.location.reload();
    };

    const subscribeHandler = (event) => {
        event.preventDefault();

        const newSubscriber = {
            username: enteredUsername,
            email: enteredEmail,
            gender: enteredGender,
            date: enteredDate,
            value: enteredDonationValue,
            isCruel: cruelCheck
        };

        console.log(newSubscriber);

        const isEmpty = (object) => {
            for (let key in object) {
                if (!object[key] && object[key] !== false) return true;
            }
            return false;
        };

        if (isEmpty(newSubscriber)) {
            setError({
                title: 'Something went wrong',
                message: 'Please make sure all fields are filled in'
            });
        } else {
            setSubmitted({
                title: 'Success!',
                message: 'Thanks for subscribing to our awesome newsletter!'
            })
        }
    };


    return (
        <div>
            {error &&
            <Modal
                title={error.title}
                message={error.message}
                onEventHandle={errorHandler}
            />}
            {submitted &&
            <Modal
                title={submitted.title}
                message={submitted.message}
                onEventHandle={reloadHandler}
            />}
            <Card className={styles['form-container']}>
                <h2 className={styles['form__header']}>Subscribe to our newsletter!</h2>
                <form className={styles.form} onSubmit={subscribeHandler}>
                    <div className={styles['form__text-inputs']}>
                        <TextInput
                            className={styles['form__text-input']}
                            id="username"
                            type="text"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        >
                            Name
                        </TextInput>
                        <TextInput
                            className={styles['form__text-input']}
                            id="email"
                            type="email"
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                        >
                            E-Mail
                        </TextInput>
                    </div>

                    <Fieldset
                        className={styles['form__fieldset']}
                        radioData={genderData}
                        onSelect={genderChangeHandler}
                    >
                        Select your gender
                    </Fieldset>

                    <div className={styles['form__data']}>
                        <label htmlFor="date">
                            Date of birth
                        </label>
                        <input
                            id="date"
                            type="date"
                            value={enteredDate}
                            max="2005-01-01"
                            onChange={dateChangeHandler}
                        />
                    </div>


                    <Fieldset
                        className={styles['form__fieldset']}
                        radioData={donationData}
                        onSelect={donationChangeHandler}
                        customRadio
                        customRadioData={customDonationData}
                        customInputData={customInputDonationData}
                        onSelectCustom={customDonationHandler}
                        onChangeCustom={customDonationChangeHandler}
                        ifCustom={customDonationValue}
                    >
                        Select donation amount
                    </Fieldset>

                    <label htmlFor="non-recurring">
                        <input
                            type="checkbox"
                            id="non-recurring"
                            defaultChecked={cruelCheck}
                            onChange={() => setCruelCheck(!cruelCheck)}
                        />
                        I hate polar bears — select this to opt out of a recurring donation
                    </label>

                    <div className={styles['form__gdpr-submit']}>
                        <label htmlFor="GDPR">
                            <input
                                type="checkbox"
                                id="GDPR"
                                required="required"
                                defaultChecked={agreementChecked}
                                onChange={() => setAgreementChecked(!agreementChecked)}
                            />
                            I agree to <a href="#">Save The Icecaps terms and conditions</a>
                        </label>
                        <Button type="submit">Subscribe</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Form;