import { getContext, resetContext } from 'kea';
import thunkPlugin from 'kea-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Reducer } from 'redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

resetContext({
    createStore: {
        reducers: {
            router: connectRouter(history) as Reducer,
        },
        middleware: [routerMiddleware(history)]
    },
    plugins: [thunkPlugin],
});

export default getContext().store;
