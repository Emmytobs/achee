import React from 'react'

import { PrimaryButton } from '../../../Shared/Utilities'
import styles from './AddPortfolioForm.module.css';

function AddPortfolioForm(props) {
    return (
        <div className={styles.addPortfolioForm}>
            {props.children}
        </div>
    )
}
export default AddPortfolioForm;

export function SubmitBtn(props) {
    return (
        <div className={'display-flex justify-end '+ styles.submitBtn}>
            <PrimaryButton
                style={{
                    flex: '0 0 190px',
                    padding: '13px 20px'
                }}
            >{props.children}</PrimaryButton>
        </div>
    )
}