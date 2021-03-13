
import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { addAssets } from '../../../redux/dispatchers'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Table, TableHead, TableBody, TableRow, TH, TD } from '../../Shared/Utilities/AssetsTable'

import styles from './Portfolio.module.css';

import search from '../../Shared/icons/search.png';
import arrowUp from './icons/arrow-up.png';
import arrowDown from './icons/arrow-down.png';
import ApexChartsDemo from '../../ChartDemos/ApexCharts'

function Portfolio(props) {
    const [ activeTab, setActiveTab ] = useState(1);

    const [performanceTagData, setPerformanceTagData] = useState({
        performanceToday: [],
        currencyGain: [],
        overallReturn: []
    })

    const intervals = ['YTD', '1W', '3M', '6M', '1Y', '2Y', '5Y']
    const [performanceInterval, setPerformancInterval] = useState(intervals[1]);
    const [performanceCurrency, setPerformancCurrency] = useState('USD');
    const [ performanceChart, setPerformanceChart ] = useState([]);
    
    const fetchPortfolioPerformanceData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/portfolios/:portfolioId/performance?currency=${performanceCurrency}&interval=${performanceInterval}`,
                {
                    params: { 'portfolioId': '3ef5ed27-9c8a-4806-a932-11a439cc6c8e' },
                    headers: { 'Authorization': 'Bearer '+ props.accessToken }
                })
            
            const { 
                performanceChart, 
                performanceToday, 
                overallReturn,
                currencyGain } = response.data.data;
            setPerformanceChart(performanceChart.map(day => ({ x: day.date, y: day.value })))
            setPerformanceTagData({
                performanceToday: [performanceToday.pl, performanceToday.percentPL],
                currencyGain: [currencyGain.pl, currencyGain.percentPL],
                overallReturn: [overallReturn.pl, overallReturn.percentPL],
            })
        } catch (error) {
            if (!error.response) {
                console.log('No internet')
            }
            console.log(error.response)
        }
    }

    const fetchPortfolioHoldings = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/portfolios/:portfolioId`,
                { 
                    params: { 'portfolioId': '3ef5ed27-9c8a-4806-a932-11a439cc6c8e' },
                    headers: { 'Authorization': 'Bearer ' + props.accessToken }
                })
            const { assetTypes } = response.data.data.portfolio;
            addAssets(assetTypes, props.dispatch);
        } catch (error) {
            if (!error.response) {
                console.log(error)
            }
            console.log(error.response)
        }
    }

    React.useEffect(() => {
        fetchPortfolioPerformanceData()
        fetchPortfolioHoldings()
    }, [])

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
                    <PerformanceTag 
                        title='Today' 
                        pl={performanceTagData.performanceToday[0]} 
                        percentPL={performanceTagData.performanceToday[1]}  />
                    <PerformanceTag 
                        title='Currency Gain' 
                        pl={performanceTagData.currencyGain[0]} 
                        percentPL={performanceTagData.currencyGain[1]} />
                    <PerformanceTag 
                        title='Overall Return' 
                        pl={performanceTagData.overallReturn[0]} 
                        percentPL={performanceTagData.overallReturn[1]} />
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
                                <ApexChartsDemo data={performanceChart} />
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
                                    {
                                        props.assets['STOCKS'].map(asset => 
                                            (<TableRow>
                                                <TD>{asset.name}</TD>
                                                <TD>{asset.symbol}</TD>
                                                <TD>{asset.currentPrice}</TD>
                                                <TD>{asset.quantity}</TD>
                                                <TD>Current Value</TD>
                                                <TD>Total Cost</TD>
                                                <TD>{asset.avgPrice}</TD>
                                                <TD>Fees</TD>
                                                <TD>Profit/Loss</TD>
                                                <TD>*Delete*</TD>
                                            </TableRow>)
                                        )
                                    }
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
                                    {
                                        props.assets['CRYPTO'].map(asset => 
                                            (<TableRow>
                                                <TD>{asset.name}</TD>
                                                <TD>{asset.symbol}</TD>
                                                <TD>{asset.currentPrice}</TD>
                                                <TD>{asset.quantity}</TD>
                                                <TD>Current Value</TD>
                                                <TD>Total Cost</TD>
                                                <TD>{asset.avgPrice}</TD>
                                                <TD>Fees</TD>
                                                <TD>Profit/Loss</TD>
                                                <TD>*Delete*</TD>
                                            </TableRow>)
                                        )
                                    }
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
                                        <TH>Amount</TH>
                                        <TH>Percentage Return</TH>
                                        <TH>Return Interval</TH>
                                        <TH>Start Date</TH>
                                        <TH>End Date</TH>
                                        <TH>Return + Capital</TH>
                                        <TH></TH>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.assets['FIXED'].map(asset => 
                                            (<TableRow>
                                                <TD>{asset.name}</TD>
                                                <TD>{asset.totalInvestedAmount}</TD>
                                                <TD>{asset.percentageReturn}</TD>
                                                <TD>{asset.returnIntervalMonths} mos.</TD>
                                                <TD>{asset.startDate}</TD>
                                                <TD>{asset.endDate}</TD>
                                                <TD>{asset.expectedReturn}</TD>
                                                <TD>*Delete*</TD>
                                            </TableRow>)
                                        )
                                    }
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
                                    {
                                        props.assets['CASH'].map(asset => 
                                            (<TableRow>
                                                <TD>{asset.name}</TD>
                                                <TD>{asset.totalAmount}</TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD></TD>
                                                <TD>*Delete*</TD>
                                            </TableRow>)
                                        )
                                    }
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
        assets: state.assets,
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps, null)(Portfolio)
// export default Portfolio

function PerformanceTag(props) {
    return (
        <div className={`display-flex justify-between align-center ${styles.today} ${styles.tag}`}>
            <div>
                <p>{props.title}</p>
                <h1>+${props.pl}</h1>
            </div>
            <div style={{ backgroundColor: props.loss ? "#ffbcd34d" : "#F0FFF3" }}>
                {
                    props.loss ?
                    <img src={arrowDown} alt="loss indicator" width="24px" height="24px" /> :
                    <img src={arrowUp} alt="gain indicator" width="24px" height="24px" />
                }
                <h1 style={{ color: props.loss ? "#F13D20" : "#00AC26" }}>{props.percentPL}%</h1>
            </div>
        </div>
    )
}