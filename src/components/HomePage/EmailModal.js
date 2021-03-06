import React from 'react';
import './EmailModal.css'

function EmailModal(props) {
    return (
        <div className="modal-overlay" onClick={props.hideEmailModal}>
            <iframe width="540" height="305" title="title" src="https://7ac3cfe5.sibforms.com/serve/MUIEANMKoxQrMIkXGsHvbtodxa7nTqkvm6bEbB3vVDb2O2Gp-lPIcf7YvA_kbYV_fb4H6-Vmo6ql2H-nIciY9i-tl-M6hMTLJFJQ73SVMa9OfjmQSoeTM3kFOBDd56YciE9cETj4XR9QMiT--bGn77hrf46hf-05D-uo7fh8JgJgL8oVTqeMLeR76BP-hBemTvjNHIqdWmzHunZZ" frameBorder="0" scrolling="auto" allowFullScreen style={{display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%"}}></iframe>
        </div>
    ) 
}

export default EmailModal
