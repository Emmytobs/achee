import React from 'react'
import styles from './ImportFromSpreadsheet.module.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

function ImportFromSpreadsheet(props) {
    return (
        <>
        <Header {...props} />
        <div> className={styles.container}
            <div>
                <h2>Import Portfolio from Spreadsheet</h2>
                <div className={styles.importPortfolioContainer}>
                    <p>By clicking on choose files you would be able to Import your exisiting portfolios. </p>
                    <div className={'display-flex '}>
                        <img src="" alt="Import Portfolio"/>
                        <div>
                            <p>Random content</p>
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
