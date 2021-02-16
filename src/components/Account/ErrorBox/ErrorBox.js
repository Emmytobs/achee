import React from 'react'
import styles from './ErrorBox.module.css';

function ErrorBox(props) {
    return (
        <div className={styles.errorBox}>
            <p>{props.errorMessage}</p> 
            <button onClick={props.close}>Close</button>
        </div>
    )
}

export default ErrorBox
