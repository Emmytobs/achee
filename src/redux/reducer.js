import {    
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_AUTH_TOKENS,
    ADD_ASSETS,
    SET_GLOBAL_ERROR
} from './actions'

import { initialState } from './store';

function reducers(state=initialState, action) {
    switch(action.type) {
        case SET_GLOBAL_ERROR:
            return { ...state, globalError: action.payload }

        case SAVE_LOGGED_IN_USER_DATA:
            return { ...state, user: { ...action.payload } };

        case SAVE_AUTH_TOKENS:
            return { ...state, accessToken: action.payload[0], refreshToken: action.payload[1] }

        case ADD_ASSETS:
            return addAssets(state, action)

        default:
            return state;
    }
}
export default reducers;

function addAssets(state, action) {
    const stateCopy = { ...state };
    const { payload: assetPayload } = action;

    assetPayload.forEach(asset => {
        const {assetType, assets: assetsInPayload} = asset
        stateCopy.assets[assetType] = [ ...assetsInPayload ]
    })
    
    return stateCopy;
}