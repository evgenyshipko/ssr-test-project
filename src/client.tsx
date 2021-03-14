import React from 'react';
import ReactDOM from 'react-dom';
import '@src/styles/App.css';
import { App } from './App';
import { configureStore } from '@src/store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import 'babel-polyfill';

const initialState = window.__INITIAL_STATE__;

const { store, history } = configureStore(initialState);

console.log('client state', store.getState());

ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
