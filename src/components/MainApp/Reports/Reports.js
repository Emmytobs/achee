import React from 'react'
import Header from '../Header/Header'
import PageHeader from '../../Shared/PageHeader/PageHeader';
import Footer from '../Footer/Footer'
import { Button } from '../../Shared/Utilities/Button/Button'

import styles from './Reports.module.css';

function Reports() {
    return (
        <>
            <Header />
            <div className={styles.reportsContainer}>
                <PageHeader title="Reports" />
                <div className={styles.container}>
                    <h2>Portfolio Performance</h2>
                    <div className={'display-flex justify-start align-center ' + styles.reports}>
                        <Report active title="Portfolio" category="Free">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta consequat tortor tortor dui mauris adipiscing id netus.
                        </Report>
                        <Report title="Transactions History" category="Premium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta consequat tortor tortor dui mauris adipiscing id netus.
                        </Report>
                        <Report title="Profit/Loss on Holdings" category="Premium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta consequat tortor tortor dui mauris adipiscing id netus.
                        </Report>
                        <Report title="All stock trades" category="Premium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta consequat tortor tortor dui mauris adipiscing id netus.
                        </Report>
                        <Report title="All crypto trades " category="Premium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta consequat tortor tortor dui mauris adipiscing id netus.
                        </Report>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reports

function Report(props) {
    return (
        <div className={`${styles.report}`}>
            <div className={styles.reportTitle}><h3>{props.title} - </h3> <span>{props.category}</span></div>
            <p>{props.children}</p>
            {props.active ? 
                <Button>Download</Button> : 
                <Button disabledStyle={{ 
                    border: "1px solid #ccc",
                    color: "#939393",
                    background: "#F5F5F5"
                 }}>Download</Button>}
            {/* <Button>Download</Button> */}
        </div>
    )
}