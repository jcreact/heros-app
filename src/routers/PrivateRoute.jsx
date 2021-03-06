import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuth, component: Component, ...others }) => {
    localStorage.setItem(
        'lastPath',
        others.location.pathname + others.location.search
    );

    return (
        <Route
            {...others}
            component={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
