import React from 'react'
import styles from './Button.module.css'

export function Button(props) {
    return (
        <button 
            type={props.type || 'button'} 
            style={props.style}
            className={styles.button}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export function PrimaryButton(props) {
    return (
        <button 
            id={props.id}
            type={props.type || 'button'} 
            style={props.style}
            className={styles.primaryButton}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}