import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Homepage from './Homepage/Homepage'

import CreatePortfolio from './CreatePortfolio/CreatePortfolio'
import AddStockOrFund from './AddStockOrFund/AddStockOrFund'
import AddCryptocurrency from './AddCryptocurrency/AddCryptocurrency'
import AddFixedAsset from './AddFixedAsset/AddFixedAsset'
import AddCash from './AddCash/AddCash'

import Page404 from '../Page404/Page404'

function App() {
    const { url } = useRouteMatch();

    return (
        <>
        <Switch>
            <Route path={url} exact component={Homepage} />
                
            <Route path={`${url}/create-portfolio`} exact component={CreatePortfolio} />
            <Route path={`${url}/create-portfolio/add-stockor-fund`} exact component={AddStockOrFund} />
            <Route path={`${url}/create-portfolio/add-cryptocurrency`} exact component={AddCryptocurrency} />
            <Route path={`${url}/create-portfolio/add-fixedasset`} exact component={AddFixedAsset} />
            <Route path={`${url}/create-portfolio/add-cash`} exact component={AddCash} />

            <Route path={`${url}/*`} component={Page404} />
        </Switch>
        </>
    )
}

export default App
