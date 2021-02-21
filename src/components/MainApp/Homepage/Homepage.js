import React, { useState, Component } from 'react'
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Homepage.module.css';

import { Carousel } from 'react-responsive-carousel';

import Overlay from '../../Shared/Overlay'
import { PrimaryButton, Button } from '../../Shared/Utilities'
import { AddPortfolioModal } from '../CreatePortfolio/CreatePortfolio';

import addPortfolio from './images/add-portfolio.png';
import spreadsheet from './images/spreadsheet.png';
import mailBox from './images/mail-box.png';
import investmentCompany from './images/investment-company.png';
import learn from './images/learn.png';
import upgrade from './images/upgrade.png';
import closeModal from '../../Shared/icons/close_modal.png';

function Homepage(props) {
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [isWalkthroughModalShowing, setIsWalkthroughModalShowing] = useState(true);

    const { url } = useRouteMatch()

    const toggleModal = () => {
        setIsModalShowing(!isModalShowing);
    }

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery();
    
    return (
        <>
        <Header {...props} />
            <div className={styles.homepageContainer}>
                <div className={styles.blurb}>
                    <h2>Integrate your portfolio</h2>
                    <p>Gain more insights into your investments with Achee</p>
                </div>
                <div className={'display-flex '+ styles.gridContainer}>
                    <div className={styles.cardContainer}>
                        <Card 
                            image={<img src={addPortfolio} alt="Card Img" width="100px" height="98px" />}
                            headerText="Manually add Assets To Your Portfolio"
                            text="Stocks, crypto, fixed income and cash reserve."
                            onClick={toggleModal}
                            backgroundColor="#F6F3FF"
                        />
                        <Link to={`${url}/create-portfolio/spreadsheet`}>
                            <Card 
                                image={<img src={spreadsheet} alt="Card Img" width="100px" height="98px" />}
                                headerText="Import from a spreadsheet"
                                text="Bringing in information from your sheet into Achee."
                                backgroundColor='#FFF2F7'
                            />
                        </Link>
                        <Link>
                            <Card 
                                image={<img src={mailBox} alt="Card Img" width="100px" height="51px" />}
                                headerText="Send Achee your trades via email"
                                text="Trades can be sent to Achee via the official mail."
                                backgroundColor="#FFF7EF"
                            />
                        </Link>
                        <Link>
                            <Card 
                                image={<img src={investmentCompany} alt="Card Img" width="100px" height="98px" />}
                                headerText="Import from an investment company"
                                text="Bringing in information from Your Sheet into Achee."
                                backgroundColor="#F5F7FF"
                            />
                        </Link>
                    </div>
                    <div className={'display-flex '+ styles.accountUpgradeStatus}>
                        <div className={'display-flex '+ styles.imgContainer}>
                            <img src={upgrade} alt="Upgrade Icon" width="80px" height="84px" />
                        </div>
                        <div className={styles.upgradeContainer}>
                            <h3>Upgrade your account</h3>
                            <p>You can get more and more out of upgrading to premium. Click on the upgrade button below to get all features.</p>
                            <PrimaryButton>Upgrade now</PrimaryButton>
                        </div>
                    </div>
                    <div className={'display-flex '+ styles.learn}>
                        <div className={'display-flex '+ styles.imgContainer}>
                            <img src={learn} alt="Learn" width="80px" height="80px" />
                        </div>
                        <h3>
                            Book a free 1-on-1 walkthrough <br />
                            today.
                        </h3>
                    </div>
                    <div className={styles.newsContainer}>
                        <h2>News Feed</h2>
                        <div className={styles.news}>
                            <h3>How safe is it to switch and space COVID-19 vaccine doses?</h3>
                            <div className={'display-flex '+ styles.timeAndTags}>
                                <p>12 minutes ago</p>
                                <div className={styles.tags}>
                                    <span className={styles.tag}>KBH</span>
                                    <span className={styles.tag}>JPM</span>
                                    <span className={styles.tag}>PNC</span>
                                    <span className={styles.tag}>+12</span>
                                </div>
                            </div>
                            <div className={styles.newsContent}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repudiandae corporis vitae quas aspernatur! Reiciendis voluptatem cupiditate tempore similique ex quibusdam debitis, eius officia quis temporibus in velit, eaque pariatur.
                                </p>
                            </div>
                        </div>
                        <div className={styles.news}>
                            <h3>How safe is it to switch and space COVID-19 vaccine doses?</h3>
                            <div className={'display-flex '+ styles.timeAndTags}>
                                <p>12 minutes ago</p>
                                <div className={styles.tags}>
                                    <span className={styles.tag}>KBH</span>
                                    <span className={styles.tag}>JPM</span>
                                    <span className={styles.tag}>PNC</span>
                                    <span className={styles.tag}>+12</span>
                                </div>
                            </div>
                            <div className={styles.newsContent}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repudiandae corporis vitae quas aspernatur! Reiciendis voluptatem cupiditate tempore similique ex quibusdam debitis, eius officia quis temporibus in velit, eaque pariatur.
                                </p>
                            </div>
                        </div>
                        <div className={styles.news}>
                            <h3>How safe is it to switch and space COVID-19 vaccine doses?</h3>
                            <div className={'display-flex '+ styles.timeAndTags}>
                                <p>12 minutes ago</p>
                                <div className={styles.tags}>
                                    <span className={styles.tag}>KBH</span>
                                    <span className={styles.tag}>JPM</span>
                                    <span className={styles.tag}>PNC</span>
                                    <span className={styles.tag}>+12</span>
                                </div>
                            </div>
                            <div className={styles.newsContent}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repudiandae corporis vitae quas aspernatur! Reiciendis voluptatem cupiditate tempore similique ex quibusdam debitis, eius officia quis temporibus in velit, eaque pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            {isModalShowing && <AddPortfolioModal setIsModalShowing={setIsModalShowing} />}
            {/* If there's a 'new-user' query, show the walkth */}
            {query.has('new-user') && <WalkThroughModal setIsWalkthroughModalShowing={setIsWalkthroughModalShowing} />}
        <Footer/>
        </>
    )
}

