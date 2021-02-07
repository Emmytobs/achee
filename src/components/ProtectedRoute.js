import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {

    useEffect(() => {
        if (!checkIfTokenIsInLocalStorage()) {
            return <Redirect to="/account?page=sign-in" />
        }
        // If there's a token, validate the token from the backend (you can make a request to the user's profile)
        // If response is a 200 OK, user is authenticated
        // Else, redirect the user to the sign in page
    }, []);

    function checkIfTokenIsInLocalStorage() {
        const token = JSON.parse(localStorage.getItem('authToken'));
        return token;
    }

    return (
        <div>
            Loading....
        </div>
    )
}

export default ProtectedRoute
