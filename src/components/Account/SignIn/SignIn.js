import React from 'react'

import './SignIn.css';

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
        <div className="flex-container signin-wraper">
            <div className="signin-form-container">
                <div className="logo">
                    <img src={acheeLogo} alt="Achee" />
                    <p>achee</p>
                </div>
                <h2 className="greeting">
                    Welcome Back! <br />
                    Sign in here, please?
                </h2>

                <div className="oauth-buttons-container">
                    <button class="oauth-button google-btn">
                        <img src={google} alt="Google"  width="20px" height="20px"/>
                        Signup with Google
                    </button>
                    <button class="oauth-button facebook-btn">
                        <img src={facebook} alt="Facebook" width="20px" height="10px" />
                        Signup with Facebook
                    </button>
                </div>

                <div class="or-container">
                    <span class="line"></span>
                    <span class="or-text">OR</span>
                    <span class="line"></span>
                </div>

                <form>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <div className="input-group">
                            <img src={message} alt="mailbox" width='16px' height='16px' />
                            <input type="text" name="email" id="email" placeholder="Enter your registered email"/>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <div className="input-group">
                            <img src={lock} alt="padlock" width='16px' height='16px' />
                            <input type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                    <button className="forgot-password">Forgot Password?</button>

                    <button>
                        <span>Signin account</span>
                        <img src={arrowRight} alt="arrow-right" />
                    </button>
                </form>
                <div className="switch-to-signup-container">
                    <p>First time here ?</p>
                    <button onClick={changeToSignUpView} className="switch-to-signup-btn">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
