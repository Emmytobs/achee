import React from 'react'
import styles from './AddStockOrFund.module.css'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import { Button, Input, Select, Option } from '../../../Shared/Utilities';

function AddStockOrFund() {
    return (
        <>
        <Header />
        <div className={styles.addStockOrFund}>
            <div className={'display-flex '+ styles.firstRow}>
                <h2>Manually add Stock/Fund</h2>
                <div className={styles.addPortfolioButtons}>
                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from Spreadsheet</Button>

                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Send via email</Button>

                    <Button style={{ padding: '5px 12px', marginLeft: '5px', color: "#4B4C4E" }}>Import from an investment company</Button>
                </div>
            </div>
            <div className={styles.search}>
                <img src="" alt="Search Icon"/>
                <Input type="text" placeholder="Search" />
            </div>
            <div className={styles.addPortfolioForm}>
                <div>
                    <p className={styles.fieldName}>Transaction</p>
                    <Select>
                        <Option value="Buy" selected>Buy</Option>
                        <Option value="Sell">Sell</Option>
                    </Select>
                </div>
                <div>
                    <p className={styles.fieldName}>Date</p>
                    <p>Date Picker</p>
                </div>
                <div>
                    <p className={styles.fieldName}>Shares</p>
                    <Input />
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

export default AddStockOrFund;
