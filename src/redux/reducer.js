import {    
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_AUTH_TOKENS
} from './actions'

const initialState = {
    user: {},
    accessToken: '',
    refreshToken: '',
}

function reducers(state=initialState, action) {
    switch(action.type) {
        case SAVE_LOGGED_IN_USER_DATA:
            return { ...state, user: { ...action.payload } };

        case SAVE_AUTH_TOKENS:
            return { ...state, accessToken: action.payload[0], refreshToken: action.payload[1] }

        default:
            return state;
    }
}
export default reducers;