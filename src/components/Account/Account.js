import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import ResetPassword from './ResetPassword/ResetPassword'

function Account(props) {
    const searchQuery = useLocation().search

    useEffect(() => {
        if (!searchQuery) {
            props.history.push('/account?page=sign-up')
        } 
        else if (
            !searchQuery.includes('sign-in') &&
            !searchQuery.includes('sign-up') &&
            !searchQuery.includes('forgot-password') &&
            !searchQuery.includes('reset-password')
        ) {
            props.history.push('/account?page=sign-in')
        }
    }, []);

    if (searchQuery.includes('sign-in')) {
        return (
            <SignIn {...props} />
        )
    } 
    else if (searchQuery.includes('sign-up')) {
        return (
            <SignUp {...props} />
        )
    }
    else if (searchQuery.includes('forgot-password')) {
        return (
            <ForgotPassword {...props} />
        )
    }
    else if (searchQuery.includes('reset-password')) {
        return (
            <ResetPassword {...props} />
        )
    }

    return (
        <>
            
        </>
    )
}

export default Account
