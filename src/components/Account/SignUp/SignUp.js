import React from 'react'
// import './SignUp.css';

import acheeLogo from '../images/acheeLogo.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import arrowRight from '../images/arrow-right.png';
import lock from '../images/lock.png';
import message from '../images/message.png';
import signupImage from '../images/signup-image.png';

function SignUp(props) {
    const changeToSignIn = (e) => {
        props.history.push('/account?page=sign-in')
    }
    return (
        <div className="flex-container login-wrapper">
            <div className="login-container">
                <div className="display-flex logo">
                    <img src={acheeLogo} alt="Achee" width="13px" height="13px" />
                    <p>achee</p>
                </div>

                <div className="form-container">
                    <h2>
                        Take Smarter Investment Decisions. <br />
                        Sign up for free.
                    </h2>
                    
                    <div className="display-flex oauth-buttons-container">
                        <button class="display-flex oauth-button google-btn">
                            <img src={google} alt="Google" width="15px" height="14px" />
                            <span>Signup with Google</span>
                        </button>
                        <button class="display-flex oauth-button facebook-btn">
                            <img src={facebook} alt="Facebook" width="10px" height="16px"/>
                            <span>Signup with Facebook</span>
                        </button>
                    </div>

                    <div class="display-flex or-container">
                        <span class="line"></span>
                        <span class="or-text">OR</span>
                        <span class="line"></span>
                    </div>

                    <form>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <div className="display-flex input-group">
                                <img src={message} alt="mailbox" width='16px' height='16px' />
                               <input type="text" name="email" id="email" placeholder="Enter your email"/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Create password</label>
                            <div className="display-flex input-group">
                                <img src={lock} alt="padlock" width='16px' height='16px' />
                                <input type="password" name="password" id="password" placeholder="Enter your password"/>
                            </div>
                        </div>
                        <button className="display-flex submit-btn">
                            <span>Signup for free</span>
                            <img src={arrowRight} alt="arrow-right" width="18px" height="18px" />
                        </button>
                    </form>
                    <div className="switch-to-signin-container">
                        <p>Already have an account?</p>
                        <button onClick={changeToSignIn} className="switch-to-signin-btn">Sign in</button>
                    </div>
                </div>
            </div>
            <div className="aside-container">
                <img src={signupImage} alt="Achee signup img"/>
                <h2>
                    Achee is the favorite investing <br />
                    tool of many investors.
                </h2>
            </div>
        </div>
    )
}

export default SignUp
