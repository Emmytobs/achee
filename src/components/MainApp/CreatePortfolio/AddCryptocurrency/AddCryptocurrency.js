import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Button, Input, Select, Option, Textarea } from '../../../Shared/Utilities'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons'
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm'

import styles from './AddCryptocurrency.module.css';

function AddCryptocurrency() {
    return (
        <>
        <Header />
        <ImportPortfolioButtons title="Add Cryptocurrency" />
        <div className={styles.search}>
            <img src="" alt="Search Icon"/>
            <Input type="text" placeholder="Search" />
        </div>

        <AddPortfolioForm>
            <div className={styles.transaction}>
                <p className={styles.fieldName}>Transaction</p>
                <Select>
                    <Option value="Buy" selected>Buy</Option>
                    <Option value="Sell">Sell</Option>
                </Select>
            </div>
            <div>
                <p className={styles.fieldName}>Date</p>
                <Input type='date' />
            </div>
            <div>
                <p className={styles.fieldName}>Quantity</p>
                <Input type="number" />
            </div>
            <div>
                <p className={styles.fieldName}>Price</p>
                <div className={'display-flex justify-start '+ styles.price}>
                    <Select style={{ 
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
            <SubmitBtn>Add Cryptocurrency</SubmitBtn>
        </AddPortfolioForm>
        <Footer />
        </>
    )
}

export default AddCryptocurrency
