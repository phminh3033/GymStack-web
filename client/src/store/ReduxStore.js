import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';

function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch (err) {
        console.log(err);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if (serializedStore === null) {
            return undefined;
        }
        return JSON.parse(serializedStore);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();
const store = createStore(reducers, persistedState, compose(applyMiddleware(thunk)));
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
