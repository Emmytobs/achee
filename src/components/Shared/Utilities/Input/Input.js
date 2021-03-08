import React from 'react'
import styles from './Input.module.css';
import arrowDown from '../../../Shared/icons/arrow-down-black.png';

export function Input(props) {
    return (
        <input 
            className={styles.input} 
            type={props.type || "text"} 
            onChange={props.onChange} 
            placeholder={props.placeholder} 
            value={props.value}
            style={props.style} />
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
        <div for="select" className={'display-flex justify-between '+ styles.selectContainer} style={props.wrapperStyle}>
            <select id="select" style={props.style} className={styles.select} onChange={props.onChange} value={props.value}>
                {props.children}
            </select>
            {/* <img src={arrowDown} alt="Arrow Down" width="24px" height="24px" /> */}
        </div>
    )
}

export function Option(props) {
    return (
        <option className={styles.option} value={props.value} selected={props.selected || false}>{props.children}</option>
    )
}

export function Textarea(props) {
    return (
        <textarea className={styles.textarea} {...props} />
    )
}