import React from 'react'
import styles from './Landing.module.css';
import Footer from '../MainApp/Footer/Footer';
import { PrimaryButton } from '../Shared/Utilities'

import acheeLogo from '../Shared/icons/acheeLogo_white.png'

import landingPageMask from './images/landing-page-mask.png';
import landingImage from './images/landing-img.png';
import financeImg from './images/Finance-amico 1.png';
import featuresImg from './images/Group 9855.png';

function Landing() {
    return (
        <div>
            <header className={styles.headerContainer}>
                <nav className={'display-flex'}>
                    <div className={styles.logo}>
                        <img src={acheeLogo} alt="Achee Logo" />
                        <span>achee</span>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.signInBtn}>Sign in</button>
                        <PrimaryButton>Sign up</PrimaryButton>
                        {/* <button classNAme={styles.signInBtn}>Sign up</button> */}
                    </div>
                </nav>

                <div className={styles.landing}>
                    <h1 className={styles.headline}>
                        Manage All Your Investments <br />
                        On One Platform
                    </h1>
                    <p>
                        Monitor stocks, dividends, cryptocurrencies and other fixed income investments. With Achee, you stay on top of your money. 
                    </p>
                    <PrimaryButton>Get started for free</PrimaryButton>

                    <img src={landingImage} alt="Landing page Img" />
                </div>
            </header>
            <main className={styles.mainContent}>
                <section className={styles.section_one}>
                    <div className={styles.title}>
                        <div>
                            <span></span>
                            <h3>Track and manage your investments on Achee</h3>
                        </div>
                        <p>
                        Keeping track of your investments should be simple. Achee helps investors to manage their portfolios effortlessly and allows them to see how they are performing periodically.
                        </p>
                    </div>
                    <div className={`${styles.desktop} ${styles.financeImg}`}>
                        <img src={financeImg} alt="Finance Img" />
                    </div>
                    <ol className={styles.features}>
                        <li>
                            <span>01</span>
                            <div>
                                <h3>All your accounts in one place</h3>
                                <p>Get a real time view and easily track and manage your entire finance life with just one platfom.</p>
                            </div>
                        </li>
                        <li>
                            <span>02</span>
                            <div>
                                <h3>All your accounts in one place</h3>
                                <p>Get a real time view and easily track and manage your entire finance life with just one platfom.</p>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.mobile} ${styles.financeImg}`}>
                                <img src={financeImg} alt="Finance Img" />
                            </div>

                            <span>03</span>
                            <div>
                                <h3>All your accounts in one place</h3>
                                <p>Get a real time view and easily track and manage your entire finance life with just one platfom.</p>
                            </div>
                        </li>
                    </ol>
                </section>
                
                <section className={styles.section_two}>
                    <h2>
                        How to start tracking your portfolio using achee with 3 simple steps
                    </h2>
                    <div className={styles.steps}>
                        <div className={styles.stepOne}>
                            <img src="" alt="Step One"/>
                            <div>
                                <h3>Create your achee account</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt et reprehenderit possimus cupiditate inventore similique ut pariatur aliquam, voluptatum explicabo velit beatae quis ipsum?</p>
                            </div>
                        </div>
                        <div className={styles.stepTwo}>
                            <img src="" alt="Step Two"/>
                            <div>
                                <h3>Create your achee account</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt et reprehenderit possimus cupiditate inventore similique ut pariatur aliquam, voluptatum explicabo velit beatae quis ipsum?</p>
                            </div>
                        </div>
                        <div className={styles.stepThree}>
                            <img src="" alt="Step Three"/>
                            <div>
                                <h3>Create your achee account</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt et reprehenderit possimus cupiditate inventore similique ut pariatur aliquam, voluptatum explicabo velit beatae quis ipsum?</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className={'display-flex '+ styles.section_three}>
                    <div>
                        <div className={styles.sectionThreeTitle}>
                            <div>
                                <span></span>
                                <h3>Achee Useful Features to Save Your Time.</h3>
                            </div>
                            <p>
                                Want to use Achee to manage your investment? Here are some of the amazing features you’ll get to enjoy.
                            </p>
                        </div>
                        <ul>
                            <li>
                                <img src="" alt="Check icon" />
                                <p>Automatic email reports to Achee so as to monitor your progress and changes.</p>
                            </li>
                            <li>
                                <img src="" alt="Check icon" />
                                <p>Users can search for stocks with symbol or company name when you wants to add stocks or crypto manually.</p>
                            </li>
                            <li>
                                <img src="" alt="Check icon" />
                                <p>Buying Stocks and ETFs have a price, no of shares, fees and date.</p>
                            </li>
                            <li>
                                <img src="" alt="Check icon" />
                                <p>Users can search for stocks with symbol or company name when you wants to add stocks or crypto manually.</p>
                            </li>
                        </ul>
                    </div>
                    
                    <img src={featuresImg} alt="Features Img" width="421px" height="482px" />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Landing
