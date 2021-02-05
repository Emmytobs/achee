import React from 'react'
import styles from './ImportPortfolioButtons.module.css';

import { Button } from '../../../Shared/Utilities'

function ImportPortfolioButtons(props) {
    return (
        <div className={'display-flex '+ styles.firstRow}>
            <h2>{props.title}</h2>
            <div className={styles.addPortfolioButtons}>
                <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from Spreadsheet</Button>

                <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Send via email</Button>

                <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from an investment company</Button>
            </div>
        </div>
    )
}

export default ImportPortfolioButtons
