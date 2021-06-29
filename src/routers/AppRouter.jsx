import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeRoutes } from './HomeRoutes';
import { LoginPage } from '../components/login/LoginPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />

                    <Route path="/" component={HomeRoutes} />
                </Switch>
            </div>
        </Router>
    );
};
