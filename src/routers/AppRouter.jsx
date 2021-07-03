import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { HomeRoutes } from './HomeRoutes';
import { LoginPage } from '../components/login/LoginPage';

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        isAuth={user.logged}
                        component={LoginPage}
                    />

                    <PrivateRoute
                        path="/"
                        isAuth={user.logged}
                        component={HomeRoutes}
                    />
                </Switch>
            </div>
        </Router>
    );
};
