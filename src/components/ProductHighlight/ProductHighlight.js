import React from 'react';
import Footer from "../Footer/Footer.js"

import './ProductHighlight.css';

import analysisIcon from './images/Analysis-cuate 1.png';
import performance from './images/performance.png';
import route2 from './images/route 2.png';
import profits from './images/profits.png';
import fistpump from './images/17 5.png';
import security from './images/Security-cuate 1.png';

import Icon from "../Icon.js";

function ProductHighlight() {
    return (
        <>
        <section id="product-highlight-1-container" class="product-highlight-1-container">
            <h1>see your <span class="text-highlight">gains/losses on all your investments</span> at a glance</h1>
            <p>Achee does the work for you.</p>
            <div class="flex-container product-highlight-1">
                <div class="product-highlights">
                    <p>Keeping track of your investments should be simple.</p>
                    <p>Achee helps investors to manage their portfolios effortlessly and allows them to see how they are performing periodically.</p>
                    <p>With Achee, a lot of stuff is already taken care of for you, automatically - adding dividends, stock splits, and dividend reinvestment plan calculations.</p>
                    <p class="bold-text">It's time to Ditch Your Spreadsheet.</p>
                </div>
                {/* <div class="image-container">
                </div> */}
                <img class="analytics-img" alt="Analytics" src={analysisIcon}  />
            </div>
            <div class="card-container">
                <div class="background-underlay"></div>
                <div class="flex-container cards">
                    <div class="card">
                        <div class="image-container performance">
                            <img alt="Performance" src={performance} width="40px" height="40px" />
                        </div>
                        <h4>Know your performance.</h4>
                        <p>See your currency gains/loss, dividends and measure your performance against an index.</p>
                    </div>
                    <div class="card">
                        <div class="image-container route-2">
                            <img alt="Route-2" src={route2} width="40px" height="40px"/>
                        </div>
                        <h4>Track your portfolio.</h4>
                        <p>Monitor your investments even though they are on different investment platforms. You can track your stocks, cryptocurrencies and other assets on one dashboard.</p>
                    </div>
                    <div class="card">
                        <div class="image-container profits">
                            <img alt="Profits" src={profits} width="40px" height="40px"/>
                        </div>
                        <h4>Free Investment Courses.</h4>
                        <p>Upgrade your knowledge on saving, budgeting and investing using our free courses and community.</p>
                    </div>
                </div>
            </div>
            <div class="flex-container get-notified">
                <div class="image-container">
                    <img src={fistpump} alt="Fist pump" />
                </div>
                <div class="join">
                    <h2>Be the first to get notified when we launch.</h2>
                    <form>
                        <input placeholder="Enter your email address" type="text" name="" id="" />
                        <button class="join-waitlist-btn">Join the waitlist <Icon icon="arrow-right" color="#fff" addMargin="0 0 0 5px" /> </button>
                    </form>
                </div>
            </div>
        </section>
        <section id="product-highlight-2-container" class="product-highlight-2-container">
            <div class="highlight">
                <h3>Powerful <span class="text-highlight">Protection</span> </h3>
                <p>
                Achee uses the latest encryption technology standards to protect your sensitive personal information. We never share your information with any company.
                </p>
                <img alt="" src={security} width="600px" height="400px" />
            </div>
            <div class="highlight">
                <h3><span class="text-highlight">learn and grow</span> with Achee </h3>
                <p>
                We provide personal finance resources to help you save, budget and invest the right way.
                </p>
            </div>
            <div className="tip-outer-container">
                <div className="flex-container tip-inner-container">
                    <div className="tip-number">
                        {/* 01 */}
                        <h1>01</h1>
                    </div>
                    <div class="tip">
                        <p className="name">Achee Alpha Tip 1</p>
                        <h4 className="title">start early and invest regularly</h4>
                        <p className="details">Starting to save at the age of 15 and investing $500 per year in an investment that grows at 5% a year would leave you with nearly $30,000 more by the age of 65 than if you started at 25, even though overall you would only have invested an extra $5000.</p>
                    </div>
                </div>
                <div className="flex-container tip-inner-container">
                    <div className="tip-number">
                        <h1>02</h1>
                    </div>
                    <div class="tip">
                        <p className="name">Achee Alpha Tip 2</p>
                        <h4 className="title">The higher the return the greater the risk</h4>
                        <p className="details">If you want to target a higher level of return, you have to be willing, and able, to tolerate the fact that you could lose your invested capital.</p>
                    </div>
                </div>
                <div className="flex-container tip-inner-container">
                    <div className="tip-number">
                        <h1>03</h1>
                    </div>
                    <div class="tip">
                        <p className="name">Achee Alpha Tip 3</p>
                        <h4 className="title">Cash is rarely king</h4>
                        <p className="details">If cash is not invested, the amount of goods that money can buy will decrease every year.</p>
                    </div>
                </div>
            </div>

        <button class="btn-primary weekly-tips-btn">Recieve more weekly tips <Icon color="#fff" icon="arrow-right" addMargin /></button>
        </section>
        <Footer />
        </>
    )
}

export default ProductHighlight;