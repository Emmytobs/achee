import React from 'react'
import styles from './ErrorBox.module.css';

function ErrorBox(props) {
    return (
        <div className={styles.errorBox}>
            <p>{props.errorMessage}</p> 
        </div>
    )
}

export default ErrorBox
