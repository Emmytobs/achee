import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button } from '../Form/Form';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorBox from '../ErrorBox'
import MobileHeader from '../../Shared/MobileHeader/MobileHeader';

import AsideContainer from '../AsideContainer/AsideContainer'
import Overlay from '../../Shared/Overlay';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import modalMailbox from '../images/modal-mailbox.png';
import resetFailure from '../images/reset-failure.png'

import styles from './ForgotPassword.module.css';


function ForgotPassword(props) {

    const [showEmailModal, setShowEmailModal] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const changeToSignInView = (e) => {
        props.history.push('/account/login');
    }

    const submitForm = async () => {
        setError('');
        setIsSubmitting(true);
        try {
            // Add user's access token to request body
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/me/reset-password`, null, {
                headers: {
                    Authorization: `Bearer ${props.accessToken}`
                }
            });
            if (response.status === 200) {
                // Show success modal
                setIsSubmitting(false)
                setShowEmailModal(true)
            }
        } catch (error) {
            if(!error.response) {
                // Display no internet page
                setError('Couldn\'t make request. Please check your internet connection')
                return
            }
            const { message } = error.response.data;
            setError(message)
        }
    }
    
    const forgotPasswordSchema = Yup.object().shape({
        email: Yup.string().required('Required').email('Please enter a valid email')
    })

    return (
        <div className={`display-flex ${styles.forgotPasswordContainer}`}>
            <div className={styles.formContainer} styles={{ opacity: isSubmitting && '0.5' }}>
                <div className={`display-flex ${styles.logoAndBackBtnContainer}`}>
                    <div className={`display-flex ${styles.logo}`}>
                        <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                        <span>achee</span>
                    </div>
                    <button onClick={changeToSignInView} >Go Back</button>
                </div>


                <div className={styles.textContainer}>
                    <h2>Forgot Password</h2>
                    <p>Fill the information below to help. This would help retrieve your password.</p>
                </div>

                {error && <ErrorBox errorMessage={error} close={() => setError('')} />}

                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={forgotPasswordSchema}
                    onSubmit={(values) => {
                        submitForm()
                    }}
                >
                    {
                        ({ errors, touched, values, handleSubmit, handleChange }) => (
                            <Form onSubmit={handleSubmit} noValidate>
                                <Input 
                                    name="email"
                                    type="text"
                                    placeholder="Enter registered email"
                                    labelText="Email"
                                    id="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    errors={(touched.email && errors.email) && errors.email}
                                />
                                <Button buttonText="Continue" style={{ paddingTop: '15px', paddingBottom: '15px' }} rightIcon />
                            </Form>
                        )
                    }

                </Formik>
            </div>
            <AsideContainer />

            { 
            showEmailModal &&
            <Overlay closeModalHandler={setShowEmailModal}>
                <div className={styles.modalContainer} name="modal">
                    <img src={modalMailbox} alt="mailbox" width="150px" height="150px" />
                    <h4 className={styles.modalTitle}>Email Notification</h4>
                    <p className={styles.modalText}>
                        A link has been sent to your registered mail. <br />
                        Please click on the link to continue
                    </p>
                </div>
            </Overlay>
            
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps, null)(ForgotPassword);