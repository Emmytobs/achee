import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header.js';
import ProductHighlight from './components/ProductHighlight/ProductHighlight.js';
import Footer from './components/Footer/Footer';
import EmailModal from './components/EmailModal.js';

function App() {
  const [emailModal, setEmailModal] = useState(false);
  const showEmailModal = (e) => {
      // setEmailModal(true);
      console.log(e.target)
  }

  const hideEmailModal = (e) => {
    // console.log(e.target.class)
    //   if(e.target.class === 'modal-overlay'){
    //     console.log(e.target.class)
    //   }
    console.log("Clicked")
  }
  return (
    <>
      {/* <div className="modal-overlay" onClick={hideEmailModal}>
          <iframe width="540" height="305" title="title" src="https://7ac3cfe5.sibforms.com/serve/MUIEANMKoxQrMIkXGsHvbtodxa7nTqkvm6bEbB3vVDb2O2Gp-lPIcf7YvA_kbYV_fb4H6-Vmo6ql2H-nIciY9i-tl-M6hMTLJFJQ73SVMa9OfjmQSoeTM3kFOBDd56YciE9cETj4XR9QMiT--bGn77hrf46hf-05D-uo7fh8JgJgL8oVTqeMLeR76BP-hBemTvjNHIqdWmzHunZZ" frameborder="0" scrolling="auto" allowfullscreen style={{display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%"}}></iframe>
      </div> */}
      <Header />
      <main>
        <ProductHighlight showEmailModal={showEmailModal} />
      </main>
      <Footer />
    </>
  );
}

export default App;
