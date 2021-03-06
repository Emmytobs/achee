import React from 'react';
import "./Footer.css"


function Footer() {
    return (
        <footer className="flex-container footer">
            <div className="copyright">Copyright © <span class="text-highlight">2020 Achee</span>, all rights reserved.</div>
            <div class="contact">
              <p>Contact: <span className="text-highlight">hello@achee.co</span></p>
            </div>
        </footer>
    )
}

export default Footer
