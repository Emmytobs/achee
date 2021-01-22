import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

import acheeLogo from '../../Shared/icons/acheeLogo.png';
import arrowDown from '../../Shared/icons/arrow-down.png';
import notificationIcon from '../../Shared/icons/Notification.png';
import userDP from '../../Shared/icons/user-dp.png';

function Header() {
    return (
        <header className={`display-flex ${styles.header}`}>
            <div className={`display-flex ${styles.logoContainer}`}>
                <img src={acheeLogo} alt="Achee Logo" width="16px" height="16px" />
                <span>achee</span>
            </div>
            <nav className={`display-flex ${styles.navbar}`}>
                <Link to="">Home</Link>
                <Link to="">Portfolio</Link>
                <Link to="" className={styles.resourcesTab}>Resources <img src={arrowDown} alt="Arrow Down"/></Link>
                <Link to="">Contact Us</Link>
                <Link><button className={styles.upgradeButton}>Upgrade</button></Link>
                <Link><img src={notificationIcon} alt="Notification" /></Link>
                <div className={`display-flex ${styles.dropdownBtn}`}>
                    <img src={userDP} alt="User's Profile Pic" />
                    <p className={styles.userFullName}>Adesanoye Dorcas</p>
                    <img src={arrowDown} alt="Arrow Down"/>
                </div>
            </nav>
        </header>
    )
}

export default Header
