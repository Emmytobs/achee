import {
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_ACCESS_TOKEN
} from './actions'

export const saveLoggedInUserData = (payload, dispatch) => {
    dispatch({ type: SAVE_LOGGED_IN_USER_DATA, payload });
}

export const saveAccessToken = (payload, dispatch) => {
    dispatch({ type: SAVE_ACCESS_TOKEN, payload });
}