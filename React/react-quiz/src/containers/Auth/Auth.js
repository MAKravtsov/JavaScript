import { Component } from "react";
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input";
import axios from  '../../axios/axios-quiz';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }
    
    loginHandler = async () => {
        const body = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            await axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
                'AIzaSyCfuEobk0jY-UBqlS7sDe3Bbi-lPrnOtqg'
                , body)
        } catch(e) {
            console.log(e);
        }
    }

    registerHandler = async () => {
        const body = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            await axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                'AIzaSyCfuEobk0jY-UBqlS7sDe3Bbi-lPrnOtqg'
                , body)
        } catch(e) {
            console.log(e);
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    onChangeHandler = (event, name) => {
        const formControls = {...this.state.formControls};
        const control = { ...formControls[name] }

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[name] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach((controlName) => {
            isFormValid = formControls[controlName].valid && isFormValid
        })

        this.setState({isFormValid, formControls})
    }

    validateControl(value, validation) {
        if(!validation) return true;
        let isValid = true;

        if(validation.required) {
            isValid = value.trim() !== '' 
                && isValid; /* Если isValid был false, то он останется false */
        }

        if(validation.email) {
            isValid = validateEmail(value) && isValid;
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }


    renderInputs() {
        return Object.keys(this.state.formControls).map((name, index) => {
            const control = this.state.formControls[name];
            return (
                <Input key={name + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation} /* !! - приведение объекта к bool */
                    onChange={(event) => this.onChangeHandler(event, name)}/> 
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={classes.AuthForm} onSubmit={this.submitHandler}>
                        {this.renderInputs()}

                        <Button type="success" 
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}>Войти</Button>
                        <Button type="primary" 
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}>Зарегистрироваться</Button>
                
                    </form>
                </div>
            </div>
        )
    }
}
