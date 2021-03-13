import { getContext, resetContext } from 'kea';
import thunkPlugin from 'kea-thunk';
import {
    connectRouter,
    routerMiddleware,
    RouterState,
} from 'connected-react-router';
import { Reducer, compose } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';

export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

function getComposeEnhancers() {
    if (process.env.NODE_ENV !== 'production' && !isServer) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    return compose;
}

export const getInitialState = (pathname: string = '/'): any => {
    return {
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        } as RouterState,
    };
};

export function configureStore(initialState: any, url = '/') {
    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory();

    resetContext({
        createStore: {
            preloadedState: initialState,
            reducers: {
                router: connectRouter(history) as Reducer,
            },
            middleware: [routerMiddleware(history)],
            compose: getComposeEnhancers(),
        },
        plugins: [thunkPlugin],
    });

    const store = getContext().store;

    return { store, history };
}
