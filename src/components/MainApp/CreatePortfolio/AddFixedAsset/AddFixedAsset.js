import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { PrimaryButton, Input, Select, Option, Textarea } from '../../../Shared/Utilities'

import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons'
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm'

import styles from './AddFixedAsset.module.css';

function AddFixedAsset() {
    return (
        <>
        <Header />
        <div className={styles.addFixedAsset}>
            <ImportPortfolioButtons title="Add Fixed Asset" />

            <AddPortfolioForm>
                <div>
                    <p className={styles.fieldName}>Amount</p>
                    <div className={'display-flex justify-start '+ styles.amount}>
                        <Select
                            style={{ 
                                border:"2px solid #805CF5",
                                backgroundColor: "#805CF531",
                                color: "#805CF5",
                                fontSize: '1.2em',
                                fontWeight: '500',
                                padding: '0 20px 0 5px'
                            }}>
                            <Option value='usd' selected>$</Option>
                            <Option value='eur'>#</Option>
                        </Select>
                        <Input styles={{ marginLeft: '5px' }} />
                    </div>
                </div>
                <div className={styles.percentageReturn}>
                    <p className={styles.fieldName}>Percentage Return</p>
                    <Input type="number" />
                </div>
                <div className={styles.returnInterval}>
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
                    <div className={'display-flex justify-start '+ styles.commission}>
                        <Select 
                            style={{ 
                                border:"2px solid #805CF5",
                                backgroundColor: "#805CF531",
                                color: "#805CF5",
                                fontSize: '1.2em',
                                fontWeight: '500',
                                padding: '0 20px 0 5px'
                            }}>
                            <Option value='usd' selected>$</Option>
                        </Select>
                        <Input style={{ marginLeft: '5px' }} />
                    </div>
                </div>
                <div>
                    <p className={styles.fieldName}>Notes</p>
                    <Textarea placeholder="(Optional)" />
                </div>

                <SubmitBtn>Add Fixed Asset</SubmitBtn>
            </AddPortfolioForm>
        </div>
        <Footer />
        </>
    )
}

export default AddFixedAsset
