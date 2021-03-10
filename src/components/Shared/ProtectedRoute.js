import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';

import { setGlobalError, saveLoggedInUserData } from '../../redux/dispatchers'

function ProtectedRoute(props) {
    const [tokenStatus, setTokenStatus] = useState('verifying');

    const fetchUserData = async (token) => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return response;
    }

    const validateTokens = async (accessToken, refreshToken) => {
        try {
            const response = await fetchUserData(accessToken);
            if (!response) {
                return console.log('No response. Check your internet connection')
            }
            if (response.status === 200) {
                const { user } = response.data.data;
                // Save logged in user data
                saveLoggedInUserData(user, props.dispatch)
                setTokenStatus('valid')
            }
        } catch (error) {
            if (error.response.status !== 200) {
                console.log(error.response)
                setGlobalError('Please sign in again to continue', props.dispatch)
                setTokenStatus('invalid');
                // try {
                //     const response = await fetchUserData(refreshToken);
                //     if (!response) {
                //         return console.log('No response. Check your internet connection')
                //     }       
                //     if (response.status !== 200) {
                //         setTokenStatus('invalid')
                //     }
                // } catch (error) {
                //     console.log(error)
                // }
            }
        }
    }

    useEffect(() => {
        // Check if there's an accesstoken in redux
            // If there isn't
                // Redirect to login        
        if (!props.accessToken || !props.refreshToken) {
            setGlobalError('Please sign in again to continue', props.dispatch)
            setTokenStatus('invalid');
            return console.log('No token')
        }
        // If the tokens are present in redux
            // Validate them by fetching the user's data
        validateTokens(props.accessToken, props.refreshToken);
    }, [])

    if (tokenStatus === 'verifying') {
        return <p>Loading...</p>
    } else if (tokenStatus === 'valid') {
        return (
            <Route 
                path={props.path}
                exact={props.exact}
                render={(renderProps) => <props.component {...renderProps} /> }
            />
        )
    } else {
        return <Redirect to="/account/login" />
    }
}

function mapStateToProps (state) {
    return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute)
