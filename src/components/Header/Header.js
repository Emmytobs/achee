import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header>
            <nav>
                <div class="logo">achee</div>
                <button class="join-waitlist">Join the waitlist -&gt;</button>
            </nav>
            <section id="landing-page" class="landing-page">
                <h1 className="headline">All Your Investments In One Place</h1>
                <p className="">Monitor stocks, dividends, cryptocurrencies and other fixed income investments. With Achee, you stay on top of your money.</p>
                <form action="">
                    <input type="email"  placeholder="Enter your email address" />
                    <button class="join-waitlist">Join the waitlist -&gt;</button>
                </form>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#FAFAFA" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,138.7C1120,160,1420,120,1400,120L1440,115L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </header>
    )
}

export default Header