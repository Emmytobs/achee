import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import styles from './Header.module.css'

import acheeLogo from '../../Shared/icons/acheeLogo_white.png';
import arrowDown from '../../Shared/icons/arrow-down.png';
import notificationIcon from '../../Shared/icons/Notification.png';
import userDP from '../../Shared/icons/user-dp.png';

import MobileHeader from '../../Shared/MobileHeader/MobileHeader';

function Header(props) {
    const { url } = useRouteMatch()
    const routeIsInUrl = (route, exact) => {
        if (exact) {
            return url === route
        }
        return url.includes(route);
    }
   
    return (
        <div className={styles.headerContainer}>
            <header className={`display-flex ${styles.header}`}>
                <div className={`display-flex ${styles.logoContainer}`}>
                    <img src={acheeLogo} alt="Achee Logo" width="18px" height="18px" />
                    <span>achee</span>
                </div>
                <nav className={`display-flex ${styles.navbar}`}>
                    <Link className={styles.tab} to="/app">
                        Home
                        {routeIsInUrl('/app', 'exact') && <span className={styles.indicator}></span>}
                    </Link>
                    
                    <Link className={styles.tab} to="/app/create-portfolio">
                        Portfolio
                        {routeIsInUrl('/create-portfolio') && <span className={styles.indicator}></span>}
                    </Link>

                    <Link className={`${styles.tab} ${styles.resourcesTab}`}>
                        Resources <img src={arrowDown} alt="Arrow Down"/>
                        {routeIsInUrl('/resources') && <span className={styles.indicator}></span>}
                    </Link>

                    <Link className={styles.tab} to="/app/referrals">
                        Refer a Friend
                        {routeIsInUrl('/referrals') && <span className={styles.indicator}></span>}
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
