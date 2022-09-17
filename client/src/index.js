import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//component
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js';

import { GoogleOAuthProvider } from '@react-oauth/google';

//Middleware
import { Provider } from 'react-redux';
// import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './redux/reducers';

import store from './store/ReduxStore';

// mount it on the Store
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId="318343025712-gl7bfa415vod1s64j8kh6u7e810qcdha.apps.googleusercontent.com">
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
