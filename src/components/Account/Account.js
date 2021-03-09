import React from 'react';
import { Route, Redirect, useRouteMatch, Switch } from 'react-router-dom';

import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import ResetPassword from './ResetPassword/ResetPassword'
import Page404 from '../Page404/Page404';

function Account(props) {

    const { url } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={url} exact>
                    <Redirect to={`${url}/login`} />
                </Route>
                <Route path={`${url}/login`} exact component={SignIn} />    
                <Route path={`${url}/register`} exact component={SignUp} />    
                <Route path={`${url}/reset-password`} exact component={ResetPassword} />    
                <Route path={`${url}/forgot-password`} exact component={ForgotPassword} />    

                <Route path='*' component={Page404} />
            </Switch>
        </>
    )
}

export default Account
