import React from 'react';
import classes from './Input.css';

function isInvalid(props) {
    let isInvalid = !props.valid && props.shouldValidate && props.touched;
    return isInvalid;
}

const Input = (props) => {
    const inputType = props.type || "text";
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={props.type}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}></input>

            {
                isInvalid(props)
                    ? <span>{props.errorMessage || "Введите верное значение"}</span>
                    : null
            }
        </div>
    )
}

export default Input;