import React, { useState } from 'react'
import { Form, Input, Button } from '../Form/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import AsideContainer from '../AsideContainer/AsideContainer'
import Overlay from '../../Shared/Overlay';
import ErrorBox from '../ErrorBox';
import MobileHeader from '../../Shared/MobileHeader/MobileHeader';

import styles from './ResetPassword.module.css'
import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';

import resetSuccess from '../images/reset-success.png'
import resetFailure from '../images/reset-failure.png'

function ResetPassword(props) {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const changeToSignInView = () => {
        props.history.push('/account?page=sign-in');
    }

    const resetPasswordSchema = Yup.object().shape({
        newPassword: Yup.string()
            .min(8, 'Password too short. 8 characters min')
            .required('Required'),
        confirmNewPassword: Yup.string()
            .min(8, 'Password too short. 8 characters min')
            .required('Required'),
    })

    const submitForm = async (formData) => {
        setError('');
        setIsSubmitting(true)
        if(formData.newPassword !== formData.confirmNewPassword) {
            setIsSubmitting(false)
            return setError('Passwords don\'t match');
        }
        try {
            // Add user's access token to request body
            const response = await axios.patch(`${process.env.REACT_APP_API_URL}/users/me/reset-password`, 
            { password: formData.newPassword, token: '' })
            if (response.status === 200) {
                // If password is reset succesfully, redirect user to login again
            setStatus('success');
                setIsSubmitting(false)
            }
        } catch (error) {
            // Else Display error message
            setStatus('error');
            setIsSubmitting(false)
        }

    }

    return (
        <div className={`display-flex ${styles.resetPasswordContainer}`}>
            <div className={styles.formContainer} style={{ opacity: isSubmitting && '.5' }}>
                <div className={`display-flex ${styles.logoAndBackBtnContainer}`}>
                    <div className={`display-flex ${styles.logo}`}>
                        <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                        <span>achee</span>
                    </div>
                    <button className={styles.backBtn} onClick={changeToSignInView} >Go Back</button>
                </div>
                <div className={styles.textContainer}>
                    <h2>Reset Password</h2>
                    <p>To reset your password, please set a strong password that has at least 8 characters long.</p>
                </div>

                {error && <ErrorBox errorMessage={error} close={() => setError('')} />}

                <Formik
                    initialValues={{ newPassword: '', confirmNewPassword: '' }}
                    validationSchema={resetPasswordSchema}
                    onSubmit={(values) => {
                        submitForm(values)
                    }}
                >
                    {
                        ({ touched, values, handleChange, handleSubmit, errors }) => (
                            <Form onSubmit={handleSubmit} noValidate>
                                <Input 
                                    name="newPassword"
                                    type="password"
                                    placeholder="Enter new password"
                                    labelText="New Password"
                                    id="new-password"
                                    onChange={handleChange}
                                    value={values.newPassword}
                                    errors={(touched.newPassword && errors.newPassword) && errors.newPassword}
                                    addShowPassword
                                />
                                <Input 
                                    name="confirmNewPassword"
                                    type="password"
                                    placeholder="Confirm new password"
                                    labelText="Confirm Password"
                                    id="confirm-new-password"
                                    onChange={handleChange}
                                    value={values.confirmNewPassword}
                                    errors={(touched.confirmNewPassword && errors.confirmNewPassword) && errors.confirmNewPassword}
                                    addShowPassword
                                />
                                <div className={styles.btnContainer}>
                                    <Button buttonText="Reset Password" />
                                </div>  
                            </Form>   
                        )
                    }

                </Formik>
            </div>
            <AsideContainer />
            {status === 'success' &&
             <Overlay>
                <div className={`${styles.success} ${styles.modalContainer}`}>
                    <div className={`display-flex ${styles.imgContainer}`}> 
                        <img src={resetSuccess} alt="Reset Password Success" width="50px" height="50px" />
                    </div>
                    <p className={`${styles.success} ${styles.modalTitle}`}>Password Reset Successfully!</p>
                    <p className={`${styles.success} ${styles.modalText}`}>Your new password has been set. Use it for your new log in password to continue.</p>
                    <Button 
                        style={{
                            'width': '80%',
                            'display': 'block',
                            'padding-top': '20px',
                            'padding-bottom': '20px',
                            'margin-top': '20px',
                            'border-radius': '2px'
                         }}
                         buttonText="Proceed to login" 
                         onClick={changeToSignInView}
                         />
                </div>
            </Overlay>}
            {status === 'error' &&
            <Overlay>
                <div className={`${styles.error} ${styles.modalContainer}`}>
                    <div className={`display-flex ${styles.imgContainer}`}> 
                        <img src={resetFailure} alt="Reset Password Error" width="50px" height="50px" />
                    </div>
                    <p className={`${styles.error} ${styles.modalTitle}`}>An Error Occured!</p>
                    <p className={`${styles.error} ${styles.modalText}`}>An error occured so we were unable to process your new password. Please Try again.</p>
                    <Button 
                        style={{
                            'width': '80%',
                            'display': 'block',
                            'padding-top': '20px',
                            'padding-bottom': '20px',
                            'margin-top': '20px',
                            'border-radius': '2px',
                            'background': '#E04F5F'
                         }}
                         buttonText="Try Again" 
                         onClick={() => setStatus('')}
                         />
                </div>
            </Overlay>}
        </div>
    )
}

export default ResetPassword
