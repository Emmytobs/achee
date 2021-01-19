import React, { useState } from 'react'
import './HomePage.css';
import Header from './Header/Header.js';
import ProductHighlight from './ProductHighlight/ProductHighlight.js';
import Footer from './Footer/Footer';
import EmailModal from './EmailModal.js';

function HomePage() {
  const [emailModal, setEmailModal] = useState(false);
  const showEmailModal = (e) => {
    setEmailModal(true)
  }

  const hideEmailModal = (e) => {
    if(e.target.className.includes('modal-overlay')){
      setEmailModal(false)
    }
  }
  return (
    <>
      <Header />
      <main>
        <ProductHighlight showEmailModal={showEmailModal} />
      </main>
      <Footer />
    
      {emailModal && <EmailModal hideEmailModal={hideEmailModal} /> }
    </>
  );
}

export default HomePage;
