import React from 'react'
import { Form, Input, Button } from '../Form/Form';
import MobileHeader from '../../Shared/MobileHeader/MobileHeader';

import styles from './SignIn.module.css';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import leftSignInIcon from '../images/left-sign-in-icon.png';
import rightSignInIcon from '../images/right-sign-in-icon.png';
import menuIcon from '../../Shared/icons/menu-icon.png';

function SignIn(props) {
    const changeToSignUpView = (e) => {
        props.history.push('/account?page=sign-up')
    }

    const changeToForgotPasswordView = (e) => {
        props.history.push('/account?page=forgot-password');
    }

    return (
        <div className={`display-flex ${styles.signinWrapper}`}>
            <div className={styles.mobileHeaderContainer}>
                <MobileHeader />
            </div>
            {/* <header className={`display-flex ${styles.mobileHeader}`}>
                <div className={`display-flex ${styles.mobileLogo}`}>
                    <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                    <span>achee</span>
                </div>
                <div className={styles.menu}>
                    <img src={menuIcon} alt="Menu Icon"/>
                </div>
            </header> */}
            <img src={leftSignInIcon} alt="Left Icon" className={styles.signInIcon} />
            <div className={styles.signinFormContainer}>
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
                <Form>
                    <Input 
                        name="email"
                        type="email"
                        placeholder="Enter your registered email"
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
                     <div className={styles.forgotPasswordContainer}>
                        <button className={styles.forgotPassword} onClick={changeToForgotPasswordView}>Forgot Password?</button>
                    </div>
                    <Button buttonText="Signin account" rightIcon style={{marginTop: '25px'}} />
                </Form>
               
                <div className={styles.switchToSignupContainer}>
                    <p>First time here ?</p>
                    <button onClick={changeToSignUpView} className={styles.switchToSignupBtn}>Sign up</button>
                </div>
            </div>
            <img src={rightSignInIcon} alt="Right Icon" className={styles.signInIcon} />
        </div>
    )
}

export default SignIn
