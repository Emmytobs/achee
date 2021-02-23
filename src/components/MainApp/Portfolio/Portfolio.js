import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './Portfolio.module.css';

import search from '../../Shared/icons/search.png';
import arrowUp from './icons/arrow-up.png';
import arrowDown from './icons/arrow-down.png';

function Portfolio() {
    return (
        <>
            <Header />  
            <div className={styles.portfolioContainer}>
                <div className={'display-flex align-center justify-start ' + styles.searchBox}>
                    <img src={search} alt="Search icon" width="24px" height="24px" />
                    <input type="search" placeholder="Search" />
                </div>

                <div className={'display-flex justify-between align-center ' + styles.portfolioPerformanceTags}>
                    <PerformanceTag title='Today' amount="10.50" percentage="0.07" />
                    <PerformanceTag title='Today' amount="10.50" percentage="0.07" />
                    <PerformanceTag title='Today' amount="10.50" percentage="0.07" loss />
                    
                </div>

                <div className={styles.performanceAnalytics}>
                    <div className={styles.tabs}>
                        <span className={styles.tab}>Performance</span>
                        <span className={styles.tab}>Benchmarks</span>
                        <span className={styles.tab}>Allocation</span>
                    </div>
                    <div className={styles.selectedTabContainer}>
                        <div className={styles.performanceTab}></div>
                        <div className={styles.benchmarksTab}></div>
                        <div className={styles.allocationTab}></div>
                    </div>
                </div>
                
                <div className={styles.assetList}>
                    <h1>Your Holdings Group By Asset</h1>
                    
                    <div className={styles.stockOrFund}>
                        <div className={styles.title}>
                            <h1>Stock/Fund</h1>
                            <button>+</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Current Price</th>
                                    <th>Quantity</th>
                                    <th>Current Value</th>
                                    <th>Total Cost</th>
                                    <th>Average Price</th>
                                    <th>Fees</th>
                                    <th>Profit/Loss</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Apple</td>
                                    <td>AAPL</td>
                                    <td>$130.07</td>
                                    <td>60</td>
                                    <td>$1033.76</td>
                                    <td>$9000.87</td>
                                    <td>$7560.89</td>
                                    <td>$1000</td>
                                    <td>$1000</td>
                                    <td>*Delete*</td>
                                </tr>
                                <tr>
                                    <td>Tesla</td>
                                    <td>TSLA</td>
                                    <td>$67.71</td>
                                    <td>73</td>
                                    <td>$894.76</td>
                                    <td>$126896239.87</td>
                                    <td>$524.89</td>
                                    <td>$500</td>
                                    <td>$2000</td>
                                    <td>*Delete*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                {/* 
                    Change the route to /app/portfolio
                    When the user hits that route, make a request to the server to check for the user's portfolio
                    If no portfolio is found, show the CreatePortfolip component as a nested route
                    Else display the user's portfolio
                */}
            </div>
            <Footer />  
        </>
    )
}

export default Portfolio

function PerformanceTag(props) {
    return (
        <div className={`display-flex justify-between align-center ${styles.today} ${styles.tag}`}>
            <div>
                <p>{props.title}</p>
                <h1>+${props.amount}</h1>
            </div>
            <div style={{ backgroundColor: props.loss ? "#ffbcd34d" : "#F0FFF3" }}>
                {
                    props.loss ?
                    <img src={arrowDown} alt="loss indicator" width="24px" height="24px" /> :
                    <img src={arrowUp} alt="gain indicator" width="24px" height="24px" />
                }
                <h1 style={{ color: props.loss ? "#F13D20" : "#00AC26" }}>{props.percentage}%</h1>
            </div>
        </div>
    )
}