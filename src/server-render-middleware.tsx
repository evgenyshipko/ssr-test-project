import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { App } from './App';
import { Provider as ReduxProvider } from 'react-redux';

import { matchPath, StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { configureStore, getInitialState } from '@src/store';
import { routes } from '@src/routes';

import url from 'url';

export const serverMiddleware = (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};
    const { store } = configureStore(getInitialState(location), location);

    const renderApp = () => {
        const jsx = (
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={location}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactHtml = renderToString(jsx);
        const keaState = store.getState();

        if (context.url) {
            res.redirect(context.url);
            return;
        }

        res.status(context.statusCode || 200).send(
            getHtml(reactHtml, keaState)
        );
    };

    const dataRequirements: (Promise<void> | void)[] = [];

    routes.some((route) => {
        const { fetchData: fetchMethod } = route;

        const match = matchPath(url.parse(location).pathname, route);

        if (match && fetchMethod) {
            dataRequirements.push(fetchMethod());
        }

        if (match) {
            console.log('fetchMethod', fetchMethod?.toString());
            console.log('URL', url.parse(location).pathname);
            console.log('route.path', route.path);
        }

        return Boolean(match);
    });

    console.log('dataRequirements', dataRequirements);

    return Promise.all(dataRequirements)
        .then(() => renderApp())
        .catch((err) => {
            throw err;
        });
};

function getHtml(reactHtml: string, reduxState = {}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/png" href="/images/favicon.jpg">
        <title>SSR TEST PROJ</title>
        <link href="/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
        <script src="/main.js"></script>
    </body>
    </html>
    `;
}
