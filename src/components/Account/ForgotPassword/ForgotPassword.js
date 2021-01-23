import React, { useState } from 'react'

import { Form, Input, Button } from '../Form/Form';
import MobileHeader from '../../Shared/MobileHeader/MobileHeader';

import AsideContainer from '../AsideContainer/AsideContainer'
import Overlay from '../../Shared/Overlay';

import acheeLogo from '../../Shared/icons/acheeLogo_blue.png';
import modalMailbox from '../images/modal-mailbox.png';

import styles from './ForgotPassword.module.css';


function ForgotPassword(props) {

    const [showEmailModal, setShowEmailModal] = useState(false);

    const changeToSignIn = (e) => {
        props.history.push('/account?page=sign-in');
    }
    
    return (
        <div className={`display-flex ${styles.forgotPasswordContainer}`}>
            <div className={styles.mobileHeaderContainer}>
                <MobileHeader />
            </div>
            <div className={styles.mobileBackBtnContainer}>
                <button onClick={changeToSignIn} >Go Back</button>
            </div>
            <div className={styles.formContainer}>
                <div className={`display-flex ${styles.logoAndBackBtnContainer}`}>
                    <div className={`display-flex ${styles.logo}`}>
                        <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                        <span>achee</span>
                    </div>
                    <button onClick={changeToSignIn} >Go Back</button>
                </div>


                <div className={styles.textContainer}>
                    <h2>Forgot Password</h2>
                    <p>Fill the information below to help. This would help retrieve your password.</p>
                </div>
                <Form>
                    <Input 
                        name="email"
                        type="text"
                        placeholder="Enter registered email"
                        labelText="Email"
                        id="email"
                    />
                    <div className={styles.btnContainer}>
                        <Button buttonText="Continue" rightIcon />
                    </div>
                </Form>
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

export default ForgotPassword
