import {    
    SAVE_LOGGED_IN_USER_DATA,
    SAVE_AUTH_TOKENS,
    ADD_CASH,
    ADD_CRYPTOCURRENCY,
    ADD_FIXED_ASSET,
    ADD_STOCK,
    ADD_ASSET
} from './actions'

const initialState = {
    user: {},
    accessToken: '',
    refreshToken: '',
    assets: {
        cash: [
            {

            }
        ],
        cryptocurrency: [
            {

            }
        ],
        fixedAsset: [
            {

            }
        ],
        stock: [
            {

            }
        ]
    },
}

function reducers(state=initialState, action) {
    switch(action.type) {
        case SAVE_LOGGED_IN_USER_DATA:
            return { ...state, user: { ...action.payload } };

        case SAVE_AUTH_TOKENS:
            return { ...state, accessToken: action.payload[0], refreshToken: action.payload[1] }

        case ADD_ASSET:
            return { ...state, assets: { ...state.assets, [action.assetType]: [...state.assets[action.assetType], action.payload] }}

        // case ADD_CRYPTOCURRENCY:
        //     return { ...state, assets: { ...state.assets, cryptocurrency: [...state.assets.cryptocurrency, action.payload] }}

        // case ADD_FIXED_ASSET:
        //     return { ...state, assets: { ...state.assets, fixedAsset: [...state.assets.fixedAsset, action.payload] }}

        // case ADD_STOCK:
        //     return { ...state, assets: { ...state.assets, stock: [...state.assets.stock, action.payload] }}

        default:
            return state;
    }
}
export default reducers;