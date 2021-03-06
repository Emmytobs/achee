import {
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_AUTH_TOKENS,
    ADD_CASH,
    ADD_CRYPTOCURRENCY,
    ADD_FIXED_ASSET,
    ADD_STOCK
} from './actions'

export const saveLoggedInUserData = (payload, dispatch) => {
    dispatch({ type: SAVE_LOGGED_IN_USER_DATA, payload });
}

export const saveAuthTokens = (payload, dispatch) => {
    dispatch({ type: SAVE_AUTH_TOKENS, payload });
}

// Assets data dispatchers
export const addCash = (payload, dispatch) => {
    dispatch({ type: ADD_CASH, payload })
}

export const addCryptocurrency = (payload, dispatch) => {
    dispatch({ type: ADD_CRYPTOCURRENCY , payload })
}

export const addFixedAsset = (payload, dispatch) => {
    dispatch({ type: ADD_FIXED_ASSET , payload })
}

export const addStock = (payload, dispatch) => {
    dispatch({ type: ADD_STOCK , payload })
}