import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Button, Input, Select, Option, Textarea } from '../../../Shared/Utilities'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons'
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm'

import styles from './AddCryptocurrency.module.css';

function AddCryptocurrency() {
    const addCryptocurrencySchema = Yup.object().shape({

    })
    
    return (
        <>
        <Header />
        <div className={styles.addCryptocurrency}>
            <ImportPortfolioButtons title="Add Cryptocurrency" />
            <AddPortfolioForm>
                <Formik
                    initialValues={{  }}
                    validationSchema={addCryptocurrencySchema}
                    onSubmit={(values) => {
                        
                    }}
                >
                    {({ errors, touched, values, handleSubmit, handleChange }) => (
                        <>
                        <div className={styles.fieldName}>
                            <p>Choose Asset</p>
                            <Input type="text" value="*Insert icon*" />
                        </div>
                        <div className={styles.fieldName}>
                            <p>Current Market Value</p>
                            <Input type="text" />
                        </div>
                        <div className={styles.fieldName}>
                            <p>Transaction</p>
                            <Select>
                                <Option value="deposit cash" selected>Buy</Option>
                                <Option value="Option 2">Sell</Option>
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
                                <Select 
                                    wrapperStyle={{
                                        'background-position-x': '65%',
                                        backgroundColor: "#F6F3FF",
                                    }}
                                    style={{ 
                                        border:"2px solid #805CF5",
                                        color: "#805CF5",
                                        fontSize: '1.4em',
                                        fontWeight: '500',
                                        padding: "0 0 0 25px",
                                        width: "94px",
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
                                    wrapperStyle={{
                                        'background-position-x': '65%',
                                        backgroundColor: "#F6F3FF",
                                    }}
                                    style={{ 
                                        border:"2px solid #805CF5",
                                        color: "#805CF5",
                                        fontSize: '1.4em',
                                        fontWeight: '500',
                                        padding: "0 0 0 25px",
                                        width: "94px",
                                    }}>
                                    <Option value='usd' selected>$</Option>
                                </Select>
                                <Input style={{ marginLeft: '5px' }} />
                            </div>
                        </div>
                        </>
                    )}
                </Formik>
                <SubmitBtn>Add Cryptocurrency</SubmitBtn>
            </AddPortfolioForm>
        </div>
        <Footer />
        </>
    )
}

export default AddCryptocurrency
