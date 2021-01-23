import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './MobileHeader.module.css';

import menuIcon from '../../Shared/icons/menu-icon.png';
import acheeLogo from '../../Shared/icons/acheeLogo_blue.png'
import acheeLogoWhite from '../../Shared/icons/acheeLogo_white.png'
import closeMenuIcon from '../../Shared/icons/close-menu-icon.png'
function MobileHeader() {
    const [isMenuShowing, setIsMenuShowing] = useState(true)
    const toggleShowMenu = (e) => {
        setIsMenuShowing(!isMenuShowing)
    }

    return (
        <header className={`${styles.mobileHeader}`}>
            <div className={styles.menuBar}>
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
                style={{ left: isMenuShowing ? 0 : '100%', visibility: isMenuShowing ? 'visible' : 'hidden' }}
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
                        <li><Link>Home</Link></li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link>Learn</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>My Profile</Link></li>
                        <li><Link>Upgrade</Link></li>
                        <li><Link>Sign out</Link></li>
                    </ul>
                </div>
            </div>
            {/* } */}
        </header>
    )
}

export default MobileHeader
