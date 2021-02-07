import {
    SAVE_LOGGED_IN_USER_DATA
} from './actions'

export const saveLoggedInUserData = (payload, dispatch) => {
    dispatch({ type: SAVE_LOGGED_IN_USER_DATA, payload });
}