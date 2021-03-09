
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Table, TableHead, TableBody, TableRow, TH, TD } from '../../Shared/Utilities/AssetsTable'

import styles from './Portfolio.module.css';

import search from '../../Shared/icons/search.png';
import arrowUp from './icons/arrow-up.png';
import arrowDown from './icons/arrow-down.png';

function Portfolio(props) {
    const [ activeTab, setActiveTab ] = useState(1);
    
    React.useEffect(() => {
        
    }, [activeTab])

    const changeTabNumber = (e) => {
        const tabNumber = e.target.getAttribute('data-tab-number');
        setActiveTab(Number(tabNumber));
        // console.log(tabNumber)
    }

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
                        <span className={styles.tab} data-tab-number={1} onClick={changeTabNumber}>
                            Performance
                            {activeTab === 1 && <span className={styles.activeTab}></span>}
                        </span>
                        <span className={styles.tab} data-tab-number={2} onClick={changeTabNumber}>
                            Benchmarks
                            {activeTab === 2 && <span className={styles.activeTab}></span>}
                        </span>
                        <span className={styles.tab} data-tab-number={3} onClick={changeTabNumber}>
                            Allocation
                            {activeTab === 3 && <span className={styles.activeTab}></span>}
                        </span>
                    </div>
                    <div className={styles.selectedTabContainer}>
                        {activeTab === 1 && 
                            <div className={styles.performanceTab}>
                                <p>Performance tab goes here</p>
                            </div>
                        }
                        {activeTab === 2 &&
                            <div className={styles.benchmarksTab}>
                                <p>Benchmarks tab goes here</p>
                            </div>
                        }
                        {activeTab === 3 && 
                            <div className={styles.allocationTab}>
                                <p>Allocation tab goes here</p>
                            </div>
                        }
                    </div>
                </div>
                
                <div className={styles.assetList} id="asset-list">
                    <h1>Your Holdings Group By Asset</h1>
                    
                    <div className={`${styles.asset} ${styles.stockOrFund}`}>
                        <div className={'display-flex justify-between align-items ' + styles.title}>
                            <h1>Stock/Fund</h1>
                            <button>+</button>
                        </div>
                        <div className={styles.tableContainer}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TH>Name</TH>
                                        <TH>Symbol</TH>
                                        <TH>Current Price</TH>
                                        <TH>Quantity</TH>
                                        <TH>Current Value</TH>
                                        <TH>Total Cost</TH>
                                        <TH>Average Price</TH>
                                        <TH>Fees</TH>
                                        <TH>Profit/Loss</TH>
                                        <TH></TH>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TD>Apple</TD>
                                        <TD>AAPL</TD>
                                        <TD>$130.07</TD>
                                        <TD>60</TD>
                                        <TD>$1033.76</TD>
                                        <TD>$9000.87</TD>
                                        <TD>$7560.89</TD>
                                        <TD>$1000</TD>
                                        <TD>$1000</TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                    <TableRow>
                                        <TD>Tesla</TD>
                                        <TD>TSLA</TD>
                                        <TD>$67.71</TD>
                                        <TD>73</TD>
                                        <TD>$894.76</TD>
                                        <TD>$126896239.87</TD>
                                        <TD>$524.89</TD>
                                        <TD>$500</TD>
                                        <TD>$2000</TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div className={`${styles.asset} ${styles.crytocurrency}`}>
                        <div className={'display-flex justify-between align-items ' + styles.title}>
                            <h1>Cryptocurrency</h1>
                            <button>+</button>
                        </div>
                        <div className={styles.tableContainer}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TH>Name</TH>
                                        <TH>Symbol</TH>
                                        <TH>Current Price</TH>
                                        <TH>Quantity</TH>
                                        <TH>Current Value</TH>
                                        <TH>Total Cost</TH>
                                        <TH>Average Price</TH>
                                        <TH>Fees</TH>
                                        <TH>Profit/Loss</TH>
                                        <TH></TH>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TD>Apple</TD>
                                        <TD>AAPL</TD>
                                        <TD>$130.07</TD>
                                        <TD>60</TD>
                                        <TD>$1033.76</TD>
                                        <TD>$9000.87</TD>
                                        <TD>$7560.89</TD>
                                        <TD>$1000</TD>
                                        <TD>$1000</TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                    <TableRow>
                                        <TD>Tesla</TD>
                                        <TD>TSLA</TD>
                                        <TD>$67.71</TD>
                                        <TD>73</TD>
                                        <TD>$894.76</TD>
                                        <TD>$126896239.87</TD>
                                        <TD>$524.89</TD>
                                        <TD>$500</TD>
                                        <TD>$2000</TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className={`${styles.asset} ${styles.fixedAsset}`}>
                        <div className={'display-flex justify-between align-items ' + styles.title}>
                            <h1>Fixed Asset</h1>
                            <button>+</button>
                        </div>
                        <div className={styles.tableContainer}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TH>Name</TH>
                                        <TH>Symbol</TH>
                                        <TH>Current Price</TH>
                                        <TH>Quantity</TH>
                                        <TH>Current Value</TH>
                                        <TH>Total Cost</TH>
                                        <TH>Average Price</TH>
                                        <TH>Fees</TH>
                                        <TH>Profit/Loss</TH>
                                        <TH></TH>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TD>Apple</TD>
                                        <TD>AAPL</TD>
                                        <TD>$130.07</TD>
                                        <TD>60</TD>
                                        <TD>$1033.76</TD>
                                        <TD>$9000.87</TD>
                                        <TD>$7560.89</TD>
                                        <TD>$1000</TD>
                                        <TD>$1000</TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                    <TableRow>
                                        <TD>Tesla</TD>
                                        <TD>TSLA</TD>
                                        <TD>$67.71</TD>
                                        <TD>73</TD>
                                        <TD>$894.76</TD>
                                        <TD>$126896239.87</TD>
                                        <TD>$524.89</TD>
                                        <TD>$500</TD>
                                        <TD>$2000</TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className={`${styles.asset} ${styles.cash}`}>
                        <div className={'display-flex justify-between align-items ' + styles.title}>
                            <h1>Cash</h1>
                            <button>+</button>
                        </div>
                        <div className={styles.tableContainer}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TH>Name</TH>
                                        <TH>Cash Balance</TH>
                                        <TH></TH>
                                        <TH></TH>
                                        <TH></TH>
                                        <TH></TH>
                                        <TH></TH>
                                        <TH></TH>
                                        <TH></TH>
                                        <TH></TH>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.assets.cash.map(cashAsset => {
                                        return (
                                            <TableRow>
                                                <TD>{cashAsset.name}</TD>
                                                <TD>{cashAsset.amount}</TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD>*Delete*</TD>
                                            </TableRow>
                                        )
                                    })}
                                    {/* <TableRow>
                                        <TD>Apple</TD>
                                        <TD>AAPL</TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD>*Delete*</TD>
                                    </TableRow>
                                    <TableRow>
                                        <TD>Tesla</TD>
                                        <TD>TSLA</TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD></TD>
                                        <TD>*Delete*</TD>
                                    </TableRow> */}
                                </TableBody>
                            </Table>
                        </div>
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

const mapStateToProps = (state) => {
    return {
        assets: state.assets
    }
}

export default connect(mapStateToProps, null)(Portfolio)
// export default Portfolio

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