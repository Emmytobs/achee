import React, { useState } from 'react'
import styles from './SignUp.module.css';
import { Form, Input, Button } from '../Form/Form';
import ErrorBox from '../ErrorBox';
import AsideContainer from '../AsideContainer/AsideContainer';

import axios from 'axios';

import { Formik } from 'formik';
import * as Yup from 'yup';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';


function SignUp(props) {
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const changeToSignIn = (e) => {
        props.history.push('/account?page=sign-in')
    }

    const createUser = async (formData) => {
        setErrorMessage('')
        setIsSubmitting(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, formData);
            if (response.status === 201) {
                props.history.push('/account?page=sign-in');
                setIsSubmitting(false)
            }
        } catch(error) {
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

    const SignUpSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is not valid')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password doesn\'t meet criteria [8 chars min]')
            .required('Required')
    })

    return (
        <div className={`flex-container ${styles.loginWrapper}`}>
            <div className={styles.loginContainer} style={{ opacity: isSubmitting && '0.5' }}>
                <div className={`display-flex ${styles.logo}`}>
                    <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                    <span>achee</span>
                </div>

                <div className={styles.formContainer}>
                    <h2>
                        Take Smarter Investment Decisions. <br />
                        Sign up for free.
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
                        validationSchema = {SignUpSchema}
                        onSubmit = {(values) => {
                            createUser(values)
                        }}
                    >
                        {
                            ({ errors, touched, values, handleSubmit, handleChange }) => (
                                <Form onSubmit={handleSubmit} noValidate>
                                    <Input 
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
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
                                    <Button buttonText="Signup for free" rightIcon />
                                </Form>
                            )
                        }
                    </Formik>

                    <div className={styles.switchToSigninContainer}>
                        <p>Already have an account?</p>
                        <button onClick={changeToSignIn} className={styles.switchToSigninBtn}>Sign in</button>
                    </div>
                </div>
            </div>
            <div className={styles.asideContainer}>
                <AsideContainer />
            </div>
        </div>
    )
}

export default SignUp
