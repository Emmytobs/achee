import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css';
import { Button } from '../../Account/Form/Form';

import acheeLogo from '../../Shared/icons/acheeLogo_white.png';
import facebook from '../../Shared/icons/facebook-footer.png';
import linkedIn from '../../Shared/icons/linked-in-footer.png';
import twitter from '../../Shared/icons/twitter-footer.png';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`${styles.footer}`}>
            <div className={styles.gridContainer}>
                
                <div className={`${styles.logo}`}>
                    <img src={acheeLogo} alt="Achee logo" width="16px" height="16px"/>
                    <span>achee</span>
                </div>

                <div className={styles.btnContainer}>
                    <Button buttonText="Click to Upgrade" style={{ background: 'rgba(0,0,0,0.2)', margin: '0'}} />
                </div>

                <div className={`${styles.menuList} ${styles.sitemap}`}>
                    <h3>Sitemap</h3>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link>Learn</Link></li>
                    </ul>
                </div>
                <div className={`${styles.menuList} ${styles.company}`}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link>About Us</Link></li>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className={`${styles.menuList} ${styles.support}`}>
                    <h3>Support</h3>
                    <ul>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Referrals</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div className={styles.socialMedia}>
                    <h3>Social Media</h3>
                    <div>
                        <p>Follow us on social media to find out the latest updates on our progress</p>
                        <div className={styles.socialMediaIcons}>
                            <img src={facebook} alt="Facebook link" width="40px" height="40px" />
                            <img src={linkedIn} alt="LinkedIn link" width="40px" height="40px" />
                            <img src={twitter} alt="Twitter link" width="40px" height="40px" />
                        </div>
                    </div>
                </div>
            
            </div>
            <small>
                Achee @ {currentYear}. All Rights Reserved
            </small>
        </footer>
    )
}

export default Footer
