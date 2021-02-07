import {    
    SAVE_LOGGED_IN_USER_DATA
} from './actions'

const initialState = {
    user: {}
}

function reducers(state=initialState, action) {
    switch(action.type) {
        case SAVE_LOGGED_IN_USER_DATA:
            return { ...state, user: { ...action.payload } };

        default:
            return state;

    }
}
export default reducers;