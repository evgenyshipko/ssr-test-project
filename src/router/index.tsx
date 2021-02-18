import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ReduxPage from '@src/stores/redux';
import { MainPage } from '@src/MainPage';
import KeaPage from '@src/stores/kea';
import { MobxPage } from '@src/stores/mobx';

const NavigationRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />

                <Route path="/redux" component={ReduxPage} />

                <Route path="/kea" component={KeaPage} />

                <Route path="/mobx" component={MobxPage} />
            </Switch>
        </Router>
    );
};

export default NavigationRouter;
