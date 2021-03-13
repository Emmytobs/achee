import { createStore } from 'redux'
import reducer from './reducer';

export const initialState = {
    user: {},
    accessToken: '',
    refreshToken: '',
    assets: {
        'CASH': [],
        'CRYPTO': [],
        'FIXED': [],
        'STOCKS': []
    },
    globalError: null
}

function getStateFromLocalStorage() {
    try {
        const stateInLocalStorage = localStorage.getItem('achee-app-state');
        // If there is no 'redux-state' (as it is for a new user) send back an initial state
        if (!stateInLocalStorage) {
            return initialState;
        }
        const stateObject = JSON.parse(stateInLocalStorage)
        return stateObject;
    } catch (error) {
        console.log(error)
    }
}

function saveStateToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('achee-app-state', serializedState);
    } catch (error) {
        console.log(error)
    }
}

const persistedState = getStateFromLocalStorage();

const store = createStore(
    reducer, 
    persistedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveStateToLocalStorage(store.getState()))

export default store;