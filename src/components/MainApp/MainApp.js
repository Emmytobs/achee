import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Homepage from './Homepage/Homepage'

import CreatePortfolio from './CreatePortfolio/CreatePortfolio'
import AddStockOrFund from './CreatePortfolio/AddStockOrFund/AddStockOrFund'
import AddCryptocurrency from './CreatePortfolio/AddCryptocurrency/AddCryptocurrency'
import AddFixedAsset from './CreatePortfolio/AddFixedAsset/AddFixedAsset'
import AddCash from './CreatePortfolio/AddCash/AddCash'
import ImportFromSpreadsheet from './CreatePortfolio/ImportFromSpreadsheet/ImportFromSpreadsheet'

import UpgradeAccount from './UpgradeAccount/UpgradeAccount'

import Referrals from './Referrals/Referrals'

import Page404 from '../Page404/Page404'

function App() {
    const { url } = useRouteMatch();

    return (
        <>
        <Switch>
            <Route path={url} exact component={Homepage} />
                
            <Route path={`${url}/create-portfolio`} exact component={CreatePortfolio} />
            <Route path={`${url}/create-portfolio/add-stocks-or-funds`} exact component={AddStockOrFund} />
            <Route path={`${url}/create-portfolio/add-cryptocurrency`} exact component={AddCryptocurrency} />
            <Route path={`${url}/create-portfolio/add-fixed-asset`} exact component={AddFixedAsset} />
            <Route path={`${url}/create-portfolio/add-cash`} exact component={AddCash} />
            <Route path={`${url}/create-portfolio/spreadsheet`} exact component={ImportFromSpreadsheet} />
            
            <Route path={`${url}/upgrade`} exact component={UpgradeAccount} />
            <Route path={`${url}/referrals`} exact component={Referrals} />
            
            <Route path={`${url}/*`} component={Page404} />
        </Switch>
        </>
    )
}

export default App
