import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Button, Input, Select, Option } from '../../../Shared/Utilities'

import styles from './AddFixedAsset.module.css';

function AddFixedAsset() {
    return (
        <>
        <Header />
        <div className={styles.addFixedAsset}>
            <div className={'display-flex '+ styles.firstRow}>
                <h2>Manually Add Fixed Asset</h2>
                <div className={styles.addPortfolioButtons}>
                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from Spreadsheet</Button>

                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Send via email</Button>

                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from an investment company</Button>
                </div>
            </div>
            <div className={styles.addPortfolioForm}>
                <div>
                    <p className={styles.fieldName}>Amount</p>
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
                    <p className={styles.fieldName}>Percentage Return</p>
                    <Input type="number" />
                </div>
                <div>
                    <p className={styles.fieldName}>Return Interval</p>
                    <Select>
                        <Option value="Buy">Option 1</Option>
                        <Option value="Sell">Option 2</Option>
                    </Select>
                </div>
                <div className={styles.startEndDate}>
                    <p className={styles.fieldName}>Start Date</p>
                    <div>
                        <p>Date Picker</p>
                        <div className={styles.endDate}>
                            <p className={styles.fieldName}>End Date</p>
                            <p>Date Picker</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <p className={styles.fieldName}>Commission</p>
                    <div className={styles.commission}>
                        <Select>
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

export default AddFixedAsset
