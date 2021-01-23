import React, { useState } from 'react'
import styles from './MobileHeader.module.css';
import menuIcon from '../../Shared/icons/menu-icon.png';
import acheeLogo from '../../Shared/icons/acheeLogo_blue.png'
import acheeLogoWhite from '../../Shared/icons/acheeLogo_white.png'
import closeMenuIcon from '../../Shared/icons/close-menu-icon.png'
function MobileHeader() {
    const [isMenuShowing, setIsMenuShowing] = useState(false)
    const toggleShowMenu = (e) => {
        setIsMenuShowing(!isMenuShowing)
    }

    return (
        <header style={{ backgroundColor: isMenuShowing ? "#805CF5" : "#fff"}} className={`${styles.mobileHeader}`}>
            <div className={styles.menuBar}>
                <div className={`display-flex ${styles.mobileLogo}`}>
                    <img src={isMenuShowing ? acheeLogoWhite : acheeLogo} alt="Achee" width="16px" height="16px" />
                    <span style={{ color: isMenuShowing && "#fff"}}>achee</span>
                </div>
                <button className={styles.openMenuBtn} onClick={toggleShowMenu}>
                    {isMenuShowing ? <img src={closeMenuIcon} alt="Close Menu Icon" width="20px" height="20px" /> : <img src={menuIcon} alt="Menu Icon" />}
                </button>
            </div>

            <div style={{ left: isMenuShowing ? "0" : "100%" }} className={styles.menuContainer}>
                
            </div>
        </header>
    )
}

export default MobileHeader
