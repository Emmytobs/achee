import React, { useState } from 'react'
import styles from './SignIn.module.css';
import { Form, Input, Button } from '../Form/Form';
import { connect } from 'react-redux'
import axios from 'axios';
import {
    saveAuthTokens
} from '../../../redux/dispatchers'

import ErrorBox from '../ErrorBox'
import { Formik } from 'formik';
import * as Yup from 'yup';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import leftSignInIcon from '../images/left-sign-in-icon.png';
import rightSignInIcon from '../images/right-sign-in-icon.png';

function SignIn(props) {
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const changeToSignUpView = (e) => {
        props.history.push('/account?page=sign-up')
    }

    const changeToForgotPasswordView = (e) => {
        props.history.push('/account?page=forgot-password');
    }

    const sendUserData = async (formData) => {
        setErrorMessage('');
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, formData);
            const{ accessToken, refreshToken }= response.data.data;
            localStorage.setItem('achee_accessToken', JSON.stringify(accessToken));
            localStorage.setItem('achee_refreshToken', JSON.stringify(refreshToken));
            
            saveAuthTokens([accessToken, refreshToken], props.dispatch);
            setIsSubmitting(false)
            props.history.push('/app');
        }
        catch(error) {
            setIsSubmitting(false)
            if(!error.response) {
                // Display no internet page
                setErrorMessage('Couldn\'t make request. Please check your internet connection')
                return
            }
            const { message } = error.response.data
            setErrorMessage(message)
        }        
    }

    const SignInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is not valid')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password doesn\'t meet criteria [8 chars min]')
            .required('Required')
    })

    return (
        <div className={`display-flex ${styles.signinWrapper}`}>
            <img src={leftSignInIcon} alt="Left Icon" className={styles.signInIcon} />
            <div className={styles.signinFormContainer} style={{ opacity: isSubmitting && '0.5' }}>
                <div className={`display-flex ${styles.logo}`}>
                    <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                    <span>achee</span>
                </div>
                <h2 className={styles.greeting}>
                    Welcome Back! <br />
                    Sign in here, please?
                </h2>

                <div className={`display-flex ${styles.oauthButtonsContainer}`}>
                    <button className={`display-flex ${styles.oauthButton} ${styles.googleBtn}`}>
                        <img src={google} alt="Google" width="20px" height="20px" />
                        <span>Signup with Google</span>
                    </button>
                    <button className={`display-flex ${styles.oauthButton} ${styles.facebookBtn}`}>
                        <img src={facebook} alt="Facebook" width="10px" height="20px"/>
                        <span>Signup with Facebook</span>
                    </button>
                </div>

                <div className={`display-flex ${styles.orContainer}`}>
                    <span className={styles.line}></span>
                    <span className={styles.orText}>OR</span>
                    <span className={styles.line}></span>
                </div>

                <div>
                    {errorMessage && <ErrorBox errorMessage={errorMessage} />}
                </div>

                <Formik
                    initialValues = {{ email: '', password: '' }}
                    validationSchema = {SignInSchema}
                    onSubmit = {(values) => {
                        sendUserData(values);
                    }}
                >
                    {
                        ({ errors, values, touched, handleSubmit, handleChange }) => (
                            <Form onSubmit={handleSubmit} noValidate>
                                <Input 
                                    name="email"
                                    type="email"
                                    placeholder="Enter your registered email"
                                    id="email"
                                    labelText="Email"
                                    onChange={handleChange}
                                    value={values.email}
                                    errors={(touched.email && errors.email) && errors.email}
                                />
                                <Input 
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    id="password"
                                    labelText="Create password"
                                    onChange={handleChange}
                                    value={values.password}
                                    errors={(touched.password && errors.password) && errors.password}
                                    addShowPassword
                                />
                                <div className={styles.forgotPasswordContainer}>
                                    <button className={styles.forgotPassword} onClick={changeToForgotPasswordView}>Forgot Password?</button>
                                </div>
                                <Button buttonText="Signin account" rightIcon style={{marginTop: '25px'}} />
                            </Form>
                        )
                    }
                </Formik>
               
                <div className={styles.switchToSignupContainer}>
                    <p>First time here ?</p>
                    <button onClick={changeToSignUpView} className={styles.switchToSignupBtn}>Sign up</button>
                </div>
            </div>
            <img src={rightSignInIcon} alt="Right Icon" className={styles.signInIcon} />
        </div>
    )
}

export default connect(null, null)(SignIn)
