import React from 'react'
import styles from './SignUp.module.css';

import acheeLogo from '../images/acheeLogo.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';

import { Form, Input, Button } from '../Form/Form';
import AsideContainer from '../AsideContainer/AsideContainer';

function SignUp(props) {
    const changeToSignIn = (e) => {
        props.history.push('/account?page=sign-in')
    }
    return (
        <div className={`flex-container ${styles.loginWrapper}`}>
            <div className={styles.loginContainer}>
                <div className={`display-flex ${styles.logo}`}>
                    <img src={acheeLogo} alt="Achee" width="13px" height="13px" />
                    <p>achee</p>
                </div>

                <div className={styles.formContainer}>
                    <h2>
                        Take Smarter Investment Decisions. <br />
                        Sign up for free.
                    </h2>
                    
                    <div className={`display-flex ${styles.oauthButtonsContainer}`}>
                        <button class={`display-flex ${styles.oauthButton} ${styles.googleBtn}`}>
                            <img src={google} alt="Google" width="20px" height="20px" />
                            <span>Signup with Google</span>
                        </button>
                        <button class={`display-flex ${styles.oauthButton} ${styles.facebookBtn}`}>
                            <img src={facebook} alt="Facebook" width="10px" height="20px"/>
                            <span>Signup with Facebook</span>
                        </button>
                    </div>

                    <div class={`display-flex ${styles.orContainer}`}>
                        <span class={styles.line}></span>
                        <span class={styles.orText}>OR</span>
                        <span class={styles.line}></span>
                    </div>

                    <Form width="385px">
                        <Input 
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            id="email"
                            labelText="Email"
                        />
                        <Input 
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            id="password"
                            labelText="Create password"
                        />
                        <Button buttonText="Signup for free" />
                    </Form>
                    {/* <form>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <div className={`display-flex ${styles.inputGroup}`}>
                                <img src={message} alt="mailbox" width='16px' height='16px' />
                               <input type="text" name="email" id="email" placeholder="Enter your email"/>
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Create password</label>
                            <div className={`display-flex ${styles.inputGroup}`}>
                                <img src={lock} alt="padlock" width='16px' height='16px' />
                                <input type="password" name="password" id="password" placeholder="Enter your password"/>
                            </div>
                        </div>
                        <button className={`display-flex ${styles.submitBtn}`}>
                            <span>Signup for free</span>
                            <img src={arrowRight} alt="arrow-right" width="18px" height="18px" />
                        </button>
                    </form> */}
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
