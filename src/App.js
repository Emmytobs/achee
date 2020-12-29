import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header.js';
import ProductHighlight from './components/ProductHighlight/ProductHighlight.js';
import Footer from './components/Footer/Footer';
import EmailModal from './components/EmailModal.js';

function App() {
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

export default App;
