import React from 'react'
import { PrimaryButton } from '../Shared/Utilities/Button/Button'

import acheeLogo from '../Shared/icons/acheeLogo_blue.png';
import comingSoonIllustration from './coming-soon-illustration.png'
import styles from './ComingSoon.module.css';

function ComingSoon() {
    return (
        <div className={styles.comingSoonContainer}>
            <div>
                <div className={"display-flex justify-start align-center " + styles.logo}>
                    <img src={acheeLogo} alt="Achee Logo" width="19px" height="19px" />
                    <span>achee</span>
                </div>
                <div className={"display-flex justify-between align-center " + styles.flexContainer}>
                    <img src={comingSoonIllustration} alt="Coming soon page" width="750px" height="500px" />
                    <div className={styles.helptext}>
                        <h1>Coming Soon</h1>
                        <p>We are currently working on this page. Trust us. We’ll launch soon, very soon.</p>
                        <PrimaryButton>Go Back</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
