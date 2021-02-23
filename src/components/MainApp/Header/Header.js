import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import styles from './Header.module.css'

import acheeLogo from '../../Shared/icons/acheeLogo_white.png';
import arrowDown from '../../Shared/icons/arrow-down.png';
import notificationIcon from '../../Shared/icons/Notification.png';
import userDP from '../../Shared/icons/user-dp.png';

import MobileHeader from '../../Shared/MobileHeader/MobileHeader';
import Overlay from '../../Shared/Overlay';

function Header(props) {
    const [profileMenu, setProfileMenu] = useState(false);

    const { url } = useRouteMatch()
    const routeIsInUrl = (route, exact) => {
        if (exact) {
            return url === route
        }
        return url.includes(route);
    }

    const showProfileDropdown = (e) => {
        const name = e.target.getAttribute('name');
        if (name === 'dropdown-item') 
            return;
        setProfileMenu(!profileMenu);
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

                    <Link className={`${styles.tab} ${styles.resourcesTab}`} to="/app/resources" >
                        Resources
                        {routeIsInUrl('/resources') && <span className={styles.indicator}></span>}
                    </Link>

                    <Link className={styles.tab} to="/app/referrals">
                        Refer a Friend
                        {routeIsInUrl('/referrals') && <span className={styles.indicator}></span>}
                    </Link>

                    <Link><button className={styles.upgradeButton}>Upgrade</button></Link>

                    <Link onClick={showProfileDropdown} className={`display-flex ${styles.dropdownBtn}`}>
                        <img src={userDP} alt="User's Profile Pic" />
                        <p className={styles.userFullName}>Adesanoye Dorcas</p>
                        <img src={arrowDown} alt="Arrow Down"/>
                        <ul style={{ opacity: profileMenu ? '1' : '0' }} className={styles.dropdown}>
                            <li name="dropdown-item"><Link to="/app/profile">My Profile</Link></li>
                            <li name="dropdown-item"><Link to="/app/profile">Change Password</Link></li>
                            <li name="dropdown-item"><Link to="/app/reports">Reports</Link></li>
                            <li name="dropdown-item" className={styles.logoutBtn}>Sign out</li>
                        </ul>
                    </Link>
                </nav>
            </header>
            <div className={styles.mobileHeaderContainer}>
                <MobileHeader />
            </div>
            {profileMenu && <Overlay closeModalHandler={setProfileMenu}></Overlay>}
        </div>
    )
}

export default Header
