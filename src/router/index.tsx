import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotificationPage } from '@src/pages/NotificationPage';
import { CounterPage } from '@src/pages/CounterPage';
import { Header } from '@components/Header';

const NavigationRouter = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={NotificationPage} />
                <Route path="/counter" component={CounterPage} />
            </Switch>
        </>
    );
};

export default NavigationRouter;
