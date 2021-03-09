import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons';
import { PrimaryButton } from '../../../Shared/Utilities'
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm';
import { Input, Select, Option, Textarea } from '../../../Shared/Utilities';

import { addAsset } from '../../../../redux/dispatchers'

import styles from './AddCash.module.css';

function AddCash(props) {
    const addCashSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        date: Yup.date().required('Required'),
        type: Yup.string().required('Required'),
        currency: Yup.string().required('Required'),
        amount: Yup.number().required('Required')
    });

    return (
        <>
        <Header />
        <div className={styles.addCash}>
            <ImportPortfolioButtons title="Add Cash" />
                <Formik
                    initialValues={{ name: '', date: '', type: '', currency: '', amount: '' }}
                    validationSchema={addCashSchema}
                    // validator={() => ({})}
                    onSubmit={(values) => {
                        addAsset(values, 'cash', props.dispatch)
                        props.history.push('/app/portfolio#asset-list')
                    }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <AddPortfolioForm onSubmit={handleSubmit}>
                            <div>
                                <p className={styles.fieldName}>Name</p>
                                {/* <div className={styles.name}> */}
                                    <Input 
                                        name="name"
                                        type='text' 
                                        placeholder="Placeholder...."
                                        style={{ width: "100%", display: "block" }}
                                        onChange={handleChange}
                                        value={values.name}
                                        error={(touched.name && errors.name) && errors.name} />
                                {/* </div> */}
                            </div>
                            <div>
                                <p className={styles.fieldName}>Date</p>
                                {/* <div className={styles.date}> */}
                                    {/* <p>Date Picker</p> */}
                                    <Input 
                                        name="date" 
                                        type='date' 
                                        onChange={handleChange} 
                                        value={values.date} 
                                        error={(touched.date && errors.date) && errors.date}/>
                                {/* </div> */}
                            </div>
                            <div>
                                <p className={styles.fieldName}>Type</p>
                                <Select 
                                    name="type" 
                                    onChange={handleChange} 
                                    value={values.type}
                                    error={(touched.type && errors.type) && errors.type}
                                >
                                    <Option value="deposit cash">Deposit Cash</Option>
                                    <Option value="Option 2">Option 2</Option>
                                </Select>
                            </div>
                            <div>
                                <p className={styles.fieldName}>Cash Amount</p>
                                <div className={'display-flex justify-start '+ styles.amount}>
                                    <Select 
                                        name="currency"
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
                                        onChange={handleChange}
                                        value={values.currency}
                                        error={(touched.currency && errors.currency) && errors.currency} >

                                        <Option value='usd'>$</Option>
                                        <Option value='eur'>#</Option>
                                    </Select>
                                    <Input 
                                        type="number" 
                                        name="amount" 
                                        onChange={handleChange} 
                                        value={values.amount} 
                                        error={(touched.amount && errors.amount) && errors.amount}
                                        style={{ marginLeft: '5px', width: "100%", display: "block" }} />
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
                            >Add Cash</PrimaryButton>
                        </AddPortfolioForm>
                    )}
                </Formik>
        </div>
        <Footer />
        </>
    )
}


export default connect(null, null)(AddCash)
