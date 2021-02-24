import React from 'react'
import { Button, PrimaryButton } from '../Shared/Utilities/Button/Button'

import acheeLogo from '../Shared/icons/acheeLogo_blue.png';
import noInternetIllustration from './no-internet-illustration.png'
import styles from './NoInternet.module.css';

function NoInternet() {
    return (
        <div className={styles.noInternetContainer}>
            <div>
                <div className={"display-flex justify-start align-center " + styles.logo}>
                    <img src={acheeLogo} alt="Achee Logo" width="19px" height="19px" />
                    <span>achee</span>
                </div>
                <div className={"display-flex justify-between align-center " + styles.flexContainer}>
                    <div>
                        <h1>No Internet Connection.</h1>
                        <p>Please check your connection again or connect to Wi-Fi.</p>
                        <div className={"display-flex justify-start align-center"}>
                            <PrimaryButton>Retry</PrimaryButton>
                            <Button style={{ backgroundColor: '#F3EFFF', marginLeft: "20px" }}>Go to homepage</Button>
                        </div>
                    </div>
                    <img src={noInternetIllustration} alt="No Internet Illustration" width="547px" height="427px" />
                </div>
            </div>
        </div>
    )
}

export default NoInternet
