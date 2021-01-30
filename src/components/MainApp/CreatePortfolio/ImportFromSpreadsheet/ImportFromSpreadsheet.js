import React from 'react';
import { PrimaryButton } from '../../../Shared/Utilities'

import styles from './ImportFromSpreadsheet.module.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import importIcon from './import.png'

function ImportFromSpreadsheet(props) {
    return (
        <>
        <Header {...props} />
        <div className={'display-flex '+ styles.container}>
            <div>
                <h2 className={styles.pageTitle}>Import Portfolio from Spreadsheet</h2>
                <div className={styles.importPortfolioContainer}>
                    <h3>By clicking on choose files you would be able to Import your exisiting portfolios. </h3>
                    <div className={'display-flex '}>
                        <div className={'display-flex '+ styles.imgContainer}>
                            <img src={importIcon} alt="Import Portfolio" width='120px' height='120px' />
                        </div>
                        <div className={styles.uploadCSV}>
                            <p>Select CSV files</p>
                            <input type="file" />
                            <PrimaryButton style={{
                                padding: '15px 40px'
                            }}>Import Portfolio</PrimaryButton>
                        </div>
                    </div>

                    <p>
                        Before importing your portfolio, make sure its well arranged and placed from the earliest to the latest. To know how this is done, download <a href="http" className={'inline-link'}>a sample of a valid CSV</a>  file.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ImportFromSpreadsheet