export default Homepage;

function Card(props) {
    return (
        <div className={styles.card} onClick={props.onClick}>
            <div style={{ background: props.backgroundColor }} className={'display-flex '+ styles.cardImage}>
                {props.image}
            </div>
            <div className={styles.cardText}>
                <h3>{props.headerText}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

function WalkThroughModal(props) {
    class ExternalControlledCarousel extends Component {
        constructor(props) {
            super(props);

            this.state = {
                currentSlide: 0,
                autoPlay: false,
            };
        }

        next = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide + 1,
            }));
        };

        prev = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide - 1,
            }));
        };

        changeAutoPlay = () => {
            this.setState((state) => ({
                autoPlay: !state.autoPlay,
            }));
        };

        updateCurrentSlide = (index) => {
            const { currentSlide } = this.state;

            if (currentSlide !== index) {
                this.setState({
                    currentSlide: index,
                });
            }
        };

        render() {
            return (
                <Overlay closeModalHandler={props.setIsWalkthroughModalShowing} targetToCloseModal="closeModal">
                    <div className={styles.carouselContainer}>
                        <img id="closeModal" className={styles.closeModalIcon} src={closeModal} alt="Close Modal Icon" width="35px" height="35px" />
                        
                        <Carousel 
                            showThumbs={false} 
                            showArrows={false} 
                            showStatus={false} 
                            showIndicators={false}
                            autoPlay={this.state.autoPlay}
                            selectedItem={this.state.currentSlide}
                            onChange={this.updateCurrentSlide}
                            {...this.props}>
                            <div className={`display-flex ${styles.walkthrough} ${styles.page}`}>
                                <div>
                                    <h2>Track Your Portfolio</h2>
                                    <p>
                                    Monitor your investments even though they are on different investment platforms. You can track your stocks, cryptocurrencies and other assets on one dashboard.
                                    </p>
                                </div>
                            </div>
                            <div className={`display-flex ${styles.walkthrough} ${styles.page}`}>
                                <div>
                                    <h2>Know Your Performance</h2>
                                    <p>See your currency gains/loss, dividends and measure your performance against an index.</p>
                                </div>
                            </div>
                            <div className={`display-flex ${styles.walkthrough} ${styles.page}`}>
                                <div>
                                    <h2>Free Investment Courses</h2>
                                    <p>Upgrade your knowledge on saving, budgeting and investing using our free courses and community.</p>
                                </div>
                            </div>
                        </Carousel>
                        <div className={'display-flex '+ styles.progressBarContainer}>
                            <div className={styles.progressBars}>
                                <span style={{ backgroundColor: this.state.currentSlide === 0 && '#805CF5' }}></span>
                                <span style={{ backgroundColor: this.state.currentSlide === 1 && '#805CF5' }}></span>
                                <span style={{ backgroundColor: this.state.currentSlide === 2 && '#805CF5' }}></span>
                            </div>
                            <div className={styles.buttonContainer}>
                                {this.state.currentSlide !== 0 && <Button style={{ backgroundColor: '#F6F3FF' }} onClick={this.prev}>Back</Button>}
                                {
                                this.state.currentSlide === 2 ? 
                                <PrimaryButton id="closeModal" >Get Started</PrimaryButton> :
                                <PrimaryButton onClick={this.next}>Next</PrimaryButton>
                                }
                            </div>
                        </div>
                    </div>
                </Overlay>
            )
        }
    }

    return <ExternalControlledCarousel />;
}