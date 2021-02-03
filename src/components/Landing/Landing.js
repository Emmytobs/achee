import React from 'react'
import styles from './Landing.module.css';
import Footer from '../MainApp/Footer/Footer';
import { PrimaryButton } from '../Shared/Utilities'

import acheeLogo from '../Shared/icons/acheeLogo_white.png'

import landingPageMask from './images/landing-page-mask.png';
import landingImage from './images/landing-img.png';
import financeImg from './images/Finance-amico 1.png';
import featuresImg from './images/Group 9855.png';
import checkIcon from './images/check-icon.png';
import newsAndResources from './images/news-and-resources.png';
import premiumPlan from './images/premium-plan.png';

import stepOne from './images/step-one.png'
import stepTwo from './images/step-two.png'
import stepThree from './images/step-three.png'

function Landing() {
    return (
        <div styles={{ backgroundColor: "#fff" }}>
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
                                <h3>Built-in Investment intelligence</h3>
                                <p>Compare your portfolio to the recommended target allocation and see how well your investments are doing with compared to the other investments.</p>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles.mobile} ${styles.financeImg}`}>
                                <img src={financeImg} alt="Finance Img" />
                            </div>

                            <span>03</span>
                            <div>
                                <h3>Learn and grow with our investment resources</h3>
                                <p>We help you upgrade your knowledge on saving and investing using our free resources. We provide personal finance resources to help you save, budget and invest the right way.</p>
                            </div>
                        </li>
                        <li>
                            <span>04</span>
                            <div>
                                <h3>Powerful Protection</h3>
                                <p>Achee uses the latest encryption technology standards to protect your sensitive personal information. We never share your information with any company.</p>
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
                            <img src={stepOne} alt="Step One" width="100px" height="100px" />
                            <div>
                                <h3>Create your achee account</h3>
                                <p>Achee uses the latest encryption technology standards to protect your sensitive personal information. We never share your information with any company.</p>
                            </div>
                        </div>
                        <div className={styles.stepTwo}>
                            <img src={stepTwo} alt="Step Two" width="100px" height="100px" />
                            <div>
                                <h3>Add Assets to Portfolio</h3>
                                <p>Add your assets your portfolio manually, import portfolio from excel spreadsheet or add from seests from an investment company.</p>
                            </div>
                        </div>
                        <div className={styles.stepThree}>
                            <img src={stepThree} alt="Step Three" width="100px" height="100px" />
                            <div>
                                <h3>Start Tracking Your Portfolio</h3>
                                <p>Keeping track of your investments should be simple. Achee helps investors like you to manage their portfolios effortlessly and allows them to see how they are performing periodically.</p>
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
                                <div>
                                    <img src={checkIcon} alt="Check icon" width="18.5px" height="14.36px" />
                                </div>
                                <p>Automatic email reports to Achee so as to monitor your progress and changes.</p>
                            </li>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="Check icon" width="18.5px" height="14.36px" />
                                </div>
                                <p>Users can search for stocks with symbol or company name when you wants to add stocks or crypto manually.</p>
                            </li>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="Check icon" width="18.5px" height="14.36px" />
                                </div>
                                <p>Buying Stocks and ETFs have a price, no of shares, fees and date.</p>
                            </li>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="Check icon" width="18.5px" height="14.36px" />
                                </div>
                                <p>Users can search for stocks with symbol or company name when you wants to add stocks or crypto manually.</p>
                            </li>
                        </ul>
                    </div>
                    
                    <img src={featuresImg} alt="Features Img" width="421px" height="482px" />
                </section>
            
                <section className={styles.section_four}>
                    <div>
                        <div className={styles.sectionFourTitle}>
                            <h2>Are You Ready To get Started?</h2>
                            <p>To explore Achee, create an account instantly and keep up to date with your stocks, cryptocurrencies, ETFs, and mutual funds in single portfolio.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                        <div className={styles.newsAndResources}>
                            <img src={newsAndResources} alt="News & Resources" width="40px" height="40px" />
                            <h5>News & Resources</h5>
                            <p>Our daily newsletter and instantly investment resources will keep you informed about companies you care about.</p>
                        </div>
                        <div>
                            <img src={premiumPlan} alt="Premium Plan" width="40px" height="40px" />
                            <h5>Premium Plan</h5>
                            <p>Choose from any of our premium plans at any time to track additional holdings or portfolios, and unlock advanced features.</p>
                        </div>
                    </div>
                    
                    <div>
                        <span>Achee is coming soon on</span>
                        <div>
                            <PrimaryButton>Google</PrimaryButton>
                            <PrimaryButton>Apple</PrimaryButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Landing
