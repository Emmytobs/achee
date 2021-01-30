import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Header.module.css'

import acheeLogo from '../../Shared/icons/acheeLogo_white.png';
import arrowDown from '../../Shared/icons/arrow-down.png';
import notificationIcon from '../../Shared/icons/Notification.png';
import userDP from '../../Shared/icons/user-dp.png';

import MobileHeader from '../../Shared/MobileHeader/MobileHeader';

function Header(props) {
    const [activeTab, setActiveTab] = useState('home');

    const changeTab = (tab) => {
        setActiveTab(tab);
        console.log(tab)
    }

    const takeTo = (path, active) => {
        changeTab(active)
        if(path) {
            props.history.push(path);
        } 
    }

    return (
        <div className={styles.headerContainer}>
            <header className={`display-flex ${styles.header}`}>
                <div className={`display-flex ${styles.logoContainer}`}>
                    <img src={acheeLogo} alt="Achee Logo" width="18px" height="18px" />
                    <span>achee</span>
                </div>
                <nav className={`display-flex ${styles.navbar}`}>
                    <Link className={styles.tab} onClick={takeTo.bind(null, '/app', 'home')}>
                        Home
                        {activeTab === "home" && <span className={styles.indicator}></span>}
                    </Link>
                    <Link className={styles.tab} onClick={takeTo.bind(null, '/app/create-portfolio', 'portfolio')}>
                        Portfolio
                        {activeTab === "portfolio" && <span className={styles.indicator}></span>}
                    </Link>
                    <Link onClick={takeTo.bind(null, null, 'resources')} className={`${styles.tab} ${styles.resourcesTab}`}>
                        Resources <img src={arrowDown} alt="Arrow Down"/>
                        {activeTab === "resources" && <span className={styles.indicator}></span>}
                    </Link>
                    <Link onClick={takeTo.bind(null, null, 'contact')} className={styles.tab} to="">
                        Contact Us
                        {activeTab === "contact" && <span className={styles.indicator}></span>}
                    </Link>
                    <Link><button className={styles.upgradeButton}>Upgrade</button></Link>
                    <Link><img src={notificationIcon} alt="Notification" /></Link>
                    <div className={`display-flex ${styles.dropdownBtn}`}>
                        <img src={userDP} alt="User's Profile Pic" />
                        <p className={styles.userFullName}>Adesanoye Dorcas</p>
                        <img src={arrowDown} alt="Arrow Down"/>
                    </div>
                </nav>
            </header>
            <div className={styles.mobileHeaderContainer}>
                <MobileHeader />
            </div>
        </div>
    )
}

export default Header
