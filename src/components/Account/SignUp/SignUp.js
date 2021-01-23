import React from 'react'
import styles from './SignUp.module.css';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import menuIcon from '../../Shared/icons/menu-icon.png';

import { Form, Input, Button } from '../Form/Form';
import AsideContainer from '../AsideContainer/AsideContainer';

function SignUp(props) {
    const changeToSignIn = (e) => {
        props.history.push('/account?page=sign-in')
    }
    return (
        <div className={`flex-container ${styles.loginWrapper}`}>
            <header className={`display-flex ${styles.mobileHeader}`}>
                <div className={`display-flex ${styles.mobileLogo}`}>
                    <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                    <span>achee</span>
                </div>
                <div className={styles.menu}>
                    <img src={menuIcon} alt="Menu Icon"/>
                </div>
            </header>
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

                    <Form>
                        <Input 
                            name="email"
                            type="email"
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
                        <Button buttonText="Signup for free" rightIcon rightIconStyle={{ left: '5%' }} />
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
