import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Button, Input, Select, Option } from '../../../Shared/Utilities';

import styles from './AddCash.module.css';

function AddCash() {
    return (
        <>
        <Header />
        <div className={styles.addCash}>
            <div className={'display-flex '+ styles.firstRow}>
                <h2>Manually Add Cash</h2>
                <div className={styles.addPortfolioButtons}>
                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from Spreadsheet</Button>

                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Send via email</Button>

                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from an investment company</Button>
                </div>
            </div>
            <div className={styles.addPortfolioForm}>
                <div>
                    <p className={styles.fieldName}>Type</p>
                    <Select>
                        <Option value="deposit cash" selected>Deposit Cash</Option>
                        <Option value="Option 2">Option 2</Option>
                    </Select>
                </div>
                <div>
                    <p className={styles.fieldName}>Date</p>
                    <div className={styles.date}>
                        <p className={styles.fieldName}>Date</p>
                        <p>Date Picker</p>
                    </div>
                </div>
                <div>
                    <p className={styles.fieldName}>Return Interval</p>
                    <div className={styles.amount}>
                        <Select style={{ 
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            background: '#F6F3FF'
                         }}>
                            <Option value='usd' selected>$</Option>
                        </Select>
                        <Input />
                    </div>
                </div>
                <div>
                    <p className={styles.fieldName}>Notes</p>
                    <textarea placeholder="(Optional)" rows="5" />
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default AddCash
