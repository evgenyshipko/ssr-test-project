import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import NavigationRouter from '@src/router';
import store, { history } from '@src/store'

export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <NavigationRouter />
        </ConnectedRouter>
    </Provider>
)


