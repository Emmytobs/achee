import React from 'react';
import Icon from "../Icon.js";
import "./Footer.css"

import { faFacebook, faTwitter, faInstagram, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer className="flex-container">
            <div className="copyright">Copyright © <span class="text-highlight">2020 Achee</span>, all rights reserved.</div>
            <div class="social-links">
                <Icon icon={faFacebook} addMargin="0 15px 0 0"/>
                <Icon icon={faTwitterSquare} addMargin="0 15px 0 0"/>
                <Icon icon={faInstagramSquare} />
            </div>
        </footer>
    )
}

export default Footer
