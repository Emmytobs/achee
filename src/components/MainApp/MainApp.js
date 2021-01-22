import React from 'react'
import { Route } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Homepage from './Homepage/Homepage'

function App() {
    return (
        <>
            <Header />
            {/* <Route path="/app" exact component={Homepage} /> */}
            
            {/* <Route path="/app/create-portfolio" exact component={CreatePortfolio} />
            <Route path="/app/create-portfolio/add-stock-or-fund" exact component={AddStockOrFund} />
            <Route path="/app/create-portfolio/add-crytocurrency" exact component={AddCryptocurrency} />
            <Route path="/app/create-portfolio/add-fixed-asset" exact component={AddFixedAsset} />
            <Route path="/app/create-portfolio/add-cash" exact component={AddCash} />
            
            <Route path="/app/premium" exact component={Premium} /> */}
            <Footer />
        </>
    )
}

export default App
