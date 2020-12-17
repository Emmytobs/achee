import React from 'react';
import './ProductHighlight.css';
import analysisIcon from './Analysis-cuate 1.png';
import performance from './performance.png';
import route2 from './route 2.png';
import profits from './profits.png';

function ProductHighlight() {
    return (
        <section id="product-highlight-1-container" class="product-highlight-1-container">
            <h1>see your <span class="text-highlight">gains/losses on all your investments</span> at a glance</h1>
            <p>Achee does the work for you.</p>
            <div class="flex-container product-highlight-1">
                <div class="product-highlights">
                    <p>Keeping track of your investments should be simple.</p>
                    <p>Achee helps investors to manage their portfolios effortlessly and allows them to see how they are performing periodically.</p>
                    <p>With Achee, a lot of stuff is already taken care of for you, automatically - adding dividends, stock splits, and dividend reinvestment plan calculations.</p>
                    <p>It's time to Ditch Your Spreadsheet.</p>
                </div>
                <img alt="" src={analysisIcon} width="200px" height="550px" />
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
            <div class="get-notified">
                <img src="" alt="" />
                <div>
                    <p>Be the first to get notified when we launch.</p>
                    <form>
                        <input type="text" name="" id="" />
                        <button>Join the waitlist `-&gt;`</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProductHighlight
