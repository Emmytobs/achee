import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Overlay from '../../Shared/Overlay'

import styles from './CreatePortfolio.module.css';

import briefcase from './icons/briefcase 1.png';
import cryptocurrency from './icons/cryptocurrency.png';
import cash from './icons/cash.png';
import fixedAsset from './icons/fixed_asset.png';
import stocks from './icons/stocks.png';
import closeModal from '../../Shared/icons/close_modal.png';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function CreatePortfolio(props) {
    const [isModalShowing, setIsModalShowing] = useState(false);

    const toggleModal = () => {
        setIsModalShowing(!isModalShowing);
    }
    return (
        <>
        <Header {...props} />
            <div className={styles.createPortfolioContainer}>
                <div>
                    <img src={briefcase} alt="Briefcase" width="120px"  height="120px" />

                    <h3>Start Tracking your Portfolio</h3>
                    <p>
                        Keep track of your profit and loses in one action with Achee. <br />
                        Trust us, its as easy as that
                    </p>

                    <div className={styles.buttonContainer}>
                        <button onClick={toggleModal}>Manually add assets </button>
                        <button>Import Assets from Spreadsheet </button>
                        <button className={styles.btnSpan}>Send Stock and crypto trades via email </button>
                    </div>
                </div>
            </div>
        {isModalShowing && <AddPortfolioModal setIsModalShowing={setIsModalShowing} />}
        <Footer />
        </>
    )
}

export default CreatePortfolio

export function AddPortfolioModal(props) {
    const { url } = useRouteMatch();
    
    return (
        <Overlay closeModalHandler={props.setIsModalShowing} targetToCloseModal="closeModal">
            <div className={styles.modalContainer}>
                <div className={styles.closeModalBtn}>
                    <img id='closeModal' src={closeModal} alt="" width="35px" height="35px" />
                </div>
                
                <h2 className={styles.modalTitle}>Manually Add Assets</h2>
                <p className={styles.modalDescription}>Which of your assets so you want to add to a portfolio?</p>
                    
                <div className={styles.assetsList}>
                    {/* <Link to={`${url}/add-cryptocurrency`} className={styles.asset}> */}
                    <Link to={`/app/create-portfolio/add-cryptocurrency`} className={styles.asset}>
                        <img src={cryptocurrency} alt="Asset" width="80px" height="80px" />
                        <p>Add Cryptocurrency</p>
                    </Link>
                    <Link to={`/app/create-portfolio/add-cash`} className={styles.asset}>
                        <img src={cash} alt="Asset" width="80px" height="80px" />
                        <p>Add Cash</p>
                    </Link>
                    <Link to={`/app/create-portfolio/add-fixed-asset`} className={styles.asset}>
                        <img src={fixedAsset} alt="Asset" width="80px" height="80px" />
                        <p>Add Fixed Asset</p>
                    </Link>
                    <Link to={`/app/create-portfolio/add-stocks-or-funds`} className={styles.asset}>
                        <img src={stocks} alt="Asset" width="80px" height="80px" />
                        <p>Add Stocks/Funds</p>
                    </Link>
                </div>
            </div>
        </Overlay>
    )
}