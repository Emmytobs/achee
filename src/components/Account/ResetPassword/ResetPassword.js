import React, { useState } from 'react'
import { Form, Input, Button } from '../Form/Form';
import AsideContainer from '../AsideContainer/AsideContainer'
import Overlay from '../../Shared/Overlay'

import styles from './ResetPassword.module.css'
import acheeLogo from '../images/acheeLogo.png';

import resetSuccess from '../images/reset-success.png'
import resetFailure from '../images/reset-failure.png'

function ResetPassword(props) {
    const [status, setStatus] = useState(null)

    const changeToSignInView = () => {
        props.history.push('/account?page=sign-in');
    }
    return (
        <div className={`display-flex ${styles.resetPasswordContainer}`}>
            <div className={styles.formContainer}>
                <div className={`display-flex ${styles.logoAndBackBtnContainer}`}>
                    <div className={`display-flex ${styles.logo}`}>
                        <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                        <span>achee</span>
                    </div>
                    <button className={styles.backbtn} onClick={changeToSignInView} >Go Back</button>
                </div>
                <div className={styles.textContainer}>
                    <h2>Reset Password</h2>
                    <p>To reset your password, please set a strong password that has at least 8 characters long.</p>
                </div>

                <Form>
                    <Input 
                        name="new-password"
                        type="password"
                        placeholder="Enter new password"
                        labelText="New Password"
                        id="new-password"
                        addShowPassword
                    />
                    <Input 
                        name="confirm-new-password"
                        type="password"
                        placeholder="Confirm new password"
                        labelText="Confirm Password"
                        id="confirm-new-password"
                        addShowPassword
                    />
                    <div className={styles.btnContainer}>
                        <Button buttonText="Reset Password" />
                    </div>
                </Form>
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
                         />
                </div>
            </Overlay>}
        </div>
    )
}

export default ResetPassword
