import React from 'react'

import styles from './SignIn.module.css';

import acheeLogo from '../images/acheeLogo.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import arrowRight from '../images/arrow-right.png';
import lock from '../images/lock.png';
import message from '../images/message.png';

function SignIn(props) {
    const changeToSignUpView = (e) => {
        props.history.push('/account?page=sign-up')
    }
    return (
        <div className={`flex-container ${styles.signinWraper}`}>
            <div className={styles.signinFormContainer}>
                <div className={`display-flex ${styles.logo}`}>
                    <img src={acheeLogo} alt="Achee" width="13px" height="13px" />
                    <p>achee</p>
                </div>
                <h2 className={styles.greeting}>
                    Welcome Back! <br />
                    Sign in here, please?
                </h2>

                <div className={`display-flex ${styles.oauthButtonsContainer}`}>
                    <button class={`display-flex ${styles.oauthButton} ${styles.googleBtn}`}>
                        <img src={google} alt="Google" width="15px" height="14px" />
                        <span>Signup with Google</span>
                    </button>
                    <button class={`display-flex ${styles.oauthButton} ${styles.facebookBtn}`}>
                        <img src={facebook} alt="Facebook" width="10px" height="16px"/>
                        <span>Signup with Facebook</span>
                    </button>
                </div>

                <div class={`display-flex ${styles.orContainer}`}>
                    <span class="line"></span>
                    <span class="or-text">OR</span>
                    <span class="line"></span>
                </div>

                <form>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <div className={`display-flex ${styles.inputGroup}`}>
                            <img src={message} alt="mailbox" width='16px' height='16px' />
                            <input type="text" name="email" id="email" placeholder="Enter your registered email"/>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Create password</label>
                        <div className={`display-flex ${styles.inputGroup}`}>
                            <img src={lock} alt="padlock" width='16px' height='16px' />
                            <input type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                    <button className={styles.forgotPassword}>Forgot Password?</button>

                    <button className={`display-flex ${styles.submitBtn}`}>
                        <span>Signin account</span>
                        <img src={arrowRight} alt="arrow-right" width="18px" height="18px" />
                    </button>
                </form>

               
                <div className={styles.switchToSignupContainer}>
                    <p>First time here ?</p>
                    <button onClick={changeToSignUpView} className={styles.switchToSignupBtn}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
