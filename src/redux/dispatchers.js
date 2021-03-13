import {
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_AUTH_TOKENS,
    SET_GLOBAL_ERROR,
    ADD_ASSETS
} from './actions'

export const setGlobalError = (payload, dispatch) => {
    dispatch({ type: SET_GLOBAL_ERROR, payload })
}

export const saveLoggedInUserData = (payload, dispatch) => {
    dispatch({ type: SAVE_LOGGED_IN_USER_DATA, payload });
}

export const saveAuthTokens = (payload, dispatch) => {
    dispatch({ type: SAVE_AUTH_TOKENS, payload });
}

// Assets data dispatchers
export const addAssets = (payload, dispatch) => {
    dispatch({ type: ADD_ASSETS, payload })
}