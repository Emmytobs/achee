import React from 'react'
import styles from './Input.module.css';

export function Input(props) {
    return (
        <input className={styles.input} type={props.type || "text"} placeholder={props.placeholder} />
        // <div className={styles.inputContainer}>
        //      {props.leftIcon && 
        //          <img src={props.leftIcon} className={`${styles.icon} ${styles.leftIcon}`} alt="Icon" />
        //      }

        //     {props.rightIcon && 
        //         <img src={props.rightIcon} className={`${styles.icon} ${styles.rightIcon}`} alt="Icon" />
        //     }
        // </div>
    )
}


export function Select(props) {
    return (
        <select style={props.style} className={styles.select}>
            {props.children}
        </select>
    )
}

export function Option(props) {
    return (
        <option className={styles.option} value={props.value} selected={props.selected || false}>{props.children}</option>
    )
}