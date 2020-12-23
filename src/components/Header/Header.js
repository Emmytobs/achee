import React from 'react'
import "./Header.css"
import Icon from "../Icon.js";
import acheeLogo from "./achee1~2.png";
import overlay from "./Ellipse 14.svg";

function Header() {
    return (
        <header>
            <nav>
                <div class="logo"><img src={acheeLogo} alt="Achee" /></div>
                <button class="join-waitlist-btn">Join the waitlist <Icon color="#fff" icon="arrow-right" addMargin/></button>
            </nav>
            <section id="landing-page" class="landing-page">
                <img src={overlay} class="img-overlay" alt="Overlay" />
                <h1 className="headline">All Your Investments In One Place</h1>
                <p className="">Monitor stocks, dividends, cryptocurrencies and other fixed income investments. With Achee, you stay on top of your money.</p>
                <form action="">
                    <input type="email"  placeholder="Enter your email address" />
                    <button class="join-waitlist-btn">Join the waitlist <Icon color="#fff" icon="arrow-right" addMargin/></button>
                </form>
            </section>
            {/* <div class="logo-container left-logo-1">
                <img src="./logo/btc.png" width="100px" height="100px" alt="" />
            </div>
            <div class="logo-container left-logo-2">
                <img src="./logo/btc.png" width="100px" height="100px" alt="" />
            </div>
            <div class="logo-container left-logo-3">
                <img src="./logo/btc.png" width="100px" height="100px" alt="" />
            </div>

            <div class="logo-container right-logo-1">
                <img src="./logo/btc.png" width="100px" height="100px" alt="" />
            </div>
            <div class="logo-container right-logo-2">
                <img src="./logo/btc.png" width="100px" height="100px" alt="" />
            </div>
            <div class="logo-container right-logo-3">
                <img src="./logo/btc.png" width="100px" height="100px" alt="" />
            </div> */}
        </header>
    )
}

export default Header