import React from 'react'

import styles from './AsideContainer.module.css';
import signupImage from '../images/signup-image.png';

function AsideContainer() {
    return (
        <div className={styles.asideContainer}>
            <img src={signupImage} alt="Achee signup img"/>
            <h2>
                Achee is the favorite investing <br />
                tool of many investors.
            </h2>
        </div>
    )
}

export default AsideContainer
