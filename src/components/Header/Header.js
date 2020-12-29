import React from 'react'
import "./Header.css"
import Icon from "../Icon.js";
import acheeLogo from "./acheeLogo.png";
import overlay_big from "./Ellipse_big.svg";
import overlay_small from "./Ellipse_small.svg";

function Header() {
    const handleClick = (e) => {
        console.log(e.target)
    }
    return (
        <header onClick={handleClick}>
            <nav>
                <div class="logo"><img src={acheeLogo} alt="Achee" /> achee</div>
                <button class="join-waitlist-btn">Join the waitlist <Icon color="#fff" icon="arrow-right" addMargin/></button>
            </nav>
            <section id="landing-page" class="landing-page">
                <h1 className="headline">All Your Investments In One Place</h1>
                <p className="">Monitor stocks, dividends, cryptocurrencies and other fixed income investments. With Achee, you stay on top of your money.</p>
                <form action="https://achee.us19.list-manage.com/subscribe/post" method="POST">
                    <input type="hidden" name="u" value="916d8b504c5b2dc45080bd0af" />
                    <input type="hidden" name="id" value="7b71ed0b50" />
                    <input type="email" name="MERGE0"  placeholder="Enter your email address" />
                    <button class="join-waitlist-btn">Join the waitlist <Icon color="#fff" icon="arrow-right" addMargin/></button>
                </form>
                <img src={overlay_big} class="img-overlay big-overlay" alt="Overlay" />
                <img src={overlay_small} class="img-overlay small-overlay" alt="Overlay" />
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