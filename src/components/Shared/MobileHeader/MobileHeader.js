import React from 'react'
import styles from './MobileHeader.module.css';
import menuIcon from '../../Shared/icons/menu-icon.png';
import acheeLogo from '../../Shared/icons/acheeLogo_blue.png'
function MobileHeader() {
    return (
        <header className={`display-flex ${styles.mobileHeader}`}>
            <div className={`display-flex ${styles.mobileLogo}`}>
                <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                <span>achee</span>
            </div>
            <div className={styles.menu}>
                <img src={menuIcon} alt="Menu Icon"/>
            </div>
        </header>
    )
}

export default MobileHeader
