import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ImportPortfolioButtons from '../ImportPortfolioButtons/ImportPortfolioButtons';
import AddPortfolioForm, { SubmitBtn } from '../AddPortfolioForm';

import { Input, Select, Option, Textarea } from '../../../Shared/Utilities';
import styles from './AddCash.module.css';

function AddCash() {
    return (
        <>
        <Header />
        <div className={styles.addCash}>
            <ImportPortfolioButtons title="Add Cash" />
            <AddPortfolioForm>
                <div>
                    <p className={styles.fieldName}>Type</p>
                    <Select>
                        <Option value="deposit cash" selected>Deposit Cash</Option>
                        <Option value="Option 2">Option 2</Option>
                    </Select>
                </div>
                <div>
                    <p className={styles.fieldName}>Date</p>
                    <div className={styles.date}>
                        {/* <p>Date Picker</p> */}
                        <Input type='date' onChange={(e) => console.log(e.target.valueAsNumber)} style={{ width: "100%" }} />
                    </div>
                </div>
                <div>
                    <p className={styles.fieldName}>Return Interval</p>
                    <div className={'display-flex justify-start '+ styles.amount}>
                        <Select 
                            style={{ 
                                border:"2px solid #805CF5",
                                backgroundColor: "#805CF531",
                                color: "#805CF5",
                                fontSize: '1.2em',
                                fontWeight: '500',
                                padding: '0 20px 0 5px'
                            }}
                            onChange={(e) => console.log(e.target.value)}>

                            <Option value='usd' selected>$</Option>
                            <Option value='eur'>#</Option>
                        </Select>
                        <Input style={{ marginLeft: '5px' }} />
                    </div>
                </div>
                <div>
                    <p className={styles.fieldName}>Notes</p>
                    <Textarea placeholder="(Optional)" />
                </div>
                <SubmitBtn>Add Cash</SubmitBtn>
            </AddPortfolioForm>
        </div>
        <Footer />
        </>
    )
}

export default AddCash
