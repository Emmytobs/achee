import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from '../../Header/Header'
import styles from './AddStockOrFund.module.css'
import Footer from '../../Footer/Footer'

import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons'
import { Button, Input, Select, Option, Textarea } from '../../../Shared/Utilities';

function AddStockOrFund() {

    const addStockSchema = Yup.object().shape({

    })

    return (
        <>
        <Header />
        <div className={styles.addStockOrFund}>
            <ImportPortfolioButtons title="Add Stock/Fund" />
            <div className={styles.search}>
                <img src="" alt="Search Icon"/>
                <Input type="text" placeholder="Search" />
            </div>
            <AddPortfolioForm>
                <Formik
                    initialValues={{  }}
                    validationSchema={addStockSchema}
                    onSubmit={(values) => {

                    }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <>
                        <div>
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
                            <p className={styles.fieldName}>Shares</p>
                            <Input />
                        </div>
                        <div>
                            <p className={styles.fieldName}>Notes</p>
                            <Textarea placeholder="(Optional)" rows="5" />
                        </div>
                        </>
                    )}
                </Formik>
                <SubmitBtn>Add Stock/Fund</SubmitBtn>
            </AddPortfolioForm>
        </div>
        <Footer />
        </>
    )
}

export default AddStockOrFund;
