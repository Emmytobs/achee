import React from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons';
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm';

import { Input, Select, Option, Textarea } from '../../../Shared/Utilities';
import styles from './AddCash.module.css';

function AddCash() {
    const addCashSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        date: Yup.date().required('Required'),
        type: Yup.string().required('Required'),
        amount: Yup.number().required('Required')
    });

    return (
        <>
        <Header />
        <div className={styles.addCash}>
            <ImportPortfolioButtons title="Add Cash" />
            <AddPortfolioForm>
                <Formik
                    initialValues={{ name: '', date: '', type: '', amount: '' }}
                    validationSchema={addCashSchema}
                    onSubmit={(values) => {

                    }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <>
                        <div>
                            <p className={styles.fieldName}>Name</p>
                            <div className={styles.name}>
                                <Input 
                                    type='text' 
                                    placeholder="Placeholder...."
                                    style={{ width: "100%", display: "block" }} />
                            </div>
                        </div>
                        <div>
                            <p className={styles.fieldName}>Date</p>
                            <div className={styles.date}>
                                {/* <p>Date Picker</p> */}
                                <Input type='date' onChange={(e) => console.log(e.target.valueAsNumber)} />
                            </div>
                        </div>
                        <div>
                            <p className={styles.fieldName}>Type</p>
                            <Select>
                                <Option value="deposit cash" selected>Deposit Cash</Option>
                                <Option value="Option 2">Option 2</Option>
                            </Select>
                        </div>
                        <div>
                            <p className={styles.fieldName}>Cash Amount</p>
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
                                    }}
                                    onChange={(e) => console.log(e.target.value)}>

                                    <Option value='usd' selected>$</Option>
                                    <Option value='eur'>#</Option>
                                </Select>
                                <Input type="number" style={{ marginLeft: '5px', width: "100%", display: "block" }} />
                            </div>
                        </div>
                        </>
                    )}
                </Formik>
                <SubmitBtn>Add Cash</SubmitBtn>
            </AddPortfolioForm>
        </div>
        <Footer />
        </>
    )
}

export default AddCash
