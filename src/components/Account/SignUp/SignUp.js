import React, { useState } from 'react'
import styles from './SignUp.module.css';

import axios from 'axios';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';

import { Form, Input, Button } from '../Form/Form';
import AsideContainer from '../AsideContainer/AsideContainer';

function SignUp(props) {
    const [ form, setForm ] = useState({ email: '', password: '' })
    const [ inputError, setInputError ] = useState({ email: '', password: '' });
    
    const changeToSignIn = (e) => {
        props.history.push('/account?page=sign-in')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(value === '') {
            setInputError({ ...inputError, [name]: '' })
        }
        setForm({ ...form, [name]: value });
    }

    const dataIsValid = () => {
        return false
    }

    const createUser = async (e) => {
        e.preventDefault();
        if( !dataIsValid() ) {
            // Error for password error
            // Password doesnt meet criteria [8 chars min]
            setInputError({ email: 'Email address not valid', password: 'Password doesnt meet criteria [8 chars min]' })
            return
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { ...form });
            if(!response) {
                // Display no internet page
                return
            }
            console.log(response);
            if (response.status === 201) {
                props.history.push('/account?page=sign-in');
            }
        } catch(error) {
            console.log(error.response)
        }
    }

    return (
        <div className={`flex-container ${styles.loginWrapper}`}>
            <div className={styles.loginContainer}>
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

                    <Form onSubmit={createUser} noValidate>
                        <Input 
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            labelText="Email"
                            onChange={handleChange}
                            inputError={inputError}
                            // errorText='Email address not valid'
                        />
                        <Input 
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            id="password"
                            labelText="Create password"
                            onChange={handleChange}
                            inputError={inputError}
                        />
                        <Button buttonText="Signup for free" rightIcon />
                    </Form>
                    <div className={styles.switchToSigninContainer}>
                        <p>Already have an account?</p>
                        <button onClick={changeToSignIn} className={styles.switchToSigninBtn}>Sign in</button>
                    </div>
                </div>
            </div>
            <AsideContainer />
        </div>
    )
}

export default SignUp
