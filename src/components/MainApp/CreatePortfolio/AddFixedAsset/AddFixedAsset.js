import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { PrimaryButton, Input, Select, Option, Textarea } from '../../../Shared/Utilities'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons'
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm'

import styles from './AddFixedAsset.module.css';

function AddFixedAsset() {

    const addFixedAssetSchema = Yup.object().shape({
        
    })

    return (
        <>
        <Header />
        <div className={styles.addFixedAsset}>
            <ImportPortfolioButtons title="Add Fixed Asset" />

                <Formik
                    initialValues={{ }}
                    vaidationSchema={addFixedAssetSchema}
                    onSubmit={(values) => {

                    }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <AddPortfolioForm>
                            <div>
                                <p className={styles.fieldName}>Asset Name</p>
                                <Input type="text" placeholder="Type asset name" />
                            </div>
                            <div>
                                <p className={styles.fieldName}>Amount</p>
                                <div className={'display-flex justify-start '+ styles.amount}>
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
                                        <Option value='eur'>#</Option>
                                    </Select>
                                    <Input style={{ marginLeft: '5px' }} />
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
                                    <Input type="date" style={{ width: "30%" }} />
                                    <div className={styles.endDate}>
                                        <p className={styles.fieldName}>End Date</p>
                                        <Input type="date" style={{ width: "30%" }} />
                                    </div>
                                </div>
                            </div>
                            <PrimaryButton
                                type="submit"
                                style={{
                                    width: '190px',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    padding: '13px 20px'
                                }}
                            >Add Fixed Asset</PrimaryButton>
                    </AddPortfolioForm>
                    )}
                </Formik>

        </div>
        <Footer />
        </>
    )
}

export default AddFixedAsset
