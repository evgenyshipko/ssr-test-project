import React from 'react';
import ReactDOM from 'react-dom';
import '@src/styles/App.css';
import { App } from './App';
import { configureStore } from '@src/store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import 'babel-polyfill';

const initialState = window.__INITIAL_STATE__;
console.log('window.__INITIAL_STATE__', initialState);

const { store, history } = configureStore(initialState);

declare global {
    interface Window {
        __INITIAL_STATE__: any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
