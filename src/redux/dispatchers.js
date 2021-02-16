import {
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_AUTH_TOKENS
} from './actions'

export const saveLoggedInUserData = (payload, dispatch) => {
    dispatch({ type: SAVE_LOGGED_IN_USER_DATA, payload });
}

export const saveAuthTokens = (payload, dispatch) => {
    dispatch({ type: SAVE_AUTH_TOKENS, payload });
}