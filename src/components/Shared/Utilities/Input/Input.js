import React from 'react'
import styles from './Input.module.css';
import arrowDown from '../../../Shared/icons/arrow-down-black.png';

export function Input(props) {
    return (
        <div className={styles.inputContainer}>
            <input 
                className={styles.input} 
                // type={props.type || "text"} 
                // onChange={props.onChange} 
                // placeholder={props.placeholder} 
                value={props.value}
                style={props.style}
                onChange={props.onChange}
                {...props} />
            <small className={styles.error} style={{ visibility: props.error ? "visible" : "hidden" }}>{props.error}</small>
        </div>
            
    )
}


export function Select(props) {
    return (
        <div>
            <div for="select" className={'display-flex justify-between '+ styles.selectContainer} style={props.wrapperStyle}>
                <select 
                    id="select" 
                    style={props.style} 
                    className={styles.select} 
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}>
                    {props.children}
                </select>
                {/* <img src={arrowDown} alt="Arrow Down" width="24px" height="24px" /> */}
            </div>
            <small className={styles.error} style={{ visibility: props.error ? "visible" : "hidden" }}>{props.error}</small>
        </div>
    )
}

export function Option(props) {
    return (
        <option className={styles.option} {...props}>{props.children}</option>
    )
}

export function Textarea(props) {
    return (
        <textarea className={styles.textarea} {...props} />
    )
}