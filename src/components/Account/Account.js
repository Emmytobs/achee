import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'

function Account(props) {
    const searchQuery = useLocation().search

    useEffect(() => {
        if (!searchQuery) {
            props.history.push('/account?page=sign-up')
        } 
        else if (
            !searchQuery.includes('sign-in') &&
            !searchQuery.includes('sign-up')
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
    return (
        <>
        
        </>
    )
}

export default Account
