import React, { useState } from 'react'
import styles from './Form.module.css';

import lock from '../images/lock.png';
import message from '../images/message.png';
import arrowRight from '../images/arrow-right.png';

export function Form(props) {
    return (
        <form className={styles.form} {...props}>
            {props.children}
        </form>
    )
}


export function Input(props) {
    const [isPasswordShowing, setsPasswordShowing] = useState(false)
    const toggleShowPasswordText = (e) => {
        e.preventDefault();
        setsPasswordShowing(!isPasswordShowing);
    }

    const inputErrorStyle = () => {
        if (props.errors) {
            return {
                border: '1px red solid',
                color: 'red'
            }
        }
    }

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id}>{props.labelText}</label>
            <div 
                style={inputErrorStyle()}
                className={`display-flex ${styles.inputGroup}`}
            >
                <img src={props.type === 'password' ? lock : message} alt={props.type === 'password' ? "lock" : "mailbox"} width='16px' height='16px' />
                <input type={isPasswordShowing ? 'text' : props.type} {...props}/>
                {/* <input 
                    type={isPasswordShowing ? 'text' : props.type} 
                    name={props.name} 
                    onChange={props.onChange} 
                    id={props.id} 
                    placeholder={props.placeholder}
                    value={props.value}/> */}
                {props.addShowPassword && <button type="button" className={styles.showPasswordBtn} onClick={toggleShowPasswordText}>{isPasswordShowing ? 'Hide' : 'Show'}</button>}

            </div>
            {props.errors && <small style={{color: 'red'}}>{props.errors}</small>}
        </div>
    )
}

export function Button(props) {
    return (
        <button 
            style={props.style}
            className={`display-flex ${styles.submitBtn}`} 
            type={props.type ? props.type : 'submit'}
            onClick={props.onClick}
        >
            <span className={props.buttonTextStyle}>{props.buttonText}</span>
            {/* <img src={arrowRight} alt="arrow-right" width="18px" height="18px" /> */}
            {props.rightIcon && <img src={arrowRight} className={styles.rightIcon} style={props.rightIconStyle} alt="arrow-right" width="18px" height="18px" />}
        </button>
    )
}