import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../Shared/Utilities/Button/Button';

import styles from './Page404.module.css'
import Error404Illustration from './Error-404-illustration.png'
import acheeLogo from '../Shared/icons/acheeLogo_blue.png'

function Page404() {
    return (
        <div className={styles.page404Container}>
            <div>
                <div className={"display-flex justify-start align-center " + styles.logo}>
                    <img src={acheeLogo} alt="Achee logo" width="19px" height="19px" />
                    <span>achee</span>
                </div>
                <div className={"display-flex justify-between align-center " + styles.flexContainer}>
                    <div>
                        <h1>Error 404</h1>
                        <p>Oops! Page not found. Please go back to dashboard while we fix this problem.</p>
                        {/* <Link to="/app"> */}
                            <PrimaryButton>Go to homepage</PrimaryButton>
                        {/* </Link> */}
                    </div>
                    {/* <div className={}> */}
                        {/* <img src={Error404Illustration} alt="Error 404 Illustration" width="751px" height="505px" /> */}
                        <img src={Error404Illustration} alt="Error 404 Illustration" width="751px" height="450px" />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Page404
