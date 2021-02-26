import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './MobileHeader.module.css';

import menuIcon from '../../Shared/icons/menu-icon.png';
import acheeLogo from '../../Shared/icons/acheeLogo_blue.png'
import acheeLogoWhite from '../../Shared/icons/acheeLogo_white.png'
import closeMenuIcon from '../../Shared/icons/close-menu-icon.png'
function MobileHeader(props) {
    const [isMenuShowing, setIsMenuShowing] = useState(false)
    
    useEffect(() => {
        // The following code prevents the body from scrolling when the modal is showing
        const bodyElement = document.querySelector('body');
        isMenuShowing ? bodyElement.style.overflowY = "hidden" : bodyElement.style.overflowY = "scroll"
    }, [isMenuShowing])

    const toggleShowMenu = (e) => {
        setIsMenuShowing(!isMenuShowing)
    }

    return (
        <header className={`${styles.mobileHeader}`}>
            <div style={props.collapsedMenuStyle} className={`${styles.collapsedMenuBar} ${styles.menuBar}`}>
                <div className={`display-flex ${styles.mobileLogo}`}>
                    <img src={acheeLogo} alt="Achee" width="16px" height="16px" />
                    <span>achee</span>
                </div>
                <button className={styles.openMenuBtn} onClick={toggleShowMenu}>
                    <img src={menuIcon} alt="Menu Icon" />
                </button>
            </div>

            {/* Menu Items Container */}
            <div
                // style={{ left: isMenuShowing ? 0 : '100%', visibility: isMenuShowing ? 'visible' : 'hidden' }}
                style={{ opacity: isMenuShowing ? 1 : 0, pointerEvents: isMenuShowing ? 'all': 'none'}}
                className={styles.menuContainer}>
                <div className={styles.menuBar}>
                    <div className={`display-flex ${styles.mobileLogo}`}>
                        <img src={acheeLogoWhite} alt="Achee" width="16px" height="16px" />
                        <span style={{ color: "#fff"}}>achee</span>
                    </div>
                    <button className={styles.closeMenuBtn} onClick={toggleShowMenu}>
                        <img src={closeMenuIcon} alt="Close Menu Icon" width="20px" height="20px" />
                    </button>
                </div>
                <div className={styles.menuItems}>
                    <ul>
                        <li><Link to="/app">Home</Link></li>
                        <li><Link to="/app/create-portfolio">Portfolio</Link></li>
                        <li><Link>Resources</Link></li>
                        <li><Link to="/app/referrals">Refer a friend</Link></li>
                        <li><Link><img src=""  alt="Your profile pic" />My Profile</Link></li>
                        <li className={styles.upgrade}><Link>Upgrade</Link></li>
                        <li className={styles.signOut}><Link>Sign out</Link></li>
                    </ul>
                </div>
            </div>
            {/* } */}
        </header>
    )
}

export default MobileHeader
