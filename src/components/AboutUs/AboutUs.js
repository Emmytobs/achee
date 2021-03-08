import React from 'react'
import styles from './AboutUs.module.css';
import Footer from '../MainApp/Footer/Footer';

import PageHeader from '../Shared/PageHeader/PageHeader';


function AboutUs() {
    return (
        <div className={styles.aboutUsContainer}>
            <PageHeader 
                title="About Achee"
                description="Do you want to know about Achee? Then read about us below"
            />
            <main className={styles.contentContainer}>
                <div className={styles.content}>
                    <p>
                        Keeping track of investments and working out the true performance has always been a nightmare since we all have our investments on different platforms. It’s almost impossible for you to know how much you have gained across these platforms and what it has really cost you.
                    </p>
                    <p>
                        We are investors ourselves and have faced these problems, so we decided to build something to help other investors across the world too.
                    </p>
                    <p>
                        Achee allows investors everywhere in the world track their investments seamlessly, including corporate actions like dividends and stock splits. 
                    </p>
                    <p>
                        We support 75+ stock exchanges, 5,000+ cryptocurrencies and tokens and allow you to track your fixed income instruments too all on one dashboard. There’s also built-in intelligence for your portfolio, ability to benchmark your returns against the top index funds in the world and investing resources to help you achieve Alpha.
                    </p>
                    <p>
                        We have a great team of investment professionals, engineers and data scientists building the product to provide the best value. 
                    </p>
                    <p>
                        Our platform is available to self-directed investors, financial advisors and fund managers across the world. 
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AboutUs
