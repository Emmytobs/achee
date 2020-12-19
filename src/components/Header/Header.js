import React from 'react'
import "./Header.css"
import Icon from "../Icon.js";

function Header() {
    return (
        <header>
            <nav>
                <div class="logo">achee</div>
                <button class="join-waitlist-btn">Join the waitlist <Icon color="#fff" icon="arrow-right" addMargin/></button>
            </nav>
            <section id="landing-page" class="landing-page">
                <h1 className="headline">All Your Investments In One Place</h1>
                <p className="">Monitor stocks, dividends, cryptocurrencies and other fixed income investments. With Achee, you stay on top of your money.</p>
                <form action="">
                    <input type="email"  placeholder="Enter your email address" />
                    <button class="join-waitlist-btn">Join the waitlist <Icon color="#fff" icon="arrow-right" addMargin/></button>
                </form>
            </section>
        </header>
    )
}

export default Header