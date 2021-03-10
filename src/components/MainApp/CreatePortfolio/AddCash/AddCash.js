import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons';
import { PrimaryButton } from '../../../Shared/Utilities'
import AddPortfolioForm from '../AddPortfolioForm';
import { Input, Select, Option } from '../../../Shared/Utilities';

import { addAsset } from '../../../../redux/dispatchers'

import styles from './AddCash.module.css';

function AddCash(props) {
    const addCashSchema = Yup.object().shape({
        assetName: Yup.string().required('Required'),
        dateOpened: Yup.date().required('Required'),
        txType: Yup.string().required('Required'),
        currency: Yup.string().required('Required'),
        amountCash: Yup.number().required('Required')
    });

    let initialValues = { assetType:"CASH", assetName: '', dateOpened: '', txType: 'CREDIT', currency: 'USD', amountCash: '' }
    
    // const storedFormValuesRef = useRef(initialValues);
    // const updatedFormValuesRef = useRef(initialValues);

    // useEffect(() => {
    //     try {
    //         const stateInLocalStorage = localStorage.getItem('cash-form-data');
    //         if (stateInLocalStorage) {
    //             const stateObject = JSON.parse(stateInLocalStorage);
    //             storedFormValuesRef.current = { ...stateObject };
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, []);

    // const customHandleChange = (e, handleChange) => {
    //     const { name, value } = e.target;
    //     updatedFormValuesRef.current = { ...initialValues, [name]: value };
    //     localStorage.setItem('cash-form-data', JSON.stringify(updatedFormValuesRef.current));

    //     handleChange(e);
    //     // Save form data to
    // }

    const addCash = async (values) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/portfolios/:portfolioId/transactions`, { ...values }, {
                params: {
                    'portfolioId': '3ef5ed27-9c8a-4806-a932-11a439cc6c8e'
                }
            })
            
            if (response.status === 200) {
                // Get the data and put it in the redux store
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Header />
        <div className={styles.addCash}>
            <ImportPortfolioButtons title="Add Cash" />
                <Formik
                    initialValues={initialValues}
                    validationSchema={addCashSchema}
                    // validator={() => ({})}
                    onSubmit={(values) => {
                        console.log(values)
                        addCash(values)
                        // props.history.push('/app/portfolio#asset-list')
                    }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <AddPortfolioForm onSubmit={handleSubmit}>
                            <div>
                                <p className={styles.fieldName}>Name</p>
                                {/* <div className={styles.name}> */}
                                    <Input 
                                        name="assetName"
                                        type='text' 
                                        placeholder="Placeholder...."
                                        style={{ width: "100%", display: "block" }}
                                        onChange={handleChange}
                                        value={values.assetName}
                                        error={(touched.assetName && errors.assetName) && errors.assetName} />
                                {/* </div> */}
                            </div>
                            <div>
                                <p className={styles.fieldName}>Date</p>
                                {/* <div className={styles.date}> */}
                                    {/* <p>Date Picker</p> */}
                                    <Input 
                                        name="dateOpened" 
                                        type='date' 
                                        onChange={handleChange} 
                                        value={values.dateOpened} 
                                        error={(touched.dateOpened && errors.dateOpened) && errors.dateOpened}/>
                                {/* </div> */}
                            </div>
                            <div>
                                <p className={styles.fieldName}>Type</p>
                                <Select 
                                    name="txType" 
                                    onChange={handleChange} 
                                    value={values.txType}
                                    error={(touched.txType && errors.txType) && errors.txType}
                                >
                                    <Option value="CREDIT">Credit</Option>
                                    <Option value="DEBIT">Debit</Option>
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

                                        <Option value='USD'>$</Option>
                                        <Option value='NGN'>#</Option>
                                    </Select>
                                    <Input 
                                        type="number" 
                                        name="amountCash" 
                                        onChange={handleChange} 
                                        value={values.amountCash} 
                                        error={(touched.amountCash && errors.amountCash) && errors.amountCash}
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
