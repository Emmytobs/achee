import React from 'react'
import styles from './Form.module.css';

import lock from '../images/lock.png';
import message from '../images/message.png';
import arrowRight from '../images/arrow-right.png';

export function Form({ children, width, marginAuto }) {
    const formElementStyle = {
        width,
        marginAuto
    } 
    return (
        <form className={styles.form} style={formElementStyle}>
            {children}
        </form>
    )
}


export function Input(props) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.id}>{props.labelText}</label>
            <div className={`display-flex ${styles.inputGroup}`}>
                <img src={props.type === 'password' ? lock : message} alt={props.type === 'password' ? "lock" : "mailbox"} width='16px' height='16px' />
                <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}/>
            </div>
        </div>
    )
}

export function Button(props) {
    return (
        <button className={`display-flex ${styles.submitBtn}`}>
            <span>{props.buttonText}</span>
            <img src={arrowRight} alt="arrow-right" width="18px" height="18px" />
        </button>
    )
}