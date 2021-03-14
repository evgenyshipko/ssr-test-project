import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '@components/Header';
import { routes } from '@src/routes';
import { hot } from 'react-hot-loader/root';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                {routes.map((data, index) => (
                    <Route
                        key={index}
                        exact={data.exact}
                        path={data.path}
                        component={data.component}
                    />
                ))}
            </Switch>
        </>
    );
};

const Component = hot(App);

export { Component as App };
