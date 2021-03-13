import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom'

import styles from './Header.module.css'

import acheeLogo from '../../Shared/icons/acheeLogo_white.png';
import arrowDown from '../../Shared/icons/arrow-down.png';
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

    const logoutUser = () => {
        localStorage.removeItem('achee-app-state')
        window.location = '/account/login';
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

                    {props.subscriptionPlan === 'FREE' && <Link><button className={styles.upgradeButton}>Upgrade</button></Link>}

                    <Link onClick={showProfileDropdown} className={`display-flex ${styles.dropdownBtn}`}>
                        <img src={props.profileImage} alt="User's Profile Pic" />
                        
                        {(props.firstname || props.lastname) ? 
                            <p className={styles.userFullName}>{props.firstname} {props.lastname}</p> : 
                            <p className={styles.userFullName}>Update your profile</p>
                        }

                        <img src={arrowDown} alt="Arrow Down"/>
                        <ul style={{ opacity: profileMenu ? '1' : '0', pointerEvents: profileMenu ? 'all' : 'none' }} className={styles.dropdown}>
                            <li name="dropdown-item"><Link to="/app/profile">My Profile</Link></li>
                            <li name="dropdown-item"><Link to="/app/profile">Change Password</Link></li>
                            <li name="dropdown-item"><Link to="/app/reports">Reports</Link></li>
                            <li name="dropdown-item" className={styles.logoutBtn} onClick={logoutUser}>Sign out</li>
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

function mapStateToProps (state) {
    return {
        firstname: state.user.firstname, 
        lastname: state.user.lastname, 
        profileImage: state.user.profileImage,
        subscriptionPlan: state.user.subscriptionPlan
    }
    // return {
    //     firstname: 'Name', 
    //     lastname: 'Surname', 
    //     profileImage: 'image',
    //     subscriptionPlan: 'FREE'
    // }
}

export default connect(mapStateToProps, null)(Header)
